import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qcm-main',
  standalone: true,
  imports: [],
  templateUrl: './qcm-main.component.html',
  styleUrl: './qcm-main.component.scss'
})
export class QcmMainComponent {

  constructor(private router: Router) {}

  onReturnToCv() {
    this.router.navigateByUrl('/cv/home');
  }
}
