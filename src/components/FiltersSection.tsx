import { Flex, Text } from "@chakra-ui/react";
import { keyFoundationalPrinciples, docType, categories } from "./data";
import FilterItem from "./FilterItem";
const FiltersSection = () => {
  return (
    <Flex flexDirection={"column"} fontFamily={"Inter"}>
      <Text
        fontWeight={"bold"}
        paddingBottom="22px"
        marginBottom="1rem"
        borderBottom="1px solid #E0E0E0"
      >
        Filters
      </Text>
      <FilterItem
        data={keyFoundationalPrinciples}
        heading="Key Foundational Principles"
      />
      <FilterItem data={docType} heading="Document type" />
      <FilterItem data={categories} heading="Categories" />
    </Flex>
  );
};

export default FiltersSection;
