import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
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

const Safety = () => {
  return (
    <Container>
      <Wrapper>
        <h1>NERD-NECKING | Safety</h1>
        <p>
          Your data privacy is our top priority. "nerd-necking" is committed to
          safeguarding the integrity, confidentiality, and availability of your
          information.
        </p>
        <p>
          We do not sell your data, and we employ encryption, secure
          authentication, and best practices in storage and access control. Our
          infrastructure is hosted on trusted platforms such as Vercel and
          Supabase, ensuring secure and reliable environments.
        </p>
        <p>
          If you have any questions about your data, feel free to reach out.
          Transparency and trust are built into every layer of our product.
        </p>
        <Navbar
          navItems={[
            { name: "Exit", path: "/" },
            { name: "Login", path: "/login" },
            { name: "About", path: "/about" },
          ]}
        />
      </Wrapper>
    </Container>
  );
};

export default Safety;
