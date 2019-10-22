import { Injectable } from '@angular/core';
import Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import contract from 'truffle-contract';
import { resolveTxt } from 'dns';

declare let require: any;
declare let window: any;

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
    this.set();
    this.get();
  }


  getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function (err, account) {

        if (err === null) {
          // tslint:disable-next-line: no-shadowed-variable
          this.web3.eth.getBalance(account, function ( err: any, balance: any) {
            if (err === null) {
              return resolve({ fromAccount: account, balance: this.web3.fromWei(balance, 'ether') });
            } else {
              return reject('error!');
            }
          });
        }
      });
    });
  }

  transferEther(
    _transferFrom,
    _transferTo,
    _amount,
    _remarks
  ) {
    const that = this;

    return new Promise((resolve, reject) => {
      const paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);

      paymentContract.deployed().then(function (instance) {
        return instance.transferFund(
          _transferTo,
          {
            from: _transferFrom,
            value: window.web3.toWei(_amount, 'ether')
          });
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject('Error in transferEther service call');
      });
    });
  }


  get() {
    const MyContract = contract(tokenAbi);
    MyContract.setProvider(this.web3.currentProvider);
    const Xc = new this.web3.eth.Contract(tokenAbi.abi, '0xc382F0cDa16Ea3030132911BA33EEb3C901498f5');
    Xc.methods.set(125).call((er, ev) => {
      console.log(ev);
    });
    Xc.methods.get().call((er, ev) => {
      console.log(ev);
    });
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
    const token = new this.web3.eth.Contract(tokenAbi.abi, '0xc382F0cDa16Ea3030132911BA33EEb3C901498f5');
   
    MyContract.deployed().then(deployed => {
      console.log(deployed);
      deployed.set(125, { from: '0x94b19125bd7A34722e482ebFC020aa403A8E35CF' });
    });
    console.log(tokenAbi)

  }
}
