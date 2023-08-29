// export const blockingFunc = () => {
//   new Array(100_000_000)
//     .map((elm, i) => elm + i)
//     .reduce((acc, cur) => acc + cur, 0);
// };

// export const randomIntFromInterval = (min: number, max: number): number =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// export const workerInstance = new ComlinkWorker<
//   typeof import("./ww/worker.ts")
// >(new URL("./ww/worker.ts", import.meta.url));
