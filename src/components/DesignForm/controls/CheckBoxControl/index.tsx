import React from 'react';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import BaseControl from '../BaseControl';
import './index.less';

class CheckBoxControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '多选框',
      title: '多选框',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/checkbox.png',
      type: 'checkbox',
      options: [
        { label: 'check1', value: '1' },
        { label: 'check2', value: '2' },
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
              this.newForm.setFieldsValue({
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
              <div key={index2} className="checkControlAddContainer">
                <div className="checkControlAddBox">
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

  getDesignControl(parentForm) {
    return (
      <Checkbox.Group
        defaultValue={this.data.defaultValue}
        options={this.data.options}
        key={this.data.defaultValue}
      />
    );
  }
}

export default CheckBoxControl;
