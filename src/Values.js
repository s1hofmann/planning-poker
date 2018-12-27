export const standard = {
  func: () => [
    "0",
    "0.5",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "20",
    "40",
    "100",
    ...pause
  ],
  name: "Standard"
};

export const fibonacci = {
  func: () => [
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "144",
    ...pause
  ],
  name: "Fibonacci"
};

export const shirts = {
  func: () => ["XS", "S", "M", "L", "XL", "XXL", ...pause],
  name: "T-Shirts"
};

const pause = ["?", "∞", "☕"];
