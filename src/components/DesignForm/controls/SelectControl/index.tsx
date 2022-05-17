import React from 'react';
import { Tabs, Form, Input, Button, Select } from 'antd';
import BaseControl from '../BaseControl';
import './index.less';

class SelectControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '下拉框',
      title: '下拉框',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/select.png',
      type: 'select',
      options: [
        { label: 'select1', value: '1' },
        { label: 'select2', value: '2' },
      ],
      defaultValue: undefined,
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
              const name = this.data.title;
              this.newForm.current.setFieldsValue({
                [name]: event.target.value
              })
              parentForm.refResh();
              this.data.defaultValue = event.target.value;
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
              <div key={index2} className="selectControlAddContainer">
                <div className="selectControlAddBox">
                  <Input
                    placeholder="文本"
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
      <Select
        defaultValue={this.data.defaultValue || undefined}
        options={this.data.options}
        key={this.data.defaultValue}
        placeholder={this.data.placeholder || '请选择'}
        onSelect={(e) => { 
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: e
          })
        }}
      />
    );
  }
}

export default SelectControl;
