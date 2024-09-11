"use strict";
(() => {
var exports = {};
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 1759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact),
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
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
// EXTERNAL MODULE: external "react-material-ui-form-validator"
var external_react_material_ui_form_validator_ = __webpack_require__(1500);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/saas-logo.svg
var saas_logo = __webpack_require__(279);
var saas_logo_default = /*#__PURE__*/__webpack_require__.n(saas_logo);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(4661);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Forms/Checkbox.js
var Checkbox = __webpack_require__(8753);
// EXTERNAL MODULE: ./components/Forms/form-style.js
var form_style = __webpack_require__(3875);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Forms/Contact.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function Contact() {
  const {
    classes,
    cx
  } = (0,form_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t,
    i18n
  } = (0,external_next_i18next_.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  (0,external_react_.useEffect)(() => {
    external_react_material_ui_form_validator_.ValidatorForm.addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = (0,external_react_.useState)(false);
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
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.pageWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openNotif,
      autoHideDuration: 4000,
      onClose: handleClose,
      ContentProps: {
        'aria-describedby': 'message-id'
      },
      message: /*#__PURE__*/jsx_runtime_.jsx("span", {
        id: "message-id",
        children: "Message Sent"
      })
    }, "top right"), !isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: cx(classes.logo, classes.logoHeader),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: curLang + text_link/* default.saas.home */.Z.saas.home,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (saas_logo_default()),
          alt: "logo"
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          component: "span",
          className: text.title,
          children: (brand_default()).saas.projectName
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      maxWidth: "md",
      className: classes.innerWrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
        href: curLang + text_link/* default.saas.home */.Z.saas.home,
        className: classes.backtohome,
        size: "large",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-home-outline"
          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "ion-ios-arrow-round-back"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.decoration,
        children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
          className: classes.leftDeco,
          children: /*#__PURE__*/jsx_runtime_.jsx("use", {
            xlinkHref: "/images/saas/deco-bg-left.svg#main"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
          className: classes.rightDeco,
          children: /*#__PURE__*/jsx_runtime_.jsx("use", {
            xlinkHref: "/images/saas/deco-bg-right.svg#main"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
        className: cx(classes.formBox, 'fragment-fadeUp'),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.fullFromWrap,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "h3",
            align: "center",
            className: cx(classes.title, text.title),
            gutterBottom: true,
            children: t('contact_title2')
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: cx(classes.desc, text.subtitle2),
            children: t('contact_subtitle')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.form,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_material_ui_form_validator_.ValidatorForm, {
              onSubmit: handleSubmit,
              onError: errors => console.log(errors),
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 6,
                children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
                    variant: "filled",
                    className: cx(classes.input, classes.light),
                    label: t('form_name'),
                    onChange: handleChange('name'),
                    name: "Name",
                    value: values.name,
                    validators: ['required'],
                    errorMessages: ['This field is required']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
                    variant: "filled",
                    className: cx(classes.input, classes.light),
                    label: t('form_email'),
                    onChange: handleChange('email'),
                    name: "Email",
                    value: values.email,
                    validators: ['required', 'isEmail'],
                    errorMessages: ['This field is required', 'email is not valid']
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
                    variant: "filled",
                    className: cx(classes.input, classes.light),
                    label: t('form_phone'),
                    onChange: handleChange('phone'),
                    name: "Phone",
                    value: values.phone
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  md: 6,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
                    variant: "filled",
                    className: cx(classes.input, classes.light),
                    label: t('form_company'),
                    onChange: handleChange('company'),
                    name: "Company",
                    value: values.company
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_material_ui_form_validator_.TextValidator, {
                    variant: "filled",
                    multiline: true,
                    rows: "6",
                    className: cx(classes.input, classes.light),
                    label: t('form_message'),
                    onChange: handleChange('message'),
                    name: "Message",
                    value: values.message
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: cx(classes.btnArea, classes.flex),
                children: [/*#__PURE__*/jsx_runtime_.jsx((FormControlLabel_default()), {
                  control: /*#__PURE__*/jsx_runtime_.jsx(Checkbox/* default */.Z, {
                    validators: ['isTruthy'],
                    errorMessages: "This field is required",
                    checked: check,
                    value: check,
                    onChange: e => handleCheck(e),
                    color: "secondary"
                  }),
                  label: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: [t('form_terms'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: t('form_privacy')
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                  variant: "contained",
                  fullWidth: isMobile,
                  type: "submit",
                  color: "secondary",
                  size: "large",
                  children: t('form_send')
                })]
              })]
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const Forms_Contact = (Contact);
;// CONCATENATED MODULE: ./pages/[locale]/contact.js

 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)







function contact_Contact() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: (brand_default()).saas.name + ' - Contact'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Forms_Contact, {})
    })]
  });
} // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)


const getStaticProps = (0,getStatic/* makeStaticProps */.pc)(['common']);

/* harmony default export */ const contact = (contact_Contact);

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

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9174:
/***/ ((module) => {

module.exports = require("@mui/material/Snackbar");

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
var __webpack_exports__ = __webpack_require__.X(0, [173,618,875,753], () => (__webpack_exec__(1759)));
module.exports = __webpack_exports__;

})();