'use client';

import React, { createContext, useContext } from 'react';
import { characterStore } from './characterStore';
import { locationStore } from './locationStore';
import { episodeStore } from './episodeStore';

const StoreContext = createContext({
    characterStore,
    locationStore,
    episodeStore
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return <StoreContext.Provider value={{ characterStore, locationStore, episodeStore }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
