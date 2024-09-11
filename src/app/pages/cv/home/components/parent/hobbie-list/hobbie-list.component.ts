import { Component, OnInit } from '@angular/core';
import { HobbieListService } from '../../../../../../core/services/hobbie-list.service';
import { Hobbie } from '../../../../../../core/models/hobbie';
import { HobbieComponent } from '../../child/hobbie/hobbie.component';

@Component({
  selector: 'app-hobbie-list',
  standalone: true,
  imports: [HobbieComponent],
  templateUrl: './hobbie-list.component.html',
  styleUrl: './hobbie-list.component.scss'
})
export class HobbieListComponent implements OnInit {

  title!: string;
  hobbieList!: Hobbie[];

  constructor(private hobbieListService: HobbieListService) {}

  ngOnInit(): void {
      
    this.title = 'Centres d\'intérêts';

    this.hobbieList = this.hobbieListService.getHobbieList();
  }
}
