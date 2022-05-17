import React, { Component } from 'react';
import BaseControl from '../BaseControl';

// 空控件：用于表单无控件内容，用于兼容旧表单。
class NoneControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '空',
      title: '',
      icon: '',
      type: 'none',
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    return [];
  }

  getPropertyJson() {
    return null; // 不存储数据库
  }

  getDesignModelJson() {
    return null; // 不存储数据库
  }

  render(parentForm) {
    return <div key={this.data.key}>{this.props.children}</div>;
  }
}

export default NoneControl;
