const axios = require('axios');
const router = require('express').Router(),
  { sendWelcomeEmail, forgotPasswordEmail } = require('../../emails/'),
  jwt = require('jsonwebtoken'),
  User = require('../../db/models/user');

// Create a user

router.post('/api/users/', async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    throw new Error('an account already exists associated with that email');
  try {
    user = new User({
      name,
      email,
      password
    });

    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    sendWelcomeEmail(user.email, user.name);
    res.status(201).json(user);
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// Login a user

router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// Password Reset Request

router.get('/api/password', async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("account doesn't exist");
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m'
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// ******************************
// Redirect to password reset page
// ******************************
router.get('/api/password/:token', (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// ******************************
// Collect data for accommodations
// ******************************
router.get('/api/accommodations/:facilityId', (req,res) => {
  let {facilityId} = req.params;
  let campsite = {};
  if (facilityId === "test"){
    facilityId = "246895";
  }
  try {
    axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityId}?apikey=df27448b-db46-4814-b2d8-d54214186c6e`)
    .then((facility_data) =>{
      campsite['Title'] = facility_data.data.FacilityName;
      let description = facility_data.data.FacilityDescription.replace('<br/><br/>', '')
      description = description.split('<h2>Overview</h2>\n')[1]
      description = description.split('<h2>Recreation</h2>\n');
      campsite['Overview'] = description[0];
      description = description[1].replace('<br/><br/>', '');
      description = description.split('<h2>Facilities</h2>\n');
      campsite['Recreation'] = description[0]
      description = description[1].replace('<br/><br/>', '');
      description = description.split('<h2>Natural Features</h2>\n');
      campsite['Facilities'] = description[0]
      description = description[1].replace('<b>', '');
      description = description.replace('</b>\n', '');
      description = description.split('<h2>Nearby Attractions</h2>\n');
      campsite['Natural_Features'] = description[0]
      campsite['Nearby_Attractions'] = description[1]
      campsite['Directions'] = facility_data.data.FacilityDirections
      const recId = facility_data.data.ParentRecAreaID
      axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityId}/campsites?apikey=df27448b-db46-4814-b2d8-d54214186c6e`)
      .then((campsites_data) =>{
        campsite['Attributes'] = campsites_data.data['RECDATA'][0]['ATTRIBUTES'];
        axios.get(`https://ridb.recreation.gov/api/v1/recareas/${recId}/activities?apikey=df27448b-db46-4814-b2d8-d54214186c6e`)
        .then((activity_data) =>{
          campsite['Activities'] = activity_data.data['RECDATA'];
          axios.get(`https://ridb.recreation.gov/api/v1/facilities/${facilityId}/media?apikey=df27448b-db46-4814-b2d8-d54214186c6e`)
          .then((medias_data) => {
            let images = [];
            medias_data.data['RECDATA'].map((item)=>{
              images.push(item.URL);
            })
            campsite['Images'] = images;
            res.send(campsite);
          })
          .catch((error)=>{
            console.log(error);
          })
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log(error);
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  catch(error){
    console.log(error);
  }
});


module.exports = router;
