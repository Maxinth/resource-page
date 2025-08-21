import { Flex, Heading, Text, Input, Image } from "@chakra-ui/react";
import searchIcon from "@/assets/search-icon.svg";
const ResourcesSection = () => {
  return (
    <Flex
      as="section"
      bgColor="#FAFAFA"
      paddingX={{ base: "38px", lg: "95px" }}
      paddingY={{ base: "68px", lg: "66px" }}
      paddingTop={{ base: "68px", lg: "98px" }}
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Heading
        as="h1"
        fontFamily={"Poppins"}
        fontSize={{ base: "40px", lg: "52px" }}
        lineHeight={"62px"}
        fontWeight={"bold"}
        marginBottom="23px"
      >
        Resources
      </Heading>
      <Text
        textAlign={"center"}
        fontFamily={"Inter"}
        fontSize={{ base: "18px", lg: "1rem" }}
      >
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo <br /> nulla facilisi nullam vehicula ipsum a arcu cursus vitae
        congue
      </Text>
      <Flex
        gap="15px"
        borderRadius={"10px"}
        marginTop="51px"
        paddingY={"4px"}
        paddingX={{ base: "16px", lg: "30px" }}
        border="1px solid #A1A1A1"
        width="100%"
        maxW={"853px"}
        mx={"auto"}
        fontFamily="Inter"
        color="#4F4F4F"
      >
        <Image src={searchIcon} alt="search-icon" objectFit={"contain"} />
        <Input
          placeholder="Search by title or keyword"
          _placeholder={{ fontFamily: "Inter", color: "#4F4F4F" }}
          outline={"none"}
          border="none"
          width="100%"
        />
      </Flex>
    </Flex>
  );
};

export default ResourcesSection;
