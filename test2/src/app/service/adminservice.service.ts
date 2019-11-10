import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import { DISTRIBUTOR } from 'app/models/DISTRIBUTOR';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
result;

  constructor(private web3: EthcontractService ) {
   }

  async getAdminCount() {
    await this.web3.getvalue().getAdminCount().call((er: any, ev: number) => {
      if (er == null) {
         this.result = ev;
      } else {
         this.result = er;
      }
    });
    return this.result;
  }

  insertAdmin(email, name) {
    this.web3.setvalue().then((deployed: { insertAdmin: (arg0: string, arg1: string, arg2: { from: string; }) => void; }) => {
        deployed.insertAdmin(email, name , { from: this.web3.curentaccount });
    });
  }

  async getAdmini(index){
    await this.web3.getvalue().getAdmini(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
}
