import React from 'react';
import styled from 'styled-components';
import { ProgressBar,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Question = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/');
    }
    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={80} style={{marginTop: '20px'}} />
            <Title> 문제 </Title>
            <ButtonGroup>
            <Button style={{width:"40%", minHeight:"300px", fontSize:"15pt", marginRight:"40px"}}> 문제에 대한 답변 1번입니다. </Button>
            <Button style={{width:"40%", minHeight:"300px", fontSize:"15pt", marginLeft:"20px"}}> 문제에 대한 답변 2번입니다.  </Button>
            {/* <Button> 문제에 대한 답변 3번입니다.  </Button>
            <Button> 문제에 대한 답변 4번입니다.  </Button> */}
            </ButtonGroup>
            <Contents>
            <Button onClick={handleClickButton}> 홈으로 가기</Button>
            </Contents>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
 height:100vh;
 width: 100%;
`

const Title = styled.div`
 font-size :30pt;
 text-align: center;
 font-family: "EF_Diary";
`
const ButtonGroup =styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: "EF_Diary";
`
const Contents = styled.div `
display:flex;
justify-content:center;
margin-top: 50px;
font-family: "EF_Diary";
`