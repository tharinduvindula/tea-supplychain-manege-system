import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  result;

  constructor(private web3: EthcontractService) {
 // this.insertAdmin('a','t', 't#', 5555);
    //  this.editacc('admin1@gmail.com',5);
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

  insertAdmin(email, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
      .then(async (deployed: {
        insertAdmin: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          console.log(deployed.insertAdmin)
          this.result = await deployed.insertAdmin(email, name, adress, telepone, { from: this.web3.curentaccount })
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
      });
    });
  }
  updateAdminName(email, name): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          updateAdminName: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateAdminName(email, name, { from: this.web3.curentaccount })
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
  updateAdminAddress(email, address): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          updateAdminAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateAdminAddress(email, address, { from: this.web3.curentaccount })
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
  updateAdminContactNumber(email, telephone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          updateAdminContactNumber: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateAdminContactNumber(email, telephone, { from: this.web3.curentaccount })
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
  updateAdmin(email, index, name, adress, telepone): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          updateAdmin: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateAdmin(email, index, name, adress, telepone, { from: this.web3.curentaccount })
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
  deleteAdmin(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          deleteAdmin: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteAdmin(email, { from: this.web3.curentaccount })
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
  blockAdmin(email): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          blockAdmin: (arg0: string, arg4: { from: string; }) => any
        }) => {
          try {
            this.result = await deployed.blockAdmin(email, { from: this.web3.curentaccount })
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

  async getAdmini(index) {
    console.log(index)
    await this.web3.getAdminvalue().getAdmini(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getAdminToken(email) {
    await this.web3.getAdminvalue().getAdminToken(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async getAdmin(email) {
    await this.web3.getAdminvalue().getAdmin(email).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }
  async isUserAdmin(email) {
    // await this.web3.getAdminvalue().isAdminx(email).call((er: any, ev: any) => {
    //   if (er == null) {
    //     this.result = ev;
    //   } else {
    //     this.result = er;
    //   }
    // });
    return await new Promise((data1, error) => {
      this.web3.getAdminvalue().isAdminx(email).call((er: any, ev: any) => {
        if (er != null) {
          console.log(er)
          error('not user');
        }

        data1(ev);
      })
    });
  }

  editacc(email, acc): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setAdminvalue()
        .then(async (deployed: {
          editUserAccess: (arg0: string, arg1: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            console.log(deployed.editUserAccess)
            this.result = await deployed.editUserAccess(email, acc,  { from: this.web3.curentaccount })
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
