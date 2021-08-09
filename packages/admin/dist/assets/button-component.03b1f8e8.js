import{W as n,h as o,t,s as i,b as e}from"./vendor.b428748a.js";import"./accessible-rounded.096bc093.js";import"./add-ic-call-rounded.53ff84ec.js";import"./admin-docs.7177d3ea.js";import"./index.fcf1bec7.js";import"./container.1668f6aa.js";import"./___vite-browser-external_commonjs-proxy.48053076.js";var u=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let a=class extends n{installed(){}render(){const n={breakInside:"avoid",padding:"0 0 0 0"};return o("code-demo-container",null,o("code-demo",{title:"按钮",describe:"不同类型的按钮",code:'\n```html\n<o-button text="Default"></o-button>\n<o-button type="primary">Primary</o-button>\n<o-button type="warning">Warning</o-button>\n<o-button type="danger">Danger</o-button>\n<o-button type="info">Info</o-button>\n<o-button type="primary">\n  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon\n</o-button>\n<o-button type="danger"\n>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>\n</o-button>\n```\n          ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{text:"Default"}),o("o-button",{type:"primary"},"Primary"),o("o-button",{type:"warning"},"Warning"),o("o-button",{type:"danger"},"Danger"),o("o-button",{type:"info"},"Info"),o("o-button",{type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"禁用",describe:"禁用状态下的呈现",code:'\n```html\n<o-button disabled>Default</o-button>\n<o-button disabled type="primary">Primary</o-button>\n<o-button disabled type="warning">Warning</o-button>\n<o-button disabled type="danger">Danger</o-button>\n<o-button disabled type="info">Info</o-button>\n<o-button disabled type="primary">\n  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon\n</o-button>\n<o-button disabled type="danger"\n>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>\n</o-button>\n```\n                    ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{disabled:!0},"Default"),o("o-button",{disabled:!0,type:"primary"},"Primary"),o("o-button",{disabled:!0,type:"warning"},"Warning"),o("o-button",{disabled:!0,type:"danger"},"Danger"),o("o-button",{disabled:!0,type:"info"},"Info"),o("o-button",{disabled:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{disabled:!0,type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"朴素按钮",describe:"朴素状态下的按钮，颜色不突出",code:'\n```html\n<o-button plain>Plain</o-button>\n<o-button plain type="primary">Primary</o-button>\n<o-button plain type="warning">Warning</o-button>\n<o-button plain type="danger">Danger</o-button>\n<o-button plain type="info">Info</o-button>\n<o-button plain type="primary">\n  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined> Icon\n</o-button>\n<o-button plain type="danger"\n>Icon <o-icon-accessible-rounded></o-icon-accessible-rounded>\n</o-button>\n\n<o-button plain type="primary">\n  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button plain type="danger">\n  <o-icon-accessible-rounded></o-icon-accessible-rounded>\n</o-button>\n```\n                              ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{plain:!0},"Plain"),o("o-button",{plain:!0,type:"primary"},"Primary"),o("o-button",{plain:!0,type:"warning"},"Warning"),o("o-button",{plain:!0,type:"danger"},"Danger"),o("o-button",{plain:!0,type:"info"},"Info"),o("o-button",{plain:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)," Icon"),o("o-button",{plain:!0,type:"danger"},"Icon ",o("o-icon-accessible-rounded",null)),o("o-button",{plain:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)),o("o-button",{plain:!0,type:"danger"},o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"Loading 按钮",describe:"点击请求远程的服务经常用到它",code:'\n```html\n<o-button plain loading>Plain</o-button>\n<o-button plain loading type="primary">Primary</o-button>\n<o-button plain loading type="warning">Warning</o-button>\n<o-button plain loading type="danger">Danger</o-button>\n<o-button plain loading type="info">Info</o-button>\n\n<o-button plain loading type="primary">\n  <o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button plain loading type="danger">\n  <o-icon-accessible-rounded></o-icon-accessible-rounded>\n</o-button>\n```\n                                        ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{plain:!0,loading:!0},"Plain"),o("o-button",{plain:!0,loading:!0,type:"primary"},"Primary"),o("o-button",{plain:!0,loading:!0,type:"warning"},"Warning"),o("o-button",{plain:!0,loading:!0,type:"danger"},"Danger"),o("o-button",{plain:!0,loading:!0,type:"info"},"Info"),o("o-button",{plain:!0,loading:!0,type:"primary"},o("o-icon-ac-unit-outlined",null)),o("o-button",{plain:!0,loading:!0,type:"danger"},o("o-icon-accessible-rounded",null)))),o("code-demo",{title:"尺寸",describe:"支持 4 种尺寸大小",code:'\n```html\n<o-button>Default</o-button>\n<o-button size="medium">Medium</o-button>\n<o-button size="small">Small</o-button>\n<o-button size="mini">Mini</o-button>\n```\n             ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",null,"Default"),o("o-button",{size:"medium"},"Medium"),o("o-button",{size:"small"},"Small"),o("o-button",{size:"mini"},"Mini"))),o("code-demo",{title:"圆角按钮",describe:"圆角的按钮",code:'\n```html\n<o-button round>Default</o-button>\n<o-button round size="medium">Medium</o-button>\n<o-button round size="small">Small</o-button>\n<o-button round size="mini">Mini</o-button>\n```\n             ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{round:!0},"Default"),o("o-button",{round:!0,size:"medium"},"Medium"),o("o-button",{round:!0,size:"small"},"Small"),o("o-button",{round:!0,size:"mini"},"Mini"))),o("code-demo",{title:"ICON 按钮",describe:"当不需要文字描述按钮的时候使用",code:'\n```html\n<o-button circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="primary" circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="warning" circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="danger" circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="info" circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="primary" plain circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="warning" plain circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="danger" plain circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n<o-button type="info" plain circle>\n<o-icon-ac-unit-outlined></o-icon-ac-unit-outlined>\n</o-button>\n```\n                       ',style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"primary",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"warning",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"danger",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"info",circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"primary",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"warning",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"danger",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)),o("o-button",{type:"info",plain:!0,circle:!0},o("o-icon-ac-unit-outlined",null)))),o("code-demo",{title:"块级元素",describe:"通过 block 属性控制",code:"\n```html\n<o-button block>Block button</o-button>\n```\n          ",style:n},o("div",{slot:"demo",class:t`px-5 py-5`},o("o-button",{block:!0},"Block button"))))}};a.css=[i.target,"o-button{ margin: 4px }"],a=((n,o,t,i)=>{for(var e,a=i>1?void 0:i?l(o,t):o,c=n.length-1;c>=0;c--)(e=n[c])&&(a=(i?e(o,t,a):e(a))||a);return i&&a&&u(o,t,a),a})([e("button-component")],a);export{a as default};
