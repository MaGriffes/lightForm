import React, { useEffect, useState } from 'react';
import { message, Popconfirm, Table, Button, Drawer } from 'antd';
import moment from 'moment';
import {
  historyForm,
  resetDefaultVersion,
  resetToVersion,
} from '../../services';

export interface IProps { 
  formKey: string;
  closeHistoryDrawer: (value: boolean) => void;
  onRecoveVersion: (value: string) => void;
}

const DesignHistory = (props:IProps) => {
  const { formKey, closeHistoryDrawer, onRecoveVersion } = props;
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (formKey) {
      historyForm({ formKey }).then(([, res]) => {
        const { code, data, message: mes} = res || {};
        if (code === 2000) {
          setDataSource(data);
        } else {
          message.error(mes);
        }
      });
    }
  }, [formKey]);
  const handleHitoryVision = (params) => {
    resetToVersion(params).then((res) => {
      const { code, data } = res || {};
      if (code === 2000) {
        debugger;
        message.success('已恢复此版本');
        closeHistoryDrawer(false);
        onRecoveVersion(data);
      }
    });
  };
  const columns = [
    {
      title: '版本号',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: '保存时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: (val) => {
        return (val && moment(val).format('YYYY/MM/DD HH:mm:ss')) || '';
      },
    },
    {
      title: '操作',
      key: 'action',
      render: ({ version, formKey: key }) => (
        <Button
          type="link"
          onClick={() => handleHitoryVision({ formKey: key, version })}
        >
          恢复到此版本
        </Button>
      ),
    },
  ];

  const saveSystemVersion = function () {
    resetDefaultVersion({ formKey }).then((res) => {
      const { code } = res;
      if (code === 2000) {
        closeHistoryDrawer(false);
        message.success('已恢复系统默认版本');
      }
    });
  };

  return (
    <>
      <Drawer
        visible
        onClose={() => closeHistoryDrawer(false)}
        title="历史版本"
      >
        <div style={{ textAlign: 'right', marginBottom: 12 }}>
          <Popconfirm
            placement="top"
            title="操作确认"
            onConfirm={() => {
              saveSystemVersion();
            }}
          >
            <Button type="link">恢复系统默认版本</Button>
          </Popconfirm>
        </div>

        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </Drawer>
    </>
  );
};

export default DesignHistory;
