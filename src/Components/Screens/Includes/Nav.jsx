import React from "react";

//packges
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <NavContainer>
            <Link to={"/"}>
                {" "}
                <Left>
                    <Logo
                        src={require("../../../assets/Images/Logo.svg").default}
                        alt="LOGO"
                    />
                </Left>
            </Link>

            <Right>
                <Link to={"/logout/"}>
                    <LogOut
                        src={require("../../../assets/Images/Logout.png")}
                    />
                </Link>
            </Right>
        </NavContainer>
    );
}
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
export default Nav;
