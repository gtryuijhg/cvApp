import { Component } from '@angular/core';
import { CvAsideComponent } from "../cv-aside/cv-aside.component";
import { CvMainComponent } from "../cv-main/cv-main.component";

@Component({
  selector: 'app-cv-home',
  standalone: true,
  imports: [CvAsideComponent, CvMainComponent],
  templateUrl: './cv-home.component.html',
  styleUrl: './cv-home.component.scss'
})
export class CvHomeComponent {

}
