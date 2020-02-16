import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper'

@Component({
  selector: 'app-layout-design',
  templateUrl: './layout-design.component.html',
  styleUrls: ['./layout-design.component.css']
})
export class LayoutDesignComponent implements OnInit {
  mySwiper:any = null;
  constructor() { }

  ngOnInit() {
    this.initiateSwiper()
  }

  //Swiper 
  initiateSwiper() {
  
    
    this.mySwiper = new Swiper ('.s1', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
      // And if we need scrollbar      
    })
  
  
  }
  
}
