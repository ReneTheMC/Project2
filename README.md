# `Beauty Booking`

BeautyApp- Application for a Makeup Artist. Wants to include pictures of work, testimonials, booking availibilty and ability, link to socials and profiles for clients. 

This is the API I want to use:

https://rapidapi.com/SuperSaaS/api/supersaas-online-bookings-and-appointment-scheduling/


----------------------------------------------------------
### User Stories- 

As a Makeup Artist, I want to be able to show my
portofolio, information about me, and my users can book appointments.


----------------------------------------------------------

### What my App includes

* DATABASE USING PostgreSQL
* BootStrap Styling
* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS Templating and EJS Layouts
* Social Media Links to Artists for Users to see
* API for booking capabilities

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Booking Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be provided |
| time | Integer | generated with API |
| service | Text | generated with API |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Artists Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Added by me |
| email | String | Added by Me |
| bio| Text | Added by Me |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /contact | server.js | Artist contact |
| GET | /services | server.js | Regular User Profile |
| GET | /contact/info | server.js | Artists Social Media |
| GET | /booking | server.js | Booking Page |
| GET | /profile | server.js | Regular User Profile |  
| GET | /404 | server.js | Regular User Profile |  
| PUT | /profile/:id | server.js | Edit your profile | 
| PUT | /putBooking | server.js | Put booking | 
| DELETE | /deleteBooking | server.js | Delete booking | 

----------------------------------------------------------
### ERD

----------------------------------------------------------
### Wireframes  BCW-Beautyapp.png

----------------------------------------------------------



## `1` Fork & Clone Project & Install Dependencies
`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`
```text
npm install
```

-  [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library to help you hash passwords. ( [wikipedia](https://en.wikipedia.org/wiki/Bcrypt) ) 
    - Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits.
- [connect-flash](https://github.com/jaredhanson/connect-flash): The flash is an area of the session used for storing messages that will be used to to display to the user. Flash is typically used with redirects.
- [passport](https://www.passportjs.org/docs/): Passport is authentication middleware for Node.js. It is designed to do one thing authenticate requests. There are over 500+ strategies used to authenticate a user; however, we will be using one - *passport-local* Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests
- [passport-local](http://www.passportjs.org/packages/passport-local/): The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user. [passport-local](http://www.passportjs.org/packages/passport-local/)
- [express-session](https://github.com/expressjs/session): Create a session middleware with given *options*.
- [method-override](https://github.com/expressjs/method-override): Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


----------------------------------------------------------
### Challenges- 























```



