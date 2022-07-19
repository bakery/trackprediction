import * as React from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Flex,
  HStack,
  ButtonGroup,
  Button,
  IconButton,
  Avatar,
  Divider,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Stack,
  Text,
  theme,
  useBreakpointValue,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { FaGithub, FaPaintBrush, FaTwitter } from "react-icons/fa";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "Logo";
import { Predictions } from "./pages/Predictions";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <BrowserRouter basename="trackprediction">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Predictions filter="latest" />} />
            <Route path="/pending" element={<Predictions filter="pending" />} />
            <Route path="/true" element={<Predictions filter="true" />} />
            <Route path="/false" element={<Predictions filter="false" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </ChakraProvider>
);

function Layout() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container>
          <Flex justify="space-between" py={{ base: "3", lg: "4" }}>
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  <Button>Pending</Button>
                  <Button aria-current="page">True</Button>
                  <Button>False</Button>
                  <ColorModeSwitcher justifySelf="flex-end" />
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? null : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
      </Box>
      <Container paddingTop="8">
        <Grid minH="100vh">
          <Outlet />
        </Grid>
        <Divider pt="8" borderColor="bg-accent-subtle" />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="on-accent-subtle">
            &copy; {new Date().getFullYear()} Prediction Tracker
          </Text>
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              target={"_blank"}
              href="https://excalidraw.com/#json=2tad7d02EJ_8iXLtcfkV7,JZZE5kCW3GI-IznW7U_Nig"
              aria-label="Master plan"
              icon={<FaPaintBrush fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              target={"_blank"}
              href="https://github.com/bakery/trackprediction"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              target={"_blank"}
              href="https://twitter.com/trackprediction"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
  // return (
  //   <Box fontSize="xl">
  //     <Grid minH="100vh" p={3}>
  //       <ColorModeSwitcher justifySelf="flex-end" />
  //       <VStack spacing={8}>
  //         <Outlet />
  //       </VStack>
  //     </Grid>
  //   </Box>
  // );
}
