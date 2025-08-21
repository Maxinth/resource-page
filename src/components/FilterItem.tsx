import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useCheckboxes } from "./hooks/useCheckBox";
import checkBoxInit from "@/assets/check-box-init.svg";
import checkBoxChecked from "@/assets/check-box-checked.svg";
const items = [
  { id: "secureBase", label: "Secure Base" },
  { id: "senseAppreciation", label: "Sense of Appreciation" },
  { id: "learningOrg", label: "Learning Organisation" },
  { id: "missionVision", label: "Mission and Vision" },
  { id: "wellbeing", label: "Wellbeing" },
];

export default function CheckboxList() {
  const { toggle, isChecked } = useCheckboxes(items);

  return (
    <Flex direction="column" gap={4} fontFamily={"Inter"}>
      <Text fontWeight={"bold"} marginBottom={"16px"}>
        Key Foundational Principles{" "}
      </Text>

      <Box>
        {items.map((item) => (
          <Flex
            key={item.id}
            align="center"
            gap={3}
            cursor="pointer"
            onClick={() => toggle(item.id)}
          >
            <Image
              src={isChecked(item.id) ? checkBoxChecked : checkBoxInit}
              alt="check icon"
              objectFit={"contain"}
              w="16.5px"
              h="16.5px"
            />
            <Text fontFamily={"Inter"}>{item.label}</Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
