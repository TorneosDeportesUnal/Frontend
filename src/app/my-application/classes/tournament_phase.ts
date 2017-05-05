
import {Group} from './group';
export class TournamentPhase {
  id: number;
  tournament_id: number;
  phase_type: String;
  phase_number: number;
  active: boolean;
  groups_attributes: Group[];
}
