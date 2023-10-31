import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import deepExtend from "deep-extend";

import { objectToQueryString } from "./objectToQueryString";

const DEFAULT_API_CONFIG = {
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  paramsSerializer: (params: string) => objectToQueryString(params),
};

export function Request<Data extends unknown, Error extends unknown>({
  endpoint,
  config = {},
  method = "GET",
  params,
}: {
  endpoint: string;
  config?: AxiosRequestConfig;
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  params?: any;
}): Promise<AxiosResponse<any, any>> {
  return axios({
    params,
    method,
    ...deepExtend(DEFAULT_API_CONFIG, config),
    url: endpoint,
  });
}
