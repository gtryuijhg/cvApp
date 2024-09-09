import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QcmMainComponent } from '../qcm-main/qcm-main.component';

@Component({
  selector: 'app-qcm-home',
  standalone: true,
  imports: [RouterLink, QcmMainComponent],
  templateUrl: './qcm-home.component.html',
  styleUrl: './qcm-home.component.scss'
})
export class QcmHomeComponent {

}
