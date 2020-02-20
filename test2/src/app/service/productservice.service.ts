import { Injectable } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  result;

  constructor(private web3: EthcontractService) {
    // this.editacc('distributor2@gmail.com', 3);
    // console.log('sexy')
  }

  async getProductCount() {
    console.log(this.web3.getProductvalue)
    await this.web3.getProductvalue().getProductCount().call((er: any, ev: number) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  insertProduct(productName, flaver, packetTypeAndWeight, price): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          insertProduct: (arg0: string, arg1: string, arg2: string, arg3: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.insertProduct(productName, flaver, packetTypeAndWeight, price, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            console.log(this.result)
            dt(this.result.logs[0].args.productName);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateProductFlaver(productName, flaver): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          updateProductFlaver: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateProductFlaver(productName, flaver, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.productName);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateProductPacketTypeAndWeight(productName, packetTypeAndWeight): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          updateProductPacketTypeAndWeight: (arg0: string, arg1: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.updateProductPacketTypeAndWeight(productName, packetTypeAndWeight, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.productName);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateProductPrice(productName, price): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          updateProductPrice: (arg0: string, arg1: number, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.updateProductPrice(productName, price, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.productName);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  updateProduct(productName, index, flaver, packetTypeAndWeight, price): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          updateProduct: (arg0: string, arg1: number[], arg2: string, arg3: string, arg4: number, arg5: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            // tslint:disable-next-line: max-line-length
            this.result = await deployed.updateProduct(productName, index, flaver, packetTypeAndWeight, price, { from: this.web3.curentaccount })
          } catch (error) {
            console.log('error');
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.productName);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  deleteProduct(productName): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          deleteProduct: (arg0: string, arg2: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            this.result = await deployed.deleteProduct(productName, { from: this.web3.curentaccount })
          } catch (error) {
            console.log(error);
          }
          if (this.result != null) {
            dt(this.result.logs[0].args.name);
          } else {
            er('Product alredy in system');
            console.log(this.result)
          }
        });
    });
  }

  async getProducti(index) {
    await this.web3.getProductvalue().getProducti(index).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  async getProduct(productName) {
    await this.web3.getProductvalue().getProduct(productName).call((er: any, ev: any) => {
      if (er == null) {
        this.result = ev;
      } else {
        this.result = er;
      }
    });
    return this.result;
  }

  editacc(productName, acc): Promise<any> {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: no-unused-expression
    return new Promise((dt, er) => {
      this.web3.setProductvalue()
        .then(async (deployed: {
          editUserAccess: (arg0: string, arg1: number, arg4: { from: string; }) =>
            { er: string; ev: string; }
        }) => {
          try {
            console.log(deployed.editUserAccess)
            this.result = await deployed.editUserAccess(productName, acc, { from: this.web3.curentaccount })
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
