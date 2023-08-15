import { GameSettingsType, ThemeType } from "../@types/gameSettings";

const totalPlayers = ["1", "2", "3", "4", "5"];
const totalQuestions = ["5", "10", "15", "20"];
const difficulty = ["facile", "moyen", "difficile"];

const host = "MonSuperPseudo";

const themes: Array<ThemeType> = [
  {
    id: 0,
    name: "Tv/cinéma",
    slug: "tv_cinema",
    activ: true,
  },
  {
    id: 1,
    name: "Art/litterature",
    slug: "art_litterature",
    activ: true,
  },
  {
    id: 2,
    name: "Musique",
    slug: "musique",
    activ: true,
  },
  {
    id: 3,
    name: "Actu/politique",
    slug: "actu_politique",
    activ: true,
  },
  {
    id: 4,
    name: "Culture génerale",
    slug: "culture_generale",
    activ: true,
  },
  {
    id: 5,
    name: "Sport",
    slug: "sport",
    activ: true,
  },
  {
    id: 6,
    name: "Jeux videos",
    slug: "jeux_videos",
    activ: true,
  },
];

const gameConfigPossibility = {
  totalPlayers,
  totalQuestions,
  difficulty,
  themes,
  host,
};

export const defaultConfig: GameSettingsType = {
  totalPlayers: totalPlayers[0],
  totalQuestions: totalQuestions[0],
  difficulty: difficulty[0],
  themes,
  host,
};

export default gameConfigPossibility;
