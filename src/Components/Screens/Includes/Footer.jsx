import React from "react";
//packages
import styled from "styled-components";

function Footer() {
    return (
        <>
            <FooterContainer>
                <Title>Questions? Call 000-800-040-1843</Title>
                <FooterList>
                    <List>
                        <FooterLink>FAQ</FooterLink>
                        <FooterLink>Investor Relations</FooterLink>
                        <FooterLink>Privacy</FooterLink>
                        <FooterLink>Speed Test</FooterLink>
                    </List>
                    <List>
                        <FooterLink>Help Centre</FooterLink>
                        <FooterLink>Jobs</FooterLink>
                        <FooterLink>Cookie Preferences</FooterLink>
                        <FooterLink>Legal Notices</FooterLink>
                    </List>
                    <List>
                        <FooterLink>Account</FooterLink>
                        <FooterLink>Ways to Watch</FooterLink>
                        <FooterLink>Corporate Information</FooterLink>
                        <FooterLink>Only on Netflix</FooterLink>
                    </List>
                    <List>
                        <FooterLink>Media Centre</FooterLink>
                        <FooterLink>Terms of Use</FooterLink>
                        <FooterLink>Contact Us</FooterLink>
                    </List>
                </FooterList>

                <Select>
                    <One>English</One>
                    <Two>Hindi</Two>
                </Select>
                <SubTitle>Netflix India</SubTitle>
            </FooterContainer>
        </>
    );
}
const FooterContainer = styled.div``;
const Title = styled.div``;

export default Footer;
