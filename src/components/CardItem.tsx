import { Flex, Image, Text, Box } from "@chakra-ui/react";
import type { Card } from "./data";
const CardItem = ({ text, icon, img, category }: Card) => {
  return (
    <Flex
      bgImage={`url(${img})`}
      flexDirection={"column"}
      bgPos={"top"}
      bgRepeat={"no-repeat"}
      w="264px"
      h="280px"
      border="1px solid #F2F2F2"
      borderRadius={"10px"}
      shadow={"md"}
      paddingTop={"48px"}
      paddingRight={"21px"}
      paddingBottom="22px"
      paddingLeft="33px"
      _hover={{ cursor: "pointer", scale: "1.05" }}
      transition={"all ease-in-out 90ms"}
    >
      <Image src={icon} alt="icon" w="33px" h="33px" objectFit={"contain"} />
      <Text
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        fontSize="18px"
        marginBottom="13px"
        marginTop={text ? "20px" : "50px"}
      >
        {text ? text : "The ultimate guide to Workplace Chat"}
      </Text>
      <Text
        fontFamily={"Inter"}
        fontSize="sm"
        color="#828282"
        marginBottom="13px"
      >
        Sample Topic
      </Text>
      <Box
        bgColor="#F2F2F2"
        paddingY="5px"
        paddingX="11px"
        borderRadius="19px"
        fontSize="12px"
        fontWeight={"medium"}
        fontFamily={"Inter"}
        w="fit"
      >
        {category ? category : "Secure Base"}
      </Box>
    </Flex>
  );
};

export default CardItem;
