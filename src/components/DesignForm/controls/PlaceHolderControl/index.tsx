
import React from 'react';
import BaseControl from '../BaseControl';
import SortableItem from '../../sortable/SortableItem';

// 占位符控件：允许修改部分内容，用于兼容旧表单部分控件。
class PlaceHolderControl extends BaseControl {
  constructor(props, dataProps) {
    const dataProps2 = {
      ...dataProps,
      name: '占位符',
      title: '',
      icon: '',
      type: 'placeholder',
    };
    super(props, dataProps2);
  }

  getPropertyTabs(parentForm) {
    return [...super.getPropertyTabs(parentForm)];
  }

  render(parentForm) {
    const item = <>{this.props.children}</>;
    if (parentForm?.isEditState) {
      return (
        <SortableItem
          type={this.data.type}
          style={{
            width: `${this.data.widthPercent}%`,
            height: this.data.height === 0 ? 'auto' : `${this.data.height}px`,
            border: '1px dashed red',
          }}
          onClick={() => parentForm.clickControlEditProperty(this)}
          sortId={parentForm.index}
          onSortItems={(items) => {
            parentForm.refreshControlsOrder(items);
          }}
          items={parentForm.controls}
          key={this.data.key}
        >
          {item}
        </SortableItem>
      );
    } else {
      return (
        <div
          style={{
            width: `${this.data.widthPercent}%`,
            height: this.data.height === 0 ? 'auto' : `${this.data.height}px`,
          }}
          key={this.data.key}
        >
          {item}
        </div>
      );
    }
  }
}

export default PlaceHolderControl;
