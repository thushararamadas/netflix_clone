import React from "react";

//packages
import styled from "styled-components";
//Componenets
import Nav from "./Includes/Nav";
import requests from "./Request";
import Row from "./Includes/Row";
import Banner from "./Includes/Banner";

function Screen() {
    return (
        <>
            <Container>
                <Nav />
                <Banner />
                <Row
                    title="NETFLIX ORGINALS"
                    fetchUrl={requests.fetchNetflixOriginals}
                    thushara={true}
                />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                    title="ActionMovies"
                    fetchUrl={requests.fetchActionMovies}
                />
                <Row
                    title="ComedyMovies"
                    fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                    title="HorrorMovies"
                    fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                    title="Documentaries"
                    fetchUrl={requests.fetchDocumentaries}
                />
            </Container>
        </>
    );
}
const Container = styled.div`
    background: #000;
`;
export default Screen;
