import {Team} from './team';
export class Group{
	id: number;
  //tournament_phase_id: number;
	name:string;
	winners_number:number;
	active: boolean;
	team_ids: number[];
	teams: Team[];

}
