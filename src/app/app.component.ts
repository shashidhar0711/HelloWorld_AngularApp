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

  ngOnInit():void {
    this.title="Hello from Bridgelabz";
    this.imgUrl='../assets/BridgeLabz_Logo.png';
    this.url="https://www.bridgelabz.com/";
  }
  
  OnClick($event) {
    console.log("Mouse click",$event);
    window.open(this.url,"_blank");
  }
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
