import { Component, Input } from '@angular/core';
import { Realisation } from '../../../../../../core/models/realisation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realisation',
  standalone: true,
  imports: [],
  templateUrl: './realisation.component.html',
  styleUrl: './realisation.component.scss'
})
export class RealisationComponent {

  @Input() realisation!: Realisation;

  constructor(private router: Router) {}

  onNavigate() {
    this.router.navigateByUrl(this.realisation.url);
  }
}
