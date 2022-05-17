import React from 'react';
import { Tabs, Form, InputNumber, Input } from 'antd';
import BaseControl from '../BaseControl';

const { TabPane } = Tabs;

class InputNumberControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '数值',
      title: '数值',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/inputNumber.png',
      type: 'inputNumber',
      defaultValue: '',
      placeholder: '',
      regex: '',
      regexError: '',
      widthPercent: 30,
      height: 30,
    };
    super(props, dataProps2);
  }

  // 内部自定义
  getPropertyTabs(parentForm) {
    return [
      ...super.getPropertyTabs(parentForm),
      <TabPane tab="控件配置" key="3">
        <Form.Item label="默认值">
          <InputNumber
            style={{ width: '100%'}}
            placeholder="默认值"
            value={this.data.defaultValue}
            onChange={(value) => {
              this.data.defaultValue = value;
              const name = this.data.title;
              this.newForm.current.setFieldsValue({
                [name]: value
              })
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="提示内容">
          <Input
            placeholder="提示内容"
            value={this.data.placeholder}
            onChange={(event) => {
              this.data.placeholder = event.target.value;
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="正则校验">
          <Input
            placeholder="正则校验"
            value={this.data.regex}
            onChange={(event) => {
              this.data.regex = event.target.value;
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="错误提示">
          <Input
            placeholder="正则校验错误提示"
            value={this.data.regexError}
            onChange={(event) => {
              this.data.regexError = event.target.value;
              parentForm.refResh();
            }}
          />
        </Form.Item>
      </TabPane>,
    ];
  }

  // 组件渲染节点
  getDesignControl() {
    return (
      <InputNumber
        placeholder={this.data.placeholder || '请输入'}
        defaultValue={this.data.defaultValue}
        key={this.data.defaultValue}
        style={{
          width: '100%',
          height: this.data.height === 0 ? 'auto' : `${this.data.height}px`,
        }}
      />
    );
  }
  // TODO
  // regexCheck(event) {
  // (event) => this.setState({regex:event.target.value});
  // }
}

export default InputNumberControl;
