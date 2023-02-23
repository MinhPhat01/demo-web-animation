import React, { useLayoutEffect } from "react";

import { Box, Typography, styled } from "@mui/material";
import gsap from "gsap";

type MenuItemProps = {
  src: string;
  name: string;
  innerRef: React.Ref<HTMLDivElement>;
  outerRef: React.Ref<HTMLDivElement>;
};

export default function MenuItem({
  src,
  name,
  innerRef,
  outerRef,
}: MenuItemProps) {
  // Menu item slide up from bottom
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";

    const getAllMenuItem = gsap.utils.toArray(".menu-item");
    gsap.set(getAllMenuItem, { opacity: 0, y: 100 });

    gsap.to(getAllMenuItem, {
      opacity: 1,
      stagger: 0.6,
      y: 0,
    });

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <StyledWrapper data-img={src} className="menu-item">
      <StyledName>{name}</StyledName>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(() => {
  return {
    userSelect: "none",
  };
});

const StyledName = styled(Typography)(() => {
  return {
    fontSize: "24px",
    color: "white",
    marginBottom: "20px",
    cursor: "pointer",
    ["&:hover"]: {
      color: "pink",
    },
    transition: "color 0.4s ease",
  };
});
