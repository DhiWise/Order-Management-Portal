import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  POST_BATCHRETRIEVE: `${COMMON_URL}connect.squareupsandbox.com/v2/orders/batch-retrieve?`,
  POST_LOGIN: `${COMMON_URL}nodedemo.dhiwise.co/device/auth/login`,
};

export const postBatchretrieve = (payload) =>
  apis.post(API_URLS.POST_BATCHRETRIEVE, {
    ...payload,
    headers: {
      "Square-Version": "2022-07-20",
      Authorization:
        "Bearer EAAAEHCJQbrZZNwDtoKL5f6nPdygZaWcVqDaIiw9vbePV84ouJrWs_IRCeTAB7g_",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const postLogin = (payload) => apis.post(API_URLS.POST_LOGIN, payload);
