import React, { createRef } from 'react';
import { message, ConfigProvider,Modal } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DesignControls from './designControls';
import DesignProperty from './designProperty';
import ControlPlus from './controls/ControlPlus';
import DesignHistory from './designHistory';
import DesignHeader from './designHeader';
import DesignFormTemplate from './DesignFormTemplate/index';
import { saveForm } from '../../services';
import 'antd/dist/antd.css';
import './index.less';

export interface useFormDataType { 
  formKey: string;
  formType: number;
  formName: string;
  layout: string;
}
export interface IProps { 
  formList?: string;
  useFormDataType;
  myRef?: (value: any) => void;
  isEditState: boolean;
}

interface IState { 
  useToolControls: string;
  controls: Array<any>;
  useFormData: useFormDataType,
  mathRandom: number;
  versionVisible: boolean;
  activeControlsKey: string;
  loading: boolean;
}

export default class DesignForm extends React.Component<IProps,IState> {
  refDesignProperty: any;
  dragObj: { dragging: boolean; dragControl: string; };
  form: React.RefObject<any>
  constructor(props) {
    super(props);
    this.state = {
      useToolControls: `[{"title":"基础控件", "type":"base", "control": ["text","textarea","radio","checkbox","select","datePicker","inputNumber","rangePicker","time"] }]`,
      controls: [],
      useFormData: {
        formKey: `formKey${new Date().getTime()}`,
        formType: 0,
        formName: '',
        layout: 'horizontal',
      },
      versionVisible: false,
      activeControlsKey: '', // 选中元素key
      loading: false,
      mathRandom: 0,
    };
    this.refDesignProperty = createRef();
    this.dragObj = {
      dragging: false,
      dragControl: '',
    };
    this.form = createRef();
  }

  componentDidMount() {
    const { formList } = this.props;
    if (formList) {
      this.load(formList);
    }
    this.props.myRef && this.props.myRef(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.formKey && props.formKey !== state.useFormData.formKey) {
      return {
        useFormData: {
          formKey: props?.formKey,
          formName: props?.formName,
          layout: props?.layout,
          formType: props?.formType,
        },
      };
    }
    return null;
  }
  
  handleFormUpdate = (data) => {
    const { formKey, formName, formType, layout, controls } = data;
    this.setState({
      controls,
      useFormData: {
        formKey,
        formName, 
        formType,
        layout,
      },
      versionVisible: false
    })
  }
  // 加载表单
  load = (data) => {
    const { children } = this.props;
    const controlsJson = [...JSON.parse(data) || []];
    /** 旧表单元素兼容 */
    const oldFormControls = React?.Children?.map(
      children || [],
      (child, index) => {
        return ControlPlus.createByOldFormChild(child, index);
      },
    );
    // 添加新元素和旧元素配置
    controlsJson.forEach((c) => {
      this.form.current.setFieldsValue({
        [c.title]: c.defaultValue,
      });
      const find = oldFormControls.find((o) => o.data.key === c.key);
      if (find) {
        find.load(c); // 旧元素配置
      } else {
        const t = ControlPlus.create(c.type);
        t?.load(c); // 新元素添加
        t && oldFormControls.push(t);
      }
    });
    const orderControls = ControlPlus.loadOrder(oldFormControls);
    this.setState({
      controls: orderControls,
    });
  };

  // 保存表单
  handleSave = () => {
    const formValues = this.getDesignModelJson();
    const { useFormData } = this.state;
    if (
      formValues?.controls?.length &&
      (formValues?.formName || useFormData?.formName)
    ) {
      this.setState({
        loading: true,
      });
      console.log(JSON.stringify({
          ...formValues,
          formControlPropertyModel: JSON.stringify(formValues?.controls),
          controls: undefined,
        }),'ll')
      saveForm({
          ...formValues,
          formControlPropertyModel: JSON.stringify(formValues?.controls),
          controls: undefined,
        })
        .then(([,res]) => {
          if(res){
            const { code } = res;
            if (code === 2000) {
              message.success('表单保存成功');
            }
          }
          this.setState({
            loading: false
          })
        });
    } else if (!formValues?.formName) {
      message.error('请先配置表单名称');
    } else if (!formValues?.controls?.length) {
      message.error('请先配置表单内容');
    }
  };

  // 配置表单
  setFormProperty = function (values) {
    const { useFormData } = this.state;
    if (values) {
      this.setState({
        useFormData: {
          ...useFormData,
          ...values,
        },
      });
    }
  };

  // 刷新控件排序
  refreshControlsOrder = (controls2, isSort = false) => {
    const controls3 = ControlPlus.refReshOrder(controls2);
    this.setState({
      controls: controls3,
    });
  };

  // 更新组件
  updateControls = (controls) => { 
    this.setState({
      controls
    });
  }

  /**
   * 更新组件编辑状态 || 表单信息状态
   * @activeControlsKey string 有值时编辑当前组件配置 否编辑表单配置
   * */

  activeControlsKeyFn = (activeControlsKey = '') => { 
    const { controls,useFormData } = this.state;
    if (activeControlsKey) {
      const currentControl = controls.find((item) => item.data.key === activeControlsKey);
      this.refDesignProperty.current.setEditProperty(true, currentControl );
    } else { 
      this.refDesignProperty.current.setEditProperty(false, useFormData );
    }
    this.setState({
      activeControlsKey
    })
  }

