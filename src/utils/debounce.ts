type Timer = ReturnType<typeof setTimeout>;

export const debounce = (fn: Function, delay: number = 500) => {
  let timerId: Timer;
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};
