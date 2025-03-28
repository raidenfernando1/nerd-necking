import styled from "styled-components";
import { Link } from "react-router";

const Container = {
  Container: styled.div`
    height: 100vh;
    display: flex;
  `,
  Left: styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Buttons: styled.div`
    margin-top: 50px;
    padding-top: 10px;
    border-top: 1px solid var(--bd-color);
    display: flex;
    gap: 20px;

    > button {
      padding: 5px 20px;
    }
  `,
  Quotes: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};

const Home = () => {
  return (
    <Container.Container>
      <Container.Left>
        <h1>NERD-NECKING</h1>
        <Container.Quotes>
          <p>
            "Send and receive anonymous messages with complete privacy. No
            tracking, no limits — just pure anonymity."
          </p>
          <p>"Not even i can see your messages - Raiden"</p>
        </Container.Quotes>
        <Container.Buttons>
          <Link to="/register">REGISTER</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/safety">SAFETY</Link>
          <Link to="/about">ABOUT</Link>
        </Container.Buttons>
      </Container.Left>
    </Container.Container>
  );
};

export default Home;