  // 强制刷新页面
  refResh = () => { 
    this.setState({
      mathRandom: new Date().getTime()
    })
  }

  // 获取后端协议json，后台解析使用
  getPropertyJson = function () {
    const { useFormData,controls } = this.state;
    const json = { ...useFormData };
    json.controls = [];
    controls.forEach((item) => {
      const c = item.getPropertyJson();
      c == null ? '' : json.controls.push(c);
    });
    return json;
  };

  // 获取前端设计模型json标准
  getDesignModelJson = function () {
    const { useFormData, controls } = this.state;
    const json = { ...useFormData };
    json.controls = [];
    controls.forEach((item) => {
      const c = item.getDesignModelJson();
      if (c) {
        json.controls.push(c);
      }
    });
    return json;
  };

  // 获取整个form控件的value值
  getValue = (callBack) => {
    this.form.current.validateFields().then((values) => {
      const newValues = Object.entries(values);
      const params:Array<{[key:string]:string,controlsId:string}> = [];
      const { controls } = this.state;
      newValues.map(([key, value]) => {
        const currentControl = controls.find((item) => item.data.title === key);
        if (currentControl) {
          params.push({
            [key]: value,
            controlsId: currentControl?.data?.key,
          });
        }
      });
      callBack(params);
    });
  };

  // 设置整个form表单value值 jsonValues:[{key:xxx,value:xxxx}]
  setValue = (jsonValues) => {
    const { controls } = this.state
    controls.forEach((item) => {
      const find = jsonValues.find((c) => c.key === item.data.key);
      if (find) {
        item.setValue(find.value);
      }
    });
  };

  // 节点释放拖拽
  dragEnd = (controlType:string) => {
    const { isEditState } = this.props;
    const { controls } = this.state;
    const c = ControlPlus.create(controlType);
    c && c!.data!.custom;
    if (isEditState) {
      this.refDesignProperty.current.setEditProperty(true, c);
    }
    this.refreshControlsOrder([...controls,c], true);
    this.setState({
      activeControlsKey: c?.data?.key,
    });
  };

  DPR = () => {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return window.devicePixelRatio;
    }
    return 1;
  };

  parseValue = (value) => {
    return parseInt(value, 10);
  };

  // 组件内公开开放的form表单接口
  openObj = function () {
    const { useFormData, controls } = this.state;
    return {
      getPropertyJson: this.getPropertyJson,
      getDesignModelJson: this.getDesignModelJson,
      setFormProperty: this.setFormProperty,
      refreshControlsOrder: this.refreshControlsOrder,
      controls,
      useFormData,
      getValue: this.getValue,
      setValue: this.setValue,
    };
  };

  handleVersionVisible = (versionVisible) => {
    this.setState({
      versionVisible,
    });
  };

  closeHistoryDrawer = (versionVisible) => {
    this.setState({
      versionVisible,
    });
  };

  // 恢复指定版本
  handleRecoveVersion = (versionData) => {
    const { formControlPropertyModel, formName, formKey, formType, layout } = versionData;
    this.setState({
      useFormData: {
        formName,
        formKey,
        formType,
        layout,
      }
    })
    this.setFormProperty(formControlPropertyModel);
    this.load(formControlPropertyModel);
  };


  render() {
    // formKey 表单key,表单类型:0=主表单,1=扩展表单,2=子表单,表单名称
    const { isEditState, } = this.props;
    const {
      loading,
      controls,
      activeControlsKey,
      useFormData,
      useToolControls,
      versionVisible
    } = this.state;
    

    return (
      <ConfigProvider locale={zhCN}>
        <div className="design">
          {isEditState ? (
            <>
              <DesignHeader
                onSave={this.handleSave}
                onLookHistory={this.handleVersionVisible}
                loading={loading}
                formName={useFormData.formName}
                activeControlsKeyFn={this.activeControlsKeyFn}
              />
              <div
                className="designContainer"
              >
                <DndProvider backend={HTML5Backend}>
                  <DesignControls
                    controls={JSON.parse(useToolControls)}
                    addForm={this.dragEnd}
                  />
                  <div className='designFormTemplate'>
                    <DesignFormTemplate
                      controls={controls}
                      isEditState={isEditState}
                      updateControls={this.updateControls}
                      activeControlsKey={activeControlsKey}
                      activeControlsKeyFn={this.activeControlsKeyFn}
                      refResh={this.refResh}
                      newForm={this.form}
                      layout={useFormData.layout}
                    />
                  </div>
                  <DesignProperty
                    onPropertyRef={(refs) => {
                      this.refDesignProperty.current = refs;
                    }}
                    useFormData={useFormData}
                    refResh={ this.refResh }
                    onSetConfig={(property) => {
                      this.setFormProperty(property);
                    }}
                  />
                </DndProvider>,
              </div>
            </>
          ) :
              <DesignFormTemplate
              controls={controls}
              isEditState={isEditState}
              newForm={this.form}
              layout={ useFormData.layout}
            />
          }
          {versionVisible && <DesignHistory formKey={useFormData.formKey} closeHistoryDrawer={this.closeHistoryDrawer} onRecoveVersion={(e) => { 
            console.log(e,'kkk')
          }}  /> }
        </div>
      </ConfigProvider>
    );
  }
}
