import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.main`
  height: 100dvh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <h1>NERD-NECKING | About</h1>
        <p>
          I simply built this app because i was bored and in need of a learning
          oppurtunity
        </p>

        <p>- Raiden</p>
        <Navbar
          navItems={[
            { name: "Exit", path: "/" },
            { name: "Login", path: "/login" },
            { name: "Safety", path: "/safety" },
          ]}
        />
      </Wrapper>
    </Container>
  );
};

export default About;
