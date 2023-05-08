import { render, screen, waitFor } from "@testing-library/react";
import JosnPlaceHolder from "./get-req";
import { userData } from "../mocks/handlers";

// import { postdata } from "../mocks/handlers";
// describe("Json api", () => {
//   test("should fetch an api", () => {
//     render(<JosnPlaceHolder />);
//     const txtElem = screen.getByText(/users/i);
//     expect(txtElem).toBeInTheDocument();
//   });
//   // test("render a lists of users", async () => {
//   //   render(<JosnPlaceHolder />);
//   //   // screen.debug();
//   //   // const userList = await screen.findByRole("list");
//   //   // console.log(userList);
//   //   // const users = userList.querySelectorAll("li");
//   //   // console.log(users);
//   //   // expect(users.length).toBe(3);
//   //   // expect(Array.isArray(users)).toBe(true);
//   //   // expect(users).toEqual(expect.arrayContaining(users));

//   //   // const userList = await screen.findByRole("list");
//   //   // const userList = await screen.findByRole("list");
//   //   // const users = await screen.findAllByRole("list");
//   //   // expect(users).toHaveLength(1);
//   //   // console.log(users.length, "[length]");
//   //   // // expect(users.length).toBe(3);
//   //   // expect(typeof users).toBe("object");
//   //   // users.forEach((user) => {
//   //   //   console.log(user, "[user]");
//   //   //   expect(user).toBeInTheDocument();
//   //   // });

//   //   await waitFor(async () => {

//   //     screen.debug();
//   //     postdata.data.forEach(element => {
        
//   //       expect(screen.getByTestId(element.name  )).toBeInTheDocument();
//   //     });

//   //     // const users = await screen.findAllByRole("listitem");
//   //     // expect(screen.getByTestId("list-id")).toBeInTheDocument();
//   //   });
//   // });
// });


// describe("Test for an jsonplacholder api" ,() =>{

//   // test for JosnPlaceHolder API
//   // test("render lists of array",async() =>{
//   //   render(<JosnPlaceHolder />);

//   //     screen.debug();
//   //     const users = await screen.findAllByRole('listitem');
//   //     // console.log(users)
//   //     expect(users).toHaveLength(4);
//   //     expect(users.length).toEqual(4)
//   //     // expect(users).toBeVisible();
//   //     users.forEach((user) => {
//   //            expect(user).toBeInTheDocument();
//   //            expect(user).toBeVisible();

//   //         });
//   // })

//   test("for dynamic api" , async()=>{
//     render(<JosnPlaceHolder />)
  
//   //   const errorMessage = await screen.findByText(/falied to get users/i);
//   // expect(errorMessage).not.toBeInTheDocument();

//   const users =  screen.queryAllByRole("listitem");
//   expect(users).toHaveLength(0);
 
 
//   // if (users.length > 0) {
//     users.forEach((user) => {
//       expect(user).toBeInTheDocument();
//       expect(user).toBeVisible();
//     });
//   // }s
//   })
// })


describe("regres render lists",()=>{
  test("to display lists of users with their email" , async() =>{
    render(<JosnPlaceHolder />);

    await waitFor(()=>{

      expect(screen.getByText("george.bluth@reqres.in")).toBeInTheDocument()
    }) 
    const users =  screen.queryAllByRole('listitem');
  
    expect(users.length).toEqual(6)
    expect(screen.getByText('tracey.ramos@reqres.in')).toBeInTheDocument();
    userData.forEach((item) =>{
      expect(screen.getByText(item.email)).toBeInTheDocument()
      expect(screen.getByText(item.email)).toBeVisible()
    })


  })
})