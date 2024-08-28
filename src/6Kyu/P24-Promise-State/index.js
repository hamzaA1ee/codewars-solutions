// As you know, a promise is in one of these states: pending, fulfilled, rejected.

// Implement the async function getState that determines a state of a promise.

// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

async function getState(promise) {
  return new Promise((res) => {
    const id = setTimeout(() => res("pending"), 0);
    promise.then(
      () => {
        clearTimeout(id);
        res("fulfilled");
      },
      () => {
        clearTimeout(id);
        res("rejected");
      }
    );
  });
}


// https://www.codewars.com/kata/6534ea9defdd85005848c2bd/train/javascript
