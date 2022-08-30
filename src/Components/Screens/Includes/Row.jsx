import React, { useEffect, useState } from "react";

//packages
import styled from "styled-components";
import axios from "axios";
//Componenets
import { BaseURL, IMAGE_URL } from "../Request";

function Row({ title, fetchUrl, thushara = false }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${BaseURL}${fetchUrl}`).then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results);
        });
    }, []);

    return (
        //API calling for Raw
        <>
            <Heading>{title}</Heading>
            <ItemContainer>
                {movies.map(
                    (movie, i) =>
                        movie.backdrop_path && (
                            <Item
                                key={i}
                                src={`${IMAGE_URL}${
                                    thushara == true
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                            />
                        )
                )}
            </ItemContainer>
        </>
    );
}
const Heading = styled.h1`
    color: #fff;
`;
const Item = styled.img`
    width: 200px;
    object-fit: contain;
    & {
        :hover {
            transform: scale(1.2);
            transition: all ease-out 0.5s;
        }
    }
`;
const ItemContainer = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    & {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
export default Row;
