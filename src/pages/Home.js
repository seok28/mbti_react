import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/junsu1.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();


    const handleClickButton = () => {
        navigate('/question');
    }
    return (
        <Wrapper>
            <Header>테스트 중</Header>
            <Contents>
                <Title> 제목이 들어갈 곳 </Title>
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width ={350} height ={350}></img>
    </LogoImage>
    <Desc>MBTI를 검사하는 웹페이지를 REACT를 이용하여 만들예정</Desc>
    <Button style={{fontFamily :"SimKyungha"}} onClick ={handleClickButton}> MBTI 검사 시작하기</Button>
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
 font-family:"SimKyungha";
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
 font-family:"SimKyungha";

`
const LogoImage = styled.div `
 margin-top: 10px;

`

const Desc = styled.div`
 font-size: 20pt;
 margin-top: 50px;
 font-family:"SimKyungha";
`
