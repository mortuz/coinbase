import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const min = 300;
    // const max = 3600;
    // const mainmin = 200;
    // $('collapse-section--left').mousedown(function(e) {
    //   e.preventDefault();
    //   console.log(e);
    //   $(document).mousemove(function(e) {
    //     e.preventDefault();
    //     const x = e.pageX - $('#sidebar').offset().left;
    //     if (x > min && x < max && e.pageX < $(window).width() - mainmin) {
    //       $('#sidebar').css('width', x);
    //       $('#main').css('margin-left', x);
    //     }
    //   });
    // });
    // $(document).mouseup(function (e) {
    //   $(document).unbind('mousemove');
    // });
  }

}
