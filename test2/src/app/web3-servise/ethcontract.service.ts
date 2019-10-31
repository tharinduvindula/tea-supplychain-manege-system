import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import contract from 'truffle-contract';
import { resolveTxt } from 'dns';
import { error } from '@angular/compiler/src/util';
import { async } from '@angular/core/testing';

declare let require: any;
declare let window: any;
declare let l: number;

const Tx = require('ethereumjs-tx');
const tokenAbi = require('../../../build/contracts/Login.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: null;
  private web3: any;
  private contracts: {};
  private privateKey = Buffer.from('5dab5f22099b221e8a314ce3813bb478dd0d8ef5dbb87b8d974aaab44cddcacb', 'hex');



  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3('http://localhost:7545');
    }

    this.web3 = new Web3(this.web3Provider);
    this.get();
  }

  login(_userName, _password) {
    const Sc = new this.web3.eth.Contract(tokenAbi.abi, '0x8bB9d8E4600FD16912b9ad12C57589b4B7705C33');

    Sc.methods.login(_userName, _password, 1).call((er: any, ev: any) => {
      if (er == null) {
        console.log(ev);
        return ev;
      } else {
        console.log(er);
        return er
      }
    });

  }


  get() {
    // const MyContract = contract(tokenAbi);
    // MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(tokenAbi.abi, '0x8bB9d8E4600FD16912b9ad12C57589b4B7705C33');
    // Xc.methods.setu(125).call((er, ev) => {
    //   console.log(ev);
    // });
    let i: number;
    Xc.methods.getUserCount().call((er: any, ev: number) => {
      if (er == null) {
        console.log(ev);
        if (ev < 10) {
          setTimeout(() => this.set(), 3000);
        }
        return ev;
      } else {
        console.log(er);
      }
    });
    console.log(l)
    for (i = 0; i < Xc.methods.getUserCount().call((er: any, ev: number) => {return ev; }); i++) {
    Xc.methods.getAdmini(i).call((er: any, ev: any) => {
      if (er == null) {
        console.log(ev);
      } else {
        console.log(er);
      }
    });
    }
    // MyContract.deployed().then(deployed => {
    //   deployed.set(('hi'), (er) => {
    //     console.log('Transfer event came in, refreshing balance');
    //   });
    //   deployed.get((er, ev) => {
    //     console.log(ev);
    //     console.log('Transfer event came in, refreshing balance');
    //   });
    // });
  }

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
    const MyContract = contract(tokenAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const token = new this.web3.eth.Contract(tokenAbi.abi, '0x8bB9d8E4600FD16912b9ad12C57589b4B7705C33');
    MyContract.deployed().then((deployed: { insertAdmin: (arg0: string, arg1: string, arg2: { from: string; }) => void; }) => {
      let i: string | number;
      for ( i = 0; i < 10; i++) {
        const s = 'tharinduvindulatharinduvindula' + i + '@gmail.com';
        deployed.insertAdmin(s, 'j.k.a. tharindu vindula tharindu vindula', { from: '0x8B17D2D7F1ac19A2B27Ac45cF09A2b1b022D6dD6' });
      }
    });
  }
}
