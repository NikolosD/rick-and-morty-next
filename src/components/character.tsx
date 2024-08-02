import s from "./character.module.scss";
import Alien from "../../public/Alien.svg";
import Pulse from "../../public/Pulse.svg";
import Planet from "../../public/Planet.svg";
import { Card, CardBody, Heading, Stack, Image, Text } from "@chakra-ui/react";
import SvgIcon from "@/src/components/SvgIcon";

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
    <Card maxW="sm">
      <CardBody className={s.container}>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <div className={s.nameContainer}>
            <SvgIcon icon={Alien} size={16} width={16} />
            <Text>{status}</Text>
          </div>
          <div className={s.nameContainer}>
            <SvgIcon icon={Pulse} size={16} width={16} />
            <Text>{species}</Text>
          </div>
          <div className={s.nameContainer}>
            <SvgIcon icon={Planet} size={16} width={16} />
            <Text>{origin.name}</Text>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
};
