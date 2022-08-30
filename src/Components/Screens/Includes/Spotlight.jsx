import React, { useState } from "react";
//Packages
import styled from "styled-components";

function Spotlight() {
    const [view, setView] = useState(false);
    const [viewone, setViewone] = useState(false);
    const [viewtwo, setViewtwo] = useState(false);
    const [viewthree, setViewthree] = useState(false);
    const [viewfour, setViewfour] = useState(false);
    const [viewfive, setViewfive] = useState(false);

    return (
        <>
            <Main>
                <Smart>
                    <Left>
                        <Title>Enjoy on your TV.</Title>
                        <SubTitle>
                            Watch on smart TVs, PlayStation, Xbox, Chromecast,
                            Apple TV, Blu-ray players and more.
                        </SubTitle>
                    </Left>
                    <Right>
                        <ImgContainer>
                            <Background
                                src={require("../../../assets/Images/tv.png")}
                                alt="Image"
                            />
                        </ImgContainer>
                        <VideoContainer>
                            {" "}
                            <Animation>
                                src=
                                {require("../../../assets/Images/video1.m4v")}
                                alt="Video"
                            </Animation>
                        </VideoContainer>
                    </Right>
                </Smart>

                <Downlods>
                    <DownlodsLeft>
                        <MobileDiv>
                            <Mobile
                                src={require("../../../assets/Images/mobile.jpg")}
                                alt="Image"
                            />
                        </MobileDiv>
                        <GifContainer>
                            <BoxShot>
                                <Icon
                                    src={require("../../../assets/Images/boxshot.png")}
                                    alt="Image"
                                />
                            </BoxShot>
                            <Text>Downloading...</Text>
                            <Gif>
                                <GifImage
                                    src={require("../../../assets/Images/download-icon.gif")}
                                    alt="Image"
                                />
                            </Gif>
                        </GifContainer>
                    </DownlodsLeft>
                    <Right>
                        <Title>Download your shows to watch offline.</Title>
                        <SubTitle>
                            Save your favourites easily and always have
                            something to watch.
                        </SubTitle>
                    </Right>
                </Downlods>
                <WatchContainer>
                    <WatchContainerLeft>
                        <Title>Watch everywhere.</Title>
                        <SubTitle>
                            Stream unlimited movies and TV shows on your phone,
                            tablet, laptop, and TV.
                        </SubTitle>
                    </WatchContainerLeft>
                    <WatchContainerRight>
                        <WatchRightImgContainer>
                            <WatchRightImg
                                src={require("../../../assets/Images/device-pile-in.png")}
                                alt="Image"
                            />
                        </WatchRightImgContainer>
                        <WatchRightVideoContainer>
                            <WatchRightVideo loop autoPlay>
                                <source
                                    src="../../../assets/Images/video-devices-in.m4v"
                                    alt="Video"
                                />
                            </WatchRightVideo>
                        </WatchRightVideoContainer>
                    </WatchContainerRight>
                </WatchContainer>

                <CreateContainer>
                    <CreateLeft>
                        <CreateImgContainer>
                            <CreateImg
                                src={require("../../../assets/Images/kidsValueProp.png")}
                                alt="Image"
                            />
                        </CreateImgContainer>
                    </CreateLeft>
                    <CreateRight>
                        <Title>Create profiles for children.</Title>
                        <SubTitle>
                            Send children on adventures with their favourite
                            characters in a space made just for them—free with
                            your membership.
                        </SubTitle>
                    </CreateRight>
                </CreateContainer>

                <QuestionsContainer>
                    <Heading>Frequently Asked Questions</Heading>
                    <QuestionContainers>
                        <QuestionContainer>
                            <Question>What is Netflix?</Question>
                            <PlusContainer onClick={() => setView(!view)}>
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={view ? "active" : ""}>
                                Netflix is a streaming service that offers a
                                wide variety of award-winning TV shows, movies,
                                anime, documentaries and more – on thousands of
                                internet-connected devices. You can watch as
                                much as you want, whenever you want, without a
                                single ad – all for one low monthly price.
                                There's always something new to discover, and
                                new TV shows and movies are added every week!
                            </Paragraph>
                        </ParagraphContainer>
                        <QuestionContainer>
                            <Question>How much does Netflix cost?</Question>
                            <PlusContainer onClick={() => setViewone(!viewone)}>
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={viewone ? "active" : ""}>
                                Watch Netflix on your smartphone, tablet, Smart
                                TV, laptop, or streaming device, all for one
                                fixed monthly fee. Plans range from ₹ 149 to ₹
                                649 a month. No extra costs, no contracts.
                            </Paragraph>
                        </ParagraphContainer>
                        <QuestionContainer>
                            <Question>Where can I watch?</Question>
                            <PlusContainer onClick={() => setViewtwo(!viewtwo)}>
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={viewtwo ? "active" : ""}>
                                Netflix is flexible. There are no annoying
                                contracts and no commitments. You can easily
                                cancel your account online in two clicks. There
                                are no cancellation fees – start or stop your
                                account anytime.
                            </Paragraph>
                        </ParagraphContainer>
                        <QuestionContainer>
                            <Question>How do I cancel?</Question>
                            <PlusContainer
                                onClick={() => setViewthree(!viewthree)}
                            >
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={viewthree ? "active" : ""}>
                                Netflix has an extensive library of feature
                                films, documentaries, TV shows, anime,
                                award-winning Netflix originals, and more. Watch
                                as much as you want, anytime you want.
                            </Paragraph>
                        </ParagraphContainer>
                        <QuestionContainer>
                            <Question>What can I watch on Netflix?</Question>
                            <PlusContainer
                                onClick={() => setViewfour(!viewfour)}
                            >
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={viewfour ? "active" : ""}>
                                The Netflix Kids experience is included in your
                                membership to give parents control while kids
                                enjoy family-friendly TV shows and films in
                                their own space. Kids profiles come with
                                PIN-protected parental controls that let you
                                restrict the maturity rating of content kids can
                                watch and block specific titles you don’t want
                                kids to see.
                            </Paragraph>
                        </ParagraphContainer>
                        <QuestionContainer>
                            <Question> Is Netflix good for kids?</Question>
                            <PlusContainer
                                onClick={() => setViewfive(!viewfive)}
                            >
                                <Plus
                                    src={
                                        require("../../../assets/Images/plus-60.svg")
                                            .default
                                    }
                                    alt="Plus"
                                />
                            </PlusContainer>
                        </QuestionContainer>
                        <ParagraphContainer>
                            <Paragraph className={viewfive ? "active" : ""}>
                                Netflix is a streaming service that offers a
                                wide variety of award-winning TV shows, movies,
                                anime, documentaries and more – on thousands of
                                internet-connected devices. You can watch as
                                much as you want, whenever you want, without a
                                single ad – all for one low monthly price.
                                There's always something new to discover, and
                                new TV shows and movies are added every week!
                            </Paragraph>
                        </ParagraphContainer>
                    </QuestionContainers>
                    <Container>
                        <Description>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </Description>
                        <Form>
                            <Email placeholder="Email adress"></Email>
                            <GetStarted>Get Started </GetStarted>
                        </Form>
                    </Container>
                </QuestionsContainer>
            </Main>
        </>
    );
}
const Main = styled.div``;
const Smart = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    padding: 30px 100px;
    border-bottom: 10px solid #222;
