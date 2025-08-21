import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import ResourcesSection from "./components/ResourcesSection";
import CardsSection from "./components/CardsSection";
import FiltersSection from "./components/FiltersSection";

function App() {
  return (
    <Box
      as="main"
      width={"100%"}
      maxW={"1440px"}
      mx="auto"
      overflowX={"hidden"}
    >
      <Navbar />
      <ResourcesSection />
      <Flex
        justifyContent={"center"}
        alignItems={{ base: "flex-start", lg: "center" }}
        paddingY="53px"
        paddingTop={{ base: "0px", sm: "40px", lg: "53px" }}
        gap={{ base: 2, xl: 14 }}
        flexDirection={{ base: "column", md: "row" }}
        paddingX={{ xl: "2rem" }}
      >
        <FiltersSection />
        <CardsSection />
      </Flex>
    </Box>
  );
}

export default App;
