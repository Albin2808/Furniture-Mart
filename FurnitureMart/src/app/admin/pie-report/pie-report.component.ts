import { Component,ElementRef,ViewChild } from '@angular/core';
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-pie-report',
  templateUrl: './pie-report.component.html',
  styleUrls: ['./pie-report.component.scss']
})
export class PieReportComponent {
  public requestdataarray: any[] = [];
  constructor(private db: DbserviceService) { }
  public Chart!: Chart;
  chart:any;
  @ViewChild('myChart') myChart!: ElementRef;

  ngOnInit(): void {
    this.db.categoryviewpie().then((data: any) => {
      this.requestdataarray = data;
      this.createChart();
    });
  }
  createChart() {
    const chartData = {
      labels: this.requestdataarray.map(item => item.categoryname),
      datasets: [{
        data: this.requestdataarray.map(item => item.categoryid),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
      }],
    };

    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'pie',
      data: chartData,
      options: { aspectRatio:2.5 }
    });
  }
}



