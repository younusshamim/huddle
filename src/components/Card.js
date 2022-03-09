import { Container } from "./styles/Container.styled";
import { StyledCard } from "./styles/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <>
      <Container>
        <StyledCard layout={id % 2 === 0 && "row-reverse"}>
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>

          <div>
            <img src={`./images/${image}`} alt="" />
          </div>
        </StyledCard>
      </Container>
    </>
  );
};

export default Card;
