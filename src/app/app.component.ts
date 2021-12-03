import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'events';

  public Contacts = " ";
  
  showContacts(event:any): void {
    
    this.Contacts = "911";
  }

}
