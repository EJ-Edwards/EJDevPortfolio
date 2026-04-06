export function typeText(text, speed, startDelay, onUpdate) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        onUpdate(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    }, startDelay);
  });
}

export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
