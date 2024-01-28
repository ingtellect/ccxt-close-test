import { useEffect } from 'react';
import ccxt from 'ccxt';

export const useCcxtPro = (exchange, symbols, onMessage) => {
  let ccxtProExchange = null;

  useEffect(() => {
    if (!ccxtProExchange) {
      ccxtProExchange = new ccxt.pro[exchange];
    }
    console.log("useCcxtPro");

    const watch = async () => {
      const method = ccxtProExchange.has.watchTickers
        ? "watchTickers"
        : "fetchTickers";

      while (true) {
        const response = await ccxtProExchange[method](symbols);
        onMessage(response);
        console.log("ccxt onmessage");
      }
    }

    watch();

    return () => {
      async function close() {
        try {
          await ccxtProExchange.close();
        }
        catch(error) {
        }
      }
      console.log(`useCcxtPro unmount`);
      console.log(`ccxt ${exchange} closed`);
      try {
        close();
      }
      catch(error) {
        console.error(error);
      }
    }

  }, []);
}