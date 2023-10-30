import { Component } from '@angular/core';
import { Bird } from '../model/bird'

export const data = {
  app: {
    generalInformation: {
      title: 'Development Environments'
    },
    footer: {
      author: 'Murilo Kubota',
      email: 'mferreira@inscastellet.cat'
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;
  bird: Bird = new Bird("Eagle", 300, 50);


  constructor() {
    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    return "Murilo WebApp";
  }
}
