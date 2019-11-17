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
    console.log(this.web3.getDistributorvalue)
    await this.web3.getDistributorvalue().getDistributorCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertDistributor(email, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {this.web3.setDistributorvalue()
      .then(async (deployed: { insertDistributor: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
     {er: string; ev: string; }}) => {
      try {
        this.result = await deployed.insertDistributor(email, name, adress, telepone, { from: this.web3.curentaccount })
      } catch (error) {
        console.log('error');
      }
        if (this.result != null){
        this.sendPasswordResetLink(this.result.logs[0].args.email, this.result.logs[0].args.passwordRestToken);
          dt(this.result.logs[0].args.name);
      } else {
        er('user alredy in system');
        console.log(this.result)
      }
    });});
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
  sendPasswordResetLink( _email,_data) {
    console.log(_data + '   ' +_email);
    return true;
  }
}
