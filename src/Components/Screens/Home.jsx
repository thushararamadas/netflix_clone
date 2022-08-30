import React, { useState } from "react";

// Packages
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Includes
import NavBar from "./Includes/NavBar";

// images
import Banner from "../../assets/Images/Banner.jpg";

// Components
import Spotlight from "./Includes/Spotlight";

function Home() {
    const [email, setEmail] = useState("");
    // const [messages, setMessages] = useState("");
    const [erorr, setError] = useState(true);
    const [message, setEmailErrorMessage] = useState("");
    const navigate = useNavigate();
    const userData = {
        email: email,
    };

    //function for submitting email
    const submit = (e) => {
        e.preventDefault();
        if (erorr) {
            console.log("2222");
            setEmailErrorMessage("Enter a valid Email");
        } else {
            navigate("/register", { state: userData });
            localStorage.setItem("email", email);
            console.log("ok");
        }
    };
    const handleChange = (e) => {
        let str = e.target.value;
        setEmail(e.target.value);
        if (
            /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(str) &&
            str.includes(".com")
        ) {
            setError(false);
            setEmailErrorMessage("");
            console.log(email);
        } else {
            setError(true);
            setEmailErrorMessage("Enter a valid Email");
        }
    };
    return (
        <>
            <MainContainer>
                <Opacity>
                    <NavBar />
                    <Container>
                        <Heading>Unlimited movies, TV shows and more.</Heading>
                        <SubHeading>Watch anywhere. Cancel anytime.</SubHeading>
                        <Description>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </Description>
                        <Form>
                            <Email
                                htmlfor="email"
                                type="email"
                                placeholder="Email adress"
                                onChange={(e) => handleChange(e)}
                                value={email}
                            />
                            <GetStarted
                                to=""
                                //  {email ? "/register/" : ""}
                                // o={submit}
                                onClick={submit}
                            >
                                Get Started
                            </GetStarted>
                        </Form>
                    </Container>
                    <ErrorMessage>{message}</ErrorMessage>
                </Opacity>
            </MainContainer>
            <Spotlight />
        </>
    );
}
const MainContainer = styled.div`
    background-image: url(${Banner});
    background-size: cover;
    position: relative;
    border-bottom: 9px solid #222;
`;
const Opacity = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1.5;
    position: relative;
    padding-bottom: 13%;
`;
const Container = styled.div`
    text-align: center;
    position: relative;
    width: 50%;
    margin: 0 auto;
    padding-top: 50px;
`;
const Heading = styled.h1`
    font-size: 60px;
    color: #fff;
    line-height: 4rem;
    font-weight: 700;
    @media only screen and (min-width: 980px) {
        font-size: 50px;
    }
`;
const SubHeading = styled.h2`
    font-size: 30px;
    font-weight: 500;
    color: #fff;
`;
const Description = styled.p`
    font-size: 22px;
    color: #fff;
    @media only screen and (min-width: 980px) {
        font-size: 19px;
    }
`;
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Email = styled.input`
    padding: 26px;
    width: 60%;
    color: #888;
    font-size: 18px;
    margin-right: 1px;
    border: none;
    outline: none;
`;
const GetStarted = styled(Link)`
    width: 30%;
    padding: 17px;
    background-color: #e50914;
    border: none;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
    cursor: pointer;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;

export default Home;
