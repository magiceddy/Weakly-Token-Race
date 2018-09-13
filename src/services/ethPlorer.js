import { getAddressInfo } from 'weekly-token-race-api';

const extractTokenList = addressInfo =>
  addressInfo.tokens.reduce((acc, token) => {
    const { symbol, price } = token.tokenInfo;
    if (price) {
      acc.push(symbol);
    }

    return acc;
  }, [])

export const getTokenList = coinbase =>
  new Promise(async (resolve, reject) => {
    try {
      const addressInfo = await getAddressInfo(coinbase);
      const tokenList = extractTokenList(addressInfo);
      resolve(tokenList);
    } catch (err) {
      reject(err);
    }
  });
