import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from 'environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  plats: any[];

  constructor(public http: HttpClient, private route: Router) { 
    this.loadData();
  }
  loadData(){
    let data:Observable<any>;
    data = this.http.get(base_url+'plat');
    data.subscribe(result => { 
      this.plats = result.data;
    });
  }

  delete_plat(_id){
    console.log('DELETE ' + _id);

    const success = response => {
      console.log('DELETE SUCCESS');
      this.route.navigate(["/admin/e_kaly/table-list"]);
    }

    const error = response => {
      console.log('DELETE ERROR');
    }

    try {
      this.http.delete(base_url+'plat/'+_id).subscribe(success, error);
    } catch (err) { 
    } finally{
      
    }

  }
  modify_plat(_id){
    console.log('MODIFY ' + _id);
  }

  ngOnInit() {
    
  }

}
