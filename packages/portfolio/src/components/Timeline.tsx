import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import * as React from "react";

interface ListItemType {
  heading?: PrismicRichText;
  subheading?: PrismicRichText;
  start?: PrismicRichText;
  end?: PrismicRichText;
}

interface TimelineIProps {
  items?: ListItemType[];
}

export const Timeline: React.FC<TimelineIProps> = (props) => {
  const { items } = props;
  return (
    <UnorderedList position="relative" h="100%">
      <Box
        position="absolute"
        ml="-5"
        w="10px"
        h="100%"
        borderRight="1.5px solid white"
      />
      <Flex flexDirection="column" h="90%" justifyContent="space-between">
        {items?.map((val: ListItemType, index: number) => (
          <ListItem key={index} opacity={0.9} color="white">
            <Text variant="bodySm">{val.heading?.text}</Text>
            <Text variant="bodySm" color="primaryOrange">
              {val.subheading?.text}
            </Text>
            <Text variant="bodySm" opacity={0.6}>
              {val.start?.text} - {val.end?.text}
            </Text>
          </ListItem>
        ))}
      </Flex>
    </UnorderedList>
  );
};

export default Timeline;
