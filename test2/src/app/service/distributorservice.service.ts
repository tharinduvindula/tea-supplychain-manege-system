import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistributorserviceService {
  result;

  constructor(private web3: EthcontractService) {
  }

  async getAdminCount() {
    await this.web3.getAdminvalue().getAdminCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertAdmin(email, name) {
    this.web3.setAdminvalue().then((deployed: { insertAdmin: (arg0: string, arg1: string, arg2: { from: string; }) => void; }) => {
      deployed.insertAdmin(email, name, { from: this.web3.curentaccount });
    });
  }

  async getDistributori(index) {
    await this.web3.getAdminvalue().getAdmini(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
}
