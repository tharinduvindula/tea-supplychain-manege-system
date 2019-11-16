import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorserviceService {
  result;

  constructor(private web3: EthcontractService) {
  }

  async getDistributorCount() {
    await this.web3.getDistributorvalue().getDistributorCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertDistributor(email, name) {
    // tslint:disable-next-line: max-line-length
    this.web3.setDistributorvalue().then((deployed: { insertDistributor: (arg0: string, arg1: string, arg2: { from: string; }) => void; }) => {
      deployed.insertDistributor(email, name, { from: this.web3.curentaccount });
    });
  }

  async getDistributori(index) {
    await this.web3.getDistributorvalue().getDistributori(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
}
