import {
  Flex,
  Heading,
  Text,
  Link,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function FourOhFour(): JSX.Element {
  const bg: string = "bg";
  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        bg={bg}
      >
        <HStack>
          <Heading fontSize={{ base: "5xl", md: "8xl" }}>4</Heading>
          <Image
            src="Pranith.jpeg"
            alt="pranith"
            boxSize={"70px"}
            borderRadius="full"
            outline="4px solid rgba(255,255,255,0.3)"
            transform="translateY(10px)"
          />
          <Heading fontSize={{ base: "5xl", md: "8xl" }}>4</Heading>
        </HStack>
        <Text fontSize={{ base: "xl", md: "3xl" }} mt={8} textAlign="center">
          Oops! Looks like you got lost.
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={4} textAlign="center">
          The page you are looking for doesn't exist or has been moved.
        </Text>
        <Link
          href="/"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            variant="solid"
            colorScheme="brand"
            size="lg"
            mt={8}
            borderRadius="full"
            _hover={{ bg: "bg" }}
          >
            Go back to homepage
          </Button>
        </Link>
      </Flex>
    </>
  );
}
