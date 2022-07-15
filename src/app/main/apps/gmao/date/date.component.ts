import { formatDate } from '@angular/common';
import { Component, Input,Output,EventEmitter, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {FlatpickrOptions, Ng2FlatpickrComponent} from 'ng2-flatpickr';
import { DatePipe } from '@angular/common';
import * as Feather from 'feather-icons';




@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})

export class DateComponent implements OnInit {
  date1 : any;
  public st: any="";
  public en :any=0;
  
  @ViewChildren(Ng2FlatpickrComponent)
  // @Output() Date2E = new EventEmitter<string>();//hatha manich nesta3ml fih
     @Output() jsqkdjlqskdjqldj = new EventEmitter();//hatha manich nesta3ml fih

  @Output() DateE = new EventEmitter();//Hadha Evenet Emitte
//ken nasn3 variable jdid ma8ir manesta3mlou l ereur tetna7a
  TabDate=[];
  pickers: QueryList<Ng2FlatpickrComponent>;
  public date: Date = new Date();  
  public MonS:String ='';
  public DayS:String = '';
  public MonE:String ='';
  public DayE:String = '';
public janvier:any='';
 //public myDate = new Date();
 //mydate2:string;

  public DateRangeOptions = {
    altInput: true,
    mode: 'range',
    altInputClass: 'form-control flat-picker bg-transparent border-0 shadow-none flatpickr-input',
    defaultDate: ['2021-01-01','2021-02-01'],
    altFormat: 'Y/n/j',
    enableTime : false,
   
    allowInput: true,
    valuechange:true,
    // onChange: ( selectedDates: any ) => {console.log(selectedDates); this.pickers.first.writeValue( selectedDates[0] ),this.pickers.last.writeValue( selectedDates[0] );}
    onChange: ([start, end]) => { //Lenna el Changemen mta3 Date Debut isi wa9ta nselectionniou
     
//el objet houa [start, end] 

try{
  
      if( (start.getUTCMonth()+1).toString().length<2 ) {
        // this.MonS=this.janvier;
        // console.log("mon",start.getUTCMonth()+1)
        this.MonS="0"+(start.getUTCMonth()+1);
      }
     
      
      else {
        this.MonS =start.getMonth()+1; 
        console.log("mon2",this.MonS)
      }
      // console.log(this.MonS);

      if(  start.getDate().toString().length<2 ) {
        this.DayS="0"+start.getDate().toString();
        console.log("dayS",this.DayS);

      }
      else{
        this.DayS=start.getDate();

      }

      console.log("monS",this.MonS);


//end    
if( (end.getUTCMonth()+1).toString().length<2) {
  this.MonE="0"+(end.getMonth()+1);
  console.log("monE",this.MonE)
}
else{
  this.MonE = end.getMonth()+1
}
// console.log( this.MonE);
if(  end.getDate().toString().length<2) {
  this.DayE="0"+end.getDate().toString()

}
else{
  this.DayE=  end.getDate()

}
// .replace(/\s/g, '')
console.log( "this.DayS "+this.DayS);
console.log( "this.DayE "+this.DayE);

if( this.MonE.toString() =='1'&& this.MonS.toString() =='1')
      {
        this.DateE.emit([start.getFullYear()+"0"+this.MonS+""+this.DayS,end.getFullYear()+"0"+this.MonE+""+this.DayE]);
        console.log("ok1")
      }
    else if (this.MonE =='1'){
      this.DateE.emit([start.getFullYear()+""+this.MonS+""+this.DayS,end.getFullYear()+"0"+this.MonE+""+this.DayE]);
      console.log("ok2")
    }
    else if (this.MonS=='1'){
      this.DateE.emit([start.getFullYear()+"0"+this.MonS+""+this.DayS,end.getFullYear()+""+this.MonE+""+this.DayE]);
      console.log("ok4")
    }
else {
      // this.DateE.emit([start, end]);//Lenna bech nasn3ou object Fi chakl event
      this.DateE.emit([start.getFullYear()+""+this.MonS+""+this.DayS,end.getFullYear()+""+this.MonE+""+this.DayE]);//Lenna bech nasn3ou object Fi chakl event
}

}
catch(e){
  
}
    this.st=start;
      
 
      // console.log(this.st.getFullYear()+" "+this.st.getMonth()+" "+this.st.getDay())
      // console.log(this.st.getDate()+" "+this.st.getMonth()+" "+this.st.getDay())

      this.en=end;
    //  console.log(this.st)
    //  console.log(this.en)
     
          //  if (start && end) {
            
          //    console.log({ start, end });
          //  }
         },

        

       
         
  };
 
  from: any;
  myForm: FormGroup;

  constructor() { 
  //    this.myForm = formBuilder.group({
  //   start:new DateRange('20200202','20200101'),
    
  // });
  // this.mydate2= this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  // console.log("date2=",this.mydate2)

  }
 
  ngOnInit(): void {
    // const fp = flatpickr("#myID", {}); // flatpickr
    // new Date().toString() 
   console.log("ok =",this.st);
   console.log(this.en);
   Feather.replace();

   
  }
 

}


