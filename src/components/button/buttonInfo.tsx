import { Button, Text } from "@chakra-ui/react";
import s from "./buttonInfo.module.scss";
import SvgIcon from "@/src/components/SvgIcon";
import Vector from "@/public/Vector.svg";

export const ButtonInfo = () => {
  return (
    <Button
      className={s.buttonInfo}
      bg={"dark.100"}
      _hover={{ bg: "cyan.300" }}
      borderRadius={32}
      size={"sm"}
    >
      <SvgIcon
        icon={Vector}
        size={24}
        width={24}
        viewBox={"0 0 24 24"}
        style={{}}
      />
      <Text color={"white"}>To Learn More</Text>
    </Button>
  );
};
