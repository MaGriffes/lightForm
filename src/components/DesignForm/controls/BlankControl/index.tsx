
import React from 'react';
import BaseControl from '../BaseControl';

/**
 * 空白控件:允许用户自定义空白区域大小，占位区域留白
 */
class BlankControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '空白区域',
      title: '空白区域',
      icon: '',
      type: 'blank',
      height: 30,
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    return [...super.getPropertyTabs(parentForm)];
  }

  getDesignControl(parentForm) {
    return <></>;
  }
}

export default BlankControl;
