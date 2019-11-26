import { TeamDomain } from "./team-domain.enum";

export class Team {
  /**
   * ID de l'équipe
   */
  id: number;
  /**
   * Nom de l'équipe
   */
  name: string;
  /**
   * Petite description de l'équipe
   */
  description: string;
  /**
   * Domaine (offre / métier)
   */
  domain: TeamDomain;

  constructor(id: number, name: string, description: string, domain: TeamDomain) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.domain = domain;
  }

}
