import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.route.navigate(['notrented'])
  }
  pending(){
    this.route.navigate(['pending'])
  }
  rented(){
    this.route.navigate(['rented'])

  }
}
