'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '@/src/stores/storeContext';
import { Box, Heading, Button, Select } from '@chakra-ui/react';
import Link from 'next/link';

const CharacterList = observer(() => {
    const { characterStore } = useStore();

    useEffect(() => {
        characterStore.fetchCharacters();
    }, [characterStore]);

    return (
        <Box>
            <Heading>Characters</Heading>
            <Select onChange={(e) => characterStore.setFilters({ ...characterStore.filters, status: e.target.value })}>
                <option value="">Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </Select>
            {characterStore.characters.map((char) => (
                <Box key={char.id} p={4} borderWidth={1}>
                    <Heading size="md">{char.name}</Heading>
                    <Link href={`/character/${char.id}`}>View Details</Link>
                </Box>
            ))}
            {/* Добавьте пагинацию */}
        </Box>
    );
});

export default CharacterList;
