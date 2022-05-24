import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/seok.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/question');
    }
return (
    <Wrapper>
    <Header> 폰트 적용 </Header>
    <Contents>
    <Title> fonts: EF_Diary </Title>
    <LogoImage>
        <img src={PangImage} className="rounded-circle" width ={350} height ={350}></img>
    </LogoImage>
    <Desc>프로젝트 설명 부분</Desc>
    <Button onClick={handleClickButton}> 다른 페이지 라우팅 버튼 </Button>
    </Contents>
    </Wrapper>
)
}

export default Home;

const Wrapper = styled.div `
 height:100vh;
 width: 100%;
`

const Header = styled.div `
 font-size:40pt;
 display:flex;
 justify-content:center;
 align-items:center;
 font-family: "EF_Diary";
 
`
const Contents = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;

`


const Title = styled.div `
 font-size :30pt;
 margin-top: 40px;
 font-family: "EF_Diary";

`
const LogoImage = styled.div `
 margin-top: 10px;

`

const Desc = styled.div`
 font-size: 20pt;
 margin-top: 50px;
 font-family: "EF_Diary";
 
`
