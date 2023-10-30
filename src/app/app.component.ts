import { Component } from '@angular/core';

/**
 * Refactor `data` to a new file.
 * Ctrl + . will reveal the refactoring options.
 */
export const data = {
  app: {
    generalInformation: {
      title: 'Development Environments'
    },
    footer: {
      author: 'Ernest Bofill',
      email: 'ebofill1@inscastellet.cat'
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

  constructor() {
    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    return data.;
  }
}