`;
const Left = styled.div`
    width: 40%;
    margin: 0 auto;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 50px;
    /* @media only screen and (min-width: 980px) {
        font-size: 34px;
    } */
`;
const SubTitle = styled.h3`
    color: #fff;
    font-size: 29px;
    font-weight: 400;
    /* @media only screen and (min-width: 980px) {
        font-size: 25px;
    } */
`;
const Right = styled.div`
    position: relative;
    width: 40%;
    margin: 0 auto;
    /* @media only screen and (min-width: 980px) {
        width: 47%;
    } */
`;
const ImgContainer = styled.div`
    position: relative;
    z-index: 2;
    width: 87%;
`;
const Background = styled.img`
    display: block;
    width: 100%;
`;
const VideoContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 100px;

    /* @media only screen and (min-width: 1080px) {
        top: 60px;
        left: 54px;
    } */
`;
const Animation = styled.video`
    width: 70%;
`;

const Downlods = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    padding: 20px 70px;
    border-bottom: 10px solid #222;
`;
const DownlodsLeft = styled.div`
    position: relative;
`;
const MobileDiv = styled.div`
    width: 90%;
`;
const Mobile = styled.img`
    display: block;
    width: 100%;
`;
const GifContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    align-items: center;
    border: 2px solid #222;
    border-radius: 10px;
    padding: 5px 10px;
    position: absolute;
    bottom: 25px;
    left: 115px;
    background-color: #000;
    /* @media only screen and (min-width: 980px) {
        left: 100px;
    } */
`;
const BoxShot = styled.div`
    width: 55px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const Text = styled.h6`
    color: #fff;
    font-size: 17px;
    font-weight: 500;
