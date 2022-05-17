// @ts-nocheck
import React from 'react';
import { Tabs, Form, Input, InputNumber } from 'antd';
import BaseControl from '../BaseControl';

const { TabPane } = Tabs;

class TextAreaControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '多行文本',
      title: '多行文本',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/textArea.png',
      type: 'textarea',
      defaultValue: '',
      placeholder: '',
      lines: 5,
      widthPercent: 100,
      height: 100,
    };
    super(props, dataProps2);
  }

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
        <Form.Item label="行数">
          <InputNumber
            min={0}
            value={this.data.lines}
            onChange={(event) => {
              this.data.lines = event;
              parentForm.refResh();
            }}
          />
        </Form.Item>
      </TabPane>,
    ];
  }

  getDesignControl(parentForm) {
    return (
      <Input.TextArea
        placeholder={this.data.placeholder}
        defaultValue={this.data.defaultValue}
        key={this.data.defaultValue}
        rows={this.data.lines}
        onChange={(e) => {
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: e.target.value
          })
        }}
      />
    );
  }
}

export default TextAreaControl;
