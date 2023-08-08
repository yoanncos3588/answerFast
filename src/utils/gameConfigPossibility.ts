const totalPlayers = ["1", "2", "3", "4", "5"];
const totalQuestions = ["5", "10", "15", "20"];
const difficulty = ["facile", "moyen", "difficile"];

const themes = [
  {
    name: "Tv/cinéma",
    slug: "tv_cinema",
  },
  {
    name: "Art/litterature",
    slug: "art_litterature",
  },
  {
    name: "Musique",
    slug: "musique",
  },
  {
    name: "Actu/politique",
    slug: "actu_politique",
  },
  {
    name: "Culture génerale",
    slug: "culture_generale",
  },
  {
    name: "Sport",
    slug: "sport",
  },
  {
    name: "Jeux videos",
    slug: "jeux_videos",
  },
];

const gameConfigPossibility = {
  totalPlayers,
  totalQuestions,
  difficulty,
  themes,
};

export default gameConfigPossibility;
