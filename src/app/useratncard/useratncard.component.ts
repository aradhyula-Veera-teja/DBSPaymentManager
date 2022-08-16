import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-useratncard',
  templateUrl: './useratncard.component.html',
  styleUrls: ['./useratncard.component.css']
})
export class UseratncardComponent implements OnInit {
  user!:any;
  constructor(private api:ApiService) { 
    this.api.getuser("9908");
    // console.log(this.api.user)
    this.user=this.api.user;
  }
  // user:object=this.api.user;
  ngOnInit(): void {
  }

}
