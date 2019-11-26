import { Team } from '../models/team';
import { TeamDomain } from '../models/team-domain.enum';

export const TEAM_LIST : Team[] = [
 {id: 1, name: 'Les Quiproquos', domain: TeamDomain.Offre},
 {id: 2, name: 'Tricoteuses', domain: TeamDomain.Offre},
 {id: 3, name: 'Avengers', domain: TeamDomain.Offre},
 {id: 4, name: "Gun's", domain: TeamDomain.Metier},
 {id: 5, name: "Bulldozer", domain: TeamDomain.Metier},
 {id: 6, name: "Titans", domain: TeamDomain.Metier}
]