import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_url } from 'environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Nom : any = '';
  Description : any = '';
  Categorie : any = '';
  Image : any = '';
  Prix : any = '';
  Restaurant : any = '';
  constructor(public http: HttpClient, private route: Router) { 

  }

  ngOnInit() {
  }

  makeBody (json) {
    let body = [];
    for (let key in json)
        body.push(key + '=' + json[key]);
    return body.join('&');
  }

  insert_plat(){
    const input = {
      Nom : this.Nom,
      Description : this.Description,
      Categorie : this.Categorie,
      Image : this.Image,
      Prix : this.Prix,
      Restaurant : this.Restaurant,
    };
    console.log(input);
    const options = { 
      headers: {
          'Content-Type' : 'application/json'
      }
    };

    // let body = this.makeBody(input);

    const success = response => {
      console.log('SUCCESS');
      this.route.navigateByUrl("/admin/e_kaly/table-list");
    }

    const error = response => {
      console.log('ERROR');
    }

    try {
      this.http.post(base_url+'plat', input).subscribe(success, error);
    } catch (err) { 
      console.log('catch');
    } finally{
      console.log('finally');
    }
  }

}
