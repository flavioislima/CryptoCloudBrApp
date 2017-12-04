import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

const btc = require('./icones/btc.png');
const bch = require('./icones/bch.png');
const eth = require('./icones/eth.png');
const etc = require('./icones/etc.png');
const xrp = require('./icones/xrp.png');
const ltc = require('./icones/ltc.png');
const dash = require('./icones/dash.png');
const iota = require('./icones/iota.png');
const lsk = require('./icones/lsk.png');
const xlm = require('./icones/xlm.png');
const xmr = require('./icones/xmr.png');
const bcc = require('./icones/bcc.png');
const ada = require('./icones/ada.png');
const btg = require('./icones/btg.png');
const eos = require('./icones/eos.png');
const qtum = require('./icones/qtum.png');
const omg = require('./icones/omg.png');
const neo = require('./icones/neo.png');
const xem = require('./icones/xem.png');
const zec = require('./icones/zec.png');


const symbol = this.props.item.symbol;
const Icone;

switch (symbol) {
  case 'BTC':
    Icone = btc;
    break;
  case 'ETH':
    Icone = eth;
    break;
  case 'BCH':
    Icone = bch;
    break;
  default:
    Icone = btc;
    break;
  }

export default Icone;
