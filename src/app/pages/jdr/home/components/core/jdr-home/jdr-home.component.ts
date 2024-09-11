import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JdrMainComponent } from '../jdr-main/jdr-main.component';

@Component({
  selector: 'app-jdr-home',
  standalone: true,
  imports: [RouterLink, JdrMainComponent],
  templateUrl: './jdr-home.component.html',
  styleUrl: './jdr-home.component.scss'
})
export class JdrHomeComponent {

}
