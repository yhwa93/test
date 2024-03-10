"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[841],{"./src/stories/SelectedBoxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Focused:()=>Focused,SelectedOption:()=>SelectedOption,ValidationError:()=>ValidationError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectedBoxField_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),SelectBox=__webpack_require__("./src/stories/SelectBox.tsx"),FormLabel=__webpack_require__("./src/stories/FormLabel.tsx"),_excluded=["options","autoFocus","disabled","selectedOption","validationtext"],__jsx=react.createElement,SelectBoxField=react.forwardRef((function(_ref,ref){var _ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$autoFocus=_ref.autoFocus,autoFocus=void 0!==_ref$autoFocus&&_ref$autoFocus,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$selectedOption=_ref.selectedOption,selectedOption=void 0===_ref$selectedOption?"":_ref$selectedOption,_ref$validationtext=_ref.validationtext,validationtext=void 0===_ref$validationtext?void 0:_ref$validationtext,props=(0,objectWithoutProperties.A)(_ref,_excluded),_useState=(0,react.useState)(autoFocus),onFocus=_useState[0],setOnFocus=_useState[1];return __jsx("fieldset",null,onFocus&&__jsx(FormLabel.l,{name:props.name,validationtext},props.label),__jsx(SelectBox.a,{register:props,selectRef:ref,name:props.name,options,placeholder:props.placeholder,selectedOption,autoFocus,disabled,validationtext,setOnFocus}),validationtext&&__jsx("p",null,validationtext))}));try{SelectBoxField.displayName="SelectBoxField",SelectBoxField.__docgenInfo={description:"",displayName:"SelectBoxField",props:{name:{defaultValue:null,description:"select 태그의 attribute name값으로 select의 id, useForm의 name 또한 동일한 값으로 설정됩니다.",name:"name",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:'selectbox 첫번째 option(value="") 텍스트',name:"placeholder",required:!0,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"selectbox 내부의 options 배열",name:"options",required:!1,type:{name:"string[]"}},label:{defaultValue:null,description:"selectbox의 title label입니다.",name:"label",required:!0,type:{name:"string"}},selectedOption:{defaultValue:{value:""},description:'선택된 옵션이 있을 경우 사용 (기본값: "" 는 placeholder option의 value입니다.)',name:"selectedOption",required:!1,type:{name:"string"}},validationtext:{defaultValue:{value:"undefined"},description:"[useForm 사용시] useForm 유효성검사 텍스트",name:"validationtext",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"자동 포커스 기능 사용 여부",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"selectbox의 disabled 설정 여부",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectBoxField.tsx#SelectBoxField"]={docgenInfo:SelectBoxField.__docgenInfo,name:"SelectBoxField",path:"src/stories/SelectBoxField.tsx#SelectBoxField"})}catch(__react_docgen_typescript_loader_error){}var SelectedBoxField_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const SelectedBoxField_stories={parameters:{storySource:{source:"import type { Meta, StoryObj } from '@storybook/react'\nimport { useForm, FormProvider } from 'react-hook-form'\nimport { SelectBoxField } from './SelectBoxField'\n\nconst meta: Meta<typeof SelectBoxField> = {\n  title: 'Molecules/SelectBoxField',\n  component: SelectBoxField,\n  decorators: [\n    (Story) => (\n      <FormProvider {...useForm()}>\n        <Story />\n      </FormProvider>\n    ),\n  ],\n  tags: ['autodocs'],\n}\n\nexport default meta\ntype Story = StoryObj<typeof SelectBoxField>\n\nexport const Default: Story = {\n  args: {\n    name: 'gender',\n    placeholder: '성별을 선택하세요',\n    options: ['여자', '남자'],\n    label: '성별',\n  },\n  parameters: {\n    componentSubtitle:\n      'label과 selectbox 조합입니다. useForm의 유효성검사 text를 포함합니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',\n    layout: 'centered',\n    backgrounds: {\n      default: 'green',\n      values: [\n        { name: 'green', value: '#ECF5E8' },\n        { name: 'blue', value: '#1A344C' },\n        { name: 'yellow', value: '#FFF8EB' },\n        { name: 'modal', value: 'rgba(0, 0, 0, 0.70)' },\n      ],\n    },\n    docs: {\n      story: { inline: true },\n      canvas: { sourceState: 'shown' },\n    },\n  },\n}\n\nexport const SelectedOption: Story = {\n  args: {\n    ...Default.args,\n    selectedOption: '여자',\n  },\n  parameters: {\n    ...Default.parameters,\n  },\n}\n\nexport const ValidationError: Story = {\n  args: {\n    ...Default.args,\n    selectedOption: '',\n    validationtext: '성별을 선택하세요.',\n  },\n  parameters: {\n    ...Default.parameters,\n  },\n}\n\nexport const Focused: Story = {\n  args: {\n    ...Default.args,\n    autoFocus: true,\n  },\n  parameters: {\n    ...Default.parameters,\n  },\n}\n\nexport const Disabled: Story = {\n  args: {\n    ...Default.args,\n    selectedOption: '여자',\n    disabled: true,\n  },\n  parameters: {\n    ...Default.parameters,\n  },\n}\n",locationsMap:{default:{startLoc:{col:30,line:21},endLoc:{col:1,line:46},startBody:{col:30,line:21},endBody:{col:1,line:46}},"selected-option":{startLoc:{col:37,line:48},endLoc:{col:1,line:56},startBody:{col:37,line:48},endBody:{col:1,line:56}},"validation-error":{startLoc:{col:38,line:58},endLoc:{col:1,line:67},startBody:{col:38,line:58},endBody:{col:1,line:67}},focused:{startLoc:{col:30,line:69},endLoc:{col:1,line:77},startBody:{col:30,line:69},endBody:{col:1,line:77}},disabled:{startLoc:{col:31,line:79},endLoc:{col:1,line:88},startBody:{col:31,line:79},endBody:{col:1,line:88}}}}},title:"Molecules/SelectBoxField",component:SelectBoxField,decorators:[function(Story){return SelectedBoxField_stories_jsx(index_esm.Op,(0,index_esm.mN)(),SelectedBoxField_stories_jsx(Story,null))}],tags:["autodocs"]};var Default={args:{name:"gender",placeholder:"성별을 선택하세요",options:["여자","남자"],label:"성별"},parameters:{componentSubtitle:"label과 selectbox 조합입니다. useForm의 유효성검사 text를 포함합니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.",layout:"centered",backgrounds:{default:"green",values:[{name:"green",value:"#ECF5E8"},{name:"blue",value:"#1A344C"},{name:"yellow",value:"#FFF8EB"},{name:"modal",value:"rgba(0, 0, 0, 0.70)"}]},docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},SelectedOption={args:_objectSpread(_objectSpread({},Default.args),{},{selectedOption:"여자"}),parameters:_objectSpread({},Default.parameters)},ValidationError={args:_objectSpread(_objectSpread({},Default.args),{},{selectedOption:"",validationtext:"성별을 선택하세요."}),parameters:_objectSpread({},Default.parameters)},Focused={args:_objectSpread(_objectSpread({},Default.args),{},{autoFocus:!0}),parameters:_objectSpread({},Default.parameters)},Disabled={args:_objectSpread(_objectSpread({},Default.args),{},{selectedOption:"여자",disabled:!0}),parameters:_objectSpread({},Default.parameters)};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'gender',\n    placeholder: '성별을 선택하세요',\n    options: ['여자', '남자'],\n    label: '성별'\n  },\n  parameters: {\n    componentSubtitle: 'label과 selectbox 조합입니다. useForm의 유효성검사 text를 포함합니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',\n    layout: 'centered',\n    backgrounds: {\n      default: 'green',\n      values: [{\n        name: 'green',\n        value: '#ECF5E8'\n      }, {\n        name: 'blue',\n        value: '#1A344C'\n      }, {\n        name: 'yellow',\n        value: '#FFF8EB'\n      }, {\n        name: 'modal',\n        value: 'rgba(0, 0, 0, 0.70)'\n      }]\n    },\n    docs: {\n      story: {\n        inline: true\n      },\n      canvas: {\n        sourceState: 'shown'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},SelectedOption.parameters={...SelectedOption.parameters,docs:{...SelectedOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    selectedOption: '여자'\n  },\n  parameters: {\n    ...Default.parameters\n  }\n}",...SelectedOption.parameters?.docs?.source}}},ValidationError.parameters={...ValidationError.parameters,docs:{...ValidationError.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    selectedOption: '',\n    validationtext: '성별을 선택하세요.'\n  },\n  parameters: {\n    ...Default.parameters\n  }\n}",...ValidationError.parameters?.docs?.source}}},Focused.parameters={...Focused.parameters,docs:{...Focused.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    autoFocus: true\n  },\n  parameters: {\n    ...Default.parameters\n  }\n}",...Focused.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    selectedOption: '여자',\n    disabled: true\n  },\n  parameters: {\n    ...Default.parameters\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SelectedOption","ValidationError","Focused","Disabled"]},"./src/stories/FormLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>FormLabel});var _templateObject,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LabelWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label(_templateObject||(_templateObject=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n  color: ",";\n  display: block;\n"])),(function(props){return props.$validationtext?"red":"black"})),FormLabel=function FormLabel(_ref){var children=_ref.children,props=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return __jsx(LabelWrapper,{$validationtext:Boolean(void 0!==props.validationtext),htmlFor:props.name},children)};FormLabel.displayName="FormLabel";try{FormLabel.displayName="FormLabel",FormLabel.__docgenInfo={description:"",displayName:"FormLabel",props:{name:{defaultValue:null,description:"htmlFor 값(태그 속성 name, id, useForm register name의값과 htmlFor은 동일합니다.)",name:"name",required:!0,type:{name:"string"}},validationtext:{defaultValue:null,description:"[useForm 사용시] input value의 유효성 검사 텍스트",name:"validationtext",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"label 태그 내부의 내용",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/FormLabel.tsx#FormLabel"]={docgenInfo:FormLabel.__docgenInfo,name:"FormLabel",path:"src/stories/FormLabel.tsx#FormLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/SelectBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SelectBox});var _templateObject,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["options","selectedOption","validationtext","autoFocus","disabled"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SelectBoxWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject||(_templateObject=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.A)(["\n  & > select:focus {\n    border: 2px solid blue;\n  }\n\n  & > select {\n    border: ",";\n  }\n"])),(function(props){return props.$validationError?"2px solid red!important":"1px solid gray"})),SelectBox=function SelectBox(_ref){var _ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$selectedOption=_ref.selectedOption,selectedOption=void 0===_ref$selectedOption?void 0:_ref$selectedOption,_ref$validationtext=_ref.validationtext,validationtext=void 0===_ref$validationtext?void 0:_ref$validationtext,_ref$autoFocus=_ref.autoFocus,autoFocus=void 0!==_ref$autoFocus&&_ref$autoFocus,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,props=(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return __jsx(SelectBoxWrapper,{$validationError:Boolean(validationtext)},__jsx("select",(0,_Users_younhwalee_Documents_code_test_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({},props.register,{ref:props.selectRef,id:props.name,name:props.name,defaultValue:selectedOption,autoFocus,disabled,onFocus:function onFocus(){return props.setOnFocus(!0)},onBlur:function onBlur(){return props.setOnFocus(!1)}}),props.placeholder&&__jsx("option",{value:""},props.placeholder),options.map((function(opt,index){return __jsx("option",{key:index,value:opt},opt)}))))};SelectBox.displayName="SelectBox";try{SelectBox.displayName="SelectBox",SelectBox.__docgenInfo={description:"",displayName:"SelectBox",props:{register:{defaultValue:null,description:"[useForm 사용시] register 메소드",name:"register",required:!1,type:{name:"object"}},selectRef:{defaultValue:null,description:"[useForm 사용시] select의 ref(DOM 객체)",name:"selectRef",required:!1,type:{name:"ForwardedRef<any>"}},name:{defaultValue:null,description:"select 태그의 attribute name값으로 select의 id, useForm의 name 또한 동일한 값으로 설정됩니다.",name:"name",required:!0,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"options 배열",name:"options",required:!1,type:{name:"string[]"}},selectedOption:{defaultValue:{value:"undefined"},description:"선택된 option",name:"selectedOption",required:!1,type:{name:"string"}},validationtext:{defaultValue:{value:"undefined"},description:"[useForm 사용시] selectbox의 유효성 여부",name:"validationtext",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"placeholder로 사용할 option 텍스트 (제일 처음에 나오는 option(value=''))",name:"placeholder",required:!0,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"자동 포커스 기능 사용 여부",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"disabled 상태의 여부",name:"disabled",required:!1,type:{name:"boolean"}},setOnFocus:{defaultValue:null,description:"Focus되면 Label 노출 여부",name:"setOnFocus",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/SelectBox.tsx#SelectBox"]={docgenInfo:SelectBox.__docgenInfo,name:"SelectBox",path:"src/stories/SelectBox.tsx#SelectBox"})}catch(__react_docgen_typescript_loader_error){}}}]);