import React from 'react';
import { DatePicker,Tabs,Form } from 'antd';
import BaseControl from '../BaseControl';
import moment from 'moment';

class DatePickerControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '日期',
      title: '日期',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/datePicker.png',
      type: 'datePicker',
      defaultValue: '',
      widthPercent: 30,
      height: 30,
      format: 'YYYY-MM-DD HH:mm:ss'
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    return [
      ...super.getPropertyTabs(parentForm),
      <Tabs.TabPane tab="控件配置" key="3">
        <Form.Item label="默认值">
          <DatePicker
            placeholder="请选择默认值"
            defaultValue={this.data.defaultValue && moment(this.data.defaultValue, this.data.format)} format={this.data.format}
            onChange={(value) => {
              this.data.defaultValue = value;
              const name = this.data.title;
              this.newForm.current.setFieldsValue({
                [name]: value && moment(value).format(this.data.format)
              })
              parentForm.refResh();
            }}
          />
        </Form.Item>
      </Tabs.TabPane>,
    ];
  }

  getDesignControl(parentForm) {
    return (
      <DatePicker
        key={this.data.defaultValue}
        format={this.data.format}
        defaultValue={this.data.defaultValue && moment(this.data.defaultValue, this.data.format)}
        style={{ width: '100%' }}
        onChange={(value) => { 
          const name = this.data.title;
          this.newForm.current.setFieldsValue({
            [name]: value && moment(value).format(this.data.format)
          })
        }}
      />
    );
  }
}

export default DatePickerControl;
