"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormKeyDetail = getFormKeyDetail;
exports.historyForm = historyForm;
exports.resetDefaultVersion = resetDefaultVersion;
exports.resetToVersion = resetToVersion;
exports.saveForm = saveForm;

var _request = _interopRequireDefault(require("../../../request"));

// @ts-nocheck
// 文件数据
// const form = 'http://10.10.8.16:8089';
var form = 'http://192.168.8.72:8089'; // 保存表单

function saveForm(params) {
  return _request["default"].post({
    url: "".concat(form, "/form/model/saveOrUpdate"),
    data: params
  });
} // 表单详情历史记录


function historyForm(params) {
  return _request["default"].get({
    url: "".concat(form, "/form/history/data"),
    params: params
  });
}

function getFormKeyDetail(params) {
  return _request["default"].get({
    url: "".concat(form, "/form/model/getFormDataByKey"),
    params: params,
    headers: {
      // token: `${cookie.load('token')}`,
      'Content-Type': 'application/json'
    }
  });
} // 恢复指定版本


function resetToVersion() {
  return _request["default"].get({
    url: "".concat(form, "/form/history/resetToVersion"),
    params: {}
  });
} // 恢复系统默认版本


function resetDefaultVersion(params) {
  return _request["default"].post({
    url: "".concat(form, "/form/model/delete"),
    data: params
  });
}