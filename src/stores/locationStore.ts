import { makeAutoObservable } from "mobx";
import axios from "axios";

class LocationStore {
    locations = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchLocations(page = 1) {
        this.loading = true;
        const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
        this.locations = response.data.results;
        this.loading = false;
    }
}

export const locationStore = new LocationStore();
