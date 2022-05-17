## DesignForm
`Demo:编辑状态`

```tsx
import React,{useEffect,useState,useRef} from "react";
import { DesignForm } from "link-hub-lib";
import {Button} from 'antd';
import './index.less';
import {getFormKeyDetail} from '../src/services';
export default () => {
   const myRef = useRef(null);
  const [formList, setFormList] = useState({});
  // useEffect(()=> {
  //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {
  //     const { code, data, message: mes } = res;
  //       if (code === 2000) {
  //         setFormList(data);
  //       }
  //   })
  // },[])
  const rolesList = [
    {
      roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',
      roleName: '超级管理员',
    },
    {
      roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',
      roleName: '管理员',
    },
    {
      roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',
      roleName: '普通员',
    },
  ];
  return (
    <div style={{ width:800,height:600, overflow: 'auto'}}>
     <div style={{width:1200,height:580}}>
       <DesignForm
          myRef={(ref)=> {
            myRef.current = ref;
          }}
          isEditState={true}
          formList={`[{"key":"1652772779860","name":"下拉框","title":"下拉框","icon":"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/select.png","type":"select","order":1,"realOrder":1,"widthPercent":30,"height":30,"justify":"flex-start","align":"flex-start","authority":[],"custom":false,"myAuthority":"write","isRequired":false,"options":[{"label":"select1","value":"1"},{"label":"select2","value":"2"}],"defaultValue":"1"},{"key":"1652772784099","name":"文本框","title":"文本框","icon":"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/input.png","type":"text","order":2,"realOrder":2,"widthPercent":30,"height":30,"justify":"flex-start","align":"flex-start","authority":[],"custom":false,"myAuthority":"write","isRequired":false,"defaultValue":"222","placeholder":"","regex":"","regexError":""}]`}
          formKey={'4567890'}
          formName={'测试'}
          rolesList={rolesList}
        />
      </div>
      <Button onClick={()=>{
        myRef.current.getValue((v)=>{
          console.log(v)
        })
      }}>点击</Button>  
    </div>
  );
};
```

## DesignForm
`Demo:使用状态`

```tsx
import React,{useEffect,useState,useRef} from "react";
import { DesignForm } from "link-hub-lib";
import './index.less';
import {getFormKeyDetail} from '../src/services';
export default () => {
   const myRef = useRef(null);
  const [formList, setFormList] = useState({});
  // useEffect(()=> {
  //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {
  //     const { code, data, message: mes } = res;
  //       if (code === 2000) {
  //         setFormList(data);
  //       }
  //   })
  // },[])
  const rolesList = [
    {
      roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',
      roleName: '超级管理员',
    },
    {
      roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',
      roleName: '管理员',
    },
    {
      roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',
      roleName: '普通员',
    },
  ];
  return (
    <div style={{ width:800,height:600, overflow: 'auto'}}>
     <div style={{width:1200,height:580}}>
       <DesignForm
          // ref={myRef}
          isEditState={true}
          formList={formList?.formControlPropertyModel}
          formKey={formList.formKey}
          formName={formList.formName}
          rolesList={rolesList}
        />
      </div>
    </div>
  );
};
```

### API

| 参数         |  类型  |                                                 说明 | 必填 |
| :----------- | :----: | ---------------------------------------------------: | ---- |
| ref    |  useRef实例 |                                 绑定实例对象             |    |
|      |  bool  |                                   涟漪动画              |    |
| beat     |  bool  |                                 按键跳动                |    |
| hoverType     |  string  |                                 hover动画 line curl flow           |    |