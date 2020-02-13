import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import '../../../assets/js/world_countries';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  boralesgamuwa = 55;
  colombo = 125;
  dehiwalamtlavinia = 95;
  homagama = 45;
  kaduwela = 85;
  kolonnawa = 65;
  kotikawatte = 35;
  maharagama = 15;
  moratuwa = 85;
  seethawaka = 65;
  seethawakapura = 145;
  srijayewardenapurakotte = 35;
  kesbewa = 5;
  constructor() { }

  ngOnInit() {
    $('.mapcontainer').mapael({
      map: {
        name: 'world_countries',
        defaultArea: {
          attrs: {
            stroke: '#fff',
            'stroke-width': 0.75
          },
          attrsHover: {
            'stroke-width': 1.5
          }
        }
      },
      legend: {
        area: {
          title: 'Selling of tea',
          slices: [
            {
              max: 25,
              attrs: {
                fill: '#BBDEFB'
              },
              label: 'Less than the 25 Deths'
            },
            {
              min: 25,
              max: 50,
              attrs: {
                fill: '#42A5F5'
              },
              label: 'Between 25 and 50 Deths'
            },
            {
              min: 50,
              max: 75,
              attrs: {
                fill: '#1E88E5'
              },
              label: 'Between 50 and 75 Deths'
            },
            {
              min: 75,
              max: 100,
              attrs: {
                fill: '#1976D2'
              },
              label: 'Between 75 and 100 Deths'
            },
            {
              min: 100,
              attrs: {
                fill: '#1F65C0'
              },
              label: 'More than 100 Deths'
            }
          ]
        }
      },
      areas: {
        'CA': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa }
        },
        'AU': {
          value: this.maharagama,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.maharagama }
        },
        'US': {
          value: this.maharagama,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.maharagama }
        },
        'SA': {
          value: this.maharagama,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.maharagama }
        },
        'NZ': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa }
        },
        'UK': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa }
        },
        'RU': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa }
        },
        'GB': {
          value: this.boralesgamuwa,
          tooltip: { content: '<span style="font-weight:bold;">boralesgamuwa </span><br />Deths : ' + this.boralesgamuwa }
        },


      }
    });
  }

}