`;
const Gif = styled.div`
    width: 50px;
`;
const GifImage = styled.img`
    display: block;
    width: 100%;
`;

const WatchContainer = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    padding: 30px 85px;
    border-bottom: 10px solid #222;
`;
const WatchContainerLeft = styled.div`
    width: 40%;
    margin: 0 auto;
`;
const WatchContainerRight = styled.div`
    width: 40%;
    margin: 0 auto;
    position: relative;
`;
const WatchRightImgContainer = styled.div`
    width: 90%;
    position: relative;
    z-index: 2;
`;
const WatchRightImg = styled.img`
    display: block;
    width: 100%;
`;
const WatchRightVideoContainer = styled.div`
    position: absolute;
    left: 100px;
    bottom: 165px;
`;
const WatchRightVideo = styled.video`
    width: 63%;
`;

const CreateContainer = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    padding: 30px 85px;
    border-bottom: 10px solid #222;
`;
const CreateLeft = styled.div`
    width: 40%;
    margin: 0 auto;
`;
const CreateImgContainer = styled.div`
    width: 90%;
`;
const CreateImg = styled.img`
    display: block;
    width: 100%;
`;
const CreateRight = styled.div`
    width: 40%;
    margin: 0 auto;
`;

const QuestionsContainer = styled.div`
    background-color: #000;
    padding: 10px;
    border-bottom: 10px solid #222;
`;
const Heading = styled.h3`
    color: #fff;
    text-align: center;
    font-size: 50px;
`;
const QuestionContainers = styled.ul``;
const QuestionContainer = styled.li`
    width: 57%;
    background-color: #222;
    margin: 10px auto;
    padding: 7px 25px;
    display: flex;
    justify-content: space-between;
`;
const Question = styled.h4`
    color: #fff;
    font-size: 30px;
    margin: 0;
    font-weight: 400;
`;
const PlusContainer = styled.div`
    width: 40px;
    cursor: pointer;
`;
const Plus = styled.img`
    display: block;
    width: 100%;
`;
const ParagraphContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const Paragraph = styled.p`
    color: #fff;
    font-size: 27px;
    background-color: #222;
    padding: 40px;
    display: none;
    &.active {
        display: block;
    }
`;
const Container = styled.div`
    text-align: center;
    position: relative;
    width: 50%;
    margin: 0 auto;
    padding-top: 50px;
`;
const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;
const Description = styled.p`
    font-size: 22px;
    color: #fff;
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
const GetStarted = styled.button`
    width: 30%;
    padding: 20px;
    background-color: #e50914;
    border: none;
    color: #fff;
    font-size: 30px;
    /* @media only screen and (min-width: 980px) {
        font-size: 20px;
        padding: 25px;
    } */
`;

export default Spotlight;
