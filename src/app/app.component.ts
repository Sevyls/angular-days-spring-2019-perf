import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {
  }

  get title() {
    console.log('CD');
    return 'title';
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => this.ngOnInit()));
  }
}
