/// <reference lib="webworker" />

declare const self: DedicateWorkerGlobalScope;

import { blockingFunc } from "../utils";

export const someRPCFunc = () => {
  blockingFunc();
};
