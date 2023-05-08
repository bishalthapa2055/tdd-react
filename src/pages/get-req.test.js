import { render, screen, waitFor, within } from "@testing-library/react";

import JosnPlaceHolder from "./get-req";
import { postdata } from "../mocks/handlers";
describe("Json api", () => {
  test("should fetch an api", () => {
    render(<JosnPlaceHolder />);
    const txtElem = screen.getByText(/users/i);
    expect(txtElem).toBeInTheDocument();
  });
  test("render a lists of users", async () => {
    render(<JosnPlaceHolder />);
    // screen.debug();
    // const userList = await screen.findByRole("list");
    // console.log(userList);
    // const users = userList.querySelectorAll("li");
    // console.log(users);
    // expect(users.length).toBe(3);
    // expect(Array.isArray(users)).toBe(true);
    // expect(users).toEqual(expect.arrayContaining(users));

    // const userList = await screen.findByRole("list");
    // const userList = await screen.findByRole("list");
    // const users = await screen.findAllByRole("list");
    // expect(users).toHaveLength(1);
    // console.log(users.length, "[length]");
    // // expect(users.length).toBe(3);
    // expect(typeof users).toBe("object");
    // users.forEach((user) => {
    //   console.log(user, "[user]");
    //   expect(user).toBeInTheDocument();
    // });

    await waitFor(async () => {
      // screen.debug();
      postdata.map((item) => {
        expect(screen.getByTestId(item.email)).toBeInTheDocument();
      });

      // const users = await screen.findAllByRole("listitem");
      // expect(screen.getByTestId("list-id")).toBeInTheDocument();
    });
  });
});
