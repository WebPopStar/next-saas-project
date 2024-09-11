"use strict";
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 4377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(889);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4661);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(279);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4618);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















function AuthFrame(props) {
  const {
    classes,
    cx
  } = (0,_form_style__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .useText */ .XK)();
  const {
    children,
    title,
    subtitle
  } = props;
  const {
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme => theme.breakpoints.up('md'));
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme => theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: classes.pageWrap,
    children: [!isDesktop && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: cx(classes.logo, classes.logoHeader),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
        href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"].saas.home */ .Z.saas.home,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
          src: (_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default()),
          alt: "logo"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
          component: "p",
          className: text.subtitle2,
          children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_8___default().saas.projectName)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
      maxWidth: "lg",
      className: classes.innerWrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: classes.decoration,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("svg", {
          className: classes.leftDeco,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("use", {
            xlinkHref: "/images/saas/deco-bg-left.svg#main"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("svg", {
          className: classes.rightDeco,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("use", {
            xlinkHref: "/images/saas/deco-bg-right.svg#main"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: cx(classes.formBox, 'fragment-fadeUp'),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"].saas.home */ .Z.saas.home,
          className: classes.backtohome,
          size: "large",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("i", {
              className: "ion-ios-home-outline"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("i", {
              className: "ion-ios-arrow-round-back"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
          className: classes.authFrame,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
            container: true,
            spacing: 0,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
              item: true,
              md: 5,
              xs: 12,
              children: !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: classes.greeting,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                  className: classes.logo,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
                    src: (_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default()),
                    alt: "logo"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                    className: text.subtitle2,
                    children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_8___default().saas.projectName)
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                  gutterBottom: true,
                  variant: "h4",
                  className: text.title2,
                  children: title
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                  variant: "h6",
                  className: text.paragraph,
                  children: subtitle
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
              item: true,
              md: 7,
              xs: 12,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                className: classes.formWrap,
                children: children
              })
            })]
          })
        })]
      })]
    })]
  });
}

AuthFrame.defaultProps = {
  subtitle: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthFrame);

/***/ }),

/***/ 9693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function SocialAuth() {
  const {
    classes
  } = (0,_form_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classes.socmedSideLogin,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "contained",
      className: classes.naviBtn,
      type: "button",
      size: "large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
        className: "ion-logo-facebook"
      }), "Facebook"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "contained",
      className: classes.blueBtn,
      type: "button",
      size: "large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
        className: "ion-logo-twitter"
      }), "Twitter"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "contained",
      className: classes.redBtn,
      type: "button",
      size: "large",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
        className: "ion-logo-google"
      }), "Google"]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialAuth);

/***/ }),

/***/ 848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TitleSecondary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8460);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function TitleSecondary(props) {
  const {
    classes,
    cx
  } = (0,_title_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const {
    children,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: cx(classes.titleSecondary, setAlign(align)),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "h4",
      children: children
    })
  });
}
TitleSecondary.defaultProps = {
  align: 'left'
};

/***/ })

};
;