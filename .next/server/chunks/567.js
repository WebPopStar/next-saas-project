exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 4539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(889);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(279);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5722);
/* harmony import */ var _LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__]);
_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















function Copyright() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
    variant: "body2",
    display: "block",
    align: "center",
    color: "textSecondary",
    children: ["\xA9\xA0", (_public_text_brand__WEBPACK_IMPORTED_MODULE_13___default().saas.footerText)]
  });
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    classes,
    cx
  } = (0,_footer_style__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
  const {
    invert,
    toggleDir
  } = props;
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()(theme.breakpoints.up('md'));
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8___default()(theme.breakpoints.down('md'));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
    maxWidth: "lg",
    component: "footer",
    className: cx(classes.footer, invert && classes.invert),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
      container: true,
      spacing: 4,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: classes.logo,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("img", {
            src: (_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_12___default()),
            alt: "logo"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
            variant: "h6",
            color: "textPrimary",
            children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_13___default().saas.projectName)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(Copyright, {})]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 6,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
          container: true,
          spacing: 4,
          justifyContent: "space-evenly",
          children: footers.map(footer => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
            item: true,
            xs: 12,
            md: 3,
            className: classes.siteMapItem,
            children: [isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                variant: "h6",
                className: classes.title,
                color: "textPrimary",
                gutterBottom: true,
                children: footer.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("ul", {
                children: footer.description.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
                    href: footer.link[index],
                    variant: "subtitle1",
                    color: "textSecondary",
                    children: item
                  })
                }, item))
              })]
            }), isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4___default()), {
              square: true,
              classes: {
                root: classes.accordionRoot
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5___default()), {
                expandIcon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default()), {
                  className: classes.accordionIcon
                }),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                classes: {
                  content: classes.accordionContent
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("strong", {
                  children: footer.title
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("ul", {
                  children: footer.description.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
                      href: footer.link[index],
                      variant: "subtitle1",
                      color: "textSecondary",
                      children: item
                    })
                  }, item))
                })
              })]
            })]
          }, footer.title))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        item: true,
        xs: 12,
        md: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: classes.socmed,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "FB",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-facebook"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "TW",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-twitter"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "IG",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-instagram"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
            "aria-label": "LI",
            className: classes.margin,
            size: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("i", {
              className: "ion-logo-linkedin"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_LangSwitch_Select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          toggleDir: toggleDir
        })]
      })]
    })
  });
}

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1696);
/* harmony import */ var _public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7075);
/* harmony import */ var _public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3__);




const footerStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'footer'
})((theme, _params, classes) => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    '& p': {
      color: theme.palette.common.white
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    [`&.${classes.invert}`]: {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      [`& .${classes.logo}`]: {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      [`& .${classes.selectLang}`]: {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    },
    [`& .${classes.accordionRoot}`]: {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)'
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    color: theme.palette.common.white + '!important',
    [`& .${classes.icon}`]: {
      top: '24px !important',
      left: theme.spacing(-3),
      color: theme.palette.primary.light,
      position: 'relative',
      '& + div': {
        padding: theme.spacing(1.5, 3, 1.5, 1)
      }
    },
    '& svg': {
      color: theme.palette.primary.light
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.primary.light, 0.5)}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  footerDeco: {
    position: 'relative',
    top: 0,
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
    paddingTop: theme.spacing(40),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(30)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(20)
    },
    '&:before': {
      background: `url(${theme.palette.mode === 'dark' ? (_public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3___default()) : (_public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2___default())}) top left no-repeat`,
      backgroundSize: '100% auto',
      top: -3,
      left: 0,
      content: '""',
      width: '100%',
      height: 270,
      position: 'absolute',
      zIndex: 10
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 40
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : 0,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left'
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right'
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.common.white,
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerStyles);

/***/ }),

/***/ 7797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(889);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2217);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6578);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(279);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4661);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9744);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5169);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5835);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Settings__WEBPACK_IMPORTED_MODULE_14__]);
_Settings__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const LinkBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const {
    onToggleDark,
    onToggleDir,
    invert
  } = props;
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
  const curLang = '/' + i18n.language;
  const isDesktop = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up('lg'));
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('lg'));
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('sm'));
  const {
    0: menuList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][0] */ .Z[0], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][0] */ .Z[0]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][1] */ .Z[1], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][1] */ .Z[1]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][2] */ .Z[2], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][2] */ .Z[2]), createData(_menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][3] */ .Z[3], '#' + _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"][3] */ .Z[3], -40)]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_MobileMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
      open: openDrawer,
      toggleDrawer: handleOpenDrawer
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "header",
      position: "relative",
      id: "header",
      className: cx(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        fixed: isDesktop,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: classes.headerContent,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("nav", {
            className: classes.navMenu,
            children: [isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
              onClick: handleOpenDrawer,
              className: cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active'),
              size: "large",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                className: "hamburger-box",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                  className: cx(classes.bar, 'hamburger-inner')
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: classes.logo,
              children: invert ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].saas.home */ .Z.saas.home,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                  src: (_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default()),
                  alt: "logo"
                }), !isTablet && (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().saas.name)]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_8___default()), {
                href: "#home",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                  src: (_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default()),
                  alt: "logo"
                }), !isTablet && (_public_text_brand__WEBPACK_IMPORTED_MODULE_12___default().saas.name)]
              })
            }), isDesktop && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)((react_scrollspy__WEBPACK_IMPORTED_MODULE_9___default()), {
              items: _menu__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
              currentClassName: "active",
              children: [menuList.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
                children: invert ?
                /*#__PURE__*/
                // eslint-disable-next-line
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  offset: item.offset || 0,
                  href: '/' + item.url,
                  children: t('saas-landing.header_' + item.name)
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  component: LinkBtn,
                  offset: item.offset || 0,
                  href: item.url,
                  children: t('saas-landing.header_' + item.name)
                })
              }, item.id.toString())), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].saas.contact */ .Z.saas.contact,
                  children: t('saas-landing.header_contact')
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("nav", {
            className: classes.navMenu,
            children: [!isMobile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].saas.login */ .Z.saas.login,
                className: classes.textBtn,
                children: t('saas-landing.header_login')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"].saas.register */ .Z.saas.register,
                variant: "contained",
                color: "secondary",
                className: classes.button,
                children: t('saas-landing.header_register')
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Settings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
              toggleDark: onToggleDark,
              toggleDir: onToggleDir,
              invert: invert
            })]
          })]
        })
      })
    })]
  });
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4180);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4661);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5835);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);













