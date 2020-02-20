import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PacketserviceService {

  result;

  constructor(private web3: EthcontractService, private datePipe: DatePipe) {
    //  this.editacc('Packet1 @gmail.com', 3);
    // console.log('sexy')

  }

  insertPacket(packetId, orderId,boxId): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setPacketvalue()
      .then(async (deployed: {
        insertPacket: (arg0: string, arg1: string, arg3: string, arg4: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          this.result = await deployed.insertPacket(packetId, orderId, boxId, { from: this.web3.curentaccount })
        } catch (error) {
          console.log(error);
        }
        if (this.result != null) {
          console.log(this.result)
          dt(this.result.logs[0].args.packetId);
        } else {
          er('packet alredy in system');
          console.log(this.result)
        }
      });
    });
  }


  async getPacketi(index) {
    await this.web3.getPacketvalue().getPacketi(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getPacket(email) {
    await this.web3.getPacketvalue().getPacket(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getPacketDistributori(email) {
    await this.web3.getPacketvalue().getPacket(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getOrder(email) {
    await this.web3.getPacketvalue().getOrder(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getLastPacket() {
    await this.web3.getPacketvalue().getLastPacket().call((er: any, ev: any) => {
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

  async insertOrder(orderId, qunt) {
    return new Promise((dt, er) => {
      this.web3.setPacketvalue()
        .then(async (deployed: {
          insertOrder: (arg0: string, arg1: string, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.insertOrder(orderId, qunt, { from: this.web3.curentaccount })
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