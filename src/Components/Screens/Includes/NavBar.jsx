import React, { useState } from "react";

//packages
import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Container>
                <Link to={"/"}>
                    {" "}
                    <Left>
                        <Logo
                            src={
                                require("../../../assets/Images/Logo.svg")
                                    .default
                            }
                            alt="LOGO"
                        />
                    </Left>
                </Link>

                <Right>
                    <Select>
                        <One>English</One>
                        <Two>Hindi</Two>
                    </Select>
                    <SignIn to="/signup">SignIn</SignIn>
                </Right>
            </Container>
        </>
    );
}
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    align-items: center;
`;
const Left = styled.div`
    width: 170px;
    cursor: pointer;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    &.none {
        display: none;
    }
`;
const Select = styled.select`
    border: 2px solid #fff;
    margin-right: 15px;
    padding: 5px;
    font-size: 16px;
    border-radius: 2px;
    background: none;
    color: #fff;
    font-weight: 500;
`;
const One = styled.option`
    color: #000;
`;
const Two = styled.option`
    color: #000;
`;
const SignIn = styled(Link)`
    background-color: #e50914;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 17px;
    text-decoration: none;
`;
export default NavBar;
