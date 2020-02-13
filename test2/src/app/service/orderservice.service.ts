import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  result;

  constructor(private web3: EthcontractService) {
    // this.editacc('distributor2@gmail.com', 3);
    // console.log('sexy')
  }

  async getOrderCount() {
    console.log(this.web3.getOrdervalue)
    await this.web3.getOrdervalue().getOrderCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertOrder(orderName, progress, _quntity, productName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          insertOrder: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.insertOrder(orderName, progress, _quntity, productName, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            console.log(this.result)
            dt(this.result.logs[0].args.orderName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateOrderAddress(orderName, orderAddress): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          updateOrderOrderAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateOrderOrderAddress(orderName, orderAddress, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.orderName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateOrderOwnerName(orderName, ownerName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          updateOrderOwnerName: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateOrderOwnerName(orderName, ownerName, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.orderName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateOrderContactnumberAndEmail(orderName, contactnumberAndEmail): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          updateContactnumberAndEmail: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateContactnumberAndEmail(orderName, contactnumberAndEmail, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.orderName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateOrder(orderName, index, orderAddress, ownerName, contactnumberAndEmail): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          updateOrder: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.updateOrder(orderName, index, orderAddress, ownerName, contactnumberAndEmail, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.orderName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  deleteOrder(orderName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          deleteOrder: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteOrder(orderName, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.name);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  async getOrderi(index) {
    await this.web3.getOrdervalue().getOrderi(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  async getOrder(orderName) {
    await this.web3.getOrdervalue().getOrder(orderName).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  editacc(orderName, acc): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setOrdervalue()
        .then(async (deployed: {
          editUserAccess: (arg0: string, arg1: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            console.log(deployed.editUserAccess)
            this.result = await deployed.editUserAccess(orderName, acc, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            console.log(this.result)
          } else {
            console.log(this.result)
          }
        });
    });
  }
}
