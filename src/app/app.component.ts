import { Component } from '@angular/core';
import { CommonService } from '@Services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MuniBarvaUI';

  constructor(public commonSvc:CommonService){

  }
}
