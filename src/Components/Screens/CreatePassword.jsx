import React, { useState } from "react";

//packages
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

//components

//Function for Register
function CreatePassword() {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state?.email);

    //API calling for Register
    const handlesubmit = (e) => {
        setMessage("");
        e.preventDefault();
        axios
            .post("https://traveller.talrop.works/api/v1/auth/register/", {
                password: password,
                email: location.state?.email,
            })
            .then((response) => {
                console.log(response);
                let Data = response.data.data;
                console.log(Data);
                let statuscode = response.data.StatusCode;
                console.log(statuscode);
                if (statuscode === 6000) {
                    console.log(statuscode);
                    localStorage.setItem("user_data", JSON.stringify(Data));
                    navigate("/signup");
                } else {
                    setMessage(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Header>
                <HeaderLeft>
                    <Logo
                        src={require("../../assets/Images/Logo.svg").default}
                        alt="Image"
                    />
                </HeaderLeft>
                <SignInButton to="/signup/">Sign In</SignInButton>
            </Header>
            <Container>
                <Span>STEP 1 OF 3</Span>
                <Heading>Create a password to start your membership</Heading>
                <Description>
                    Just a few more steps and you're done! We hate paperwork,
                    too.
                </Description>
                <Form>
                    <Email
                        placeholder="Email"
                        type="email"
                        value={location.state?.email}
                        onChange={(e) => e}
                    ></Email>
                    <Password
                        placeholder="Add a Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    ></Password>
                    <Next to="/signup" onClick={handlesubmit}>
                        Next
                    </Next>
                </Form>
                <ErrorMessage>{message}</ErrorMessage>
            </Container>
        </>
    );
}
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding: 20px 45px;
    border-bottom: 1px solid #c3b8b8;
`;
const HeaderLeft = styled.div`
    width: 170px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const SignInButton = styled(Link)`
    font-size: 22px;
    text-decoration: none;
    font-weight: 500;
    color: #000;
    &.hover {
        text-decoration: underline;
    }
`;
const Container = styled.div`
    width: 30%;
    margin: 0 auto;
    padding: 50px;
`;
const Span = styled.h6`
    font-size: 15px;
    font-weight: 400;
    margin: 0;
`;
const Heading = styled.h1`
    font-size: 35px;
    color: #333;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 0;
`;
const Description = styled.p`
    font-size: 20px;
    width: 80%;
    margin-bottom: 20px;
`;
const Form = styled.div``;
const Email = styled.input`
    width: 80%;
    padding: 20px;
    margin-bottom: 15px;
    font-size: 17px;
`;
const Password = styled.input`
    width: 80%;
    padding: 20px;
    font-size: 17px;
`;
const Next = styled(Link)`
    display: inline-block;
    width: 85%;
    padding: 12px;
    background-color: #e50914;
    border: none;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;
export default CreatePassword;
