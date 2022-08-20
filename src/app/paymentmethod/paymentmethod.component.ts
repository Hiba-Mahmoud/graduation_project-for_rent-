import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {
  strikeCheckout:any = null;
  constructor() { }

  ngOnInit(): void {
    this.stripePaymentGateway();
  }

  checkout(amount) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LX8ftH4ooOXAWsbNANhQAaiF9nzIHfUiThsjYEnPP4WQwOW5ylzc1NtWK1qDapTutl291B1FEyjgXDxdyxAsLZh00dL6UnlqH',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LX8ftH4ooOXAWsbNANhQAaiF9nzIHfUiThsjYEnPP4WQwOW5ylzc1NtWK1qDapTutl291B1FEyjgXDxdyxAsLZh00dL6UnlqH',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }

}