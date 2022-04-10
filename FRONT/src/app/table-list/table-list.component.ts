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
    console.log(base_url);
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
    }

    const error = response => {
      console.log('DELETE ERROR');
    }

    try {
      this.http.delete(base_url+'plat/'+_id).subscribe(success, error);
    } catch (err) { 
      console.log('catch');
    } finally{
      console.log('finally');
      this.route.navigate(["/admin/e_kaly/table-list"]);
    }

  }
  modify_plat(_id){
    console.log('MODIFY ' + _id);
  }

  ngOnInit() {
    
    // this.plats = [
    //   { Nom: 'Katsaka', Description: 'Sakafo malagasy',  Categorie: 'Gouté', Image: '',  Prix: 3000, Restaurant: 'E-Sakafo' },
    //   { Nom: 'Katsaka 1', Description: 'Sakafo malagasy',  Categorie: 'Gouté', Image: '',  Prix: 3000, Restaurant: 'E-Sakafo' },
    //   { Nom: 'Katsaka 2', Description: 'Sakafo malagasy',  Categorie: 'Gouté', Image: '',  Prix: 3000, Restaurant: 'E-Sakafo' },
    // ];
  }

}


// tsconfig

// {
//   "compileOnSave": false,
//   "compilerOptions": {
//     "outDir": "./dist/out-tsc",
//     "baseUrl": "src",
//     "sourceMap": true,
//     "declaration": false,
//     "module": "es2020",
//     "moduleResolution": "node",
//     "emitDecoratorMetadata": true,
//     "experimentalDecorators": true,
//     "target": "es5",
//     "typeRoots": [
//       "node_modules/@types"
//     ],
//     "lib": [
//       "es2017",
//       "dom"
//     ]
//   }
// }