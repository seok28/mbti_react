import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/junsu1.jpg';
const Home = () => {
return (
    <Wrapper>
    <Header>테스트 중</Header>
    <Title> 제목이 들어갈 곳 </Title>
    <LogoImage>
        <img src={PangImage} width ={350} height ={350}></img>
    </LogoImage>
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

const Title = styled.div `

`
const LogoImage = styled.div `
`