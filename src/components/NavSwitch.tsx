import { Switch } from "@chakra-ui/react";

const NavSwitch = () => {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control bgColor={"#314EF9"} />
      <Switch.Label
        fontFamily={"Poppins"}
        fontSize="sm"
        fontWeight={"semibold"}
        display={{ base: "none", lg: "block" }}
      >
        Switch to Employee
      </Switch.Label>
    </Switch.Root>
  );
};

export default NavSwitch;
