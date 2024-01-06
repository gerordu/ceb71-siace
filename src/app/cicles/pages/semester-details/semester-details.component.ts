import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semester-details',
  standalone: true,
  imports: [],
  templateUrl: './semester-details.component.html',
  styleUrl: './semester-details.component.scss'
})
export class SemesterDetailsComponent {
  @Input() cicle!: string;
  @Input() semester!: string;
}
