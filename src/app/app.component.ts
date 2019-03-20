import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  get title() {
    console.log('CD');
    return 'title';
  }

  ngOnInit() {
    requestAnimationFrame(() => this.ngOnInit());
  }
}