function MobileMenu(props) {
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const {
    toggleDrawer,
    open
  } = props;
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
  const curLang = '/' + i18n.language;

  const SideList = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: cx(classes.menu, open && classes.menuOpen),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((_mui_material_List__WEBPACK_IMPORTED_MODULE_3___default()), {
        component: "nav",
        children: [_menu__WEBPACK_IMPORTED_MODULE_10__/* ["default"].map */ .Z.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
          button: true,
          component: "a",
          href: `#${item}`,
          style: {
            animationDuration: index * 0.15 + 's'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5___default()), {
            primary: t('saas-landing.header_' + item),
            className: classes.menuList
          })
        }, index.toString())), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
          button: true,
          component: "a",
          href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"].saas.contact */ .Z.saas.contact,
          style: {
            animationDuration: _menu__WEBPACK_IMPORTED_MODULE_10__/* ["default"].length */ .Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5___default()), {
            primary: t('saas-landing.header_contact'),
            className: classes.menuList
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: classes.dividerSidebar
        }), ['login', 'register'].map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
          button: true,
          component: "a",
          href: curLang + _public_text_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"].saas */ .Z.saas[item],
          style: {
            animationDuration: _menu__WEBPACK_IMPORTED_MODULE_10__/* ["default"].length */ .Z.length * 0.15 + 's'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_5___default()), {
            primary: t('saas-landing.header_' + item),
            className: classes.menuList
          })
        }, index.toString()))]
      })
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_1___default()), {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(SideList, {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ 9744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9685);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3191);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4920);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5835);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__]);
_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    classes,
    cx
  } = (0,_header_style__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isDark,
    1: setDark
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themeType === 'dark');
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
  const currentLocale = i18n.language;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: classes.setting,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      "aria-describedby": id,
      "aria-label": "Settings",
      onClick: handleClick,
      className: cx(classes.icon, open && classes.active, invert && classes.invert),
      size: "large",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default()), {
        fontSize: "inherit"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      container: ctn,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: "nav",
        className: classes.modeMenu,
        "aria-label": "Mode-menu",
        subheader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default()), {
          component: "div",
          children: t('saas-landing.header_theme')
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
            component: "div",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
              component: "label",
              container: true,
              alignItems: "center",
              spacing: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: t('saas-landing.header_light')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_8___default()), {
                  checked: isDark,
                  onChange: handleChangeMode,
                  value: isDark,
                  inputProps: {
                    'aria-label': 'checkbox'
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10___default()), {
                item: true,
                children: t('saas-landing.header_dark')
              })]
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: "nav",
        className: classes.langMenu,
        "aria-label": "Language-menu",
        subheader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_6___default()), {
          component: "div",
          children: t('saas-landing.header_language')
        }),
        children: _next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default().i18n.locales.map(locale => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_LangSwitch_Menu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          ssg: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_14___default().ssg),
          locale: locale,
          checked: locale === currentLocale,
          toggleDir: props.toggleDir,
          closePopup: handleClose
        }, locale))
      })]
    })]
  });
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9123);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_2___default())}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'header'
})((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  invert: {
    color: theme.palette.text.primary,
    [`& .${classes.mobileMenu}`]: {
      [`& .${classes.bar}`]: {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.text.primary
    }
  },
  fixed: {},
  textBtn: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    zIndex: 20,
    '& .MuiContainer-root': {
      padding: 0
    },
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.dark, 0.3),
      [`& .${classes.logo}`]: {
        '& a': {
          color: 'transparent',
          fontSize: 0
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        }
      },
      [`& .${classes.textBtn}`]: {
        color: theme.palette.common.white
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.common.white
          }
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.common.white
          }
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary
        }
      },
      [`& .${classes.textBtn}`]: {
        color: theme.palette.text.primary
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary
          }
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.text.primary
          }
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      width: 64,
      height: 64,
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      color: theme.palette.common.white,
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1)
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:after': {
            content: '""',
            height: 5,
            position: 'absolute',
            borderRadius: 5,
            width: '0%',
            margin: '0 auto',
            bottom: -5,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            opacity: 0.5,
            '&:after': {
              width: 20,
              background: theme.palette.common.white
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.secondary.light,
            '&:after': {
              background: theme.palette.common.white,
              width: 20
            }
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.mode === 'dark' ? (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&[class*="is-active"]': {
      [`& .${classes.bar}`]: {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      }
    }
  },
  mobileNav: {
    background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.darken)(theme.palette.primary.dark, 0.3),
    height: '100%',
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  dividerSidebar: {
    background: 'rgba(255, 255, 255, 0.2)',
    margin: theme.spacing(3, 0)
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerStyles);

/***/ }),

/***/ 3413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = ['feature', 'testimonials', 'pricing', 'faq'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ 4920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1211);
/* harmony import */ var _mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9466);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__]);
_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const LanguageSwitch = ({
  locale,
  checked,
  toggleDir,
  ssg,
  closePopup
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');

  const changeLang = lang => {
    _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__/* ["default"].cache */ .Z.cache(lang);
    closePopup();

    if ((_next_i18next_config__WEBPACK_IMPORTED_MODULE_8___default().ssg)) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach(k => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }

        pName = pName.replace(`[${k}]`, router.query[k]);
      });

      if (lang) {
        href = pName;
      }

      router.push(href);
    } else {
      const {
        pathname,
        asPath,
        query
      } = router;
      router.push({
        pathname,
        query
      }, asPath, {
        locale: lang
      });
    }

    if (lang === 'ar') {
      toggleDir('rtl');
    } else {
      toggleDir('ltr');
    }
  };

  return ssg ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
    role: undefined,
    dense: true,
    button: true,
    onClick: () => changeLang(locale),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "flag",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("i", {
        className: locale
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
      primary: t(locale)
    }), checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary"
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3___default()), {
    role: undefined,
    dense: true,
    button: true,
    onClick: () => changeLang(locale),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "flag",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("i", {
        className: locale
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
      primary: t(locale)
    }), checked && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_material_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary"
      })
    })]
  });
};

