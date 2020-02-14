import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';


@Injectable({
  providedIn: 'root'
})
export class ManagerserviceService {
  result;

  constructor(private web3: EthcontractService) {
     // this.editacc('manager1@gmail.com',5)
  }

  async getManagerCount() {
    await this.web3.getManagervalue().getManagerCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getManagerToken(email) {
    await this.web3.getManagervalue().getManagerToken(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertManager(email, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
      .then(async (deployed: {
        insertManager: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          this.result = await deployed.insertManager(email, name, adress, telepone, { from: this.web3.curentaccount })
        } catch (error) {
          console.log(error);
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
  updateManagerName(email, name): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          updateManagerName: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateManagerName(email, name, { from: this.web3.curentaccount })
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
  updateManagerAddress(email, address): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          updateManagerAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateManagerAddress(email, address, { from: this.web3.curentaccount })
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
  updateManagerContactNumber(email, telephone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          updateManagerContactNumber: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateManagerContactNumber(email, telephone, { from: this.web3.curentaccount })
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
  updateManager(email, index, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          updateManager: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateManager(email, index, name, adress, telepone, { from: this.web3.curentaccount })
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
  deleteManager(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          deleteManager: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteManager(email, { from: this.web3.curentaccount })
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
  blockManager(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          blockManager: (arg0: string, arg4: { from: string; }) => any
        }) => {
          try {
            this.result = await deployed.blockManager(email, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  async getManageri(index) {
    await this.web3.getManagervalue().getManageri(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getManager(email) {
    await this.web3.getManagervalue().getManager(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  editacc(email, acc): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setManagervalue()
        .then(async (deployed: {
          editUserAccess: (arg0: string, arg1: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            console.log(deployed.editUserAccess)
            this.result = await deployed.editUserAccess(email, acc, { from: this.web3.curentaccount })
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
