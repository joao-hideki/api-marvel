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
    padding: 0 40px;

    img{
        height: 65%;
        border-radius: 3px;
    }

    input{
        font-size: 15px;
        padding: 10px 10px;
        margin-left: 10px;
        border-radius: 10px;
        border: none;
        outline: none;

        &::placeholder{
            font-size: 0.93rem;
        }

        @media (max-width: 480px){
            display: none;
        }
}
`;
export const InputMobile = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid red;
        background-color: red;

        svg{
            font-size: 1.5rem;
            font-weight: bold;
        }
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
    max-width: 85vw;
    column-gap: 10px;
    row-gap: 20px;
    margin: 0 auto;

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
    @media (max-width: 760px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        max-width: 70vw;
    }

`;
export const Pagination = styled.div`
    display: flex;
    margin-top: 5vh;
    justify-content: center;
`;