import React from 'react';
import { Tabs, Form, Input, Button, Radio } from 'antd';
import BaseControl from '../BaseControl';
import './index.less';

class RadioControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '单选框',
      title: '单选框',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/radio.png',
      type: 'radio',
      options: [
        { label: 'radio1', value: '1' },
        { label: 'radio2', value: '2' },
      ],
      defaultValue: '',
      widthPercent: 30,
      height: 30,
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    return [
      ...super.getPropertyTabs(parentForm),
      <Tabs.TabPane tab="控件配置" key="3">
        <Form.Item label="默认值">
          <Input
            placeholder="默认值"
            value={this.data.defaultValue}
            onChange={(event) => {
              this.data.defaultValue = event.target.value;
              const name = this.data.title;
              this.newForm.current.setFieldsValue({
                [name]: event.target.value
              })
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="选项">
          <Button
            type="link"
            onClick={() => {
              this.data.options = [...this.data.options, { label: '', value: '' }];
              parentForm.refResh();
            }}
          >
            添加
          </Button>
          {this.data.options.map((item, index) => {
            const index2 = `${index}`;
            return (
              // <div key={index2}>
              <div key={index2} className="radioControlAddContainer">
                <div className="radioControlAddBox">
                  <Input
                    placeholder="标题"
                    value={item.label}
                    style={{ width: '40%' }}
                    onChange={(event) => {
                      this.data.options[index].label = event.target.value;
                      this.data.options = [...this.data.options];
                      parentForm.refResh();
                    }}
                  />
                  <Input
                    placeholder="值"
                    value={item.value}
                    style={{ width: '40%' }}
                    onChange={(event) => {
                      this.data.options[index].value = event.target.value;
                      this.data.options = [...this.data.options];
                      parentForm.refResh();
                    }}
                  />
                  <Button
                    type="link"
                    onClick={() => {
                      this.data.options.splice(index, 1);
                      this.data.options = [...this.data.options];
                      parentForm.refResh();
                    }}
                  >
                    删除
                  </Button>
                </div>
              </div>
            );
          })}
        </Form.Item>
      </Tabs.TabPane>,
    ];
  }

  getDesignControl() {
    return (
      <Radio.Group
        defaultValue={this.data.defaultValue}
        options={this.data.options}
        key={this.data.defaultValue}
        onChange={(value) => {
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: value
          })
        }}
      />
    );
  }
}

export default RadioControl;
