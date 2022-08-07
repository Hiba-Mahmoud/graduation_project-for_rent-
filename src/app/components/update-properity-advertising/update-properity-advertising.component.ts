import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-properity-advertising',
  templateUrl: './update-properity-advertising.component.html',
  styleUrls: ['./update-properity-advertising.component.css']
})
export class UpdateProperityAdvertisingComponent implements OnInit {
url;
  constructor() { }

  ngOnInit(): void {
  }
  uploadImage(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event)=>{
      this.url =event.target.result;
    }
  }

}
