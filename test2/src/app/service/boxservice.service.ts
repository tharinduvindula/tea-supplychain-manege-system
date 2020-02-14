import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BoxserviceService {
result;

  constructor(private web3: EthcontractService, private datePipe: DatePipe) {
    //  this.editacc('Box1 @gmail.com', 3);
    // console.log('sexy')

  }

  insertBox(boxId,orderId): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {this.web3.setBoxvalue()
      .then(async (deployed: { insertBox: (arg0: string, arg1: string, arg4: { from: string; }) =>
     {er: string; ev: string; }}) => {
      try {
        this.result = await deployed.insertBox( boxId, orderId, { from: this.web3.curentaccount })
      } catch (error) {
        console.log(error);
      }
        if (this.result != null) {
          console.log(this.result)
          dt(this.result.logs[0].args.boxId);
      } else {
        er('box alredy in system');
        console.log(this.result)
      }
    }); });
  }
  

  async getBoxi(index) {
    await this.web3.getBoxvalue().getBoxi(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getBox(email) {
    await this.web3.getBoxvalue().getBox(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getBoxDistributori(email) {
    await this.web3.getBoxvalue().getBox(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getOrder(email) {
    await this.web3.getBoxvalue().getBox(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getLastBox() {
    await this.web3.getBoxvalue().getLastBox().call((er: any, ev: any) => {
      if (er == null) {
        if (ev === '0') {
          this.result = this.datePipe.transform(new Date(), 'yyyyMMdd') + '#10000000000';
        } else {
          this.result = ev;
        }
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  async insertOrder(orderId, qunt){
    return new Promise((dt, er) => {
      this.web3.setBoxvalue()
      .then(async (deployed: {
        insertOrder: (arg0: string, arg1: number, arg4: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          this.result = await deployed.insertOrder( orderId, qunt, { from: this.web3.curentaccount });
          console.log(orderId +' '+ qunt)
        } catch (error) {
          console.log(error);
        }
        if (this.result != null) {
          console.log(this.result)
          dt(this.result.logs[0]);
        } else {
          er('order alredy in system');
          console.log(this.result)
        }
      });
    });
  }

}
