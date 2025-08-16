import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my-app-title',
  imports: [],
  templateUrl: './my-app-title.component.html',
  styleUrl: './my-app-title.component.scss',
})
export class MyAppTitleComponent {
  readonly title = input.required<string>();
}
