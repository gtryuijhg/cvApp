import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../../../../core/models/formation';
import { FormationListService } from '../../../../../../core/services/formation-list.service';
import { FormationComponent } from '../../child/formation/formation.component';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [FormationComponent],
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.scss'
})
export class FormationListComponent implements OnInit {

  title!: string;
  formationList!: Formation[];

  constructor(private formationListService: FormationListService) {}
  
  ngOnInit(): void {

    this.title = 'Formations';

    this.formationList = this.formationListService.getFormationList();
  }
}
