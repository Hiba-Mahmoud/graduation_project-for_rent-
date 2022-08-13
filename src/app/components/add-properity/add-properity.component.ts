import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-properity',
  templateUrl: './add-properity.component.html',
  styleUrls: ['./add-properity.component.css']
})
export class AddProperityComponent implements OnInit {
 addproperity:FormGroup;
  constructor(private formb:FormBuilder) {

  }


  ngOnInit(): void {
    this.addproperity = this.formb.group({
      title:[''],
      description:[''],
      price:[''],
      level:[''],
      bedroomnum:[''],
      bathroomnum:[''],
      bedsnum:[''],
      governate:[''],
      address:[''],
      Image:this.formb.group({
        imageone:[''],
        imagtwo:[''],
        imagethree:[''],
        imagefour:['']

      })
    })

  }
onsubmit(){
  console.log(this.addproperity.value)
}
}