LanguageSwitch.defaultProps = {
  ssg: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSwitch);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5418);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer_footer_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5722);
/* harmony import */ var _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9466);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__]);
_lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function SelectLang(props) {
  const {
    0: ctn,
    1: setCtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    classes
  } = (0,_Footer_footer_style__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(); // Translation Function

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    t,
    i18n
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    lang: i18n.language
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    const lang = event.target.value;
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: lang
    }));

    if ((_next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default().ssg)) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach(k => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }

        pName = pName.replace(`[${k}]`, router.query[k]);
      });

      if (lang) {
        href = pName;
      }

      router.push(href);
    } else {
      const {
        pathname,
        asPath,
        query
      } = router;
      router.push({
        pathname,
        query
      }, asPath, {
        locale: lang
      });
    }

    _lib_languageDetector__WEBPACK_IMPORTED_MODULE_9__/* ["default"].cache */ .Z.cache(lang);

    if (lang === 'ar') {
      props.toggleDir('rtl');
    } else {
      props.toggleDir('ltr');
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Select__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "standard",
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: classes.icon,
      position: "start",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_1___default()), {})
    }),
    className: classes.selectLang,
    input: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4___default()), {
      name: "lang",
      id: "outlined-lang-simple"
    }),
    children: _next_i18next_config__WEBPACK_IMPORTED_MODULE_10___default().i18n.locales.map(locale => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default()), {
      value: locale,
      children: t(locale)
    }, locale))
  });
}

SelectLang.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectLang);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3707);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2207);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);
next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__["default"])({
  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),
  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)
}));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9123:
/***/ ((module) => {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ 7075:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDIwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCAyMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT4KPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiPgoJPGcgaWQ9IkFydGJvYXJkIj4KCQk8cGF0aCBpZD0iQ29tYmluZWQtU2hhcGUiIGNsYXNzPSJzdDAiIGQ9Ik0xMjgwLDEwOC42Yy0xMDQuNi01Ni40LTIwMy4zLTc1LjktMjk2LTU4LjNDODQ0LjUsNzYuNiw3MjMuNCwxOTkuNCw0ODcuMywxOTkuNAoJCQljLTE1Ny4xLDAtMzE5LjUtMzAtNDg3LjMtOTBWMGgxMjgwVjEwOC42eiBNMTI4MCwyOTRIMEgxMjgweiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 1696:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4MHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAyMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDEwOC41NjUzNjYgQzExNzUuMzk0MjIsNTIuMTU2ODgzMyAxMDc2LjczOTc5LDMyLjcwOTk3NjYgOTg0LjAzNjcxOSw1MC4yMjQ2NDY0IEM4NDQuNTM5MDg4LDc2LjU4MDM1MzQgNzIzLjQwMDQyOSwxOTkuNDE2MzU5IDQ4Ny4yNjE3MTksMTk5LjQxNjM1OSBDMzMwLjE0ODEzMiwxOTkuNDE2MzU5IDE2Ny43Mjc1NTksMTY5LjQzMjA3NyAyLjIyMDQ0NjA1ZS0xNiwxMDkuNDYzNTExIEwwLDAgTDEyODAsMCBMMTI4MCwxMDguNTY1MzY2IFogTTEyODAsMjk0IEwwLDI5NCBMMTI4MCwyOTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ })

};
;