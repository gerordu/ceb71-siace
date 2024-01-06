import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cicle-details',
  standalone: true,
  imports: [],
  templateUrl: './cicle-details.component.html',
  styleUrl: './cicle-details.component.scss'
})
export class CicleDetailsComponent {
  @Input() cicle!: string;

}
