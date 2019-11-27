import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './components/example/example.component';
import { ExampleService } from './services/example.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleComponent],
  providers: [ExampleService]
})
export class ExampleModule { }