import { Component, OnInit,ViewChild, ViewEncapsulation  } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexXAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexResponsive,
  ApexStates
} from 'ng-apexcharts';
import { colors } from 'app/colors.const';
import { CoreConfigService } from '@core/services/config.service';
import { EnumStatsItem } from 'EnumstatsItem';
import { HttpClient } from '@angular/common/http';
import { formatNumber } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { __values } from 'tslib';
//import data from 'json/gmao.json'
// interface ChartOptions
export interface ChartOptions {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  legend?: ApexLegend;
  title?: ApexTitleSubtitle;
  colors?: string[];
  tooltip?: ApexTooltip;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  labels?: string[];
  markers: ApexMarkers;
  theme: ApexTheme;
}
@Component({
  selector: 'app-delai-entre-les-pannes',
  templateUrl: './delai-entre-les-pannes.component.html',
  styleUrls: ['./delai-entre-les-pannes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelaiEntreLesPannesComponent implements OnInit {
 
  @ViewChild('apexColumnChartRef') apexColumnChartRef: any;
  public apexColumnChart: Partial<ChartOptions>;
   // Color Variables
   chartColors = {
    column: {
      series1: '#ac98fc',
      series2: '#ac98fc',
      bg: '#7367f0'
    },
    success: {
      shade_100: '#7eefc7',
      shade_200: '#06774f'
    },
    donut: {
      series1: '#ffe700',
      series2: '#00d4bd',
      series3: '#826bf8',
      series4: '#2b9bf4',
      series5: '#FFA1A1'
    },
    area: {
      series3: '#a4f8cd',
      series2: '#60f2ca',
      series1: '#2bdac7'
    }
  };
  view: any;
  // Heatmap data generate
  public generateHeatmapData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  obj:EnumStatsItem;
  tab:any=[];
  tab1:any=[];
  tab2:any=[];
  dateD: any ="20200101";
  dateF: any="20200201";
  Url: any='http://localhost:8082/tpspanne?DateD='+this.dateD+'&DateF='+this.dateF;
  data:any;
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
   constructor(private _coreConfigService: CoreConfigService, private http: HttpClient) {
   }

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
    this.tab=[],
    this.tab1=[],
 
    this.view = [window.innerWidth/1.34];
    this.http.get<any>(this.Url).subscribe(data => {
      this.data = data ;
      console.log("data=",this.data)
    
    for(let i in data ){
      this.obj={
     name : data[i].machine,
     value :((data[i].mtbf)/60),
      }
      this.tab.push(this.obj);
      this.tab1.push(this.obj.name)
      this.tab2.push(this.obj.value)
    
    console.log(this.tab1)
  // Apex Column Chart
  this.apexColumnChart = {
    series: [
    
      {
        name:'delai',
        data: this.tab2
       
      
      }
       
    ],
    chart: {
      type: 'bar',
      height: this.view,
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
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg,
            this.chartColors.column.bg

          ],
          backgroundBarRadius: 10
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
      colors: ['transparent']
    },
    xaxis: {
      categories: this.tab1, 

    },
    yaxis: {
      title: {
        text: ''
        
      },
      floating: false,
      decimalsInFloat:0, 

    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        // formatter :  (val)=>{
        //   console.log("val=",val)
        //   return val.;
        // }
        formatter: function(val, index) {
          return val.toFixed(2);
        }

      }
    }
  };
}
  

})
} 

onResize(event) {
  this.view = [event.target.innerWidth/1.34];
  console.log("ok");
  console.log(this.view);
}
}
