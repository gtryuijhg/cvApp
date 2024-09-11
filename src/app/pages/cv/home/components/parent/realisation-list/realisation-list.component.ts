import { Component, OnInit } from '@angular/core';
import { RealisationListService } from '../../../../../../core/services/realisation-list.service';
import { Realisation } from '../../../../../../core/models/realisation';
import { RealisationComponent } from '../../child/realisation/realisation.component';

@Component({
  selector: 'app-realisation-list',
  standalone: true,
  imports: [RealisationComponent],
  templateUrl: './realisation-list.component.html',
  styleUrl: './realisation-list.component.scss'
})
export class RealisationListComponent implements OnInit {

  title!: string;
  realisationList!: Realisation[];

  constructor(private realisationListService: RealisationListService) {}

  ngOnInit(): void {
      
    this.title = 'Réalisations';

    this.realisationList = this.realisationListService.getRealisationList();
  }
}
