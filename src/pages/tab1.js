import { useCcxtPro } from '../ccxtpro-provider'
import TopBar from '../topbar';
import { useState } from 'react';

const Tab5 = () => {
  const [binanceTicker, setBinanceTicker] = useState({});
  const handleCcxtMessage = (updatedData) => {
    setBinanceTicker((prevData) => ({...prevData, ...{...updatedData}}));
  }

  useCcxtPro('binance', ['BTC/USDT', 'ETH/USDT'], handleCcxtMessage);

  return (
    <div>
      <TopBar />
      <h2>Tab 5 Content</h2>
      <div>binance ccxt</div>
      <div>Binance btc price {binanceTicker['BTC/USDT']?.last}</div>
      <div>Binance eth price {binanceTicker['ETH/USDT']?.last}</div>
    </div>
  );
};

export default Tab5;