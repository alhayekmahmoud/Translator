import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxTranslator2';
constructor (public translateService: TranslateService){
  this.translateService.addLangs(['en', 'fr']);
  this.translateService.setDefaultLang('en');
  this.translateService.use('en');
}
}
