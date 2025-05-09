import styled from "styled-components";
import ShareMessage from "../components/ShareMessage";
import React, { useRef, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { useShare } from "../context/useShare";
import { useNavigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";

const ShareImage: React.FC<{ message: string }> = ({ message }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const { setMessage } = useShare();
  const navigateTo = useNavigate();

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await document.fonts.ready;
        const font = new FontFace("Lora", 'url("../public/fonts/Lora.ttf")');
        await font.load();
        document.fonts.add(font);
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };
    loadFonts();
  }, []);

  const handleDownload = async () => {
    console.log("Download clicked");
    try {
      if (!cardRef.current) return;

      if (!document.fonts.check("1em Lora")) {
        console.log("Waiting for Lora font to load...");
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      const dataUrl = await toPng(cardRef.current, {
        backgroundColor: "var(--bg-color)",
        cacheBust: true,
        fontEmbedCSS: `
          @font-face {
            font-family: "Lora";
            src: url("../public/fonts/Lora.ttf") format("truetype");
            font-weight: 100 900;
            font-style: normal;
          }
        `,
        pixelRatio: 2, // Increase quality of the output image
      });

      const link = document.createElement("a");
      link.download = "exported-card.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <ProtectedRoute>
      <Container>
        <Wrapper>
          <ImageContainer>
            <ShareMessage message={message} />
          </ImageContainer>
          <DownloadButton>
            <button onClick={handleDownload} disabled={!fontsLoaded}>
              {fontsLoaded ? "Download Image" : "Loading fonts..."}
            </button>
            <button
              onClick={() => {
                setMessage("");
                navigateTo("/app");
              }}>
              Exit
            </button>
          </DownloadButton>
        </Wrapper>
      </Container>
    </ProtectedRoute>
  );
};

export default ShareImage;

const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    padding-block: 50px;
    height: 100%;
  }
  @media (max-width: 400px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 400px) {
    display: none;
  }
`;

const DownloadButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > button {
    text-align: left;
    padding: 5px 10px;
  }
`;
