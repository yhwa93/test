"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[669],{"./src/stories/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Focused:()=>Focused,PasswordInputSetValue:()=>PasswordInputSetValue,TextInputSetValue:()=>TextInputSetValue,ValidationError:()=>ValidationError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Input.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import type { Meta, StoryObj } from '@storybook/react'\nimport { useForm, FormProvider } from 'react-hook-form'\nimport { Input } from './Input'\n\nconst meta: Meta<typeof Input> = {\n  title: 'Atoms/Input',\n  component: Input,\n  decorators: [\n    (Story) => (\n      <FormProvider {...useForm()}>\n        <Story />\n      </FormProvider>\n    ),\n  ],\n  tags: ['autodocs'],\n}\n\nexport default meta\ntype Story = StoryObj<typeof Input>\n\nexport const Default: Story = {\n  args: {\n    name: 'name',\n    type: 'text',\n    placeholder: '이름을 입력하세요',\n    autoFocus: false,\n  },\n  parameters: {\n    componentSubtitle: '기본 input 입니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',\n    layout: 'centered',\n    backgrounds: {\n      default: 'green',\n      values: [\n        { name: 'green', value: '#ECF5E8' },\n        { name: 'blue', value: '#1A344C' },\n        { name: 'yellow', value: '#FFF8EB' },\n        { name: 'modal', value: 'rgba(0, 0, 0, 0.70)' },\n      ],\n    },\n    docs: {\n      description: {\n        story: 'value 입력전, placeholder를 가진 input입니다.',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const TextInputSetValue: Story = {\n  args: {\n    ...Default.args,\n    value: '김두콩',\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'value에 값이 입력된 input(type=\"text\")입니다.',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const PasswordInputSetValue: Story = {\n  args: {\n    ...Default.args,\n    type: 'password',\n    value: '1234qwer',\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'value에 값이 입력된 input(type=\"password\")입니다.',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const ValidationError: Story = {\n  args: {\n    ...Default.args,\n    type: 'text',\n    value: '김  두콩',\n    validationtext: '띄어쓰기를 제외하고 이름을 입력해주세요.',\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'input의 value에 useForm의 유효성 에러가 발생했을때의 input입니다.',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const Focused: Story = {\n  args: {\n    ...Default.args,\n    autoFocus: true,\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'focus된 상태의 input입니다. (autoFocus props를 이용하여 자동 포커스)',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const Disabled: Story = {\n  args: {\n    ...Default.args,\n    value: '김두콩',\n    disabled: true,\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'disabled 상태의 input입니다.',\n      },\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n",locationsMap:{default:{startLoc:{col:30,line:21},endLoc:{col:1,line:48},startBody:{col:30,line:21},endBody:{col:1,line:48}},"text-input-set-value":{startLoc:{col:40,line:50},endLoc:{col:1,line:65},startBody:{col:40,line:50},endBody:{col:1,line:65}},"password-input-set-value":{startLoc:{col:44,line:67},endLoc:{col:1,line:83},startBody:{col:44,line:67},endBody:{col:1,line:83}},"validation-error":{startLoc:{col:38,line:85},endLoc:{col:1,line:102},startBody:{col:38,line:85},endBody:{col:1,line:102}},focused:{startLoc:{col:30,line:104},endLoc:{col:1,line:119},startBody:{col:30,line:104},endBody:{col:1,line:119}},disabled:{startLoc:{col:31,line:121},endLoc:{col:1,line:137},startBody:{col:31,line:121},endBody:{col:1,line:137}}}}},title:"Atoms/Input",component:_Input__WEBPACK_IMPORTED_MODULE_2__.p,decorators:[function(Story){return __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Op,(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.mN)(),__jsx(Story,null))}],tags:["autodocs"]};var Default={args:{name:"name",type:"text",placeholder:"이름을 입력하세요",autoFocus:!1},parameters:{componentSubtitle:"기본 input 입니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.",layout:"centered",backgrounds:{default:"green",values:[{name:"green",value:"#ECF5E8"},{name:"blue",value:"#1A344C"},{name:"yellow",value:"#FFF8EB"},{name:"modal",value:"rgba(0, 0, 0, 0.70)"}]},docs:{description:{story:"value 입력전, placeholder를 가진 input입니다."},story:{inline:!0},canvas:{sourceState:"shown"}}}},TextInputSetValue={args:_objectSpread(_objectSpread({},Default.args),{},{value:"김두콩"}),parameters:_objectSpread(_objectSpread({},Default.parameters),{},{docs:{description:{story:'value에 값이 입력된 input(type="text")입니다.'},story:{inline:!0},canvas:{sourceState:"shown"}}})},PasswordInputSetValue={args:_objectSpread(_objectSpread({},Default.args),{},{type:"password",value:"1234qwer"}),parameters:_objectSpread(_objectSpread({},Default.parameters),{},{docs:{description:{story:'value에 값이 입력된 input(type="password")입니다.'},story:{inline:!0},canvas:{sourceState:"shown"}}})},ValidationError={args:_objectSpread(_objectSpread({},Default.args),{},{type:"text",value:"김  두콩",validationtext:"띄어쓰기를 제외하고 이름을 입력해주세요."}),parameters:_objectSpread(_objectSpread({},Default.parameters),{},{docs:{description:{story:"input의 value에 useForm의 유효성 에러가 발생했을때의 input입니다."},story:{inline:!0},canvas:{sourceState:"shown"}}})},Focused={args:_objectSpread(_objectSpread({},Default.args),{},{autoFocus:!0}),parameters:_objectSpread(_objectSpread({},Default.parameters),{},{docs:{description:{story:"focus된 상태의 input입니다. (autoFocus props를 이용하여 자동 포커스)"},story:{inline:!0},canvas:{sourceState:"shown"}}})},Disabled={args:_objectSpread(_objectSpread({},Default.args),{},{value:"김두콩",disabled:!0}),parameters:_objectSpread(_objectSpread({},Default.parameters),{},{docs:{description:{story:"disabled 상태의 input입니다."},story:{inline:!0},canvas:{sourceState:"shown"}}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'name',\n    type: 'text',\n    placeholder: '이름을 입력하세요',\n    autoFocus: false\n  },\n  parameters: {\n    componentSubtitle: '기본 input 입니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',\n    layout: 'centered',\n    backgrounds: {\n      default: 'green',\n      values: [{\n        name: 'green',\n        value: '#ECF5E8'\n      }, {\n        name: 'blue',\n        value: '#1A344C'\n      }, {\n        name: 'yellow',\n        value: '#FFF8EB'\n      }, {\n        name: 'modal',\n        value: 'rgba(0, 0, 0, 0.70)'\n      }]\n    },\n    docs: {\n      description: {\n        story: 'value 입력전, placeholder를 가진 input입니다.'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},TextInputSetValue.parameters={...TextInputSetValue.parameters,docs:{...TextInputSetValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    value: '김두콩'\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'value에 값이 입력된 input(type=\"text\")입니다.'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...TextInputSetValue.parameters?.docs?.source}}},PasswordInputSetValue.parameters={...PasswordInputSetValue.parameters,docs:{...PasswordInputSetValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'password',\n    value: '1234qwer'\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'value에 값이 입력된 input(type=\"password\")입니다.'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...PasswordInputSetValue.parameters?.docs?.source}}},ValidationError.parameters={...ValidationError.parameters,docs:{...ValidationError.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    type: 'text',\n    value: '김  두콩',\n    validationtext: '띄어쓰기를 제외하고 이름을 입력해주세요.'\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'input의 value에 useForm의 유효성 에러가 발생했을때의 input입니다.'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...ValidationError.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    autoFocus: true\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'focus된 상태의 input입니다. (autoFocus props를 이용하여 자동 포커스)'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...Focused.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    value: '김두콩',\n    disabled: true\n  },\n  parameters: {\n    ...Default.parameters,\n    docs: {\n      description: {\n        story: 'disabled 상태의 input입니다.'\n      },\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TextInputSetValue","PasswordInputSetValue","ValidationError","Focused","Disabled"]},"./src/stories/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var _templateObject,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["autoFocus","disabled","validationtext","setOnFocus"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,InputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input(_templateObject||(_templateObject=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n  border: ",";\n  color: ",";\n  outline: none;\n  &:focus {\n    border: 2px solid blue;\n  }\n  &:disabled {\n    color: gray;\n    border: 1px solid gray;\n  }\n"])),(function(props){return props.$validationtext?"2px solid red!important":"1px solid gray"}),(function(props){return props.$validationtext?"red!important":"black"})),Input=function Input(_ref){var _ref$autoFocus=_ref.autoFocus,autoFocus=void 0===_ref$autoFocus||_ref$autoFocus,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$validationtext=_ref.validationtext,validationtext=void 0===_ref$validationtext?void 0:_ref$validationtext,_ref$setOnFocus=_ref.setOnFocus,setOnFocus=void 0===_ref$setOnFocus?void 0:_ref$setOnFocus,props=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return __jsx(InputWrapper,(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props.register,{type:props.type,name:props.name,id:props.name,value:props.value,ref:props.inputRef,placeholder:props.placeholder,autoFocus,disabled,$validationtext:Boolean(void 0!==validationtext),onFocus:void 0!==setOnFocus?function(){return setOnFocus(!0)}:void 0,onBlur:void 0!==setOnFocus?function(){return setOnFocus(!1)}:void 0}))};Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{register:{defaultValue:null,description:"[useForm 사용시] register 메소드",name:"register",required:!1,type:{name:"object"}},inputRef:{defaultValue:null,description:"[useForm 사용시] input의 ref(DOM 객체)",name:"inputRef",required:!1,type:{name:"ForwardedRef<any>"}},type:{defaultValue:null,description:"input의 type",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},name:{defaultValue:null,description:"input 태그의 attribute name값으로 input의 id, useForm의 name 또한 동일한 값으로 설정됩니다.",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"input 태그의 value",name:"value",required:!1,type:{name:"string"}},validationtext:{defaultValue:{value:"undefined"},description:"[useForm 사용시] input value의 유효성 검사 텍스트",name:"validationtext",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"input의 placeholder",name:"placeholder",required:!0,type:{name:"string"}},autoFocus:{defaultValue:{value:"true"},description:"자동 포커스 기능 사용 여부",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"input의 disabled 설정 여부",name:"disabled",required:!1,type:{name:"boolean"}},setOnFocus:{defaultValue:{value:"undefined"},description:"setOnFocus 함수",name:"setOnFocus",required:!1,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/stories/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);