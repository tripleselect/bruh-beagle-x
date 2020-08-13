declare global {
  var bruhs: bigint;
}

const count = document.getElementById("click")?.querySelector('legend')! as HTMLLegendElement;

Object.defineProperty(globalThis, "bruhs", {
  get() {
    return BigInt(localStorage.getItem("bruhs"));
  },
  set (bigint) {
    localStorage.setItem("bruhs", bigint);
    count.innerText = bruhs.toString();
  },
});

if (!localStorage.getItem('bruhs')) bruhs = 0n // set inital bruh count

bruhs = bruhs // update counter

export {}
