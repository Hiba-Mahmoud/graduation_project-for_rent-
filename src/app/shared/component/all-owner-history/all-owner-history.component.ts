import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertismentService } from '../../services/advertisment.service';

@Component({
  selector: 'app-all-owner-history',
  templateUrl: './all-owner-history.component.html',
  styleUrls: ['./all-owner-history.component.css']
})
export class AllOwnerHistoryComponent implements OnInit {
  allAdvert: any = [];
  totalNumberNotRented: any;
  page: number = 1;
  loading: boolean = true;

  id :any;
  totalNumberRented: any;
  allAdvertRented: any;
  allAdvertNotRented: any;
  owner: any;

  constructor(private advertismentService: AdvertismentService, private http: HttpClient ,private route:ActivatedRoute ,) {
    this.id=this.route.snapshot.paramMap.get("id")

   }

  ngOnInit(): void {
    this.getAdvertismentById();

  }
  getAdvertismentById(){
    this.advertismentService.getAdvertismentById("http://127.0.0.1:8000/api/owner_profile_for_public/",this.id).subscribe((res) => {
          console.log(this.allAdvertNotRented);
         this.allAdvertNotRented= res.acceptedNotRented;
         this.totalNumberNotRented = res.acceptedNotRented.length;
         this.allAdvertRented= res.acceptedRented;
         this.totalNumberRented = res.acceptedRented.length;
          this.owner=res.owner;
        this.loading = false;
        console.log(this.allAdvertNotRented);

    })
}
}
