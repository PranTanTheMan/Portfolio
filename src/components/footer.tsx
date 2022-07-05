import { Box } from "@chakra-ui/react";

export default function footer() {
  return (
    <Box
      as="footer"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
      height="200px"
      display="grid"
      justifyItems="flex-start"
    ></Box>
  );
}
