import React, { useState } from "react";

//packages
import styled from "styled-components";
import { Link } from "react-router-dom";

function Logout() {
    const email = localStorage.getItem("email");

    return (
        <>
            <MainContainer>
                <NavContainer>
                    <Link to={"/"}>
                        {" "}
                        <Left>
                            <Logo
                                src={
                                    require("../../assets/Images/Logo.svg")
                                        .default
                                }
                                alt="LOGO"
                            />
                        </Left>
                    </Link>

                    <Right>
                        <LogOut
                            src={require("../../assets/Images/Logout.png")}
                        />
                    </Right>
                </NavContainer>
                <Container>
                    <Heading>Edit Profile</Heading>
                    <SubContainer>
                        {" "}
                        <Imgcontainer>
                            <Signout
                                src={require("../../assets/Images/Logout.png")}
                            />
                        </Imgcontainer>
                        <SignOutContainer>
                            <Email value={localStorage.getItem("email")} />
                            <Link to="/">
                                <LogoutButton>Sign out</LogoutButton>
                            </Link>
                        </SignOutContainer>
                    </SubContainer>
                </Container>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.div`
    background-color: #000;
    height: 100vh;
`;
const NavContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
`;
const Left = styled.div`
    width: 50%;
    cursor: pointer;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    width: 50px;
`;
const LogOut = styled.img`
    display: block;
    width: 100%;
`;
const Container = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const Heading = styled.h2`
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    border-bottom: 1px solid #222;
`;
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Imgcontainer = styled.div`
    width: 10%;
`;
const Signout = styled.img`
    display: block;
    width: 100%;
`;
const SignOutContainer = styled.div`
    width: 80%;
`;
const Email = styled.input`
    width: 90%;
    padding: 20px;
    margin-bottom: 20px;
    color: #222;
    outline: none;
    border: none;
    font-size: 20px;
`;
const LogoutButton = styled.button`
    width: 97%;
    padding: 20px;
    color: #fff;
    font-size: 20px;
    background-color: #e50914;
    outline: none;
    border: none;
`;

export default Logout;
