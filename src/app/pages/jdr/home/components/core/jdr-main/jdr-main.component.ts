import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jdr-main',
  standalone: true,
  imports: [],
  templateUrl: './jdr-main.component.html',
  styleUrl: './jdr-main.component.scss'
})
export class JdrMainComponent {

  constructor(private router: Router) {}

  onReturnToCv() {
    this.router.navigateByUrl('/cv/home');
  }
}
