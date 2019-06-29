import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { jsonPlaceholder } from 'src/app/models/jsonPlaceholder';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  id: number;
  private sub: any;

  tableJsonPlace: Observable<jsonPlaceholder[]>;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute){}

  ngOnInit()
  {   
    this.tableJsonPlace = this.requestService.getJson();
  }

}
