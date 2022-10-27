import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid grey; 
    min-width: 20vw;
    height: 300px;
    overflow: hidden;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        transform: scale(1.05);
        opacity: 0.93;
    }

    img{
        width: 100%;
        height: 230px;
        border-bottom: 2px solid grey;
    }
    h2{
        margin-bottom: 20px;
        text-align: center;
        
    }
`;