// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@umijs_runtime@3.5.23@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@umijs_preset-dumi@1.1.40@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/liujiaxin/Desktop/lightForm/lightForm/node_modules/_@umijs_preset-dumi@1.1.40@@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/liujiaxin/Desktop/lightForm/lightForm/README.md')}),
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1652773696000,
          "slugs": [
            {
              "depth": 1,
              "value": "link-hub-lib of React",
              "heading": "link-hub-lib-of-react"
            },
            {
              "depth": 2,
              "value": "初衷",
              "heading": "初衷"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "案例",
              "heading": "案例"
            }
          ],
          "title": "link-hub-lib of React"
        },
        "title": "link-hub-lib of React"
      },
      {
        "path": "/design-form",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__DesignForm.md' */'/Users/liujiaxin/Desktop/lightForm/lightForm/docs/DesignForm.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/DesignForm.md",
          "updatedTime": 1652772884653,
          "slugs": [
            {
              "depth": 2,
              "value": "DesignForm",
              "heading": "designform"
            },
            {
              "depth": 2,
              "value": "DesignForm",
              "heading": "designform-1"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "DesignForm",
          "hasPreviewer": true,
          "nav": {
            "path": "/design-form",
            "title": "Design-form"
          }
        },
        "title": "DesignForm - link-hub"
      }
    ],
    "title": "link-hub",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
