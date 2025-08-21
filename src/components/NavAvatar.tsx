import { Avatar, HStack, Image, Flex, Text, Box } from "@chakra-ui/react";

import dropArrow from "@/assets/drop-icon.svg";
import hamburgerIcon from "@/assets/hamburger.svg";

interface Props {
  toggleDrawer: () => void;
}
const NavAvatar = ({ toggleDrawer }: Props) => {
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

      <Box display={{ base: "none", lg: "flex" }}>
        <Text marginLeft={"4.5px"} marginRight={"7px"} fontWeight={"semibold"}>
          Jonathan
        </Text>
        <Image
          src={dropArrow}
          alt="drop-arrow"
          cursor={"pointer"}
          objectFit={"contain"}
        />
      </Box>
      <Image
        onClick={toggleDrawer}
        src={hamburgerIcon}
        alt="hamburger"
        cursor={"pointer"}
        marginLeft={6}
        display={{ base: "block", lg: "none" }}
      />
    </Flex>
  );
};

export default NavAvatar;
