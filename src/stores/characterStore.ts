import { makeAutoObservable } from 'mobx';
import { fetchCharacters, fetchCharacterById } from './../api';
import {Character} from "@/app/character/[id]";

class CharacterStore {
    characters: Character[] = [];
    character: Character | null = null;
    loading = false;
    filters = {
        status: '',
        species: '',
        gender: '',
    };

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCharacters(page = 1) {
        this.loading = true;
        try {
            const characters = await fetchCharacters(page);
            this.characters = characters;
        } catch (error) {
            console.error('Failed to fetch characters:', error);
        } finally {
            this.loading = false;
        }
    }

    setFilters(filters: { status: string; species: string; gender: string }) {
        this.filters = filters;
    }

    async fetchCharacterById(id: number) {
        this.loading = true;
        try {
            this.character = await fetchCharacterById(id);
        } catch (error) {
            console.error('Failed to fetch character:', error);
            this.character = null;
        } finally {
            this.loading = false;
        }
    }
}

export const characterStore = new CharacterStore();
