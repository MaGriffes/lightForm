import React from 'react';
import { Form, Tabs, Input, Select } from 'antd';
import { useFormDataType } from './index';
export interface IProps{
  onPropertyRef: (value: any) => void;
  refResh: Function;
  useFormData: useFormDataType;
  onSetConfig: (value: Object) => void;
}

interface IState {
  selectedControl: any;
  isChooseControl: boolean;
}

class DesignProperty extends React.Component<IProps,IState>{
  constructor(props){
    super(props)
    this.state = {
      selectedControl: null,
      isChooseControl: false
    }
  }
  componentDidMount() {
    this.props && this.props.onPropertyRef(this);
  }

  setEditProperty = (isControl, controlOrForm) => {
    if (isControl) {
      this.setState({
        selectedControl: controlOrForm
      })
    }
    this.setState({ 
      isChooseControl:isControl
    })
  }

  renderTabs = () => {
    const {isChooseControl} = this.state;
    const {refResh,useFormData} = this.props;
    if (isChooseControl) {
      return this.state.selectedControl?.getPropertyTabs({ refResh });
    } else {
      return (
        <Tabs.TabPane tab="表单配置" key="1">
          <Form.Item label="表单名称">
            <Input
              placeholder="表单名称"
              value={useFormData?.formName}
              onChange={(event) => {
                this.props.onSetConfig({ formName: event.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="布局方式">
            <Select
              onChange={(event) => {
                this.props.onSetConfig({ layout: event });
              }}
              value={useFormData?.layout}
              placeholder="请选择布局方式"
            >
              <Select.Option value="horizontal">水平布局</Select.Option>
              <Select.Option value="vertical">垂直布局</Select.Option>
              <Select.Option value="inline">行布局</Select.Option>
            </Select>
          </Form.Item>
        </Tabs.TabPane>
      );
    }
  };
  render(){
    return (
      <div className='designProperty'>
        <Tabs>{this.renderTabs()}</Tabs>
      </div>
    )
  }
}
export default DesignProperty;