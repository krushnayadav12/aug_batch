import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild1',
  templateUrl: './viewchild1.component.html',
  styleUrls: ['./viewchild1.component.css']
})
export class Viewchild1Component {

  @ViewChild('city') cityName!: ElementRef
  @ViewChild(Viewchild2Component) viewCompo!: Viewchild2Component;
  @ViewChild('confirmation') confirmation! : ElementRef;
  
  constructor(private cdr: ChangeDetectorRef) { }


  name1: any;
  edit = false;
  ngAfterViewInit() {

    console.log(this.cityName.nativeElement.innerHTML);
    this.cityName.nativeElement.innerHTML = 'Pune';
    console.log(this.cityName.nativeElement.innerHTML);
    // console.log("name",this.viewCompo.name);
    this.name1 = this.viewCompo.name;//get
    this.viewCompo.city = 'Nashik';//set
    if(this.edit){
      this.confirmation.nativeElement.innerHTML = 'Are you sure you Want Update this Record'
    }
    this.cdr.detectChanges();
  }

}
