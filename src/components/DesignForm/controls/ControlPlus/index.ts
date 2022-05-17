import TextControl from '../TextControl';
import NoneControl from '../NoneControl';
import PlaceHolderControl from '../PlaceHolderControl';
import BlankControl from '../BlankControl';
import TextAreaControl from '../TextAreaControl';
import RadioControl from '../RadioControl';
import SelectControl from '../SelectControl';
import CheckBoxControl from '../CheckBoxControl';
import DatePickerControl from '../DateDangePickerControl';
import TimeControl from '../TimeControl';
import InputNumberControl from '../InputNumberControl';
import RangePickerControl from '../RangePickerControl';

class ControlPlus {
  static create(type) {
    return ControlPlus.create2(type, {});
  }

  static create2(type, props2) {
    let typeControl = `${type}`;
    if (typeControl.indexOf('Control') <= -1) {
      typeControl += 'Control';
    }
    if (typeControl === 'textControl') {
      return new TextControl(props2, {});
    }
    if (typeControl === 'noneControl') {
      return new NoneControl(props2, {});
    }
    if (typeControl === 'placeholderControl') {
      return new PlaceHolderControl(props2, {});
    }
    if (typeControl === 'blankControl') {
      return new BlankControl(props2, {});
    }
    if (typeControl === 'textareaControl') {
      return new TextAreaControl(props2, {});
    }
    if (typeControl === 'radioControl') {
      return new RadioControl(props2, {});
    }
    if (typeControl === 'selectControl') {
      return new SelectControl(props2, {});
    }
    if (typeControl === 'checkboxControl') {
      return new CheckBoxControl(props2, {});
    }
    if (typeControl === 'datePickerControl') {
      return new DatePickerControl(props2, {});
    }
    if (typeControl === 'timeControl') {
      return new TimeControl(props2, {});
    }
    if (typeControl === 'inputNumberControl') {
      return new InputNumberControl(props2, {});
    }
    if (typeControl === 'rangePickerControl') {
      return new RangePickerControl(props2, {});
    }
    return null;
  }

  static createByOldFormChild(child, index) {
    const designtype = child.props.designtype || '';
    if (designtype === 'placeholder') {
      const c = ControlPlus.create2('placeholder', { children: child });
      c!.data!.key = child.designkey || child.props.designkey;
      c!.data.realOrder = index;
      return c;
    }
    const c2 = ControlPlus.create2('none', { children: child });
    c2!.data.key = child.designkey || child.props.designkey || c2?.data?.key;
    c2!.data.realOrder = index;
    return c2;
  }

  //
  // 控件排序刷新算法
  // 用于兼容旧表单控件，根据实际表单设计的位置规则，刷新表单实际存储位置
  //
  static refReshOrder(controls) {
    // 根据实际排序位置刷新order
    controls.forEach((item, index) => {
      item.data.order = index + 1;
    });
    // 根据order排序当前控件,理论上位置不变
    controls = controls.sort((a, b) => {
      return a.data.order - b.data.order;
    });
    // 非自定义控件梳理真实排序位置
    controls.forEach((item, index) => {
      if (!item.data.custom) {
        item.data.realOrder = index + 1;
      }
    });
    const add = Number(0.0001);
    let last:any = null;
    // 自定义控件梳理真实排序位置
    controls.forEach((item) => {
      if (item.data.custom) {
        if (last == null) {
          item.data.realOrder = add.toFixed(4);
        } else {
          item.data.realOrder = Number(
            Number(last?.data?.realOrder || 0) + add,
          ).toFixed(4);
        }
      }
      last = item;
    });
    return controls;
  }

  //
  // 控件排序回复算法
  // 用于兼容旧表单控件，根据实际表单设计的位置规则，刷新表单显示位置
  //
  static loadOrder(controls) {
    controls = controls.sort((a, b) => {
      return a.data.realOrder - b.data.realOrder;
    });
    // 根据实际排序位置刷新order
    controls.forEach((item, index) => {
      item.data.order = index + 1;
    });
    return controls;
  }
}

export default ControlPlus;
