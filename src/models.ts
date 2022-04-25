export type Routes = {
  path: string;
  name: string;
  component: React.FC;
}[];

export type GetPlayers = {
  elements: Players;
  teams: Team[];
  element_types: ElementType[];
};

export type Player = {
  code: number;
  first_name: string;
  form: string;
  id: number;
  now_cost: number;
  photo: string;
  points_per_game: string;
  second_name: string;
  selected_by_percent: string;
  squad_number: number;
  team: number | Team["name"];
  team_code: number;
  total_points: number;
  web_name: string;
  minutes: number;
  value_season: string;
  element_type: number;
  position?: ElementType;
};

export type Players = Player[];

export type Team = {
  code: number;
  draw: number;
  form: null;
  id: number;
  loss: number;
  name: string;
  played: number;
  points: number;
  position: number;
  short_name: string;
  unavailable: boolean;
  win: number;
  pulse_id: number;
};

type ElementType = {
  element_count: number;
  id: number;
  plural_name: string;
  plural_name_short: string;
  singular_name: string;
  singular_name_short: string;
  squad_max_play: number;
  squad_min_play: number;
  squad_select: number;
  sub_positions_locked: [];
  ui_shirt_specific: boolean;
};
