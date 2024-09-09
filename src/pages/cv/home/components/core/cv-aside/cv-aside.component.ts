import { Component } from '@angular/core';
import { ProfileListComponent } from "../../parent/profile-list/profile-list.component";
import { ContactListComponent } from "../../parent/contact-list/contact-list.component";
import { HobbieListComponent } from "../../parent/hobbie-list/hobbie-list.component";
import { RealisationListComponent } from "../../parent/realisation-list/realisation-list.component";

@Component({
  selector: 'app-cv-aside',
  standalone: true,
  imports: [ProfileListComponent, ContactListComponent, HobbieListComponent, RealisationListComponent],
  templateUrl: './cv-aside.component.html',
  styleUrl: './cv-aside.component.scss'
})
export class CvAsideComponent {

}
