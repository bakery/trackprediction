import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonProps,
  Divider,
  Flex,
  Button,
  Stack,
  Text,
  HStack,
  useColorModeValue,
  As,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaHourglassHalf, FaCheck, FaRegTimesCircle } from "react-icons/fa";
import { Logo } from "./Logo";

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  path: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { label, icon, path, ...buttonProps } = props;
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(path);
      }}
      variant="ghost"
      justifyContent="start"
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="4" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      maxW={{ base: "full", sm: "xs" }}
      py="4"
      px={{ base: "4", sm: "6" }}
    >
      <Stack width={"full"} justify="space-between" spacing="1">
        <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
          <Logo />
          <Divider />
          <Stack spacing="1">
            <NavButton path="pending" icon={FaHourglassHalf} label="Pending" />
            <NavButton
              path="true"
              icon={FaCheck}
              label="True"
              aria-current="page"
            />
            <NavButton path="false" icon={FaRegTimesCircle} label="False" />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
