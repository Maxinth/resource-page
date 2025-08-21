import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import ResourcesSection from "./components/ResourcesSection";
import CardsSection from "./components/CardsSection";
import FiltersSection from "./components/FiltersSection";
function App() {
  return (
    <Box as="main" width={"100%"} maxW={"1440px"} mx="auto">
      <Navbar />
      <ResourcesSection />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        paddingY="53px"
        gap={14}
      >
        <FiltersSection />
        <CardsSection />
      </Flex>
    </Box>
  );
}

export default App;
