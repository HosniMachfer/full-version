import { Component, OnInit } from '@angular/core';

// import { DateComponent } from 'app/main/rendement/date/date.component';
//import data from 'json/gmao.json';
import { EnumStatsItem } from 'EnumstatsItem';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

import { HttpClient } from '@angular/common/http';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: any;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  stroke:ApexStroke;
  fill:ApexFill;
};

@Component({
  selector: 'app-nbr-pannes',
  templateUrl: './nbr-pannes.component.html',
  styleUrls: ['./nbr-pannes.component.scss']
})
export class NbrPannesComponent implements OnInit {

  // @ViewChild(DateComponent) child: DateComponent;

  public chartOptions: Partial<ChartOptions>;
  tab:any=[];
  obj:EnumStatsItem;
  tab1: any=[];
  tab2: any=[];
  view: number[];
  dateD: any ="20200119";
  dateF: any="20200125";
  Url: any='http://localhost:8082/tpspanne?DateD='+this.dateD+'&DateF='+this.dateF;
  data:any;
  chartColors = {
    column: {
      series1: '#ac98fc',
      series2: '#ac98fc',
      bg: '#7367f0'
    },
  }
  tableau2: any=[];
  tableau1: any=[];
  constructor(private http: HttpClient) {}
    public GetDateE($event) 
     {
    
      if((($event[0]).length == 8) &&(($event[1]).length == 8)){
        // console.log(this.Url);
        // console.log($event[0]);
        this.dateD = $event[0];
        this.dateF = $event[1]
        console.log("event0",$event[0]);
        this.Url='http://localhost:8082/tpspanne?DateD='+this.dateD+'&DateF='+this.dateF;

        this.ngOnInit();
        console.log(this.Url);

        // console.log($event[1]);
      }
     
    }

  ngOnInit(): void {

    this.tab=[];
  this.tab1=[];
  this.tab2=[];
  this.tableau1=[];
  this.tableau2=[];
    this.view = [window.innerWidth/1.34,400];

    this.http.get<any>(this.Url).subscribe(data => {
      this.data = data ;
      console.log("data=",this.data)
    
   
    for(let i in data ){
      
      this.obj={
     name : data[i].machine,
     value : data[i].nbrpanne,
      }

      this.tab.push(this.obj);
      this.tab1.push(this.obj.name)
      this.tab2.push(this.obj.value)
     }
    

    this.tableau2=this.tab2;
    this.tableau1=this.tab1;
    console.log(this.tab2)
    console.log(this.tableau1)
    this.chartOptions = {
      series: [
      
        {
          name:'Nombre  de pannes ',
         data:this.tableau2,
         borderRadius:15,
        }
      ],
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
       
       
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      plotOptions: {
        bar: {
          columnWidth: '15%',
       
          colors: {
            backgroundBarColors: [
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg
            ],
            backgroundBarRadius: 15,
            
            
          }
          
        }
      },
      colors: [this.chartColors.column.series1, this.chartColors.column.series2],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories:this.tableau1
        
      },
      yaxis: {
        title: {
          text: ''
        },
        decimalsInFloat:0, 
      },
      fill: {
        opacity: 1
      },
      
    }
  })
  }


}
