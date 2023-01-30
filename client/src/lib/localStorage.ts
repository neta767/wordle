import {CharStatus, guess} from "./types";

type StoredGameState = {
    guesses: guess[];
    keysStatuses: { [key: string]: CharStatus };
};

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = () => {
    const state = localStorage.getItem("gameState");
    return state ? (JSON.parse(state) as StoredGameState) : null;
};
