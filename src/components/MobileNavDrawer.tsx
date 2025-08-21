import { CloseButton, Drawer, Portal, Flex, Link, Box } from "@chakra-ui/react";
import { navLinks } from "./data";
interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
const MobileNavDrawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title></Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  marginTop="20px"
                >
                  {navLinks?.map((item) => (
                    <Link
                      key={item}
                      _hover={{ bgColor: "#d3d7ee", color: "#314EF9" }}
                      paddingY="16px"
                      paddingX="12px"
                      textDecoration={"none"}
                      borderBottom="4px solid white"
                      fontFamily={"Poppins"}
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      color={"black"}
                      width={"100%"}
                    >
                      {item}
                    </Link>
                  ))}
                </Flex>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="xl" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default MobileNavDrawer;
