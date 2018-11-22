import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Chart } from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  chart = [];
  @ViewChild('canvas') canvas: ElementRef;
  rightSidebarWidth = 325;
  leftSidebarWidth = 330;
  shouldMoveRightSidebar = false;
  shouldMoveLeftSidebar = false;
  maxLeftSidebarWidth = 464;
  maxRightSidebarWidth = 400;

  constructor() { }

  ngOnInit() {
    $('.dashboard__column--left').width(this.leftSidebarWidth);

    $('.dashboard__column--right').width(this.rightSidebarWidth);

    $('.dahsboard__main').css({ width: ($(window).width() - this.rightSidebarWidth - this.leftSidebarWidth) + 'px' });
    this.loadChart();
  }

  loadChart() {
    const chartColor = '#FFFFFF';

    // General configuration for the charts with Line gradientStroke
    const gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      bezierCurve: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            display: 0,
            // gridLines: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            display: 0,
            // gridLines: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: { left: 0, right: 0, top: 15, bottom: 15 }
      }
    };
    const canvas = this.canvas.nativeElement;

    const ctx = canvas.getContext('2d');

    let gradientStroke;

    gradientStroke = ctx.createLinearGradient(600, 0, 100, 0.1);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill;

    gradientFill = ctx.createLinearGradient(0, 600, 0, 350);
    gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0.2)');
    gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'BTC',
          borderColor: '#f96332',
          pointBorderColor: '#FFF',
          pointBackgroundColor: '#f96332',
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  }

  _windowResized() {
    this.__setMainContentWidth();
  }
  onLeftCollapseMouseDown(e) {
    this.shouldMoveLeftSidebar = true;
  }
  onRightCollapseMouseDown(e) {
    this.shouldMoveRightSidebar = true;
  }

  resizeLeftSidebar(e) {
    if (this.shouldMoveLeftSidebar) {
      const width = e.x;
      if (width <= this.maxLeftSidebarWidth) {
        this.leftSidebarWidth = e.x;
        $('.dashboard__column--left').width(this.leftSidebarWidth);
        this.__setMainContentWidth();

      }
    }
  }
  resizeRightSidebar(e) {
    if (this.shouldMoveRightSidebar) {
      const width = $(window).width() - e.x;

      if (width <= 400) {
        this.rightSidebarWidth = $(window).width() - e.x;
        $('.dashboard__column--right').width(this.rightSidebarWidth);
        this.__setMainContentWidth();
      }
    }
  }

  __setMainContentWidth() {
    $('.dashboard__main').width($(window).width() - this.rightSidebarWidth - this.leftSidebarWidth);
    $('canvas').width($(window).width() - this.leftSidebarWidth - this.rightSidebarWidth);
  }

  @HostListener('window:resize') onResize() {this._windowResized(); }
  @HostListener('document:mousemove', ['$event']) onMouuseMove(e) {
    if (this.shouldMoveLeftSidebar) {
      this.resizeLeftSidebar(e);
    } else if (this.shouldMoveRightSidebar) {
      this.resizeRightSidebar(e);
    }
  }
  @HostListener('document:mouseup', ['$event']) onMouuseUp(e) {
    this.shouldMoveLeftSidebar = this.shouldMoveRightSidebar = false;
  }
}
