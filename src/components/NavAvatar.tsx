import { Avatar, HStack, Image, Flex, Text } from "@chakra-ui/react";
import dropArrow from "@/assets/drop-arrow.svg";
const NavAvatar = () => {
  return (
    <Flex alignItems={"center"} fontWeight={"bold"} fontFamily={"Poppins"}>
      <HStack gap="3">
        <Avatar.Root
          key={"solid"}
          variant={"solid"}
          bgColor="#17E4A1"
          color="black"
          size={"sm"}
        >
          <Avatar.Fallback
            name="J Adeleye"
            fontWeight={"bolder"}
            fontFamily={"Poppins"}
          />
        </Avatar.Root>
      </HStack>
      <Text marginLeft={"4.5px"} marginRight={"7px"} fontWeight={"semibold"}>
        Jonathan
      </Text>
      <Image src={dropArrow} alt="drop-arrow" cursor={"pointer"} />
    </Flex>
  );
};

export default NavAvatar;
