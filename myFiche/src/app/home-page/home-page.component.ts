import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  model = {
    user: '',
    path: ''
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.model.user = param.username
    })

    this.route.url.subscribe(url => {
      this.model.path = url.join('/')
    })

  }

}
