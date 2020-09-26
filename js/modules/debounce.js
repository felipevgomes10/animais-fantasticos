export default function debounce(callback, delay) {
  let time;
  return (...args) => {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      callback(...args)
    }, delay);
  };
}