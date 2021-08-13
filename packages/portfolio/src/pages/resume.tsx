import "../fonts.css";

import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";

import { ResumeCanvas } from "../components/layout";
import email from "../icons/email.svg";
import github from "../icons/github.svg";
import phone from "../icons/phone.svg";
import darren from "../images/darren.jpg";

const contactList = [
  {
    icon: phone,
    value: "+61424813740",
  },
  {
    icon: email,
    value: "cheanglengg@gmail.com",
  },
  {
    icon: github,
    value: "https://github.com/dyeoh",
  },
  // { icon: linkedin, value: "https://www.linkedin.com/in/dyeohcl/" },
];

interface ContactDetailsProps {
  icon?: string;
  value?: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const { icon, value } = props;
  return (
    <Flex>
      <Image width="24px" src={icon} alt={value} />
      <Text ml="8px" fontFamily="Alte" fontWeight="bold" color="white">
        {"    "}
        {value}
      </Text>
    </Flex>
  );
};

const ResumePage: React.FC = () => {
  return (
    <ResumeCanvas>
      <Flex h="100%">
        {/*Division 1 */}
        <Flex w="30%" h="100%" flexDirection="column">
          <Flex h="30%" bg="primaryOrange" flexDirection="column">
            <Flex width="100%" align="center" justifyContent="center" h="70%">
              <Image
                src={darren}
                borderRadius="full"
                boxSize="200px"
                alt="Darren"
                border="2px solid"
                borderColor="primaryBlue"
              />
            </Flex>
            <Box width="100%" h="30%">
              <Center>
                <Text
                  as="h1"
                  fontFamily="Alte"
                  fontSize="36px"
                  fontWeight="bold"
                  color="#283593"
                >
                  darren yeoh
                </Text>
              </Center>
              <Center>
                <Text color="#303f9f" fontSize="28px">
                  developer
                </Text>
              </Center>
            </Box>
          </Flex>
          <Flex h="2%" bg="primaryDarkBlue" />
          <Flex flex={1} bg="primaryBlue">
            <Box p="16px">
              <Text
                fontSize="18px"
                fontFamily="Alte"
                color="#ffb300"
                fontWeight="bold"
              >
                about me
              </Text>
              <Text
                fontWeight="bold"
                fontSize="14px"
                fontFamily="Alte"
                color="white"
              >
                I'm a full stack developer for Bourne Digital specialising in
                front-end technolgies and UX. I work with business analysts,
                clients and designers in order to understand the requirements
                and transform them into a functional product.
              </Text>
              <Text
                fontSize="18px"
                fontFamily="Alte"
                color="#ffb300"
                fontWeight="bold"
                mt="16px"
                mb="16px"
              >
                contact me
              </Text>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                // border="1px solid"
                height="15%"
              >
                {contactList.map((value, index) => {
                  return <ContactDetails {...value} key={index} />;
                })}
              </Flex>
            </Box>
          </Flex>
        </Flex>
        {/*Division 2*/}
        <Flex flex={1} h="100%" bg="#1a237e"></Flex>
      </Flex>
    </ResumeCanvas>
  );
};

export default ResumePage;
