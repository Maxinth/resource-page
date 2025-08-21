import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { keyFoundationalPrinciples, docType, categories } from "./data";
import FilterItem from "./FilterItem";
import filterIcon from "@/assets/filter-icon.svg";
import { useState } from "react";

const FiltersSection = () => {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <>
      <Box
        border="1px solid #F2F2F2"
        bgColor="#F1F1F1"
        display={{ base: "flex", md: "none" }}
        padding={"22px"}
        justifyContent={"center"}
        alignItems={"center"}
        w="100%"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          onClick={() => setShowFilter(!showFilter)}
        >
          <Image src={filterIcon} alt="filterIcon" />
          <Text fontFamily={"Inter"} fontWeight={"medium"} color="#3F3F3F">
            {showFilter ? "Hide" : "Show"} Filters
          </Text>
        </Flex>
      </Box>
      <Flex
        flexDirection={{ base: "column" }}
        fontFamily={"Inter"}
        paddingX={{ base: "2rem", md: "0px" }}
      >
        <Text
          fontWeight={"bold"}
          paddingBottom="22px"
          marginBottom="1rem"
          borderBottom="1px solid #E0E0E0"
          display={{ base: "none", md: "block" }}
        >
          Filters
        </Text>
        {showFilter ? (
          <Box
            pos="relative"
            marginTop={{ base: "1rem", md: "0rem" }}
            paddingX="2rem"
          >
            <FilterItem
              data={keyFoundationalPrinciples}
              heading="Key Foundational Principles"
            />
            <FilterItem data={docType} heading="Document type" />
            <FilterItem data={categories} heading="Categories" />
          </Box>
        ) : null}
      </Flex>
    </>
  );
};

export default FiltersSection;
