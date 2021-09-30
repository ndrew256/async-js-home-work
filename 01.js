// 1.
// We have a “regular” function. How to call async from it and use its result?

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => alert("runs after indicted time"));