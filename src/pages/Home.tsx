import styled from "styled-components";
import Navbar from "../components/Navbar";

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

    @media (max-width: 700px) {
      width: 100%;
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
        </Container.Quotes>
        <Navbar
          navItems={[
            { name: "Login", path: "/login" },
            { name: "Safety", path: "/safety" },
            { name: "About", path: "/about" },
          ]}
        />
      </Container.Left>
    </Container.Container>
  );
};

export default Home;
