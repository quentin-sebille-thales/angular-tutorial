import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponent } from "./components/example/example.component";
import { ExampleService } from "./services/example.service";

/**
 * Exemple de module Angular
 */
@NgModule({
  /**
   * Modules importés par ce module
   */
  imports: [CommonModule],
  /**
   * Composants déclarés dans ce module.
   */
  declarations: [ExampleComponent],
  /**
   * Composants / Modules exportés par ce module.
   */
  exports: [ExampleComponent],
  /**
   * Services déclarés dans ce module.
   */
  providers: [ExampleService]
})
export class ExampleModule {}
