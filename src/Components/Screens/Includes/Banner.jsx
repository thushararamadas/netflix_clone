import React, { useState, useEffect } from "react";
//packages
import styled from "styled-components";
import axios from "axios";

//Componenets
import requests, { BaseURL, IMAGE_URL } from "../Request";

//for banner API
function Banner() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get(`${BaseURL}${requests.fetchNetflixOriginals}`)
            .then((response) => {
                let datas = Math.floor(Math.random() * 20);
                setMovies(response.data?.results[datas]);
                // console.log(response.data.results);
            });
    }, []);
    console.log(movies);
    return (
        <BannerContainer>
            <CaptionOverlay>
                <CaptionDiv>
                    <MovieHeading>{movies.original_name}</MovieHeading>
                    <Play>Play</Play>
                    <MyList>My List</MyList>
                    <OverView>{movies.overview}</OverView>
                </CaptionDiv>
                <BannerDiv>
                    <BannerImg
                        src={`${IMAGE_URL}${movies.backdrop_path}`}
                        alt="Image"
                    />
                </BannerDiv>
            </CaptionOverlay>
        </BannerContainer>
    );
}
const BannerContainer = styled.div`
    position: relative;
    background: #0c0c0c;
    opacity: 1;
`;
const CaptionOverlay = styled.div``;
const CaptionDiv = styled.div`
    position: absolute;
    z-index: 100;
    left: 10%;
    top: 10%;
`;
const BannerDiv = styled.div`
    width: 100%;
`;
const BannerImg = styled.img`
    display: block;
    width: 100%;
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
const OverView = styled.p`
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    width: 50%;
`;
export default Banner;
