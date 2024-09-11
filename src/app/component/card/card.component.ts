import { Component, Input } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BodyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
