import { Component, OnInit,ViewChild,ViewEncapsulation  } from '@angular/core';
import { EnumStatsItem } from 'EnumstatsItem';
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
//import data from 'json/gmao.json'
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-delai-de-reparation',
  templateUrl: './delai-de-reparation.component.html',
  styleUrls: ['./delai-de-reparation.component.scss'],
 encapsulation:ViewEncapsulation.None
})
export class DelaiDeReparationComponent implements OnInit {

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
   constructor(private http:HttpClient) {
}
  ngOnInit(): void {
    this.http.get<any>(this.Url).subscribe(data => {
      this.data = data ;
    for(let i in data ){
      if(data[i].dureePanne<0){
        this.obj={
          name : data[i].machine,
          value :(((data[i].dureePanne/data[i].nbrpanne)*-1)/60)
      }
    }

  else
  {
    this.obj={
      name : data[i].machine,
      value :((data[i].dureePanne/data[i].nbrpanne)/60)
  }
     
      }
      this.tab.push(this.obj);
      this.tab1.push(this.obj.name)
      this.tab2.push(this.obj.value)
    
    console.log(this.tab1)
  // Apex Column Chart
  this.apexColumnChart = {
    series: [
    
      {
        name:'duree',
        data: this.tab2
      
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
      title: {
        text: 'Machine'
      },
      categories: this.tab1
    },
    yaxis: {
      title: {
        text: 'Duree'
      },
      decimalsInFloat:0, 
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '';
        }
      }
    }
  };
}
  }
    )}

}
