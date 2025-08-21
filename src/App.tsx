import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box as="main" width={"100%"}>
      <Navbar />
    </Box>
  );
}

export default App;
