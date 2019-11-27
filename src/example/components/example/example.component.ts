import { Component, OnInit } from "@angular/core";
import { ExampleService } from "../../services/example.service";

/**
 * Exemple de composant Angular
 */
@Component({
  /**
   * Le selector : ce qui permet d'appeler le composant dans la vue.
   */
  selector: "app-example",
  /**
   * Le fichier (ou le contenu) HTML associé à ce composant
   */
  templateUrl: "./example.component.html",
  /**
   * Le style associé à ce composant
   */
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent implements OnInit {
  /**
   * Constructeur du composant (de la classe).
   * Les services sont déclarés en argument.
   */
  constructor(private exampleService: ExampleService) {}

  /**
   * Méthode appelée à l'initialisation du composant (OnInit).
   */
  ngOnInit(): void {}
}
