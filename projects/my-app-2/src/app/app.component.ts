import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAppTitleComponent } from './my-app-title/my-app-title.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyAppTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My-app-2';
}
