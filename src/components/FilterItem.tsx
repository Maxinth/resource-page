import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useCheckboxes } from "./hooks/useCheckBox";
import checkBoxInit from "@/assets/check-box-init.svg";
import checkBoxChecked from "@/assets/check-box-checked.svg";

type CheckBoxItem = {
  id: string;
  label: string;
};

export default function CheckboxList({
  data,
  heading,
}: {
  data: CheckBoxItem[];
  heading: string;
}) {
  const { toggle, isChecked } = useCheckboxes(data);

  return (
    <Flex
      direction="column"
      gap={4}
      fontFamily={"Inter"}
      marginBottom="33px"
      width="100%"
    >
      <Text fontWeight={"bold"} marginBottom={"8px"}>
        {heading}
      </Text>

      <Box>
        {data?.map((item) => (
          <Flex
            key={item.id}
            align="center"
            gap={3}
            cursor="pointer"
            onClick={() => toggle(item.id)}
            marginBottom="2px"
          >
            <Image
              src={isChecked(item.id) ? checkBoxChecked : checkBoxInit}
              alt="check icon"
              objectFit={"contain"}
              w="16.5px"
              h="16.5px"
            />
            <Text
              fontFamily={"Inter"}
              _hover={{ color: "#314EF9" }}
              transition={"all .2s ease-in-out"}
            >
              {item.label}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
