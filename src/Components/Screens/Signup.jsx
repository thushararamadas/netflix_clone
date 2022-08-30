import React, { useState } from "react";
//packages
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// images
import Banner from "../../assets/Images/Banner.jpg";

// Includes
import NavBar from "./Includes/NavBar";
//components
// import BASE_URL from "../Screens/axiosCofig";

//Function for Signin
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    //API calling for SignIn
    const submit = (e) => {
        setMessage("");
        axios
            .post(`https://traveller.talrop.works/api/v1/auth/token/`, {
                username: email,
                password: password,
            })
            .then((response) => {
                console.log(response);
                let data = response.data;
                localStorage.setItem("user_data", JSON.stringify(data));
                navigate("/Screen");
            })
            .catch((error) => {
                console.log(error.response);
                // if (!email && !password) {
                //     setMessage(response.data);s
                // } else if (!email) {
                //     setMessage("Email field is required");
                // } else if (!password) {
                //     setMessage("Password field is required");
                // }

                if (error.response.status === 401) {
                    setMessage(error.response.data.detail);
                }
            });
    };
    return (
        <>
            <MainContainer>
                <Opacity>
                    <NavBar />
                    <Container>
                        <Form>
                            <Heading>Sign In</Heading>
                            <Email
                                type="email"
                                placeholder="Email or phone number"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Password
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            ></Password>
                            <ErrorMessage>{message}</ErrorMessage>
                            <SignIn onClick={submit}>Sign in</SignIn>
                        </Form>
                        <RememberMeContainer>
                            <CheckBoxDiv>
                                {" "}
                                <CheckBox>{/* <Img  /> */}</CheckBox>
                                <SpanRemember>Remember Me</SpanRemember>
                            </CheckBoxDiv>
                            <HelpLink>Need help?</HelpLink>
                        </RememberMeContainer>
                        <SignUpContainer>
                            <NewToNetflix>
                                New to Netflix?{" "}
                                <Link to="/">
                                    <Span>Sign up now.</Span>
                                </Link>
                            </NewToNetflix>
                            <Description>
                                This page is protected by Google reCAPTCHA to
                                ensure you're not a bot.
                                <LearnMore>Learn more.</LearnMore>
                            </Description>
                        </SignUpContainer>
                    </Container>
                </Opacity>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.div`
    background-image: url(${Banner});
    background-size: cover;
`;
const Opacity = styled.div`
    background-color: rgba(3, 3, 3, 0.5);
    opacity: 1;
    position: relative;
    height: 100vh;
`;
const Container = styled.div`
    width: 28%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1.5;
    padding: 20px;
    min-height: 600px;
`;
const Heading = styled.h2`
    color: #fff;
    font-size: 40px;
`;
const Form = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const Email = styled.input`
    background-color: #333;
    border: none;
    outline: none;
    padding: 20px;
    width: 90%;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
    margin-bottom: 15px;
`;
const Password = styled.input`
    background-color: #333;
    border: none;
    outline: none;
    padding: 20px;
    width: 90%;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
`;
const SignIn = styled.button`
    padding: 20px 0px;
    width: 100%;
    background-color: #e50914;
    border: none;
    outline: none;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    margin-bottom: 10px;
    margin-top: 40px;
    cursor: pointer;
`;
const RememberMeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 82%;
    margin: 0 auto;
`;
const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
`;
const CheckBox = styled.div`
    width: 15px;
    height: 15px;
    background-color: gray;
    margin-right: 4px;
`;
const SpanRemember = styled.span`
    color: #fff;
    font-weight: 200;
    font-size: 14px;
`;
const HelpLink = styled.a`
    color: #fff;
    font-weight: 200;
    font-size: 14px;
`;
const SignUpContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;
const NewToNetflix = styled.h4`
    color: #737373;
    font-size: 17px;
    font-weight: 400;
    margin-top: 100px;
`;
const Span = styled.span`
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
`;
const Description = styled.p`
    color: #8c8c8c;
    font-size: 13px;
`;
const LearnMore = styled.a`
    color: blue;
    cursor: pointer;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    text-align: center;
`;
export default Signup;
