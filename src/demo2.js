/**
 * 输入一个数组，比如：[123,3,5,22]
 * 求当前数组所有数值组成的数据中最大的数值。
 * 比如：输入 [123, 3]，输出 3123；
 * 比如：输入 [123,3,5,22]，输出 5322123。
 * 备注：数组中均为非负数值。
 */
function getBigNum(arrData) {
  const curArrData = arrData;
  const firstNumIsMaxNum = function (num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();
    let forSize =
      num1Str.length >= num2Str.length ? num1Str.length : num2Str.length;
    if (num1Str.length === num2Str.length) {
      return num1 >= num2;
    }
    for (let index = 0; index < forSize; index++) {
      const curNum1 = num1Str[index];
      const curNum2 = num2Str[index];
      if (curNum1 === undefined) {
        return curNum2 === 0 ? true : false;
      } else if (curNum1 === undefined && curNum2) {
        return false;
      } else if (curNum2 === undefined) {
        return curNum1 === 0 ? false : true;
      }
      // curNum1、curNum2 均有数值的情况
      return curNum1 >= curNum2;
    }
  };
  for (let index = 0, size1 = curArrData.length - 1; index < size1; index++) {
    const num1 = curArrData[index];
    for (
      let index2 = index + 1, size2 = curArrData.length;
      index2 < size2;
      index2++
    ) {
      const num2 = curArrData[index2];
      // 数值对比方案1
      if (!firstNumIsMaxNum(num1, num2)) {
        curArrData[index] = num2;
        curArrData[index2] = num1;
      }
      /*
      // 数值对比方案2: 一种更简单的方式
      if (num1.toString() < num2.toString()) {
        curArrData[index] = num2;
        curArrData[index2] = num1;
      }
      */
    }
  }
  return curArrData.join('');
}

console.log('执行结果1：', getBigNum([123, 3]));
console.log('执行结果2：', getBigNum([123, 23]));
console.log('执行结果3：', getBigNum([123, 12]));
console.log('执行结果4：', getBigNum([123, 11]));
console.log('执行结果5：', getBigNum([123, 13]));
console.log('执行结果6：', getBigNum([120, 12]));
