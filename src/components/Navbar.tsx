import { Flex, Image, Link } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { navLinks } from "./data";
import NavSwitch from "./NavSwitch";
import NavAvatar from "./NavAvatar";
import divider from "@/assets/divider.svg";
const Navbar = () => {
  return (
    <Flex
      as="nav"
      paddingTop="16px"
      // paddingX="70px"
      paddingX={{ base: "18px", md: "70px" }}
      border="1px solid #ECECEC"
      shadow={"sm"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Flex gap="20px">
        <Image
          src={Logo}
          alt="logo"
          paddingBottom="10px"
          w="100%"
          objectFit={"contain"}
        />
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          marginLeft="40px"
          display={{ base: "none", lg: "flex" }}
        >
          {navLinks?.map((item, index) => (
            <Link
              key={item}
              _hover={{ borderBottomColor: "#bac2f1" }}
              paddingY="16px"
              paddingTop="8px"
              paddingX="12px"
              textDecoration={"none"}
              borderBottom="4px solid white"
              fontFamily={"Poppins"}
              fontSize={"sm"}
              fontWeight={"bold"}
              color={index === 1 ? "#314EF9" : "black"}
              borderBottomColor={index === 1 ? "#314EF9" : "white"}
            >
              {item}
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex pos={"relative"} top="-6px">
        <NavSwitch />
        <Image
          src={divider}
          alt="divider"
          marginX={{ base: "10px", lg: "28px" }}
          scale={0.5}
        />
        <NavAvatar />
      </Flex>
    </Flex>
  );
};

export default Navbar;
