/**
 * @constructor
 * 设计和实现⼀个 LRU (最近最少使⽤) 缓存机制。它应该⽀持以下操作： 获取数据 get 和 写⼊数据 put 。
   获取数据 get(key)：
     如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1
   写⼊数据 put(key, value)：
     如果关键字已经存在，则变更其数据值
     如果关键字不存在，则插⼊该组「关键字/值」
     当缓存容量达到上限时，它应该在写⼊新数据之前删除最久未使⽤的数据值，从⽽为新的数据值留出空间
 */

function WebSessionData(_curMaxSize, _autoClearNum) {
  let sessionDataList = [];
  let curMaxSize = _curMaxSize || 100; // 最多存储多少条数据
  let autoClearNum = _autoClearNum || 50;

  this.setAutoClearNum = function (_autoClearNum) {
    autoClearNum = _autoClearNum;
  }

  this.setMaxSize = function (_curMaxSize) {
    curMaxSize = _curMaxSize;
  }

  this.showSessionDataList = function () {
    return sessionDataList;
  }

  this.put = function (ItemKey, curItemCont) {
    if (sessionDataList.length >= curMaxSize) {
      // 清除最久未使用数据
      sessionDataList.splice(0, autoClearNum); // 备注splice会改动原数组数据
      // sessionDataList = sessionDataList.slice(autoClearNum); // 截取后半段数据（备注：slice不会改动原数组数据）
    }
    const curItem = {};
    curItem[ItemKey] = curItemCont;
    sessionDataList.push(curItem);
  }

  this.get = function (ItemKey) {
    let curItem = -1;
    // 查询sessionDataList中是否有对应数据
    for(let index = 0, size = sessionDataList.length; index < size; index++) {
      const curItemTemp = sessionDataList[index];
      if (curItemTemp[ItemKey] !== undefined && curItemTemp[ItemKey] !== null) {
        // 设置返回其数值
        curItem = curItemTemp[ItemKey];
        const newItem = {};
        newItem[ItemKey] = curItem;
        // 调整位置，确保最近使用过的数据在数组后面
        sessionDataList.splice(index, 1);
        sessionDataList.push(newItem);
      }
    }
    return curItem;
  }
}
