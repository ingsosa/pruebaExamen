import { Component, OnInit } from '@angular/core';
import { jsonPlaceholder } from 'src/app/models/jsonPlaceholder';
import { RequestService } from 'src/app/services/request.service';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {

  palabra: string;
  private sub: any;

  tableJsonPlace1: Observable<jsonPlaceholder[]>;
  tableJsonPlace: jsonPlaceholder[];

  tableJsonPlaceFilter: ReplaySubject<jsonPlaceholder[]> = new ReplaySubject<jsonPlaceholder[]>(1);

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute){}

  ngOnInit()
  {
    this.sub = this.route.params.subscribe((params) => {
      this.palabra = params['palabra'];
    });

    console.log(this.palabra);

    this.requestService.getJson().subscribe((response) => {
      this.tableJsonPlace = response;

      this.tableJsonPlaceFilter.next(
        this.tableJsonPlace.filter(x => x.body.toLowerCase().indexOf(this.palabra) > -1)
      );
    });   
    
  }
}
