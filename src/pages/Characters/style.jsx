import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://wallpapercave.com/dwp1x/wp8793793.jpg');
    min-height: 150vh;
`;
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: black;
    height: 15vh;
    margin-bottom: 50px;
    justify-content: space-between;
    padding: 0 50px;

    img{
        height: 65%;
        border-radius: 3px;
    }

    input{
        font-size: 15px;
        padding: 10px 5px;
        margin-left: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
    }
`;
export const Loading = styled.div`
    min-height: 100vh;
    svg{
        position: fixed;
        top: 40%;
        left: 40%;
    }
`;
export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    scroll-behavior: smooth;
    min-height: 80vh;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
`;
export const Pagination = styled.div`
    display: flex;
    margin-top: 5vh;
    justify-content: center;
`;