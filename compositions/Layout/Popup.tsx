import React from "react";
import { useMeasure } from "react-use";

import Image from "@/components/Image";
import { Box, styled } from "@mui/material";

export default function Popup() {
  const [ref, { width, height }] = useMeasure();
  return (
    <StyledWrapper>
      <StyledWrapperImg ref={ref} width={200} height={200}>
        <Image
          src="/images/hello.avif"
          alt="hello"
          width={width}
          height={height}
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        />
      </StyledWrapperImg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(() => {
  return {
    position: "absolute",
    right: 0,
    bottom: "30px",
  };
});

const StyledWrapperImg = styled(Box)(() => {
  return {
    width: "200px",
    height: "180px",
  };
});
