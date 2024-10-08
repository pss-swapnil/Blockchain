import type { OnHomePageHandler } from "@metamask/snaps-sdk";
import { Box, Heading, Text, Divider } from "@metamask/snaps-sdk/jsx";

export const onHomePage: OnHomePageHandler = async () => {
  return {
    content: (
      <Box>
        <Heading>Account Balance</Heading>
        <Text>₹ 0</Text>
        <Divider/>
        <Heading>Holdings</Heading>
        <Text>Name: Swapnil</Text>
        <Text>Term: 12 months</Text>
        <Text>Vest: 50k</Text>
        <Text>Rate: 0.5</Text>
      </Box>
    ), 
  };
};