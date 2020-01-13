import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import contract from 'truffle-contract';
import { resolveTxt } from 'dns';
import { error } from '@angular/compiler/src/util';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';

declare let require: any;
declare let window: any;
declare let l: number;

const Tx = require('ethereumjs-tx');
const tokenAbi = require('../../../build/contracts/Login.json');
const adminAbi = require('../../../build/contracts/AdminContract.json');
const distributorAbi = require('../../../build/contracts/DistributorContract.json');
const loaderAbi = require('../../../build/contracts/LoaderContract.json');
const managerAbi = require('../../../build/contracts/ManagerContract.json');
const supervisorAbi = require('../../../build/contracts/SupervisorContract.json');
const estateAbi = require('../../../build/contracts/EstateContract.json');
const productAbi = require('../../../build/contracts/ProductContract.json');
const orderAbi = require('../../../build/contracts/OrderContract.json');



@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider:any;
  private web3: any;
  private contracts: {};
  private privateKey = Buffer.from('5dab5f22099b221e8a314ce3813bb478dd0d8ef5dbb87b8d974aaab44cddcacb', 'hex');
  public curentaccount = '0x8B17D2D7F1ac19A2B27Ac45cF09A2b1b022D6dD6';
  result;



  

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3('http://localhost:7545');
    }

    this.web3 = new Web3(this.web3Provider);
    // this.get();
   // this.set();
    this.setDistributorvalue();
  }

  async login({ _userName, _password }: { _userName; _password; }): Promise<any> {
    const Sc = new this.web3.eth.Contract(tokenAbi.abi, '0xe87A136d95C3c3Dc31Abb0096886B8aa49D402b9');
    // tslint:disable-next-line: no-shadowed-variable
    return  await new Promise((data, error) => { Sc.methods.login(_userName, _password, 1).call((er: any, ev: any) => {
      if (er != null) {
        console.log(er)
        error(((er.message + '').split(':', 3)[2]).split('revert')[1]);
      }

      data(ev);
    })});
  }

  async frogetPassword({ _userName }: { _userName; }): Promise<any> {
    const Sc = new this.web3.eth.Contract(tokenAbi.abi, '0xe87A136d95C3c3Dc31Abb0096886B8aa49D402b9');
    // tslint:disable-next-line: no-shadowed-variable
    return await new Promise((data, error) => {
      Sc.methods.frogetPassword(_userName, 1).call((er: any, ev: any) => {
        if (er != null) {
          console.log(er)
          error(((er.message + '').split(':', 3)[2]).split('revert')[1]);
        } else {
          if (ev[1] === '11') {
            this.setAdminvalue().then(async (deployed: {
              createAdminToken: (arg0: string, arg1: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.createAdminToken(_userName,{ from: this.curentaccount });
                console.log(this.result)
                this.getAdminvalue().getAdminToken(_userName).call((re: any, ve: any) => {
                  if (er == null) {
                    this.result = ve;
                    data(this.result);
                  } else {
                    this.result = re;
                    console.log(er);
                  }
                });
              } catch (error) {
                console.log(error);
              }
            });
          } else if (ev[1] === '12') {
            this.setManagervalue().then(async (deployed: {
              createManagerToken: (arg0: string, arg2: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.createManagerToken(_userName, { from: this.curentaccount })
                this.getManagervalue().getMangerToken(_userName).call((re: any, ve: any) => {
                  if (er == null) {
                    this.result = ve;
                    data(this.result);
                  } else {
                    this.result = re;
                    console.log(er);
                  }
                });
              } catch (error) {
                console.log(error);
              }
              data(this.result);
            });
          }
        }
      })
    });
  }
  async passwordReset({ _userName,_password,_token }: { _userName;_password;_token }): Promise<any> {
    const Sc = new this.web3.eth.Contract(tokenAbi.abi, '0xe87A136d95C3c3Dc31Abb0096886B8aa49D402b9');
    // tslint:disable-next-line: no-shadowed-variable
    return await new Promise((data, error) => {
      Sc.methods.resetPassword(_userName, _token, 1).call((er: any, ev: any) => {
        if (er != null) {
          console.log(er)
          error(((er.message + '').split(':', 3)[2]).split('revert')[1]);
        } else {
          if (ev[1] === '11') {
            this.setAdminvalue().then(async (deployed: {
              setPassword: (arg0: string, arg1: string, arg2: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.setPassword(_userName, _password, { from: this.curentaccount })
                data(this.result);
              } catch (error) {
                console.log('error');
              }
            });

          } else if (ev[1] === '12') {
            this.setManagervalue().then(async (deployed: {
              setPassword: (arg0: string, arg1: string, arg2: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.setPassword(_userName, _password, { from: this.curentaccount })
              } catch (error) {
                console.log('error');
              }
            });
          }
          
        }
      })
    });
  }
  async registation({ _userName, _password, _token }: { _userName; _password; _token }): Promise<any> {
    const Sc = new this.web3.eth.Contract(tokenAbi.abi, '0xe87A136d95C3c3Dc31Abb0096886B8aa49D402b9');
    // tslint:disable-next-line: no-shadowed-variable
    return await new Promise((data, error) => {
      Sc.methods.registation(_userName, _token, 1).call((er: any, ev: any) => {
        if (er != null) {
          console.log(er)
          error(((er.message + '').split(':', 3)[2]).split('revert')[1]);
        } else {
          if (ev[1] === 11) {
            this.setAdminvalue().then(async (deployed: {
              setPassword: (arg0: string, arg1: string, arg2: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.setPassword( _userName, _password, { from: this.web3.curentaccount })
              } catch (error) {
                console.log(error);
              }
            });

          } else if (ev[1] === 12) {
            this.setManagervalue().then(async (deployed: {
              setPassword: (arg0: string, arg1: string, arg2: { from: string; }) =>
                { er: string; ev: string; }
            }) => {
              try {
                this.result = await deployed.setPassword(_userName, _password, { from: this.web3.curentaccount })
              } catch (error) {
                console.log(error);
              }
            });
          }
          data(ev);
        }
      })
    });
  }



  // get() {
  //    const MyContract = contract(tokenAbi);
  //    MyContract.setProvider(this.web3.currentProvider);
  //   const Xc = new this.web3.eth.Contract(tokenAbi.abi, '0x8bB9d8E4600FD16912b9ad12C57589b4B7705C33');
  //   // Xc.methods.setu(125).call((er, ev) => {
  //   //   console.log(ev);
  //   // });
  //   let i: number;
  //   Xc.methods.getUserCount().call((er: any, ev: number) => {
  //     if (er == null) {
  //       console.log(ev);
  //       if (ev < 10) {
  //         setTimeout(() => this.set(), 3000);
  //       }
  //       return ev;
  //     } else {
  //       console.log(er);
  //     }
  //   });

  //   for (i = 0; i < Xc.methods.getUserCount().call((er: any, ev: number) => {return ev; }); i++) {
  //   Xc.methods.getAdmini(i).call((er: any, ev: any) => {
  //     if (er == null) {
  //       console.log(ev);
  //     } else {
  //       console.log(er);
  //     }
  //   });
  //   }
  //   // MyContract.deployed().then(deployed => {
  //   //   deployed.set(('hi'), (er) => {
  //   //     console.log('Transfer event came in, refreshing balance');
  //   //   });
  //   //   deployed.get((er, ev) => {
  //   //     console.log(ev);
  //   //     console.log('Transfer event came in, refreshing balance');
  //   //   });
  //   // });
  // }

  set() {
    /*const token = new this.web3.eth.Contract(tokenAbi.abi, '0xc382F0cDa16Ea3030132911BA33EEb3C901498f5');
    const data = token.methods.set('hi').encodeABI();
    this.web3.eth.getTransactionCount('0x94b19125bd7A34722e482ebFC020aa403A8E35CF',
     (err , txCount) => {

        // create Transaction
        const txObject = {
          nonce: this.web3.utils.toHex(txCount),
          gasLimit: this.web3.utils.toHex(100000000),
          gasPrize: this.web3.utils.toHex(this.web3.utils.toWei('10', 'gwei' ) ),
          to: '0xc382F0cDa16Ea3030132911BA33EEb3C901498f5',
          value: '0x00',
          data : data
        }
     //   console.log(txCount);

        // sign Transaction

       const tx = new Tx(txObject);
       tx.sign(this.privateKey);
       console.log(this.privateKey);
       const serializedTx = tx.serialize();

       const raw = '0X' + serializedTx.toString('hex');
     //  console.log(tx)
      // console.log(serializedTx)
       // console.log(raw)

        // brodcast Transaction

        // tslint:disable-next-line: no-shadowed-variable
       this.web3.eth.sendSignedTransaction( raw, (err: any, txHash: any) => {
          console.log('error:', err, ' txHash: ', txHash);
        })

    });*/
    this.web3.eth.defaultAccount = this.web3.eth.accounts[0]
    const MyContract = contract(adminAbi);
    MyContract.setProvider(this.web3.currentProvider);
    // const token = new this.web3.eth.Contract(adminAbi.abi, '0x02276f676c66273695850ef1712D25aee963f838');
    MyContract.deployed().then((deployed: { insertAdmin: (arg0: string, arg1: string, arg2: { from: string; }) => string; }) => {
      let i: string | number;
      for ( i = 0; i < 100; i++) {
        const s = 'tharinduvindulatharinduvindula' + i + '@gmail.com';
        deployed.insertAdmin(s, 'j.k.a. tharindu vindula tharindu vindula', { from: '0x8B17D2D7F1ac19A2B27Ac45cF09A2b1b022D6dD6' });
        console.log('s' + i);
      }
    });
  }

  setManagervalue() {
    const MyContract = contract(managerAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getManagervalue() {
    const MyContract = contract(managerAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(managerAbi.abi, '0x8bB9d8E4600FD16912b9ad12C57589b4B7705C33');
    return Xc.methods;
  }

  setAdminvalue() {
    const MyContract = contract(adminAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getAdminvalue() {
    const MyContract = contract(adminAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(adminAbi.abi, '0x02276f676c66273695850ef1712D25aee963f838');
    return Xc.methods;
  }

  setDistributorvalue() {
    const MyContract = contract(distributorAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed();
  }

  getDistributorvalue() {
    const MyContract = contract(distributorAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(distributorAbi.abi, '0xf11264130D90298b8526C19d03Ff12B94C4493aA');
    return Xc.methods;
  }

  setSupervisorvalue() {
    const MyContract = contract(supervisorAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getSupervisorvalue() {
    const MyContract = contract(supervisorAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(supervisorAbi.abi, '0xdbeD56E869bB860a557487D3Aaf149e322C5f7cA');
    return Xc.methods;
  }

  setLoadervalue() {
    const MyContract = contract(loaderAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getLoadervalue() {
    const MyContract = contract(loaderAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(loaderAbi.abi, '0x2Fe9d9eAA82a3644E8854e7992B9AE6249e9BA14');
    return Xc.methods;
  }

  setEstatevalue() {
    const MyContract = contract(estateAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getEstatevalue() {
    const MyContract = contract(estateAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(estateAbi.abi, '0x747F4dd9c0d54fFDd3bC9d0c2B2C4a5005eAC5Ae');
    return Xc.methods;
  }

  setProductvalue() {
    const MyContract = contract(productAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getProductvalue() {
    const MyContract = contract(productAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(productAbi.abi, '0x20Cd60900a0a5f6768438e3c7dfdfca44FB2C6c8');
    return Xc.methods;
  }

  setOdervalue() {
    const MyContract = contract(orderAbi);
    MyContract.setProvider(this.web3.currentProvider);
    return MyContract.deployed()
  }

  getOrdervalue() {
    const MyContract = contract(orderAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(orderAbi.abi, '0xce883daB393343E527773CD58e55f4570c9A86eF');
    return Xc.methods;
  }

}
