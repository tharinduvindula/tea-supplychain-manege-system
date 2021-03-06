import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';


@Injectable({
  providedIn: 'root'
})
export class DistributorserviceService {
  result;

  constructor(private web3: EthcontractService) {
   // this.editacc('distri1@gmail.com', 5);
    // console.log('sexy')
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
    console.log('hi2')
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
        console.log(error);
      }
        if (this.result != null) {
          console.log(this.result)
          dt(this.result.logs[0].args.name);
      } else {
        er('user alredy in system');
        console.log(this.result)
      }
    }); });
  }
  updateDistributorName(email, name): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
      .then(async (deployed: {
        updateDistributorName: (arg0: string, arg1: string, arg2: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          this.result = await deployed.updateDistributorName(email, name , { from: this.web3.curentaccount })
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
  updateDistributorAddress(email, address): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
        .then(async (deployed: {
          updateDistributorAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateDistributorAddress(email, address, { from: this.web3.curentaccount })
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
  updateDistributorContactNumber(email, telephone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
        .then(async (deployed: {
          updateDistributorContactNumber: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateDistributorContactNumber(email, telephone, { from: this.web3.curentaccount })
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
  updateDistributor(email, index, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
        .then(async (deployed: {
          updateDistributor: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateDistributor(email, index, name, adress, telepone , { from: this.web3.curentaccount })
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
  deleteDistributor(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
        .then(async (deployed: {
          deleteDistributor: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteDistributor(email, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.name);
          } else {
            er('error');
            console.log(this.result)
          }
        });
    });
  }
  blockDistributor(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setDistributorvalue()
      .then(async (deployed: {
        blockDistributor: (arg0: string, arg4: { from: string; }) => any }) => {
        try {
          this.result = await deployed.blockDistributor(email, { from: this.web3.curentaccount })
        } catch (error) {
          console.log(error);
        }
        if (this.result != null) {
          dt(this.result.logs);
          console.log(this.result);
        } else {
          // er('user alredy in system');
          console.log(this.result)
        }
      });
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
  async getDistributor(email) {
    await this.web3.getDistributorvalue().getDistributor(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getDistributorToken(email) {
    await this.web3.getDistributorvalue().getDistributorToken(email).call((er: any, ev: any) => {
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
      this.web3.setDistributorvalue()
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
