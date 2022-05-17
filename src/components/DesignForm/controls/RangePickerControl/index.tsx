import React from 'react';
import { DatePicker,Tabs,Form } from 'antd';
import moment from 'moment';
import BaseControl from '../BaseControl';

const { RangePicker } = DatePicker;
class RangePickerControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '日期范围',
      title: '日期范围',
      icon: 'https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/rangePicker.png',
      type: 'rangePicker',
      defaultValue: [],
      widthPercent: 30,
      height: 30,
      format: 'YYYY-MM-DD HH:mm:ss'
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    const [start,end] = this.data.defaultValue;
    return [
          ...super.getPropertyTabs(parentForm), 
          <Tabs.TabPane tab="控件配置" key="3">
          <Form.Item label="默认值">
            <RangePicker
              defaultValue={ (start && end) ? [ moment(start, this.data.format), moment(end, this.data.format)]:null}
              onChange={(event) => {
                const name = this.data.title;
                const [start1, end1] = event || [];
                this.newForm.current.setFieldsValue({
                  [name]: start1 ? [moment(start1).format(this.data.format),moment(end1).format(this.data.format)] : []
                })
                this.data.defaultValue = event??[];
                parentForm.refResh();
              }}
            />
          </Form.Item>
        </Tabs.TabPane>
      ];
    
  }

  getDesignControl() {
    const [start,end] = this.data.defaultValue;
    return (
      <RangePicker
        key={this.data.defaultValue}
        format={this.data.format}
        defaultValue={(start && end) && [moment(start, this.data.format), moment(end, this.data.format)]}
        style={{ width: '100%' }}
        onChange={(e) => {
          console.log(e,'kkkk')
          const name = this.data.title;
          const [start, end] = e || [];
          this.newForm.current.setFieldsValue({
            [name]: start && [moment(start).format(this.data.format),moment(end).format(this.data.format)]
          })
        }}
      />
    );
  }
}

export default RangePickerControl;
