import { Component, OnInit } from '@angular/core';
import { Clickable } from '../../../../../../core/models/clickable';
import { ClickableListService } from '../../../../../../core/services/clickable-list.service';
import { ClickableComponent } from '../../child/clickable/clickable.component';

@Component({
  selector: 'app-clickable-list',
  standalone: true,
  imports: [ClickableComponent],
  templateUrl: './clickable-list.component.html',
  styleUrl: './clickable-list.component.scss'
})
export class ClickableListComponent implements OnInit {
  
  clickableList!: Clickable[];

  constructor(private clickableListService: ClickableListService) {}
  
  ngOnInit(): void {
    
    this.clickableList = this.clickableListService.getClickableList();
  }


}
