const throttle = (() => {
  let timer: null | NodeJS.Timeout = null;
  return function (fn: Function, interval = 500) {
    if (timer !== null) return;
    fn();
    timer = setTimeout(function () {
      timer = null;
    }, interval);
  };
})();
export default throttle;
