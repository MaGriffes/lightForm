// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/liujiaxin/Desktop/lightForm/lightForm/docs/index.less?dumi-raw-code';

export default {
  'DesignForm-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/interopRequireDefault");

    var _slicedToArray2 = _interopRequireDefault(await import("/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/slicedToArray"));

    var _react = _interopRequireWildcard(await import("react"));

    var _linkHubLib = await import("link-hub-lib");

    var _antd = await import("antd");

    await import("/Users/liujiaxin/Desktop/lightForm/lightForm/docs/index.less");

    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var _default = function _default() {
      var _myRef = (0, _react.useRef)(null);

      var _useState = (0, _react.useState)({}),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          formList = _useState2[0],
          setFormList = _useState2[1]; // useEffect(()=> {
      //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {
      //     const { code, data, message: mes } = res;
      //       if (code === 2000) {
      //         setFormList(data);
      //       }
      //   })
      // },[])


      var rolesList = [{
        roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',
        roleName: '超级管理员'
      }, {
        roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',
        roleName: '管理员'
      }, {
        roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',
        roleName: '普通员'
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 800,
          height: 600,
          overflow: 'auto'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 1200,
          height: 580
        }
      }, /*#__PURE__*/_react["default"].createElement(_linkHubLib.DesignForm, {
        myRef: function myRef(ref) {
          _myRef.current = ref;
        },
        isEditState: true,
        formList: "[{\"key\":\"1652772779860\",\"name\":\"\u4E0B\u62C9\u6846\",\"title\":\"\u4E0B\u62C9\u6846\",\"icon\":\"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/select.png\",\"type\":\"select\",\"order\":1,\"realOrder\":1,\"widthPercent\":30,\"height\":30,\"justify\":\"flex-start\",\"align\":\"flex-start\",\"authority\":[],\"custom\":false,\"myAuthority\":\"write\",\"isRequired\":false,\"options\":[{\"label\":\"select1\",\"value\":\"1\"},{\"label\":\"select2\",\"value\":\"2\"}],\"defaultValue\":\"1\"},{\"key\":\"1652772784099\",\"name\":\"\u6587\u672C\u6846\",\"title\":\"\u6587\u672C\u6846\",\"icon\":\"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/input.png\",\"type\":\"text\",\"order\":2,\"realOrder\":2,\"widthPercent\":30,\"height\":30,\"justify\":\"flex-start\",\"align\":\"flex-start\",\"authority\":[],\"custom\":false,\"myAuthority\":\"write\",\"isRequired\":false,\"defaultValue\":\"222\",\"placeholder\":\"\",\"regex\":\"\",\"regexError\":\"\"}]",
        formKey: '4567890',
        formName: '测试',
        rolesList: rolesList
      })), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        onClick: function onClick() {
          _myRef.current.getValue(function (v) {
            console.log(v);
          });
        }
      }, "\u70B9\u51FB"));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React,{useEffect,useState,useRef} from \"react\";\nimport { DesignForm } from \"link-hub-lib\";\nimport {Button} from 'antd';\nimport './index.less';\nimport {getFormKeyDetail} from '../src/services';\nexport default () => {\n   const myRef = useRef(null);\n  const [formList, setFormList] = useState({});\n  // useEffect(()=> {\n  //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {\n  //     const { code, data, message: mes } = res;\n  //       if (code === 2000) {\n  //         setFormList(data);\n  //       }\n  //   })\n  // },[])\n  const rolesList = [\n    {\n      roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',\n      roleName: '超级管理员',\n    },\n    {\n      roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',\n      roleName: '管理员',\n    },\n    {\n      roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',\n      roleName: '普通员',\n    },\n  ];\n  return (\n    <div style={{ width:800,height:600, overflow: 'auto'}}>\n     <div style={{width:1200,height:580}}>\n       <DesignForm\n          myRef={(ref)=> {\n            myRef.current = ref;\n          }}\n          isEditState={true}\n          formList={`[{\"key\":\"1652772779860\",\"name\":\"下拉框\",\"title\":\"下拉框\",\"icon\":\"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/select.png\",\"type\":\"select\",\"order\":1,\"realOrder\":1,\"widthPercent\":30,\"height\":30,\"justify\":\"flex-start\",\"align\":\"flex-start\",\"authority\":[],\"custom\":false,\"myAuthority\":\"write\",\"isRequired\":false,\"options\":[{\"label\":\"select1\",\"value\":\"1\"},{\"label\":\"select2\",\"value\":\"2\"}],\"defaultValue\":\"1\"},{\"key\":\"1652772784099\",\"name\":\"文本框\",\"title\":\"文本框\",\"icon\":\"https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/input.png\",\"type\":\"text\",\"order\":2,\"realOrder\":2,\"widthPercent\":30,\"height\":30,\"justify\":\"flex-start\",\"align\":\"flex-start\",\"authority\":[],\"custom\":false,\"myAuthority\":\"write\",\"isRequired\":false,\"defaultValue\":\"222\",\"placeholder\":\"\",\"regex\":\"\",\"regexError\":\"\"}]`}\n          formKey={'4567890'}\n          formName={'测试'}\n          rolesList={rolesList}\n        />\n      </div>\n      <Button onClick={()=>{\n        myRef.current.getValue((v)=>{\n          console.log(v)\n        })\n      }}>点击</Button>  \n    </div>\n  );\n};"},"index.less":{"import":"./index.less","content":rawCode1}},"dependencies":{"react":{"version":">=16.9.0"},"link-hub-lib":{"version":"1.1.0"},"antd":{"version":"4.20.5","css":"antd/dist/antd.css"},"react-dom":{"version":">=16.9.0"}},"identifier":"DesignForm-demo"},
  },
  'DesignForm-demo-1': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/interopRequireDefault");

    var _slicedToArray2 = _interopRequireDefault(await import("/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/slicedToArray"));

    var _react = _interopRequireWildcard(await import("react"));

    var _linkHubLib = await import("link-hub-lib");

    await import("/Users/liujiaxin/Desktop/lightForm/lightForm/docs/index.less");

    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var _default = function _default() {
      var myRef = (0, _react.useRef)(null);

      var _useState = (0, _react.useState)({}),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          formList = _useState2[0],
          setFormList = _useState2[1]; // useEffect(()=> {
      //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {
      //     const { code, data, message: mes } = res;
      //       if (code === 2000) {
      //         setFormList(data);
      //       }
      //   })
      // },[])


      var rolesList = [{
        roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',
        roleName: '超级管理员'
      }, {
        roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',
        roleName: '管理员'
      }, {
        roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',
        roleName: '普通员'
      }];
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 800,
          height: 600,
          overflow: 'auto'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 1200,
          height: 580
        }
      }, /*#__PURE__*/_react["default"].createElement(_linkHubLib.DesignForm // ref={myRef}
      , {
        isEditState: true,
        formList: formList === null || formList === void 0 ? void 0 : formList.formControlPropertyModel,
        formKey: formList.formKey,
        formName: formList.formName,
        rolesList: rolesList
      })));
    };

    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import React,{useEffect,useState,useRef} from \"react\";\nimport { DesignForm } from \"link-hub-lib\";\nimport './index.less';\nimport {getFormKeyDetail} from '../src/services';\nexport default () => {\n   const myRef = useRef(null);\n  const [formList, setFormList] = useState({});\n  // useEffect(()=> {\n  //   getFormKeyDetail({ formKey: 'formkey1650524253623' }).then((res)=> {\n  //     const { code, data, message: mes } = res;\n  //       if (code === 2000) {\n  //         setFormList(data);\n  //       }\n  //   })\n  // },[])\n  const rolesList = [\n    {\n      roleKey: '1E63754D-4B38-4346-A682-6D97298CB27D',\n      roleName: '超级管理员',\n    },\n    {\n      roleKey: '7BE2759C-F775-40E3-B4BC-0EC00794AA66',\n      roleName: '管理员',\n    },\n    {\n      roleKey: '70A3A750-D3E2-4DBB-8D9C-323C57D7FA5B',\n      roleName: '普通员',\n    },\n  ];\n  return (\n    <div style={{ width:800,height:600, overflow: 'auto'}}>\n     <div style={{width:1200,height:580}}>\n       <DesignForm\n          // ref={myRef}\n          isEditState={true}\n          formList={formList?.formControlPropertyModel}\n          formKey={formList.formKey}\n          formName={formList.formName}\n          rolesList={rolesList}\n        />\n      </div>\n    </div>\n  );\n};"},"index.less":{"import":"./index.less","content":rawCode1}},"dependencies":{"react":{"version":"16.14.0"},"link-hub-lib":{"version":"1.1.0"}},"identifier":"DesignForm-demo-1"},
  },
};
