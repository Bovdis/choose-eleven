export type Routes = {
  path: string;
  name: string;
  component: React.FC;
}[];

export type GetPlayers = {
  elements: Player[];
}

export type Player = {
  code: number;
  first_name: string;
  form: string;
  id:3;
  now_cost: number;
  photo: string
  points_per_game: string;
  second_name: string;
  selected_by_percent: string
  squad_number: number;
  team: number;
  team_code: number;
  total_points: number;
  web_name: string;
  minutes: number;
};

export type Players = Player[];