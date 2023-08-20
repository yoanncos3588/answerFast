import { createReducer } from "@reduxjs/toolkit";
import { PlayerType } from "../@types/player";
import { setPlayerId, setPlayerName } from "./actions/playerActions";

const initialState: PlayerType = {
  id: "",
  name: "MonSuperPseudo",
};

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
