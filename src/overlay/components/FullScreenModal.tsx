import * as React from "react";
import styled from "@emotion/styled";

import COLORS from "../../utils/colors";

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    display: "flex",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.pink,
    zIndex: 9999,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 16,
    cursor: "pointer",
  }
};

const ModalContainer = styled.div`
  font-family: Rubik;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  font-family: Rubic;
  padding-bottom: 50vh;
  height: 100%;
`;

interface IModalProps {
  children: React.ReactNode
}

export const FullScreenModal = (props: IModalProps) => {
  
  return (
    <div style={{...styles.overlay}}>
      <ModalContainer>
        <div style={{flex: 1}}/>
        {props.children}
      </ModalContainer>
    </div>
  );
};
