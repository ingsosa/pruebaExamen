import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { jsonPlaceholder } from 'src/app/models/jsonPlaceholder';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  id: number;
  private sub: any;

  tableJsonPlace: jsonPlaceholder;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute){
      this.tableJsonPlace = new jsonPlaceholder();
    }

  ngOnInit()
  {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    
    console.log(this.id);
    this.requestService.getJsonById(this.id).subscribe((response) => {
      this.tableJsonPlace = response;
    });
  }

}
