import s from "./character.module.scss";
import Alien from "../../../public/Alien.svg";
import Pulse from "../../../public/Pulse.svg";
import Planet from "../../../public/Planet.svg";
import Heart from "../../../public/Heart.svg";
import HeartOutline from "../../../public/HeartOutline.svg";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import SvgIcon from "@/src/components/SvgIcon";
import { ButtonInfo } from "@/src/components/button/buttonInfo";

type Character = {
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
  };
};

export const Character = ({
  name,
  status,
  species,
  origin,
  image,
}: Character) => {
  return (
    <Card width={300} height={400}>
      <CardBody className={s.body} borderRadius={"lg"}>
        <Image
          src={image}
          alt={name}
          height={200}
          width={"100%"}
          borderRadius={16}
        />
        <Heading size="md" mt={"16px"} mb={"16px"} className={s.headerName}>
          {name}
        </Heading>
        <div className={s.heartContainer}>
          <SvgIcon
            icon={Heart}
            className={`${s.heartIcon} ${s.heartIconVisible}`}
          />
          <SvgIcon
            icon={HeartOutline}
            className={`${s.heartIcon} ${s.heartIconHidden}`}
          />
        </div>
        <div className={s.nameContainer}>
          <SvgIcon icon={Alien} size={16} width={16} />
          <Text className={s.cardInfo}>{status}</Text>
        </div>
        <div className={s.nameContainer}>
          <SvgIcon icon={Pulse} size={16} width={16} />
          <Text className={s.cardInfo}>{species}</Text>
        </div>
        <div className={s.nameContainer}>
          <SvgIcon icon={Planet} size={16} width={16} viewBox={"0 0 24 24"} />
          <Text className={s.cardInfo}>{origin.name}</Text>
        </div>
        <div className={s.containerFooter}>
          <ButtonInfo />
        </div>
      </CardBody>
    </Card>
  );
};
