import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { treatExample } from './treat-example.treaty';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, treatExample],
  template: '<treat-example [label]="'input label'"></treat-example>',
})
export class AppComponent {}
