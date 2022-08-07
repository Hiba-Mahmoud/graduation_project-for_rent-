import { Component, OnInit } from '@angular/core';
import{faFacebook ,faSquareInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook=faFacebook
  faSquareInstagram=faSquareInstagram
  faTwitter=faTwitter

  constructor() { }

  ngOnInit(): void {
  }

}
