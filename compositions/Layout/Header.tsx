import React, { useEffect, useRef } from "react";

import { Box, BoxProps, styled } from "@mui/material";

import gsap from "gsap";
import useToggle from "@/hooks/useToggle";

import Menu from "./Menu";
import SnowMan from "@/components/icons/SnowMan";

interface WrapperHeaderExtends extends BoxProps {
  open: boolean;
}

export default function Header() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  //Hamburger time line
  const hamburgerTl = useRef<gsap.core.Timeline>();

  const { toggle, state: open } = useToggle();

  useEffect(() => {
    hamburgerTl.current = gsap
      .timeline({
        defaults: {
          duration: 0.2,
          ease: "power2.out",
        },
      })
      .fromTo(topRef.current, { y: 0 }, { y: 4.5 })
      .fromTo(bottomRef.current, { y: 0 }, { y: -4.5 })
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  useEffect(() => {
    hamburgerTl.current && hamburgerTl.current.reversed(!open);
  }, [open]);

  return (
    <Box position={"relative"}>
      <StyledWrapperHeader open={open}>
        <Box zIndex={51}>
          <SnowMan />
        </Box>
        <StyledMenuHamburger onClick={toggle}>
          <Box className="line" ref={topRef} />
          <Box className="line" ref={bottomRef} />
        </StyledMenuHamburger>
      </StyledWrapperHeader>
      {open && <Menu />}
    </Box>
  );
}

const StyledWrapperHeader = styled(Box, {
  shouldForwardProp: (propName) => propName !== "open",
})<WrapperHeaderExtends>(({ open }) => {
  return {
    padding: "12px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: open ? "" : "blur(5px)",
    WebkitBackdropFilter: open ? "" : "blur(5px)",
    boxShadow: open ? "" : "0 4px 30px rgba(0, 0, 0, 0.1)",
  };
});

const StyledMenuHamburger = styled(Box)(() => {
  return {
    userSelect: "none",
    zIndex: 51,
    cursor: "pointer",
    [".line"]: {
      height: "3px",
      width: "30px",
      margin: "6px",
      display: "block",
      backgroundColor: "#fff",
    },
  };
});
