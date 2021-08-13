import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";

import { ResumeCanvas } from "../components/layout";
import darren from "../images/darren.jpg";

const ResumePage: React.FC = () => {
  return (
    <ResumeCanvas>
      <Flex h="100%">
        {/*Division 1 */}
        <Flex w="40%" h="100%" flexDirection="column">
          <Flex h="30%" bg="#ffb300" flexDirection="column">
            <Flex width="100%" align="center" justifyContent="center" h="70%">
              <Image
                src={darren}
                borderRadius="full"
                boxSize="150px"
                alt="Darren"
              />
            </Flex>
            <Box width="100%" h="30%">
              <Center>
                <Text>Darren Yeoh</Text>
              </Center>
              <Center>
                <Text>Full Stack Developer</Text>
              </Center>
            </Box>
          </Flex>
          <Flex h="5%" bg="#283593" />
          <Flex h="65%" bg="#303f9f" />
        </Flex>
        {/*Division 2*/}
        <Flex w="60%" h="100%" bg="#1a237e"></Flex>
      </Flex>
    </ResumeCanvas>
  );
};

export default ResumePage;
