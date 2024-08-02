"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "@/src/stores/storeContext";
import { Box, Heading, Button, Select } from "@chakra-ui/react";
import Link from "next/link";
import { Character } from "@/src/components/character";

const CharacterList = observer(() => {
  const { characterStore } = useStore();

  useEffect(() => {
    characterStore.fetchCharacters();
  }, [characterStore]);

  return (
    <Box>
      <Heading>Characters</Heading>
      <Select
        onChange={(e) =>
          characterStore.setFilters({
            ...characterStore.filters,
            status: e.currentTarget.value,
          })
        }
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      {characterStore.filteredCharacters.map((char) => (
        <Box key={char.id} p={4} borderWidth={1}>
          <Character
            name={char.name}
            status={char.status}
            species={char.species}
            origin={char.origin}
            image={char.image}
          />
          <Link href={`/character/${char.id}`}>View Details</Link>
        </Box>
      ))}
    </Box>
  );
});

export default CharacterList;
