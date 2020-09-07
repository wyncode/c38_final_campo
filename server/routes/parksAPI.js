const axios = require('axios');
const router = require('express').Router();

router.get('/:location', (req, res) => {
  let { location } = req.params;
  let results = [];
  try {
    axios
      .get(
        `https://ridb.recreation.gov/api/v1/facilities?query=${location}&apikey=${process.env.API_KEY}`
      )
      .then((facility_data) => {
        for (let n = 0; n < facility_data.data['RECDATA'].length; n++) {
          results.push({
            FacilityID: facility_data.data['RECDATA'][n]['FacilityID'],
            FacilityName: facility_data.data['RECDATA'][n]['FacilityName']
          });
        }
        res.send(results);
      });
  } catch (error) {
    console.log(error);
  }
});

router.get('/media/:facilityId', (req, res) => {
  let { facilityId } = req.params;
  axios
    .get(
      `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/media?apikey=df27448b-db46-4814-b2d8-d54214186c6e`
    )
    .then((data) => {
      if (data.data['RECDATA'].length > 0) {
        res.send(data.data['RECDATA'][0].URL);
      } else {
        res.send('');
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/accommodations/:facilityId', (req, res) => {
  let { facilityId } = req.params;
  let campsite = {};
  if (facilityId === 'test') {
    facilityId = '246895';
  }
  try {
    axios
      .get(
        `https://ridb.recreation.gov/api/v1/facilities/${facilityId}?apikey=${process.env.API_KEY}`
      )
      .then((facility_data) => {
        campsite['Title'] = facility_data.data.FacilityName;
        let description = facility_data.data.FacilityDescription.replace(
          '<br/><br/>',
          ''
        );
        description = description.split('<h2>Overview</h2>\n')[1];
        description = description.split('<h2>Recreation</h2>\n');
        campsite['Overview'] = description[0];
        description = description[1].replace('<br/><br/>', '');
        description = description.split('<h2>Facilities</h2>\n');
        campsite['Recreation'] = description[0];
        description = description[1].replace('<br/><br/>', '');
        description = description.split('<h2>Natural Features</h2>\n');
        campsite['Facilities'] = description[0];
        description = description[1].replace('<b>', '');
        description = description.replace('</b>\n', '');
        description = description.split('<h2>Nearby Attractions</h2>\n');
        campsite['Natural_Features'] = description[0];
        campsite['Nearby_Attractions'] = description[1];
        campsite['Directions'] = facility_data.data.FacilityDirections;
        const recId = facility_data.data.ParentRecAreaID;
        axios
          .get(
            `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/campsites?apikey=df27448b-db46-4814-b2d8-d54214186c6e`
          )
          .then((campsites_data) => {
            campsite['Attributes'] =
              campsites_data.data['RECDATA'][0]['ATTRIBUTES'];
            axios
              .get(
                `https://ridb.recreation.gov/api/v1/recareas/${recId}/activities?apikey=df27448b-db46-4814-b2d8-d54214186c6e`
              )
              .then((activity_data) => {
                campsite['Activities'] = activity_data.data['RECDATA'];
                axios
                  .get(
                    `https://ridb.recreation.gov/api/v1/facilities/${facilityId}/media?apikey=df27448b-db46-4814-b2d8-d54214186c6e`
                  )
                  .then((medias_data) => {
                    let images = [];
                    medias_data.data['RECDATA'].map((item) => {
                      images.push(item.URL);
                    });
                    campsite['Images'] = images;
                    res.send(campsite);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
