import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/auth/service/token.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-edit-payed-adsfor-owner',
  templateUrl: './edit-payed-adsfor-owner.component.html',
  styleUrls: ['./edit-payed-adsfor-owner.component.css']
})
export class EditPayedAdsforOwnerComponent implements OnInit {

  id: any;
  addproperity: FormGroup;
  images: FormGroup;
  token: string;
  cities: any;
  image_name = [];
  data = new FormData();
  advertisment: any;
  errorMsg: any;
  imageerror = [];
  statuserror: any;
  imageOne: any;
  imageFour: any;
  imagetwo: any;
  imagethree: any;
  // filldata:any;
  userId: number;
  advertismentId: any;
  imageFive: any;
  ispending: any;

  constructor(
    private activeroute: ActivatedRoute,
    private owner: OwnerService,
    private http: HttpClient,
    private formb: FormBuilder,
    private router: Router,
    private localstorage: TokenService
  ) {
    this.id = this.activeroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log('id' + this.id);
    // this.filldata=this.formb.group({});
    //cities
    let cities = 'http://127.0.0.1:8000/api/cities';
    this.owner.getcities(cities).subscribe({
      next: (response: any) => {
        console.log(response);
        this.cities = response.cities;
        console.log(this.cities + 'cities');
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.getallImages();
    //validation
    this.addproperity = this.formb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
          Validators.pattern(''),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(100),
          Validators.maxLength(1000),
          Validators.pattern(''),
        ],
      ],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      level: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bedroomnum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bathroomnum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bedsnum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      area: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      furniture: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: ['', [Validators.required]],
      governate: ['', [Validators.required]],
      address: [
        '',
        [Validators.required, Validators.pattern('^[\u0621-\u064A0-9 ]+$')],
      ],
      // file: ['']
    });

    this.images = this.formb.group({
      imageone: [''],
    });
  }

  onFileChange(event: any, imgId: any) {
    console.log(event);
    // console.log(event.target.files);
    // console.log(event.target.files[0]['name']);
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let imagename = event.target.files[i];
        console.log(imagename);
        if (imagename) {
          this.data.append('image', imagename, imagename.name);
          console.log(imagename.name + 'dataaaaaa');
        }
        var reader = new FileReader();
      }
    }

    // console.log(this.data.get('image_name')+'dataaaaaa')
    let id = this.advertisment.id;
    console.log(id + 'الصوررررررررررررر');
    let headers = this.getToken();
    this.http
      .post(
        'http://127.0.0.1:8000/api/edit/image/' + id + '/' + imgId,
        this.data,
        headers
      )
      .subscribe({
        next: (response: any) => {
          console.log(response.image.image_name);
          this.getallImages();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }

  //send data
  onsubmit() {
    // console.log(typeof(this.addproperity.value.price))
    // this.data.append('image_name[]', this.advertisment.advertisement_image)
    this.data.append('title', this.addproperity.value.title);
    this.data.append('description', this.addproperity.value.description);
    this.data.append('address', this.addproperity.value.address);
    this.data.append('price', this.addproperity.value.price);
    this.data.append('bedroom_num', this.addproperity.value.bedroomnum);
    this.data.append('bathroom_num', this.addproperity.value.bathroomnum);
    this.data.append('beds_num', this.addproperity.value.bedsnum);
    this.data.append('level', this.addproperity.value.level);
    this.data.append('furniture', this.addproperity.value.furniture);
    this.data.append('type', this.addproperity.value.type);
    this.data.append('area', this.addproperity.value.area);
    this.data.append('city_id', this.addproperity.value.governate);
    this.data.append('status', this.addproperity.value.status);

    // this.addata.image_name= this.image_name;
    // console.log(this.addata)

    let id = this.advertisment.id;
    console.log(this.data);
    console.log(id);
    let headers = this.getToken();
    this.http
      .post('http://127.0.0.1:8000/api/advertisement/' + id, this.data, headers)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigateByUrl('/owner');
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          //       image_name: ['بجب ان تدخل صوره الاعلان هذا الحقل مطلوب ']
          // status:
          this.errorMsg = error.error;
          this.imageerror = this.errorMsg?.image_name;
          console.log(this.errorMsg?.image_name[0]);
          this.statuserror = this.errorMsg.status;
        },
      });
  }
  getToken(): any {
    let local = this.localstorage.gettokenfromLocalstorage();
    let session = this.localstorage.getToken();

    if (local) {
      console.log(local);
      this.token = local;
    } else if (session) {
      console.log(session);
      this.token = session;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return headers;
  }

  getallImages() {
    this.owner
      .getadvertismentdetails(
        'http://127.0.0.1:8000/api/edit/advertisement/',
        this.id
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log(res.advertisement[0].user.id + 'respoooooooooonse');
          this.advertisment = res.advertisement[0];
          this.ispending = this.advertisment.control;
          this.addproperity.patchValue({
            title: this.advertisment.title,
            description: this.advertisment.description,
            price: this.advertisment.price,
            level: this.advertisment.level,
            bedsnum: this.advertisment.beds_num,
            bedroomnum: this.advertisment.bedroom_num,
            bathroomnum: this.advertisment.bathroom_num,
            area: this.advertisment.area,
            furniture: this.advertisment.furniture,
            type: this.advertisment.type,
            governate: this.advertisment.city_id,
            address: this.advertisment.address,
            status: this.advertisment.status,
            // file: this.advertisment.advertisement_image,
          });
          // .advertisement_image[0].image_name.replace(/['"]+/g, '')

          console.log(
            this.advertisment.advertisement_image[0].image_name + 'inside if'
          );
          this.imageOne = this.advertisment.advertisement_image;

          console.log(this.imageOne + 'image');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
