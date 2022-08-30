import React from "react";

//packages
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register() {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = {
        email: location.state?.email,
    };
    const registerPassword = () => {
        navigate("/createPassword", { state: userData });
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
                <ImgContainer>
                    <Image
                        src={require("../../assets/Images/Devices.png")}
                        alt="Image"
                    />
                </ImgContainer>
                <Span>STEP 1 OF 3</Span>
                <Heading>Finish setting up your account</Heading>
                <Description>
                    Netflix is personalised for you. Create a password to watch
                    on any device at any time.
                </Description>
                <Next onClick={() => registerPassword()}>Next</Next>
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
    text-align: center;
    padding: 20px;
`;
const ImgContainer = styled.div`
    width: 55%;
    margin: 0 auto;
    margin-top: 90px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Span = styled.h6`
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px;
`;
const Heading = styled.h1`
    font-size: 32px;
    color: #333;
    font-weight: 600;
    width: 70%;
    margin: 20px auto;
`;
const Description = styled.p`
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
`;
const Next = styled.div`
    display: inline-block;
    width: 60%;
    padding: 12px;
    background-color: #e50914;
    border: none;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    margin-top: 40px;
    border-radius: 5px;
`;
export default Register;
