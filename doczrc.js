import {css} from 'docz-plugin-css'
export default {
    title: 'link-hub-lib',
    description: 'link-hub-lib',
    codeSandbox: false,
    typescript: false,
    indexHtml: 'docz/index.html',
    htmlContext:{
        favicon: ''
    },
    plugins:[
        css({
            preprocessor: 'less',
            loaderOpts:{
                javascriptEnabled: true
            }
        })
    ]
}