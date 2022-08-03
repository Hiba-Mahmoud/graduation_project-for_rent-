import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userfavourites',
  templateUrl: './userfavourites.component.html',
  styleUrls: ['./userfavourites.component.css']
})
export class UserfavouritesComponent implements OnInit{
  isFavorite: boolean[] = [];

isFavoritee(elem: any) {
    this.isFavorite[elem] = !this.isFavorite[elem];
    // Add other code here
}
constructor() {}

ngOnInit(): void {
  
}
 }
