import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import ResourcesSection from "./components/ResourcesSection";
function App() {
  return (
    <Box as="main" width={"100%"}>
      <Navbar />
      <ResourcesSection />
    </Box>
  );
}

export default App;
