function M() {
  this.x = 'm';

  return new N(); // 会影响
  // return N(); // 不会影响 M 的 this.x 的数值
}

M.b = 'b1';
M.prototype.c = 'c1';
M.constructor.d = 'd1';

function N() {
  this.x = 'n';

  return { t1: 123}
}

const m = new M();

console.log('m:', m); // n
console.log('m.x:', m.x); // n
console.log('m.b:', m.b); // undefined
console.log('m.c:', m.c); // c1
console.log('m.d:', m.d); // undefined