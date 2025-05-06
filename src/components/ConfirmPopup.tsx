import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--bd-color);
  padding: 30px;
  background-color: var(--bg-color);
  gap: 10px;
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 10px;

  > button {
    flex-grow: 1;
    text-align: left;
    padding: 5px;
  }
`;

type ConfirmPopupProps = {
  isOpen: boolean;
  onConfirm: (confirmed: boolean) => void;
};

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ isOpen, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Container>
      <Popup>
        <p>Are you sure about this?</p>
        <BtnsContainer>
          <button type="button" onClick={() => onConfirm(true)}>
            Yes
          </button>
          <button type="button" onClick={() => onConfirm(false)}>
            No
          </button>
        </BtnsContainer>
      </Popup>
    </Container>
  );
};

export default ConfirmPopup;
