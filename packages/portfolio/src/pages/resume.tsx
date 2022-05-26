import "../fonts.css";

import { Box, Center, Flex, Image, Progress, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as React from "react";

import { ResumeCanvas } from "../components/ResumeLayout";
import Timeline from "../components/Timeline";

interface ContactDetailsProps {
  icon?: string;
  value?: string;
}

const BlueCardBoxStyle = {
  mt: "8px",
  mx: "16px",
  boxShadow: "2xl",
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
    allPrismicEducation: {
      nodes: PrismicTimeline[];
    };
    allPrismicExperience: {
      nodes: PrismicTimeline[];
    };
  };
}

const sortTimeline = (a: PrismicTimeline, b: PrismicTimeline) => {
  if (!a || !b) return 0;
  if (a.data.order < b.data.order) return -1;
  return 1;
};

const ResumePage: React.FC<ResumePageData> = (props) => {
  const { data } = props;
  const aboutMe = data?.prismicAboutMe;
  const contactList = data?.allPrismicContact?.nodes;
  const allPrismicEducation =
    data?.allPrismicEducation?.nodes?.sort(sortTimeline);
  const allPrismicExperience =
    data?.allPrismicExperience?.nodes?.sort(sortTimeline);

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
          <Flex boxShadow="dark-lg" h="2%" bg="primaryDarkBlue" />
          <Flex boxShadow="dark-lg" flex={1} bg="primaryBlue">
            <Box p="16px">
              <Text variant="title" color="primaryOrange" mb="16px" >
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
              <Text variant={"title"} color="primaryOrange" my="16px" >
                {aboutMe?.data?.title?.text}
              </Text>
              <Text variant="body" color="white" opacity={0.8}>
                {aboutMe?.data?.body?.text}
              </Text>
            </Box>
          </Flex>
        </Flex>
        {/*Division 2*/}
        <Flex w="100%" flex={1} h="100%" boxShadow="2xl" bg="#1a237e" pb="8px">
          <Flex
            h="100%"
            w="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex w="100%" height="25%" justifyContent="space-between">
              <Flex
                flexDirection="column"
                {...BlueCardBoxStyle}
                w="48%"
                px="16px"
                py="8px"
              >
                <Text variant="title" color="primaryOrange">
                  education
                </Text>
                <Box h="100%" px="16px">
                  <Timeline items={allPrismicEducation.map((e) => e.data)} />
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                {...BlueCardBoxStyle}
                h="100%"
                px="16px"
                py="10px"
                w="48%"
              >
                <Text variant="title" color="primaryOrange">
                  experience
                </Text>
                <Box h="100%" px="16px">
                  <Timeline items={allPrismicExperience?.map((e) => e.data)} />
                </Box>
              </Flex>
            </Flex>
            <Flex h="12px" />
            <Flex w="100%" height="35%" justifyContent="center">
              <Box pt="4px" px="16px" {...BlueCardBoxStyle} w="95%">
                <Text variant="title" color="primaryOrange" mb="8px">
                  main programming / technical skills
                </Text>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    TypeScript/JavaScript
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={90} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    HTML5
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={90} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    Node.js
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={77} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    CSS
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={65} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    Java
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={65} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    SQL
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={60} />
                </Flex>
                <Flex w="100%" alignItems="center">
                  <Text variant="bodySm" color="white" w="30%" opacity={0.8}>
                    Solidity
                  </Text>
                  <Progress w="70%" colorScheme="orange" size="xs" value={55} />
                </Flex>
                <Text variant="title" color="primaryOrange" mt="4px">
                  others
                </Text>
                <Text variant="bodySm" color="white" w="100%" opacity={0.8}>
                  <b>Other Technical skills/ frameworks/ languages:</b> Yarn2, npm, git, 
                  Next.js, Gatsby.js, React.js,
                  Storybook.js, GraphQL, C, C#, Python, Unity, Solidity,
                  Serverless.js Framework
                  <br />
                  <b>Testing:</b> Jest, React Testing Library, Cypress
                  <br />
                  <b>CI/CD and Automation:</b> Bitbucket Pipelines, AWS Amplify, Drone CI
                  <br />
                  <b>Soft skills:</b> Excellent verbal and written communication
                  skills, fast learner and good problem solver
                  <br />
                  <b>Cloud Platforms:</b> SAP Cloud Platform, AWS, Azure
                  <br />
                  <b>Certifications:</b>
                    <br/>
                    - BSB40215 Certificate IV in Business (Navitas Professional)
                    <br/>
                    -Pearson Test of English (Overall Score of 90)
                  <br />
                </Text>
              </Box>
            </Flex>
            <Flex h="12px" />
            <Box pt="4px" px="16px" {...BlueCardBoxStyle} flex={1}>
              <Text variant="title" color="primaryOrange" w="100%" mb="4px">
                notable side projects
              </Text>
              <Text
                variant="bodySm"
                fontWeight="bold"
                color="white"
                opacity={0.8}
                mt="8px"
              >
                Web 3.0 Application - NFT Marketplace for Music Artists
              </Text>
              <Text variant="bodySm" color="primaryOrange" opacity={0.9}>
                JULY 2021 – DECEMBER 2021
              </Text>
              <Text variant="bodySm" color="white" opacity={0.8}>
                Final capstone project at RMIT University. An NFT marketplace built
                on ImmutableX which is a Layer 2 solution which aims to solve issues around high gas costs 
                and scalability on the Ethereum mainnet. Tech stack built with/written in React.js (CRA Framework),
                Serverless, AWS Lambda, AWS API Gateway, Amazon RDS (Sqlite), Python,
                TypeScript, Node. Smart contracts were forked off OpenZeppelin
                and written in Solidity.
              </Text>
              <Text
                variant="bodySm"
                fontWeight="bold"
                color="white"
                opacity={0.8}
                mt="8px"
              >
                Prey and Predator Game - Steering Behaviours, Pathfinding and AI
              </Text>
              <Text variant="bodySm" color="primaryOrange" opacity={0.9}>
                JULY 2020 – NOVEMBER 2020
              </Text>
              <Text variant="bodySm" color="white" opacity={0.8}>
                A team project where a Unity game was implemented with different
                entities with state machines in order to simulate a prey and
                predator scenario. Pathfinding, flocking and steering behaviours
                using the concept of Boids was implemented in the first
                iteration. Player controlled units were removed and the Unity
                Machine Learning Agents toolkit was used in the second iteration
                to teach the agents through reinforcement learning through
                parallel simulations.
              </Text>
              <Text
                variant="bodySm"
                fontWeight="bold"
                color="white"
                opacity={0.8}
                mt="8px"
              >
                Proof of Work Solver - Hashcash Mining Algorithm for Bitcoin
              </Text>
              <Text variant="bodySm" color="primaryOrange" opacity={0.9}>
                MAY 2017 – JUNE 2017
              </Text>
              <Text variant="bodySm" color="white" opacity={0.8}>
                Implemented a multi-threaded server-based proof of work solver
                written in C together with the functions in the Simple Stratum
                Text Protocol (SSTP). POSIX thread libraries used to handle
                multi-threading.
              </Text>
            </Box>
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
    allPrismicExperience {
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
