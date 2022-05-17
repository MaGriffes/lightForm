
import React from 'react';
import { TimePicker,Tabs,Input,Form } from 'antd';
import moment from 'moment'; 
import BaseControl from '../BaseControl';

class TimeControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '时间',
      title: '时间',
      icon: 'https://images.weserv.nl/?url=https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/datePicker.png',
      type: 'time',
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
          <TimePicker
            placeholder="默认值"
            value={this.data.defaultValue}
            onChange={(value) => {
              const name = this.data.title;
              const val = moment(value).format('HH:mm:ss');
              this.newForm.current.setFieldsValue({
                [name]: val || ''
              })
              this.data.defaultValue = value;
              parentForm.refResh();
            }}
          />
        </Form.Item>
      </Tabs.TabPane>,
    ];
  }

  getDesignControl() {
    return (
      <TimePicker
        defaultValue={ this.data.defaultValue && moment(this.data.defaultValue,'HH:mm:ss')}
        key={ this.data.defaultValue }
        onChange={(value) => {
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: value ? moment(value).format('HH:mm:ss') : ''
          });
        }}
      />
    );
  }
}

export default TimeControl;
