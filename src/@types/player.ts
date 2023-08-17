export type PlayerType = {
  id: string | null;
  name: string;
};

export type PlayerListType = {
  [id: string]: PlayerType;
};
