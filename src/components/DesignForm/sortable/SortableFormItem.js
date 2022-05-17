// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
import { sortable } from 'react-sortable';
import { Form } from 'antd';
import React from 'react';
import './index.less';

class SortFormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      isRequired,
      regex,
      regexError,
      labelAlign,
      removeComponent,
      activeControlsKey,
      keys,
      style,
      ...other
    } = this.props;
    return (
      <Form.Item
        {...other}
        labelAlign={labelAlign || 'left'}
        label={title}
        name={title}
        rules={[
          { required: isRequired, message: '该字段为必填项!' },
          { pattern: new RegExp(regex), message: regexError },
        ]}
        className={
          activeControlsKey === keys
            ? 'formItemContainerActive'
            : 'formItemContainer'
        }
        style={{ ...style, padding: '8px 12px' }}
      >
        <div className="delIcon" onClick={removeComponent}>
          <img
            src="https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/remove.png"
            alt=""
          />
        </div>

        {this.props.children}
      </Form.Item>
    );
  }
}

const SortableFormItem = sortable(SortFormItem);
export default SortableFormItem;
