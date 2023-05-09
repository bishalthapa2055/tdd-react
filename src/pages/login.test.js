import {act, render , screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./login";
import { userData } from "../mocks/handlers";
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import axios from "axios";
describe('Login Form', () => { 
    
    test('lists of users to be displayed after login',async()=>{
        render(<LoginForm />);
        userEvent.type(screen.getByPlaceholderText("email"), "eve.holt@reqres.in");
        userEvent.type(screen.getByPlaceholderText("password"), "cityslicka");
       await userEvent.click(screen.getByRole("button", { name: "Submit" })); 


        // await waitFor(() => {
        //     expect(
        //       screen.getByRole("button", { name: "Logout" })
        //     ).toBeInTheDocument();
        //   });

        // await waitFor(() =>{
        //     // expect(screen.getByRole('button',{name :"Logout"})).toBeInTheDocument();
        //     userData.forEach((user) => {
        //         expect(screen.getByText(user.email)).toBeInTheDocument();
        //       });
        // })
    })

    test("for sending post request",async() =>{
      
        render(<LoginForm />)
        const requestBody={
            email :"eve.holt@reqres.in",
            password :"cityslicka"
        }

        await userEvent.type(screen.getByPlaceholderText("email"),requestBody.email );
        await userEvent.type(screen.getByPlaceholderText("password"),requestBody.password );
        
         userEvent.click(screen.getByRole("button", { name: "Submit" })); 
      // screen.debug()
        //  await waitFor(() => {
        //   expect(requestBody).toEqual({
        //     email: "eve.holt@reqres.in",
        //     password: "cityslicka"
        //   });
        // });

        await waitFor(()=>{
          const ack =  screen.queryByText("login sucessfull");

          expect(ack).toBeInTheDocument()
        })
        expect(requestBody).toEqual({
              email: "eve.holt@reqres.in",
              password: "cityslicka"
            });

            expect(localStorage.getItem('token')).toEqual("1234567890pspcc");

        


    })
    test("for sending post request without correct email and password",async() =>{
      
      render(<LoginForm />)
      const requestBody={
          email :"eve.holt@reqresin",
          password :"cityslick"
      }

      await userEvent.type(screen.getByPlaceholderText("email"),requestBody.email );
      await userEvent.type(screen.getByPlaceholderText("password"),requestBody.password );
      
       userEvent.click(screen.getByRole("button", { name: "Submit" })); 

      await waitFor(()=>{
        const ack =  screen.queryByText(/user not found/i);

        expect(ack).toBeInTheDocument()
      })
      // expect(requestBody).toEqual({
      //       email: "eve.holt@reqresin",
      //       password: "cityslicka"
      //     });
      


  })
 })