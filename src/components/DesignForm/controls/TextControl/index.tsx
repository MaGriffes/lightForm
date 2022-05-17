import React from 'react';
import { Tabs, Form, Input, Select } from 'antd';
import BaseControl from '../BaseControl';

const { TabPane } = Tabs;

class TextControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '文本框',
      title: '文本框',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/input.png',
      type: 'text',
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
          <Input
            placeholder="默认值"
            value={this.data.defaultValue}
            onChange={(event) => {
              const name = this.data.title;
              this.newForm.current.setFieldsValue({
                [name]: event.target.value
              })
              this.data.defaultValue = event.target.value;
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
          <Select
            placeholder="请选择效验规则"
            onChange={(event) => {
              this.data.regex = event;
              parentForm.refResh();
            }}
            value={this.data.regex || undefined}
          >
            <Select.Option key="^1[3|4|5|6|7|8|9][0-9]{9}">手机号</Select.Option>
            <Select.Option key="^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])">邮箱</Select.Option>
          </Select>
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
      <Input
        placeholder={this.data.placeholder || '请输入'}
        defaultValue={this.data.defaultValue}
        key={this.data.defaultValue}
        onChange={(e) => {
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: e
          })
        }}
      />
    );
  }

  regexCheck(event) {
    console.log(event, 'event');
  }
}

export default TextControl;
