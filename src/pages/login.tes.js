import {render , screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "./login";
import { userData } from "../mocks/handlers";
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
 })