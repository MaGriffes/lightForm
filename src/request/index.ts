/**
 * request 网络请求工具
 * 经过一层返回的封装，使用方式为：
 * const [err, data] = await XxxService.getXXX();
 * // 如果没有错误，err为null
 * if (!err) {
 *  // 后续处理
 * }
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
 import { extend } from 'umi-request';
 import { message } from 'antd';
 
 const codeMessage = {
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   302: '参数为空',
   303: '参数有误',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。',
   common: '服务器异常，请稍后再试',
 };
 /**
  * 异常处理程序
  */
 const errorHandler = (error) => {
   const { response } = error;
   if (response && response.status) {
     // 浏览器报的错误码
     const { status: code } = response;
     const errorText = codeMessage[code] || response.statusText;
     return Promise.reject({ code, errorText });
   }
   return Promise.resolve(response);
 };
 
 /**
  * 配置request请求时的默认参数
  */
 const originRequest = extend({
   errorHandler,
 });
 
 
 const awaitTo = (promise) => {
   return promise
     .then((data) => {
       if (data.code !== 2000) {
         return Promise.reject(data);
       }
       return [null, data];
     })
     .catch((err) => {
       if (typeof err === 'object') {
         message.error(err.message || codeMessage[err.code || 'common']);
         if (err.code === 999) {
           location.reload();
         }
       } else {
         message.error(codeMessage.common);
       }
       return [err, null];
     });
 };
 const fetchRequest = (
   method,
   url,
   options,
 ) => {
   return awaitTo(
     originRequest[method](url, {
       ...options,
       headers: {
         ...options?.headers,
         accessToken: localStorage.getItem('accessToken'),
       },
     }),
   );
 };
 // 如果需要的话，可以继续加其他的方法
 const request = {
   get: ({ url, data, params, options }) => {
     return fetchRequest('get', url, {
       ...(options || {}),
       data,
       params,
     });
   },
   post: ({ url, data, params, options }) => {
     return fetchRequest('post', url, {
       ...(options || {}),
       data,
       params,
     });
   },
 };
 
 export default request;
 