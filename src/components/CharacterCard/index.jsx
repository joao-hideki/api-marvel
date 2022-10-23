import {Container} from "./style";

export const CharacterCard = ({image, name}) => {
    return(
        <Container>
            <img src={image}/>
            <h2>{name}</h2>
        </Container>
    );
}