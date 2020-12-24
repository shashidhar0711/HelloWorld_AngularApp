import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello';
  imgUrl;
  url;
  userName: string= "";
  nameError: string= "";

  // UC => 1 Display the Message Using One Way Data Binding
  // UC => 2 Display the Bridgelabz Logo Image Using Property Binding 
  ngOnInit():void {
    this.title="Hello from Bridgelabz";
    this.imgUrl='../assets/BridgeLabz_Logo.png';
    this.url="https://www.bridgelabz.com/";
  }
  // UC => 3 Launch BridgeLabz Site in a New tab on Clicking Bridgelabz Logo Using Event Binding
  OnClick($event) {
    console.log("Mouse click",$event);
    window.open(this.url,"_blank");
  }
  // UC => 5 Validates the User Name In case Error Display the error
  OnInput($event) {
    console.log("entering input",$event);
    var testRegex=RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(testRegex.test(this.userName)) {
      this.nameError="";
    } else {
      this.nameError="Name is Invalid"
    }
  }
}
