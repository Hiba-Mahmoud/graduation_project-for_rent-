import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
  }
  


}
