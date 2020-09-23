export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const attribute = "data-outside";

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(attribute);
      events.forEach((event) => {
        html.removeEventListener(event, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(attribute)) {
    element.setAttribute(attribute, "");
    events.forEach((event) => {
      setTimeout(() => {
        html.addEventListener(event, handleOutsideClick);
      });
    });
  }
}
