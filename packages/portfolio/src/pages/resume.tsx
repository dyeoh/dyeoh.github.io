import "../fonts.css";

import {
  Box,
  Center,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as React from "react";

import { ResumeCanvas } from "../components/ResumeLayout";
import Timeline from "../components/Timeline";

interface ContactDetailsProps {
  icon?: string;
  value?: string;
}

const BlueCardBoxStyle = {
  m: "16px",
  boxShadow: "dark-lg",
  bg: "primaryDarkBlue",
  h: "100%",
};

const ContactDetails: React.FC<ContactDetailsProps> = (props) => {
  const { icon, value } = props;
  return (
    <Flex>
      <Image width="20px" src={icon} alt={value} />
      <Text ml="8px" variant="body" color="white">
        {"    "}
        {value}
      </Text>
    </Flex>
  );
};

interface ResumePageData {
  data: {
    prismicAboutMe: PrismicAboutMe;
    allPrismicContact: PrismicContacts;
    allPrismicEducation: PrismicEducationList;
  };
}

const ResumePage: React.FC<ResumePageData> = (props) => {
  const { data } = props;
  const aboutMe = data?.prismicAboutMe;
  const contactList = data?.allPrismicContact?.nodes;
  const allPrismicEducation = data?.allPrismicEducation?.nodes?.sort(
    (a: PrismicEducation, b: PrismicEducation) => {
      if (!a || !b) return 0;
      if (a.data.order < b.data.order) return -1;
      return 1;
    }
  );

  return (
    <ResumeCanvas>
      <Flex h="100%" boxShadow="2xl">
        {/*Division 1 */}
        <Flex w="30%" h="100%" flexDirection="column">
          <Flex
            boxShadow="dark-lg"
            h="30%"
            bg="primaryOrange"
            flexDirection="column"
          >
            <Flex width="100%" align="center" justifyContent="center" h="70%">
              <Image
                src={data.prismicAboutMe?.data?.profile_picture?.url}
                borderRadius="full"
                boxSize="200px"
                alt="Darren"
                border="2px solid"
                borderColor="primaryBlue"
                boxShadow="dark-lg"
              />
            </Flex>
            <Box width="100%" h="30%">
              <Center>
                <Text variant={"H1"} color="primaryDarkerBlue" opacity={0.8}>
                  {`${aboutMe?.data?.first_name?.text?.toLowerCase()} 
                    ${aboutMe?.data?.last_name?.text?.toLowerCase()}`}
                </Text>
              </Center>
              <Center>
                <Text color="primaryBlue" variant={"H2"}>
                  {`${aboutMe?.data?.job_title?.text?.toLowerCase()}`}
                </Text>
              </Center>
            </Box>
          </Flex>
          <Flex boxShadow="2xl" h="2%" bg="primaryDarkBlue" />
          <Flex boxShadow="dark-lg" flex={1} bg="primaryBlue">
            <Box p="16px">
              <Text variant={"title"} color="primaryOrange">
                {aboutMe?.data?.title?.text}
              </Text>
              <Text variant="body" color="white" opacity={0.8}>
                {aboutMe?.data?.body?.text}
              </Text>
              <Text variant="title" color="primaryOrange" mt="16px" mb="16px">
                contact me
              </Text>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                // border="1px solid"
                height="15%"
              >
                {contactList?.map((value: PrismicContact, index: number) => {
                  return (
                    <ContactDetails
                      icon={value.data.icon?.url}
                      value={value.data.value?.text}
                      key={index}
                    />
                  );
                })}
              </Flex>
            </Box>
          </Flex>
        </Flex>
        {/*Division 2*/}
        <Flex w="100%" flex={1} h="100%" boxShadow="2xl" bg="#1a237e">
          <Flex
            h="100%"
            w="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex w="100%" flex={1} justifyContent="space-between">
              <Flex
                flexDirection="column"
                {...BlueCardBoxStyle}
                w="48%"
                p="16px"
              >
                <Box h="30px">
                  <Text variant="title" color="primaryOrange">
                    education
                  </Text>
                </Box>
                <Box h="100%" p="16px">
                  <Timeline items={allPrismicEducation.map((e) => e.data)} />
                </Box>
              </Flex>
              <Box {...BlueCardBoxStyle} h="100%" padding="16px" w="48%">
                <Box h="30px">
                  <Text variant="title" color="primaryOrange">
                    experience
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex h="20px" />
            <Flex w="100%" flex={1} justifyContent="center">
              <Box {...BlueCardBoxStyle} w="95%">
                a
              </Box>
            </Flex>
            <Flex h="20px" />
            <Flex {...BlueCardBoxStyle} flex={1}></Flex>
          </Flex>
        </Flex>
      </Flex>
    </ResumeCanvas>
  );
};

export const query = graphql`
  query AboutMeQuery {
    prismicAboutMe {
      id
      data {
        title {
          text
        }
        profile_picture {
          url
        }
        body {
          text
        }
        first_name {
          text
        }
        last_name {
          text
        }
        job_title {
          text
        }
      }
    }
    allPrismicContact {
      nodes {
        data {
          icon {
            url
          }
          value {
            text
          }
          order
        }
      }
    }
    allPrismicEducation {
      nodes {
        data {
          heading {
            text
          }
          subheading {
            text
          }
          end {
            text
          }
          start {
            text
          }
          order
        }
      }
    }
  }
`;

export default ResumePage;
