import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <p>{errorMessage}</p>
        <Navbar
          navItems={[
            { name: "Home", path: "/" },
            { name: "Safety", path: "/safety" },
            { name: "About", path: "/about" },
          ]}
          buttonItems={[
            {
              name: "Send Message",
              onClick: () => navigate("/"), // ✅ fixed here
            },
          ]}
        />
      </Wrapper>
    </Container>
  );
};

export default ErrorPage;
