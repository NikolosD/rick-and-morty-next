import { makeAutoObservable } from 'mobx';
import { fetchCharacters, fetchCharacterById } from './../api';
import {Character} from "@/app/character/[id]/page";

class CharacterStore {
    characters: Character[] = [];
    character: Character | null = null;
    filteredCharacters: Character[] = [];
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
            this.applyFilters()
        } catch (error) {
            console.error('Failed to fetch characters:', error);
        } finally {
            this.loading = false;
        }
    }

    setFilters(filters: { status: string; species: string; gender: string }) {
        this.filters = filters;
        this.applyFilters()

    }

    applyFilters() {
        this.filteredCharacters = this.characters.filter((character:Character) => {
            const matchesStatus = this.filters.status ? character.status.toLowerCase() === this.filters.status.toLowerCase() : true;
            const matchesSpecies = this.filters.species ? character.species.toLowerCase() === this.filters.species.toLowerCase() : true;
            const matchesGender = this.filters.gender ? character.gender.toLowerCase() === this.filters.gender.toLowerCase() : true;
            return matchesStatus && matchesSpecies && matchesGender;
        });
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
