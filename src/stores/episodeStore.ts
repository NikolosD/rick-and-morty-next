import { makeAutoObservable } from "mobx";
import axios from "axios";

class EpisodeStore {
    episodes = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchEpisodes(page = 1) {
        this.loading = true;
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
        this.episodes = response.data.results;
        this.loading = false;
    }
}

export const episodeStore = new EpisodeStore();
