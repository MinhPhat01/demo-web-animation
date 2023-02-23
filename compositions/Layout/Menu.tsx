import React, { useRef } from "react";

import { Box, Stack, styled } from "@mui/material";

import MenuItem from "./MenuItem";
import { listMenu } from "@/constant";

export default function Menu() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  return (
    <StyledWrapper>
      <Stack
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {listMenu.map((item) => {
          return (
            <MenuItem
              key={item.id}
              name={item.name}
              src={item.src}
              innerRef={innerRef}
              outerRef={outerRef}
            />
          );
        })}
      </Stack>
      <StyledImageOuter ref={outerRef}>
        <StyledImageInner ref={innerRef}></StyledImageInner>
      </StyledImageOuter>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(() => {
  return {
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 50,
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  };
});

const StyledImageOuter = styled(Box)(() => {
  return {
    position: "absolute",
    top: "20vh",
    left: "50%",
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "300px",
    pointerEvents: "none",
  };
});

const StyledImageInner = styled(Box)(() => {
  return {
    position: "absolute",
    opacity: "0.8",
    top: "-10%",
    left: "0",
    width: "100%",
    height: "115%",
    backgroundSize: "cover",
  };
});
