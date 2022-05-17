import {
  Form,
  Tabs,
  Input,
  Slider,
  InputNumber,
  Select,
  Button,
  Switch,
} from 'antd';
import React from 'react';
import './index.less';

const { TabPane } = Tabs;

/**
 * 控件基础模板
 * 定义控件基础协议，所有控件都继承此模板，并重载实现
 */
class BaseControl {
  data: any;
  props: any;
  value: any;
  newForm: any;
  rolesList: Array<any>;
  constructor(props, dataProps) {
    const dataProps2 = dataProps || {};
    this.data = {
      key: props.designkey || `${new Date().getTime().toString()}`, // 控件唯一标识,用于控件查找和绑定，唯一
      name: '控件', // 控件名称，显示工具栏上
      title: props.label || '控件', // 控件标题，显示在form界面上使用
      icon: '', // 控件显示icon图标
      type: 'base', // 控件类型
      order: 0, // 界面的排序位置
      realOrder: 0.0, // 真实的排序位置:表单设计的排序位置
      widthPercent: 100, // 宽度百分比
      height: 0, // 高度px，0为auto
      justify: 'flex-start', // flex 排列循序
      align: 'flex-start',
      authority: [], // 访问权限{roleid:"",access:"read"}
      custom: false, // 是否是自定义控件
      myAuthority: 'write', // 当前用户最终换算出来的呈现权限,枚举:read?hide?write? 需要后端换算得出@山橘
      isRequired: false, // 是否必填
      ...dataProps2,
    };
    this.props = props;
    this.value = null; // 当前用户最终value,不同控件格式不一样,比如子表单可能为json
    this.newForm = null; // 存储父级实例
  }

  // 加载json
  load(json) {
    this.data = { ...this.data, ...json };
  }

  // 获取后端协议json，后台解析使用
  getPropertyJson() {
    return { ...this.data };
  }

  // 获取前端设计模型json标准
  getDesignModelJson() {
    return { ...this.data };
  }

  // 获取formItem控件的value值
  getValue() {
    return this.value;
  }

  // 设置formItem控件的value值
  setValue(value) {
    this.value = value;
  }

  // 获取设计属性控件(最终渲染的控件)，用于控件定义最终渲染效果
  // eslint-disable-next-line class-methods-use-this
  getDesignControl(parentForm) {
    return <></>;
  }

  handleRoleId = (val, index, parentForm) => {
    this.data.authority[index].roleId = val;
    parentForm.refResh();
  };

  handleAccess = (val, index, parentForm) => {
    this.data.authority[index].access = val;
    parentForm.refResh();
  };

  onChangeSwitch = (value, parentForm) => {
    this.data.isRequired = value;
    parentForm.refResh();
  };

  // 获取属性设计的tab页面
  getPropertyTabs(parentForm) {
    return [
      <TabPane tab="基本配置" key="1">
        <Form.Item label="标题">
          <Input
            placeholder="输入标题"
            value={this.data.title}
            onChange={(event) => {
              this.data.title = event.target.value;
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="是否必填">
          <Switch
            checked={this.data.isRequired}
            onChange={(e) => this.onChangeSwitch(e, parentForm)}
          />
        </Form.Item>
        {/* // TODO */}
        {/* <Form.Item label="顺序">
          <Input disabled value={this.data.order} />
        </Form.Item> */}
        {/* <Form.Item label="真实顺序">
          <Input disabled value={this.data.realOrder} />
        </Form.Item> */}
        <Form.Item label="宽度">
          <Slider
            value={this.data.widthPercent}
            onChange={(event) => {
              this.data.widthPercent = event;
              parentForm.refResh();
            }}
          />
        </Form.Item>
        <Form.Item label="高度">
          <InputNumber
            min={0}
            value={this.data.height}
            onChange={(event) => {
              this.data.height = event;
              parentForm.refResh();
            }}
          />
        </Form.Item>
      </TabPane>,
      <TabPane tab="权限配置" key="2">
        <Form.Item label="访问权限设置">
          <Button
            type="link"
            onClick={() => {
              this.data.authority = [
                ...this.data.authority,
                { roleId: '', access: '' },
              ];
              parentForm.refResh();
            }}
          >
            添加权限
          </Button>
          {this.data.authority.map((item, index) => {
            return (
              <span>
                <div className="baseControl_addContainer">
                  <div className="addBox">
                    <Select
                      onChange={(val) =>
                        this.handleRoleId(val, index, parentForm)
                      }
                      value={{ value: item.roleId }}
                      style={{ width: '40%' }}
                      placeholder="请选择"
                    >
                      {this.rolesList?.map((role) => {
                        return (
                          <Select.Option value={role.roleKey}>
                            {role.roleName}
                          </Select.Option>
                        );
                      })}
                    </Select>
                    <Select
                      onChange={(val) =>
                        this.handleAccess(val, index, parentForm)
                      }
                      value={{ value: item.access }}
                      style={{ width: '40%' }}
                      placeholder="请选择"
                    >
                      <Select.Option value="read">只读</Select.Option>
                      <Select.Option value="write">读写</Select.Option>
                      <Select.Option value="hide">隐藏</Select.Option>
                    </Select>
                    <Button
                      type="link"
                      onClick={() => {
                        this.data.authority.splice(index, 1);
                        this.data.authority = [...this.data.authority];
                        parentForm.refResh();
                      }}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              </span>
            );
          })}
        </Form.Item>
      </TabPane>,
    ];
  }

  // 删除当前控件
  delDesign(parentForm, e) {
    const { controls, index, refResh } = parentForm;
    e.stopPropagation();
    controls.splice(index, 1);
    refResh(true);
  }

  // 当前控件的渲染效果
  render(parentForm) {
    const { newForm } = parentForm
    const items: any = this.getDesignControl(parentForm);
    this.newForm = newForm;
    return (
      <> {items}</>
    );
  }
}

export default BaseControl;
