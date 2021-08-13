import { Box } from "@chakra-ui/react";
import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export const ResumeCanvas: React.FC<IProps> = (props) => {
  return (
    <Box
      as="main"
      m="0 auto"
      boxSizing="border-box"
      w="8.5in"
      h="12in"
      bgColor="rgb(250, 255, 255)"
      boxShadow="0 3px 8px -3px rgba(0, 0, 0, 0.7)"
    >
      <title>Darren</title>
      <Box
        height="100%"
        // padding="0.3in">
      >
        {props.children}
      </Box>
    </Box>
  );
};

const layout = () => {
  return;
};
