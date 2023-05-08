// src/mocks/handlers.js
import { rest } from "msw";
export const getData = [
  {
    email: "aebcd@gmail.com",
  },
  {
    email: "aebcxxpod@gmail.com",
  },
  {
    email: "ajo@gmail.com",
  },
];
export const handlers = [
  rest.post("http://localhost:5000/api/v1/prac", (req, res, ctx) => {
    // Persist user's authentication in the session

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("http://localhost:5000/api/v1/gerprac", (req, res, ctx) => {
    // Check if the user is authenticated in this session

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        data: getData,
      })
    );
  }),
];
