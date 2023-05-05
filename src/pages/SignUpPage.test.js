import SignUpPage from "./SignUpPage";
import {render , screen} from  "@testing-library/react"

describe("Sign UP Page" , () =>{

    test("Initial Render",()=>{
        
        render(<SignUpPage />);
        const header = screen.queryByRole('heading',{name:/sign up/i});
        expect(header).toBeInTheDocument()
    })
})