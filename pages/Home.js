import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/seok.jpg';
import Button from 'react-bootstrap/Button';
const Home = () => {
return (
    <Wrapper>
    <Header>프로젝트 이름 </Header>
    <Contents>
    <Title> 제목이 들어갈 곳 </Title>
    <LogoImage>
        <img src={PangImage} className="rounded-circle" width ={350} height ={350}></img>
    </LogoImage>
    <Desc>프로젝트 설명 부분</Desc>
    <Button> 버튼 활성화 </Button>
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

`
const LogoImage = styled.div `
 margin-top: 10px;

`

const Desc = styled.div`
 font-size: 20pt;
 margin-top: 50px;
`
