
export default () => {
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener("message", (e) => {
    if (!e) return;
    const randomNumber =
      Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) +
      Math.ceil(50);

    postMessage({randomNumber: randomNumber});
  });
};
