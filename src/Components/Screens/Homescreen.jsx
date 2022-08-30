import React, { useEffect, useState } from "react";

//packages
import axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";

//components
import { BaseURL, IMAGE_URL } from "./Request";
import requests from "./Request";

// import Slider from "react-slick/lib/slider";

function Homescreen() {
    const [trending, setTrending] = useState([]);
    const [orginal, setOrginal] = useState([]);
    const [top, setTop] = useState([]);
    const [main, setMain] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [horror, setHorror] = useState([]);
    const [romance, setRomance] = useState([]);
    const [documentry, setDocumentry] = useState([]);
    const [handleshow, setHandleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setHandleShow(true);
        } else {
            setHandleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    var settings = {
        // dots: false,
        // infinite: false,
        // speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        // cssEase: "linear",
    };
    const settingsone = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
    };
    const settingstwo = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    const settingsthree = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    useEffect(() => {
        axios.get(`${BaseURL}${requests.fetchTrending}`).then((response) => {
            setTrending(response.data.results);
            // console.log(response.data.results);
        });

        axios
            .get(`${BaseURL}${requests.fetchNetflixOriginals}`)
            .then((response) => {
                setOrginal(response.data.results);
                // console.log(response.data.results);
            });
        axios
            .get(`${BaseURL}${requests.fetchNetflixOriginals}`)
            .then((response) => {
                let datas = Math.floor(Math.random() * 20);
                setMain(response.data?.results[datas]);
                // console.log(response.data.results);
            });

        axios.get(`${BaseURL}${requests.fetchTopRated}`).then((response) => {
            setTop(response.data.results);
        });

        axios
            .get(`${BaseURL}${requests.fetchActionMovies}`)
            .then((response) => {
                setAction(response.data.results);
            });

        axios
            .get(`${BaseURL}${requests.fetchComedyMovies}`)
            .then((response) => {
                setComedy(response.data.results);
            });

        axios
            .get(`${BaseURL}${requests.fetchHorrorMovies}`)
            .then((response) => {
                setHorror(response.data.results);
            });

        axios
            .get(`${BaseURL}${requests.fetchRomanceMovies}`)
            .then((response) => {
                setRomance(response.data.results);
            });

        axios
            .get(`${BaseURL}${requests.fetchDocumentaries}`)
            .then((response) => {
                setDocumentry(response.data.results);
            });
    }, []);
    return (
        <>
            <MainCOntainer>
                <NavContainer>
                    {transitionNavBar}
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
                        <Link to={"/logout/"}>
                            <LogOut
                                src={require("../../assets/Images/Logout.png")}
                            />
                        </Link>
                    </Right>
                </NavContainer>
                <BannerContainer>
                    <CaptionOverlay>
                        <CaptionDiv>
                            <MovieHeading>{main.original_name}</MovieHeading>
                            <Play>Play</Play>
                            <MyList>My List</MyList>
                            <OverViewP>{main.overview}</OverViewP>
                        </CaptionDiv>
                        <BannerDiv>
                            <Banner
                                src={`${IMAGE_URL}${main.backdrop_path}`}
                                alt="Image"
                            />
                            <ColorFade />
                        </BannerDiv>
                    </CaptionOverlay>
                </BannerContainer>
                <Container>
                    <Heading>NetflixOriginals</Heading>

                    <Slider {...settings}>
                        {orginal.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <BackdropDiv>
                                        <Backdrop
                                            src={`${IMAGE_URL}${item.poster_path}`}
                                            alt="Image"
                                        />
                                    </BackdropDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>Trending</Heading>

                    <Slider {...settingsone}>
                        {trending.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>TopRated</Heading>
                    <Slider {...settingstwo}>
                        {top.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>ActionMovies</Heading>
                    <Slider {...settingstwo}>
                        {action.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>ComedyMovies</Heading>
                    <Slider {...settingstwo}>
                        {comedy.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>HorrorMovies</Heading>
                    <Slider {...settingstwo}>
                        {horror.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>RomanceMovies</Heading>
                    <Slider {...settingstwo}>
                        {romance.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>

                    <Heading>Documentaries</Heading>
                    <Slider {...settingstwo}>
                        {documentry.map((item) => {
                            return (
                                <Slide key={item.id}>
                                    <PosterDiv>
                                        <Poster
                                            src={`${IMAGE_URL}${item.backdrop_path}`}
                                            alt="Image"
                                        />
                                    </PosterDiv>
                                </Slide>
                            );
                        })}
                    </Slider>
                </Container>
            </MainCOntainer>
        </>
    );
}

const MainCOntainer = styled.div`
    background-color: #000;
    position: relative;
`;
const NavContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 5%;
    z-index: 1;

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
const BannerContainer = styled.div`
    position: relative;
    background: #0c0c0c;
    opacity: 1;
`;
const CaptionDiv = styled.div`
    position: absolute;
    z-index: 100;
    left: 15%;
    top: 15%;
`;
const CaptionOverlay = styled.div`
    width: 100%;
`;
const BannerDiv = styled.div`
    width: 100%;
`;
const Banner = styled.img`
    display: block;
    width: 100%;
`;
const ColorFade = styled.div`
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(7, 5, 5, 0.61),
        #000
    );
`;
const MovieHeading = styled.h1`
    color: #fff;
    font-size: 60px;
`;
const Play = styled.button`
    width: 10%;
    border: none;
    padding: 10px;
    background-color: #000;
    opacity: 0.7;
    color: #fff;
    margin-right: 20px;
    font-size: 20px;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;
const MyList = styled.button`
    width: 10%;
    padding: 10px;
    background-color: #000;
    border: none;
    opacity: 0.7;
    color: #fff;
    font-size: 20px;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;
const OverViewP = styled.p`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    width: 50%;
`;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: #000;
`;

const Heading = styled.div`
    font-size: 40px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #fff;
`;
const Slide = styled.div`
    width: 90%;
    margin-left: 50px;
    border-radius: 25px;
`;
const BackdropDiv = styled.div`
    width: 90%;
    height: 40%;
    &:hover {
        transform: scale(1.15);
        opacity: 1;
    }
`;
const Backdrop = styled.img`
    width: 100%;
    display: block;
    border-radius: 7px;
`;

const PosterDiv = styled.div`
    width: 95%;
    margin-right: 10px;
    &:hover {
        transform: scale(1.15);
        opacity: 1;
    }
`;
const Poster = styled.img`
    width: 100%;
    display: block;
`;
export default Homescreen;
