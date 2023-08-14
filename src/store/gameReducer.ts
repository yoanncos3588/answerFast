import { createAction, createReducer } from "@reduxjs/toolkit";
import { GameReducerType } from "../@types/reducers";
import { defaultConfig } from "../utils/gameConfigPossibility";

const initialState = {
  room: {
    id: null,
    isLoading: false,
    round: null,
    currentQuestion: null,
  },
  gameSettings: defaultConfig,
} as GameReducerType;

export const killGame = createAction<boolean>("game/reset");
export const setRoomId = createAction<string | null>("game/addRoomId");
export const setIsLoading = createAction<boolean>("game/setIsLoading");
export const setRound = createAction<number>("game/setRound");
export const setCurrentQuestion = createAction<string>(
  "game/setCurrentQuestion"
);
export const setGameSettings = createAction<{ key: string; value: string }>(
  "game/setGameSettings"
);

export const toggleTheme = createAction<number>("game/toggleTheme");

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(killGame, (state) => {
      state.room = initialState.room;
    })
    .addCase(setRoomId, (state, action) => {
      state.room.id = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.room.isLoading = action.payload;
    })
    .addCase(setRound, (state, action) => {
      state.room.round = action.payload;
    })
    .addCase(setCurrentQuestion, (state, action) => {
      state.room.currentQuestion = action.payload;
    })
    .addCase(setGameSettings, (state, action) => {
      state.gameSettings = {
        ...state.gameSettings,
        [action.payload.key]: action.payload.value,
      };
    })
    .addCase(toggleTheme, (state, action) => {
      state.gameSettings.themes[action.payload].activ =
        !state.gameSettings.themes[action.payload].activ;
    });
});

export default gameReducer;
