import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trabalho';
}
