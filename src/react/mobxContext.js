import React from 'react';
import { observable } from 'mobx';

export const contextData = observable({
  title:
    'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。@context @改变前',
  comment_count: 0,
  compData: {
    t1: 111,
    t2: 222,
  },
  updateTitle(newVal) {
    this.title = newVal;
    console.log('contextData this:', this);
  },
});
// Step1： 创建一个上下文的容器
export const CompContext = React.createContext(contextData);

export function updateContextTitle(newVal) {
  contextData.title = newVal;
  // contextData.updateTitle(newVal);
  console.log('contextData:', contextData);
}
