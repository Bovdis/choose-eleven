export type Routes = {
  path: string;
  name: string;
  component: React.FC;
}[];

export type GetPlayers = {
  elements: Player[];
  teams: Team[];
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
  team: number | Team['name'];
  team_code: number;
  total_points: number;
  web_name: string;
  minutes: number;
};

export type Players = Player[];

export type Team = {
  code: number,
  draw: number,
  form: null,
  id: number,
  loss: number,
  name: string,
  played: number,
  points: number,
  position: number,
  short_name: string,
  unavailable: boolean,
  win: number,
  pulse_id: number
}