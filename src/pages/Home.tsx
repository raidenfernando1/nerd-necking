import styled from "styled-components";
import Navbar from "../components/Navbar";
import SearchPopup from "../components/SearchUsername";
import { useState } from "react";

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
  const [searchPopup, setSearchPopup] = useState(false);

  return (
    <>
      {searchPopup && (
        <SearchPopup
          isOpen={searchPopup}
          onClose={() => setSearchPopup(false)}
        />
      )}
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
            buttonItems={[
              {
                name: "Send a Message",
                onClick: () => setSearchPopup(true),
              },
            ]}
          />
        </Container.Left>
      </Container.Container>
    </>
  );
};

export default Home;
