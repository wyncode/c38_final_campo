# CAMPO

A web application used to explore and book national parks for camping trips.

## Further Devlopment/Reach Goals:

We hope to build out more features to offer support to our users while on their camping trips.
These include:

- The ability to receive alerts about emergencies within their camping area
- Implementing more extensive articles written about camping, gear, and nature
- The option to book tours through private operators

## The Team

- UX/UI Designers: Christina Benedict & Priscilla Gettins
- Web Developers: Andrew Garcia, Astrid Massuh, Andrew Reardigan, & Priscilla Standard

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`
-

## Back-end Usage(API Endpoints)

HTTP Requests | URL | Method | 
------------- | --- | ------ | 
Parks | ---- |  -----
Get All Parks | api/parks | `GET` 
Get Park | api/parks/parkId | `GET` 
Create Park | api/current_user | `POST` 
Update Park | api/parks/parkId |  `PATCH`  
Delete Park | api/parks/parkId |  `DELETE`  
Get Top 5 parks | api/parks/top-5-cheap |  `GET` 
Get Monthly Plan | api/parks/monthly-plan/2021 |  `GET` 
Get Park Stats | api/parks/park-stats |  `GET` 
Get Parks within Radius | api/parks/parks-within/center/lat,lng/unit/mi |  `GET` 
Get Distance to park | api/parks/distances/lat,lng/unit/mi |  `POST`  
------------- | --- | ------ | 
Authentication | ---- | ----- |
Sign Up  | api/users/signup |  `POST`  
Login | api/users/login |  `POST` 
Forgot Password | api/users/forgotPassword | `POST`
Reset Password | api/users/resetPassword/ 
Update Current Password | api/users/updateMyPassword | `PATCH`
------------- | --- | ------ | 
Users | | 
Get All Users | api/users?role=user | `GET`
Get User | api/users | `GET`
Update User | api/users/userId | `PATCH`
Delete User | api/users/userId | `DELETE`
Update Current User | api/users/updateMe | `PATCH`
Delete Current User | api//users/userId | `DELETE`
------------- | --- | ------ | 
Reviews | | 
Get Review | api/reviews/reviewId | `GET`
Get All Reviews | api/reviews | `GET`
Update Review | api/reviews/reviewId | `PATCH` 
Post Review | api/reviews | `POST`
Delete Review | api/reviews | `DELETE`
------------- | --- | ------ | 
Create New Review on Park | api/parks/parkId/reviews | `POST`
Get All Reviews on Park | api/parks/parkId/reviews | `GET`
------------- | --- | ------ | 
Bookings | ---- | ----- |
Get Booking | api/bookings/bookingId | `GET`
Get All Bookings | api/bookings | `GET`

- Postman Link 
[Postman Link to Docs](https://documenter.getpostman.com/view/12492228/TVCiSm8L)

# Schema examples
## User Model
```
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  role: {
    type: String,
    enum: ['user', 'owner', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});
```

## Park Model 
 You can upload and advertise your private campground. 
```
const parkSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'A park must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A park name must have less or equal then 40 characters'],
        minlength: [10, 'A park name must have more or equal then 10 characters']
        // validate: [validator.isAlpha, 'Tour name must only contain characters']
      },
      slug: String,
      duration: {
        type: Number,
        required: [true, 'Choose Duration']
      },
      maxGroupSize: {
        type: Number,
        required: [true, 'Must have a group size']
      },
      difficulty: {
        type: String,
        required: [true, 'A  must have a difficulty'],
        enum: {
          values: ['easy', 'medium', 'difficult'],
          message: 'Difficulty is either: easy, medium, difficult'
        }
      },
      ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
      },
      ratingsQuantity: {
        type: Number,
        default: 0
      },
      price: {
        type: Number,
        required: [true, 'A campsite must have a price']
      },
      priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
      },
      summary: {
        type: String,
        trim: true,
        required: [true, 'A Park must have a description']
      },
      description: {
        type: String,
        trim: true
      },
      imageCover: {
        type: String,
        required: [true, 'A Park must have a cover image']
      },
      images: [String],
      createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      startDates: [Date],
      secretTour: {
        type: Boolean,
        default: false
      },
      startLocation: {
        // GeoJSON
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
      },
      locations: [
        {
          type: {
            type: String,
            default: 'Point',
            enum: ['Point']
          },
          coordinates: [Number],
          address: String,
          description: String,
          day: Number
        }
      ],
      guides: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'User'
        }
      ]
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
  );
  ```







## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Packages and Libraries used

- React
- React-Bootstrap
- React-Router-DOM
- Sweet Alert
- React-dates
- Stripe
- Axios
- Mongo DB
- Express
- Mapbox
