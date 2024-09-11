"use strict";
(() => {
var exports = {};
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 3901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register),
  "getStaticPaths": () => (/* reexport */ getStatic/* getStaticPaths */.Fe),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/getStatic.js
var getStatic = __webpack_require__(1834);
// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__(15);
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Icon"
var Icon_ = __webpack_require__(3843);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react-material-ui-form-validator"
var external_react_material_ui_form_validator_ = __webpack_require__(1500);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Forms/Checkbox.js
var Checkbox = __webpack_require__(8753);
// EXTERNAL MODULE: ./components/Forms/SocialAuth.js
var SocialAuth = __webpack_require__(9693);
// EXTERNAL MODULE: ./components/Title/TitleSecondary.js
var TitleSecondary = __webpack_require__(848);
// EXTERNAL MODULE: ./components/Forms/AuthFrame.js
var AuthFrame = __webpack_require__(4377);
// EXTERNAL MODULE: ./components/Forms/form-style.js
var form_style = __webpack_require__(3875);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Forms/Register.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function Register() {
  const {
    classes,
    cx
  } = (0,form_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    t,
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  (0,external_react_.useEffect)(() => {
    external_react_material_ui_form_validator_.ValidatorForm.addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
    external_react_material_ui_form_validator_.ValidatorForm.addValidationRule('isTruthy', value => value);
  });
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(AuthFrame/* default */.Z, {
    title: t('register_title'),
    subtitle: t('register_subtitle'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.head,
        children: [/*#__PURE__*/jsx_runtime_.jsx(TitleSecondary/* default */.Z, {
          align: isMobile ? 'center' : 'left',
          children: t('register')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Button_default()), {
          size: "small",
          className: classes.buttonLink,
          href: curLang + text_link/* default.saas.login */.Z.saas.login,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
            className: cx(classes.icon, classes.signArrow),
            children: "arrow_forward"
          }), t('register_already')]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(SocialAuth/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.separator,
        children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          children: t('register_or')
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_.ValidatorForm, {
        onError: errors => console.log(errors),
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
              variant: "filled",
              className: classes.input,
              label: t('register_name'),
              onChange: handleChange('name'),
              name: "name",
              value: values.name,
              validators: ['required'],
              errorMessages: ['This field is required']
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
              variant: "filled",
              className: classes.input,
              label: t('register_email'),
              onChange: handleChange('email'),
              name: "email",
              value: values.email,
              validators: ['required', 'isEmail'],
              errorMessages: ['This field is required', 'Email is not valid']
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
              variant: "filled",
              type: "password",
              className: classes.input,
              label: t('register_password'),
              validators: ['required'],
              onChange: handleChange('password'),
              errorMessages: ['This field is required'],
              name: "password",
              value: values.password
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 6,
            xs: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
              variant: "filled",
              type: "password",
              className: classes.input,
              label: t('register_confirm'),
              validators: ['isPasswordMatch', 'required'],
              errorMessages: ['Password mismatch', 'This field is required'],
              onChange: handleChange('confirmPassword'),
              name: "confirm",
              value: values.confirmPassword
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.btnArea,
          children: [/*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
            control: /*#__PURE__*/jsx_runtime_.jsx(Checkbox/* default */.Z, {
              validators: ['isTruthy'],
              errorMessages: "This field is required",
              checked: check,
              value: check,
              onChange: e => handleCheck(e),
              color: "primary"
            }),
            label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: text.caption,
              children: [t('form_terms'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: t('form_privacy')
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
            variant: "contained",
            type: "submit",
            color: "secondary",
            size: "large",
            children: t('continue')
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const Forms_Register = (Register);
;// CONCATENATED MODULE: ./pages/[locale]/register.js

 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)







function register_Register() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: (brand_default()).saas.name + ' - Register'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Forms_Register, {})
    })]
  });
} // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)


const getStaticProps = (0,getStatic/* makeStaticProps */.pc)(['common']);

/* harmony default export */ const register = (register_Register);

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 889:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 3843:
/***/ ((module) => {

module.exports = require("@mui/material/Icon");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1500:
/***/ ((module) => {

module.exports = require("react-material-ui-form-validator");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

module.exports = require("tss-react/mui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [173,618,875,460,931,753], () => (__webpack_exec__(3901)));
module.exports = __webpack_exports__;

})();