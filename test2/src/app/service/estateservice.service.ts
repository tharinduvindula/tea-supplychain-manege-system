import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';

@Injectable({
  providedIn: 'root'
})
export class EstateserviceService {
  result;

  constructor(private web3: EthcontractService) {
    // this.editacc('distributor2@gmail.com', 3);
    // console.log('sexy')
  }

  async getEstateCount() {
    console.log(this.web3.getEstatevalue)
    await this.web3.getEstatevalue().getEstateCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertEstate(estateName, estateAddress, ownerName, contactnumberAndEmail): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
      .then(async (deployed: {
        insertEstate: (arg0: string, arg1: string, arg2: string, arg3: string, arg4: { from: string; }) =>
          { er: string; ev: string; }
      }) => {
        try {
          // tslint:disable-next-line: max-line-length
          this.result = await deployed.insertEstate(estateName, estateAddress, ownerName, contactnumberAndEmail, { from: this.web3.curentaccount })
        } catch (error) {
          console.log(error);
        }
        if (this.result != null) {
          console.log(this.result)
          dt(this.result.logs[0].args.estateName);
        } else {
          er('user alredy in system');
          console.log(this.result)
        }
      });
    });
  }

  updateEstateAddress(estateName, estateAddress): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          updateEstateEstateAddress: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateEstateEstateAddress(estateName, estateAddress, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.estateName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateEstateOwnerName(estateName, ownerName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          updateEstateOwnerName: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateEstateOwnerName(estateName, ownerName, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.estateName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateEstateContactnumberAndEmail(estateName, contactnumberAndEmail): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          updateContactnumberAndEmail: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateContactnumberAndEmail(estateName, contactnumberAndEmail, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.estateName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateEstate(estateName, index, estateAddress, ownerName, contactnumberAndEmail): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          updateEstate: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: string, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.updateEstate(estateName, index, estateAddress, ownerName, contactnumberAndEmail, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.estateName);
          } else {
            er('user alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  deleteEstate(estateName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          deleteEstate: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteEstate(estateName, { from: this.web3.curentaccount })
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

  async getEstatei(index) {
    await this.web3.getEstatevalue().getEstatei(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  async getEstate(estateName) {
    await this.web3.getEstatevalue().getEstate(estateName).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  editacc(estateName, acc): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setEstatevalue()
        .then(async (deployed: {
          editUserAccess: (arg0: string, arg1: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            console.log(deployed.editUserAccess)
            this.result = await deployed.editUserAccess(estateName, acc, { from: this.web3.curentaccount })
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
