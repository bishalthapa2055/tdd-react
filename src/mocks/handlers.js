// src/mocks/handlers.js
import { rest } from "msw";


export const userData = 
[
  {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]


export const handlers = [
  rest.post("https://reqres.in/api/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    const {email , password} = req.body;

    if(email === "eve.holt@reqres.in" ||  password ==="cityslicka"){
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          token:"1234567890pspcc"
        })
      );

    } else{
      return res(
        ctx.status(400),
        ctx.json({
          error :"user not found"
        })
      )
    }
  }),

  rest.get("https://reqres.in/api/users", (req, res, ctx) => {
    // Check if the user is authenticated in this session

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        data : userData
      })
    );
  }),
];
