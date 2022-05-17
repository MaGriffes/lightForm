// @ts-nocheck
// 文件数据
import request from '../../../request';
// const form = 'http://10.10.8.16:8089';
const form = 'http://192.168.8.72:8089';
// 保存表单
export function saveForm(params) {
  return request.post({
    url: `${form}/form/model/saveOrUpdate`,
    data: params,
  });
}

// 表单详情历史记录
export function historyForm(params) {
  return request.get({
    url: `${form}/form/history/data`,
    params,
  });
}


export function getFormKeyDetail(params) {
  return request.get({
    url: `${form}/form/model/getFormDataByKey`,
    params,
    headers: {
      // token: `${cookie.load('token')}`,
      'Content-Type': 'application/json',
    },
  });
}


// 恢复指定版本
export function resetToVersion() {
  return request.get({
    url: `${form}/form/history/resetToVersion`,
    params: {},
  });
}

// 恢复系统默认版本
export function resetDefaultVersion(params) {
  return request.post({
    url: `${form}/form/model/delete`,
    data: params,
  });
}

