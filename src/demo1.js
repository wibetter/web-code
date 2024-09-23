/**
 * 输入一个数组，比如：[1,3,0,1,2,5,1,2]
 * start: 0
 * 根据数组当前数值移动index，最后判断是否能获取数组最后一个数组，
 * 如果能则返回 true，否则返回false。
 * 备注1: 类似跳棋，判断是否能到达终点;
 * 备注2: 数组中所有数值均 >= 0。
 */
function isCatchLastData(arrData, startIndex) {
  if (startIndex > arrData.length - 1) {
    return false;
  } else if (startIndex == arrData.length - 1) {
    return true;
  }
  let curIndex = startIndex || 0;
  for (let index = curIndex, size = arrData.length; index < size; ) {
    if (index === arrData.length - 1) {
      // 判断是否已到终点
      return true;
    }
    const curData = arrData[index];
    if (curData == 0) {
      return index === arrData.length - 1;
    } else if (curData > 1) {
      // curData > 1
      let funcResult = false;
      for (let index2 = curData; index2 != 0; index2--) {
        if (curIndex + index2 == arrData.length - 1) {
          return true;
        }
        funcResult = isCatchLastData(arrData, curIndex + index2);
        if (funcResult) {
          return funcResult;
        }
        // else 则继续执行for循环
      }
      index += curData;
    } else {
      index += 1;
    }
    curIndex = index;
  }
  return curIndex === arrData.length - 1;
}

console.log('执行结果1：', isCatchLastData([1, 1, 1, 2], 0));
console.log('执行结果2：', isCatchLastData([1, 3, 1], 0));
console.log('执行结果3：', isCatchLastData([1, 2, 0, 1, 0], 0));
console.log('执行结果4：', isCatchLastData([1, 2, 0, 1, 0, 3], 0));
console.log('执行结果5：', isCatchLastData([1, 3, 0, 1, 2, 5, 1, 2], 0));
console.log('执行结果5：', isCatchLastData([1, 3, 0, 1, 2, 3, 0, 2], 0));
