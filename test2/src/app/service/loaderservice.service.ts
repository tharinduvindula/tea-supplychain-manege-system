import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';


@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {
  result;

  constructor(private web3: EthcontractService) {
  }

  async getLoaderCount() {
    console.log(this.web3.getLoadervalue)
    await this.web3.getLoadervalue().getLoaderCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertLoader(email, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {this.web3.setLoadervalue()
      .then(async (deployed: { insertLoader: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
     {er: string; ev: string; }}) => {
      try {
        this.result = await deployed.insertLoader(email, name, adress, telepone, { from: this.web3.curentaccount })
      } catch (error) {
        console.log('error');
      }
        if (this.result != null){
          dt(this.result.logs[0].args.name);
      } else {
        er('user alredy in system');
        console.log(this.result)
      }
    });});
  }
  updateLoaderName(email, name): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
      .then(async (deployed: {
        updateLoaderName: (arg0: string, arg1: string, arg2: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          this.result = await deployed.updateLoaderName(email, name , { from: this.web3.curentaccount })
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
  updateLoaderAddress(email, address): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
        .then(async (deployed: {
          updateLoaderAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateLoaderAddress(email, address, { from: this.web3.curentaccount })
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
  updateLoaderContactNumber(email, telephone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
        .then(async (deployed: {
          updateLoaderContactNumber: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateLoaderContactNumber(email, telephone, { from: this.web3.curentaccount })
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
  updateLoader(email,index, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
        .then(async (deployed: {
          updateLoader: (arg0: string,arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateLoader(email,index, name, adress, telepone ,{ from: this.web3.curentaccount })
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
  deleteLoader(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
        .then(async (deployed: {
          deleteLoader: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteLoader(email,{ from: this.web3.curentaccount })
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
  blockLoader(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setLoadervalue()
      .then(async (deployed: {
        blockLoader: (arg0: string, arg4: { from: string; }) => any }) => {
        try {
          this.result = await deployed.blockLoader(email, { from: this.web3.curentaccount })
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

  async getLoaderi(index) {
    await this.web3.getLoadervalue().getLoaderi(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getLoader(email) {
    await this.web3.getLoadervalue().getLoader(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getLoaderToken(email) {
    await this.web3.getLoadervalue().getLoaderToken(email).call((er: any, ev: any) => {
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
      this.web3.setLoadervalue()
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
