import { Injectable } from '@angular/core';

/**
 * Exemple de service Angular
 */
@Injectable()
export class ExampleService {

/**
 * Constructeur du service
 */
  constructor() { }

/**
 * Exemple de méthode
 */
  public doSomething(): void {
    console.log("Do something");
  }

}