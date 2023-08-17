import { createAction, createReducer } from "@reduxjs/toolkit";
import { PlayerType } from "../@types/player";

const initialState: PlayerType = {
  id: null,
  name: "MonSuperPseudo",
};

export const setPlayer = createAction<PlayerType>("player/set");
export const setPlayerId = createAction<string | null>("player/setId");
export const setPlayerName = createAction<string>("player/setName");

const playerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPlayerId, (state, action) => {
      state.id = action.payload;
    })
    .addCase(setPlayerName, (state, action) => {
      state.name = action.payload;
    });
});

export default playerReducer;
