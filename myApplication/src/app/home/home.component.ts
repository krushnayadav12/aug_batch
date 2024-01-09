import { Component } from '@angular/core';
import { Router } from '@angular/router'; //import section
import { DataService } from '../data.service';

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
  name : string = "poonam patil" ;
  name2! : string;
  name3 : any;
  pipe:boolean =false;
  date1 = new Date();
  constructor(private router: Router, private  dataService: DataService){} //constuctor section
  
  ngOnInit(){
     this.dataService.userName = this.name;
     console.log("set", this.dataService.userName);
     
  }

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

  directives(){
    this.router.navigateByUrl('directives');
  
  }

  purePipes(){
    this.pipe=true;
  }

  adminSignup(){
    this.router.navigateByUrl('admin/adminSignUp')
  }


}
