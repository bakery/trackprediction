import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Predictions } from "./pages/Predictions";

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
      <BrowserRouter>
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
  return (
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Outlet />
        </VStack>
      </Grid>
    </Box>
  );
}
