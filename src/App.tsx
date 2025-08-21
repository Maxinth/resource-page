import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import ResourcesSection from "./components/ResourcesSection";
import CardsSection from "./components/CardsSection";
function App() {
  return (
    <Box as="main" width={"100%"}>
      <Navbar />
      <ResourcesSection />
      <Flex justifyContent={"center"} alignItems={"center"}>
        <CardsSection />
      </Flex>
    </Box>
  );
}

export default App;
