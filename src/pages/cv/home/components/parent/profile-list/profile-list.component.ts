import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../../../core/models/profile';
import { ProfileComponent } from '../../child/profile/profile.component';
import { ProfileListService } from '../../../../../../core/services/profile-list.service';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.scss'
})
export class ProfileListComponent implements OnInit {

  title!: string;
  profileList!: Profile[];

  constructor(private profileListService: ProfileListService) {}

  ngOnInit(): void {
      
    this.title = 'Profil';

    this.profileList = this.profileListService.getProfile();
  }
}
