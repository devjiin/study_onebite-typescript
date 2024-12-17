function func(a: number, b: number): number {
  return a + b;
}

function introduce(name = "이지인", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이지인", 158);
introduce("이지인");

function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
