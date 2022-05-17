import React, { createRef } from 'react';
import { useDrop } from 'react-dnd';
import { Form } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import './index.less';
export interface IProps { 
  controls: Array<any>;
  isEditState: boolean;
  updateControls?: (value: Array<any>) => void;
  activeControlsKey?: string;
  activeControlsKeyFn?: (value: string) => void;
  refResh?: Function;
  newForm: any;
  layout: string;
}

interface IState { 
 
}
const SortableItem = SortableElement(({ options, value }) => {
   const {
    title,
    isRequired,
    regex,
    regexError,
    labelAlign,
    widthPercent,
    height,
    activeControlsKey,
    key,
    activeControlsKeyFn,
    controls,
    updateControls
   } = options;
  
  const handleDelete = () => { 
    updateControls(
      controls.filter((item) => { 
      return item.data.key !== key
    }))
  }

  return (
    <div
      onClick={()=> activeControlsKeyFn && activeControlsKeyFn(key)}
      style={{ width: `${widthPercent}%` }}
      className={ activeControlsKey === key ? 'sortFormItem-active' : 'sortFormItem-normal'}
    >
      <Form.Item
      label={title}
      name={title}
      labelAlign={labelAlign || 'left'}
      rules={[
        { required: isRequired, message: '该字段为必填项!' },
        { pattern: new RegExp(regex), message: regexError },
      ]}
      >
        <>{value}</>
      </Form.Item>
      <div
        onClick={handleDelete}
        className='deleteIcon'
      >
        <img
          src="https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/remove.png"
          alt=""
        />
     </div>
    </div>
  )
})

const SortableList = SortableContainer((options) => {
  const { controls, isEditState, updateControls, refResh, newForm, layout } = options
  return (
    <Form style={{ display: 'flex', flexWrap: 'wrap' }} ref={newForm} layout={layout} >
      {
      controls.map((value, index) =>  
      {
        return <SortableItem
          options={{ ...value.data,...options}}
          key={value.data.key} index={index} value={
          value.render({
            isEditState,
            value,
            updateControls,
            refResh,
            newForm
            })
          } 
        />
        }
      )}
    </Form>
  );
});

export default (props:IProps) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const { controls,updateControls } = props;
    updateControls && updateControls([...arrayMoveImmutable(controls, oldIndex, newIndex)])
  };
     const [, drop] = useDrop(() => ({
        accept: 'box',
       drop: (item, monitor) => {
            // setHoverIndex(null);
            // setHoverItem(null);
            // let y = monitor.getClientOffset().y;
            // let hoverIndexlocal = getHoverIndex(y);
            // return {name: value.sectionId, hoverIndex: hoverIndexlocal};
        },
        hover: (item, monitor) => {
            // let height = monitor.getClientOffset().y;
            // height = height - 90;
            // height = height / 120;
            // setHoverItem(item);
            // setHoverIndex(Math.max(Math.floor(height), 0));
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
    }));
    return (
      <div style={{ width: '100%', height: '100%'}} ref={ drop }>
        < SortableList distance = { 10} axis = "xy" {...props } onSortEnd = { onSortEnd } />
      </div>
    )
}
