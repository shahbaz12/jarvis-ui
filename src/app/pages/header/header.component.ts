import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  topCtagory = [
    {
      catagories: [
        {
          heading: "TOP CATAGORIES",
          menu: "Health",
          menu1: "Fashion",
          menu2: "Pets",
          menu3: "Clothing",
          menu4: "Automotive",
          menu5: "Fitness",
        }
      ]
    },
    {
      favourite: [
        {
          heading: "FAVOURITE  STORES",
          menu: "Noom Coupons",
          menu1: "Gop Coupons",
          menu2: "Stocks Coupons",
          menu3: "Pet Supplies plus Coupons",
          menu4: "Chewy Coupons",
          menu5: "Shein Coupons",
          menu6: "Chewy Coupons",
          menu7: "Grubhub Coupons",
        }
      ]
    },
    {
      contact: [
        {
          icon: "fa fa-map-marker",
          heading: "CONTACT US",
          address: "Wethrift.com 440 N Barranca Ave #1262 Covina, CA 91723,United States",
          email: "hello@.com",
          emailIcon: "fa fa-envelope"
        }
      ]
    },
  ]
  features = [
    {
      dashboard: [
        {
          heading: "Dashboard",
          text: "Create and view portfolios and watches",
          buttontext: "View Dashboard",
          imgurl: "assets/dashboard.png",
          link:"dashboard"
        }
      ]
    },
    {
      analytics: [
        {
          heading: "Analytics",
          text: "Create comparative views of ETFs and stocks",
          buttontext: "View Analytics",
          imgurl: "assets/analytics.png",
        }
      ]
    },
    {
      podcasts: [
        {
          heading: "Podcasts",
          text: "Investment of our weekly podcasts",
          buttontext: "View Podcasts",
          imgurl: "assets/podcast.png",
        },

      ]
    },
    {
      realtime: [
        {
          heading: "Realtime",
          text: "Realtime evaluation of stocks and bonds",
          buttontext: "View Realtime",
          imgurl: "assets/realtime.png",
        }
      ]
    },
    {
      reports: [
        {
          heading: "Reports",
          text: "Access & download PDFs of our reports",
          buttontext: "View Reports",
          imgurl: "assets/reports.png",
        }
      ]
    },
    {
      videos: [
        {
          heading: "Videos",
          text: "Investment of our weekly podcasts",
          buttontext: "View Videos",
          imgurl: "assets/videos.png",
        },

      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
