import {Team} from './team';
export class Match {
	id: number;
  group_id: number;
	game_field_location:string;
	date: Date;
	judges:string;
	observations:string;
	winner_team:string;
	loser_team:string;
	teams: Team[];

}
