import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mapael';
import '../../../assets/js/world_countries';
import { OrderserviceService } from 'app/service/orderservice.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  America = 0;
  Australia = 0;
  England = 0;
  Canada = 0;
  NewZeland = 0;
  Rusia = 0;
  Saudhi = 0;
  SriLanka = 0;
  constructor(private service: OrderserviceService) { }


  async create() {
    let x;
    let i;
    await this.service.getOrderCount().then(val => x = val)


    for (i = 0; i < x; i++) {
      await this.service.getOrderi(i).then(async val => {

        if (val[1].split('#')[2] === 'US') {
          this.America = this.America + val[4] * 20;
        } else if (val[1].split('#')[2] === 'AI') {
          this.Australia = this.Australia + val[4] * 20;
        } else if (val[1].split('#')[2] === 'GB') {
          this.England = this.England + val[4] * 20;
        } else if (val[1].split('#')[2] === 'CA') {
          this.Canada = this.Canada + val[4] * 20;
        } else if (val[1].split('#')[2] === 'NZ') {
          this.NewZeland = this.NewZeland + val[4] * 20;
        } else if (val[1].split('#')[2] === 'RU') {
          this.Rusia = this.Rusia + val[4] * 20;
        } else if (val[1].split('#')[2] === 'SA') {
          this.Saudhi = this.Saudhi + val[4] * 20;
        } else if (val[1].split('#')[2] === 'LK') {
          this.SriLanka = this.SriLanka + val[4] * 20;
        }
      });
    }
  }

  async ngOnInit() {
    await this.create();
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
              label: 'Less than the 25 Packets'
            },
            {
              min: 25,
              max: 50,
              attrs: {
                fill: '#42A5F5'
              },
              label: 'Between 25 and 50 Packets'
            },
            {
              min: 50,
              max: 75,
              attrs: {
                fill: '#1E88E5'
              },
              label: 'Between 50 and 75 Packets'
            },
            {
              min: 75,
              max: 100,
              attrs: {
                fill: '#1976D2'
              },
              label: 'Between 75 and 100 Packets'
            },
            {
              min: 100,
              attrs: {
                fill: '#1F65C0'
              },
              label: 'More than 100 Packets'
            }
          ]
        }
      },
      areas: {
        'CA': {
          value: this.Canada,
          tooltip: { content: '<span style="font-weight:bold;">Canada </span><br />Packets : ' + this.Canada }
        },
        'AU': {
          value: this.Australia ,
          tooltip: { content: '<span style="font-weight:bold;">Australia  </span><br />Packets : ' + this.Australia }
        },
        'US': {
          value: this.America,
          tooltip: { content: '<span style="font-weight:bold;">America </span><br />Packets : ' + this.America }
        },
        'SA': {
          value: this.Saudhi ,
          tooltip: { content: '<span style="font-weight:bold;"> Saudhi  </span><br />Packets : ' + this.Saudhi }
        },
        'NZ': {
          value: this.NewZeland,
          tooltip: { content: '<span style="font-weight:bold;"> New Zeland </span><br />Packets : ' + this.NewZeland }
        },
        'SL': {
          value: this.SriLanka,
          tooltip: { content: '<span style="font-weight:bold;">Sri Lanaka </span><br />Packets : ' + this.SriLanka }
        },
        'RU': {
          value: this.Rusia,
          tooltip: { content: '<span style="font-weight:bold;">Rusia </span><br />Packets : ' + this.Rusia }
        },
        'GB': {
          value: this.England,
          tooltip: { content: '<span style="font-weight:bold;">England </span><br />Packets : ' + this.England }
        },


      }
    });
  }

}

