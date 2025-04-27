import React from "react";
import { PulseLoader } from "react-spinners";
import styled from "styled-components";

interface SpinnerProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <SpinnerOverlay>
          <PulseLoader color="#b4b4b4" />
        </SpinnerOverlay>
      )}
      {children}
    </>
  );
};

const SpinnerOverlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(20, 20, 20, 0.3);
  backdrop-filter: blur(5px);
`;

export default Spinner;
