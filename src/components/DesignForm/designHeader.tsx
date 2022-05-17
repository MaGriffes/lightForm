import React from 'react';
import { Button } from 'antd';
import './index.less';
export interface IProps { 
  activeControlsKeyFn:Function;
  loading: boolean;
  onLookHistory: (value: boolean) => void;
  formName: string;
  onSave: Function;
}
export default ({
  loading = false,
  onSave,
  formName,
  onLookHistory,
  activeControlsKeyFn
}:IProps) => {
  return (
    <div className="designHeader">
      <div className="designHeader_title">{`表单配置:${
        formName || ''
      }`}</div>
      <div>
        <Button
          type="primary"
          size="small"
          onClick={()=>activeControlsKeyFn()}
        >
          配置表单
        </Button>
        <Button
          type="primary"
          size="small"
          style={{ margin: '0 12px' }}
          onClick={() => {
            onLookHistory(true);
          }}
        >
          历史版本
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            onSave();
          }}
          loading={loading}
        >
          保存
        </Button>
      </div>
    </div>
  );
};
