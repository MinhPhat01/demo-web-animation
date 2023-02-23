import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import { Box, styled } from "@mui/material";

import Header from "./Header";
import Popup from "./Popup";

export default function Layout({ children }: { children: React.ReactNode }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 1,
      },
    });

    crossRevealTween.fromTo(
      popupRef.current,
      {
        xPercent: 100,
        opacity: 0,
      },
      { xPercent: 0, opacity: 1 }
    );
  }, []);

  const handleClose = () => {
    const close = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 1,
      },
    });

    close.to(popupRef.current, {
      xPercent: 100,
      opacity: 0,
    });
  };

  return (
    <Wrapper>
      <Header></Header>
      <WrapperChildren>{children}</WrapperChildren>
      <Box></Box>
      <StyledWrapperPopup ref={popupRef} onClick={handleClose}>
        <Popup />
      </StyledWrapperPopup>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    minHeight: "100vh",
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(205,180,214,1) 39%)",
  };
});

const StyledWrapperPopup = styled(Box)(() => {
  return {
    cursor: "pointer",
  };
});

const WrapperChildren = styled(Box)(() => {
  return {
    flex: 1,
  };
});
