/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NextChakraLink(props: any) {
  return (
    <NextLink href={props.href} passHref>
      <Link
        {...props}
        _active={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
        _hover={{ textDecoration: "none" }}
      >
        {props.children}
      </Link>
    </NextLink>
  );
}
