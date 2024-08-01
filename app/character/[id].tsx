'use client';

import { observer } from 'mobx-react-lite';
import { useStore } from '@/src/stores/storeContext';
import { useEffect } from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterOrigin;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type CharacterOrigin = {
    name: string;
    url: string;
};

export type CharacterLocation = {
    name: string;
    url: string;
};

interface CharacterDetailProps {
    id: number;
}

const CharacterDetail = observer(({ id }: { id: number }) => {
    const { characterStore } = useStore();

    useEffect(() => {
        characterStore.fetchCharacterById(id);
    }, [characterStore, id]);

    const character = characterStore.characters.find((c) => c.id === id);

    if (!character) {
        return <Text>Loading...</Text>;
    }

    return (
        <Box>
            <Heading>{character.name}</Heading>
            <Text>Status: {character.status}</Text>
            <Text>Species: {character.species}</Text>
            <Text>Gender: {character.gender}</Text>
            <Image src={character.image} alt={character.name} />
            {/* Другие детали */}
        </Box>
    );
});

export default CharacterDetail;
