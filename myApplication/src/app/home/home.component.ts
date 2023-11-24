import { Component } from '@angular/core';
import { Router } from '@angular/router'; //import section

@Component({  //component directive :meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  //componenet class : properties,constructor,lifecycle hooks,methods etc
                    //property section 
  //let/var/const city = "pune"  var in js


  city : string = "Satara"; //property
  surName : any = true;
  name : string = "poonam";
  name2! : string;
  name3 : any;

  constructor(private router: Router){} //constuctor section


  //LH, methods
  signUpCompo(){
     
     this.name3 = "OmSai";
     console.log("city>>",this.city);
     console.log("signcompo fun calling");
     this.test();
     this.router.navigateByUrl("signUp");
  }

  test(){
    console.log("test calling...");
    
  }
}
