import React, { useRef } from 'react';
import { useDrag,useDrop } from 'react-dnd';
import { EditTwoTone } from '@ant-design/icons';
import './index.less';
import ControlPlus from './controls/ControlPlus';

const DesignTool = (props) => {
  const { controls, addForm } = props;
 
  
  const renderTool = function (control) {
   
    return control.map((type,index:number) => {
      const c = ControlPlus.create(type);
      return (
        <DndItem key={c?.data?.type} item={c} index={index} type={c?.data?.type} list={control} addForm={ addForm} ></DndItem>
        // <div className="designLeftContainer" key={c.data.type}>
        //   <div
        //     className="designControl"
        //     // onDragStart={(e) => {
        //     //   dragend();
        //     // }}
        //     // onDragEnd={(e) => {
        //     //   dragstart(c.data.type);
        //     //   addForm();
        //     // }}
        //     // draggable="true"
        //   >
        //     {c?.data?.icon ? (
        //       <img className="leftContainerIcon" src={c?.data?.icon} alt="" />
        //     ) : (
        //       <EditTwoTone />
        //     )}
        //     <span>{c?.data?.name}</span>
        //   </div>
        // </div>
      );
    });
  };
  return (
    <div className="designTool">
      {controls.map((item) => {
        return (
          <div key={item.type}>
            <h4 className="classTool_title">{item.title}</h4>
            <div className="classTool_class"> {renderTool(item.control)}</div>
          </div>
        );
      })}
    </div>
  );
};

// 拖拽节点
const DndItem = ({ item, index, type, list,addForm }) => {
  const [, drag] = useDrag(() => ({
    type: 'box',
    item,
    end: (item, monitor) => {
      const result = monitor.getDropResult();
      if (result) {
        addForm(type);
      }
    },
  }));

  return (
    <div className="designLeftContainer" ref={drag}>
      {item?.data?.icon ? (
        <img className="leftContainerIcon" src={item?.data?.icon} alt="" />
      ) : (
        <EditTwoTone />
      )}
      <span>{item?.data?.name}</span>
    </div>
  )
}

export default DesignTool;
