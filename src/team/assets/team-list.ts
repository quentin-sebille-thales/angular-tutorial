import { Team } from "../models/team";
import { TeamDomain } from "../models/team-domain.enum";

export const TEAM_LIST: Team[] = [
  new Team(
    1,
    "Les Quiproquos",
    "Une équipe de qualité, au service de la meilleure offre !",
    TeamDomain.Offre
  ),
  new Team(
    2,
    "Tricoteuses",
    "L'équipe préférée de Nicolas Copernic",
    TeamDomain.Offre
  ),
  new Team(
    3,
    "Avengers",
    "La seule équipe Offre de Nanterre",
    TeamDomain.Offre
  ),
  new Team(
    4,
    "Gun's",
    "Les métiers toujours prêts à dégainer leurs meilleures chorés",
    TeamDomain.Metier
  ),
  new Team(
    5,
    "Bulldozers",
    "La seule équipe Métier de Lyon",
    TeamDomain.Metier
  ),
  new Team(6, "Titans", "J'ai pas de jeu de mot, désolé", TeamDomain.Metier)
];
