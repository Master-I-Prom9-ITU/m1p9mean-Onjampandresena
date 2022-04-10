import { Component, OnInit } from '@angular/core';
// import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from 'environments/environment';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent implements OnInit {

  plat_list: any[];
  test: string; 

  constructor(public http: HttpClient) {
    this.loadPlats();
  }
  loadPlats(){
    let data:Observable<any>;
    data = this.http.get(base_url+'plat');
    data.subscribe(result => { 
      this.plat_list = result.data;
      this.test = 'TEST';
      console.log(this.plat_list[0].Categorie);
    });
  }
  ngOnInit() {

  }

}
