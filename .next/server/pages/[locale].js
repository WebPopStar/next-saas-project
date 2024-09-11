(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 1982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Banner_Banner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Dialog"
const Dialog_namespaceObject = require("@mui/material/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogContent"
const DialogContent_namespaceObject = require("@mui/material/DialogContent");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/DialogTitle"
const DialogTitle_namespaceObject = require("@mui/material/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(434);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: ./public/images/saas/deco-wave-light.png
var deco_wave_light = __webpack_require__(6442);
var deco_wave_light_default = /*#__PURE__*/__webpack_require__.n(deco_wave_light);
// EXTERNAL MODULE: ./public/images/saas/deco-wave-dark.png
var deco_wave_dark = __webpack_require__(9366);
var deco_wave_dark_default = /*#__PURE__*/__webpack_require__.n(deco_wave_dark);
;// CONCATENATED MODULE: ./components/Banner/banner-style.js




const bannerStyles = (0,mui_.makeStyles)({
  uniqId: 'banner'
})((theme, _params, classes) => ({
  '@keyframes move_wave': {
    '0%': {
      backgroundPosition: '0 0',
      transform: 'scale(2, 1)'
    },
    '50%': {
      backgroundPosition: '50% -50%',
      transform: 'scale(2.3, 1.2)'
    },
    '100%': {
      backgroundPosition: '100% 0',
      transform: 'scale(2, 1)'
    }
  },
  root: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`,
    position: 'relative',
    padding: theme.spacing(25, 0, 15),
    [theme.breakpoints.up('lg')]: {
      height: 780,
      padding: theme.spacing(30, 0, 5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(25, 0, 10),
      position: 'relative'
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
      top: 0
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
  sliderWrap: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    maxWidth: 720,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h3': {
      color: theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(5)
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold
      }
    },
    '& p': {
      color: theme.palette.common.white,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(15)
      }
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      '& > *': {
        marginBottom: theme.spacing(4),
        height: 56
      }
    }
  },
  icon: {},
  playBtn: {
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    background: 'none',
    marginRight: theme.spacing(4),
    [`& .${classes.icon}`]: {
      borderRadius: '50%',
      transition: 'all 0.3s ease-out',
      width: 40,
      height: 40,
      textAlign: 'center',
      lineHeight: '47px',
      verticalAlign: 'middle',
      marginRight: theme.spacing(),
      background: theme.palette.primary.main
    },
    '& i': {
      color: theme.palette.common.white,
      lineHeight: '22px',
      marginLeft: theme.spacing(0.5),
      fontSize: 24
    },
    '&:hover': {
      [`& .${classes.icon}`]: {
        background: (0,styles_.lighten)(theme.palette.primary.main, 0.3),
        paddingLeft: 6
      }
    }
  },
  illustration: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        maxWidth: 400
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 480
      }
    }
  },
  wave: {
    transform: 'translateZ(0)'
  },
  deco: {
    position: 'absolute',
    height: 110,
    bottom: -35,
    left: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      bottom: -20
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -10
    },
    [`& .${classes.wave}`]: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      backgroundImage: theme.palette.mode === 'dark' ? `url(${(deco_wave_dark_default())})` : `url(${(deco_wave_light_default())})`,
      backgroundRepeat: 'repeat-x',
      transform: 'scale(2.5, 1)',
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(6, 1)',
        bottom: 20
      }
    }
  },
  waveOne: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 100px',
    animationName: '$move_wave',
    animation: '25s linear infinite'
  },
  waveTwo: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 120px',
    animationName: '$move_wave',
    animation: '20s linear infinite'
  },
  waveCover: {
    backgroundSize: '51% 100px',
    backgroundPosition: '397px 0',
    transform: 'scale(2, 1)',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center bottom'
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& h2': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      '& > *': {
        padding: theme.spacing()
      },
      '& iframe': {
        width: '100%'
      }
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  hide: {
    visibility: 'hidden'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const banner_style = (bannerStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Banner/Banner.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const Transition = /*#__PURE__*/external_react_default().forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((Zoom_default()), _objectSpread({
    ref: ref
  }, props));
});

function Banner() {
  const {
    classes,
    cx
  } = banner_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.down('lg'));
  const elem = (0,external_react_.useRef)(null);
  const {
    0: hide,
    1: setHide
  } = (0,external_react_.useState)(false);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = (0,external_react_.useState)(false);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }

    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  const handleClickOpen = () => {
    if ((youtube_default()).use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'https://localhost:3002'
    }
  };
  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    ref: elem,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Dialog_default()), {
      open: openPopup,
      TransitionComponent: Transition,
      keepMounted: true,
      classes: {
        paper: classes.videoPopup
      },
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-slide-title",
      "aria-describedby": "alert-dialog-slide-description",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((DialogTitle_default()), {
        id: "alert-dialog-slide-title",
        children: [t('saas-landing.banner_title'), /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
          onClick: handleClose,
          className: classes.closeBtn,
          size: "large",
          children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {
            className: classes.icon
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((DialogContent_default()), {
        children: (youtube_default()).use && /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
          videoId: "KxZAdEGpYAw",
          onReady: _onReady,
          opts: opts
        })
      })]
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
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.sliderWrap,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.text,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            variant: "h3",
            className: text.title,
            children: [t('saas-landing.banner_title'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: t('saas-landing.banner_titlestrong')
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            component: "p",
            className: text.subtitle,
            children: t('saas-landing.banner_subtitle')
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.btnArea,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((ButtonBase_default()), {
              className: classes.playBtn,
              onClick: handleClickOpen,
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: classes.icon,
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "ion-ios-play-outline"
                })
              }), t('saas-landing.banner_watchvideo')]
            }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
              variant: "contained",
              color: "secondary",
              size: "large",
              href: "/login",
              children: t('saas-landing.getstarted')
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.illustration,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imgAPI/* default.saas.7 */.Z.saas[7],
            alt: "illustration"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.deco,
      children: [!isTablet && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: cx(classes.decoInner, hide && classes.hide),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: cx(classes.wave, classes.waveOne)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: cx(classes.wave, classes.waveTwo)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: cx(classes.wave, classes.waveCover)
      })]
    })]
  });
}

/* harmony default export */ const Banner_Banner = (Banner);
;// CONCATENATED MODULE: ./components/Banner/index.js


/***/ }),

/***/ 4918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const cardsStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'cards'
})((theme, _params, classes) => ({
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    maxWidth: 300,
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  title: {
    padding: theme.spacing(5, 0, 2),
    textTransform: 'uppercase',
    fontSize: 24,
    position: 'relative',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& p': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& h4': {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none',
      marginTop: theme.spacing(2)
    }
  },
  button: {},
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.divider, 0.04),
    [`& .${classes.button}`]: {
      marginTop: theme.spacing(2)
    },
    [`& .${classes.desc}`]: {
      fontSize: 14
    }
  },
  basic: {
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
    },
    [`& .${classes.btnArea}`]: {
      background: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.secondary.main, 0.3)
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    [`& .${classes.title}`]: {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white
      },
      '& p': {
        position: 'relative'
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(-185deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`
    }
  },
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: 'auto'
        }
      }
    }
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  text: {
    padding: theme.spacing(0, 1.5),
    maxWidth: 400
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardsStyles);

/***/ }),

/***/ 315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CompanyLogo_CompanyLogo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/CompanyLogo/logo-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'logo'
})(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const logo_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.js




const logos = ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png'];

function CompanyLogo() {
  const {
    classes
  } = logo_style();
  return /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
    fixed: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: logos.map((logo, index) => /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logo,
        alt: 'logo' + index.toString()
      }, index.toString()))
    })
  });
}

/* harmony default export */ const CompanyLogo_CompanyLogo = (CompanyLogo);
;// CONCATENATED MODULE: ./components/CompanyLogo/index.js


/***/ }),

/***/ 9085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Counter_Counter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
;// CONCATENATED MODULE: external "@mui/icons-material/Reply"
const Reply_namespaceObject = require("@mui/icons-material/Reply");
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SupervisorAccount"
const SupervisorAccount_namespaceObject = require("@mui/icons-material/SupervisorAccount");
var SupervisorAccount_default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Layers"
const Layers_namespaceObject = require("@mui/icons-material/Layers");
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,mui_.makeStyles)({
  uniqId: 'counter'
})((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    '& p': {
      display: 'flex',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 40,
        height: 40,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          width: 24,
          height: 24,
          marginRight: theme.spacing()
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2)
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        borderLeft: `2px solid ${theme.palette.primary.dark}`,
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const counter_style = (counterStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Counter/Counter.js















function Counter() {
  const {
    classes
  } = counter_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    0: play,
    1: setPlay
  } = (0,external_react_.useState)(false);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  const countup = (val, isPlay) => /*#__PURE__*/jsx_runtime_.jsx("span", {
    children: isPlay ? /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: val
    }) : 0
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.counterWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
        animateOnce: true,
        animateIn: "fadeIn",
        offset: -300,
        afterAnimatedIn: handlePlay,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          justifyContent: "center",
          alignItems: "center",
          className: classes.counterInner,
          spacing: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: [countup(12, play), "\xA0", t('saas-landing.counter_month')]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Reply_default()), {}), t('saas-landing.counter_free')]
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: ["+", countup(80, play), "M"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((SupervisorAccount_default()), {}), t('saas-landing.counter_users')]
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            md: 4,
            item: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.counterItem,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.text,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  variant: "h3",
                  className: text.title,
                  children: ["+", countup(180, play), "K"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                  component: "p",
                  className: text.subtitle,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Layers_default()), {}), t('saas-landing.counter_providers')]
                })]
              })
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const Counter_Counter = (Counter);
;// CONCATENATED MODULE: ./components/Counter/index.js


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Faq_Faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Parallax/Medium.js
var Medium = __webpack_require__(6);
// EXTERNAL MODULE: ./public/images/saas/faq.png
var faq = __webpack_require__(965);
var faq_default = /*#__PURE__*/__webpack_require__.n(faq);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Faq/faq-style.js

const faqStyles = (0,mui_.makeStyles)({
  uniqId: 'faq'
})((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280
    }
  },
  accordion: {
    position: 'relative'
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  content: {
    [`& .${classes.icon}`]: {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    background: theme.palette.secondary.main,
    [`& .${classes.heading}`]: {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    }
  },
  icon: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const faq_style = (faqStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Faq/Faq.js


















const faqData = [{
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'In mi nulla, fringilla vestibulum?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque lacinia purus ut libero?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque ut metus sit amet augue?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}];

function Faq() {
  const {
    classes,
    cx
  } = faq_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(0);
  const theme = (0,styles_.useTheme)();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
            align: isMobile ? 'center' : 'left',
            children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "FAQ"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: cx(classes.text, text.subtitle2),
            align: isMobile ? 'center' : 'left',
            component: "p",
            children: t('saas-landing.faq_subtitle')
          }), !isMobile && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.illustration,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Medium/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (faq_default()),
              alt: "illustration"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.accordion,
            children: faqData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.item,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
                classes: {
                  root: classes.paper
                },
                expanded: expanded === index,
                onChange: handleChange(index),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((AccordionSummary_default()), {
                  classes: {
                    content: classes.content,
                    expanded: classes.expanded
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    className: classes.heading,
                    children: item.q
                  }), /*#__PURE__*/jsx_runtime_.jsx((ExpandMore_default()), {
                    className: classes.icon
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
                  classes: {
                    root: classes.detail
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    children: item.a
                  })
                })]
              })
            }, index.toString()))
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Faq_Faq = (Faq);
;// CONCATENATED MODULE: ./components/Faq/index.js


/***/ }),

/***/ 7996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Feature_Feature)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: ./components/Parallax/Medium.js
var Medium = __webpack_require__(6);
// EXTERNAL MODULE: ./components/Parallax/parallax-style.js
var parallax_style = __webpack_require__(7068);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Parallax/Large.js





function ParallaxLarge() {
  const {
    classes,
    cx
  } = (0,parallax_style/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: cx(classes.parallaxWrap, classes.dotsWrap),
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: cx(classes.innerParallax, classes.large),
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [10, 50],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: classes.plus,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/plus.svg#main"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [20, 50],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: classes.circle,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/circle.svg#main"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
          translateY: [10, 20],
          className: "figure",
          children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: classes.zigzag,
            children: /*#__PURE__*/jsx_runtime_.jsx("use", {
              xlinkHref: "/images/decoration/zigzag.svg#main"
            })
          })
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Feature/feature-style.js

const featureStyles = (0,mui_.makeStyles)({
  uniqId: 'feature'
})((theme, _params, classes) => ({
  root: {
    position: 'relative'
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 100,
    '& svg': {
      width: '100%',
      height: 1700,
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      transform: 'scale(1.3)',
      [theme.breakpoints.up(1400)]: {
        transform: 'scale(2.5, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(20),
    [`&.${classes.last}`]: {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(15)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h6': {
      marginBottom: theme.spacing(5)
    },
    '& [class="section"]': {
      perspective: 1000,
      [theme.breakpoints.up('md')]: {
        position: 'absolute'
      },
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(3, 0)
      }
    },
    [`& .${classes.figure}`]: {
      transformStyle: 'preserve-3d',
      overflow: 'hidden',
      boxShadow: theme.shadows[2],
      borderRadius: theme.rounded.medium,
      background: theme.palette.common.white,
      padding: theme.spacing(1),
      paddingTop: theme.spacing(3),
      margin: theme.spacing(3),
      '& img': {
        width: '100%'
      }
    }
  },
  screen: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  graphic: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  tabContent: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 4, 0)
    },
    '& section': {
      position: 'relative !important'
    }
  },
  selected: {},
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
    [`&.${classes.selected}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
  },
  illustrationLeft: {
    position: 'relative',
    [`& .${classes.screen}`]: {
      [theme.breakpoints.up('md')]: {
        marginTop: -50,
        transform: 'rotateY( 30deg )'
      }
    },
    [`& .${classes.graphic}`]: {
      top: 100,
      left: 70,
      width: 360,
      [theme.breakpoints.up('md')]: {
        transform: 'rotateY( 30deg ) rotateX(-5deg) rotateZ(-2deg)'
      }
    }
  },
  illustrationRight: {
    position: 'relative',
    [`& .${classes.screen}`]: {
      [theme.breakpoints.up('md')]: {
        left: 20,
        top: -40,
        transform: 'rotateY( -30deg )'
      }
    },
    [`& .${classes.graphic}`]: {
      right: -60,
      top: 100,
      width: 400,
      [theme.breakpoints.up('md')]: {
        transformStyle: 'preserve-3d',
        transform: 'rotateY( -30deg ) rotateX(-4deg) rotateZ(0deg)'
      }
    }
  },
  illustrationCenter: {
    perspective: 1000,
    [`& .${classes.screen}`]: {
      display: 'block',
      textAlign: 'center',
      marginTop: -50,
      maxWidth: 700,
      margin: '0 auto !important',
      transform: 'rotateY( 0 ) rotateX(35deg) rotateZ(0deg)',
      '& img': {
        margin: '0 auto',
        width: '100%'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const feature_style = (featureStyles);
;// CONCATENATED MODULE: ./components/Feature/Feature.js





















function Feature() {
  const {
    classes,
    cx
  } = feature_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    classes: align
  } = (0,common/* useTextAlign */.Lr)();
  const theme = (0,styles_.useTheme)();
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(0);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoration,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        className: classes.wave,
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/saas/deco-bg.svg#main"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_scroll_parallax_.ParallaxProvider, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            direction: isMobile ? 'column-reverse' : 'row',
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.illustrationLeft,
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                  translateY: isMobile ? [10, 10] : [10, -25],
                  className: "section",
                  children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                    className: cx(classes.figure, classes.screen),
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: imgAPI/* default.saas.0 */.Z.saas[0],
                      alt: "screen"
                    })
                  })
                }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                  translateY: isMobile ? [0, 0] : [-10, 20],
                  className: "section",
                  children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                    className: cx(classes.figure, classes.graphic),
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: imgAPI/* default.saas.1 */.Z.saas[1],
                      alt: "illustration"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Medium/* default */.Z, {})]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeInLeftShort",
                offset: -100,
                delay: 200,
                duration: 0.4,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
                    align: isMobile ? 'center' : 'left',
                    children: [t('saas-landing.feature_title1'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: t('saas-landing.feature_titlestrong1')
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    display: "block",
                    component: "h6",
                    className: text.subtitle2,
                    align: isMobile ? 'center' : 'left',
                    children: t('saas-landing.feature_desc1')
                  }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    className: classes.btn,
                    children: t('saas-landing.see_detail')
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "fadeInRightShort",
                offset: -100,
                delay: 200,
                duration: 0.4,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
                    align: isMobile ? 'center' : 'right',
                    children: [t('saas-landing.feature_title1'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                      children: t('saas-landing.feature_titlestrong2')
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    display: "block",
                    component: "h6",
                    className: text.subtitle2,
                    align: isMobile ? 'center' : 'right',
                    children: t('saas-landing.feature_desc2')
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: isMobile ? align.textCenter : align.textRight,
                    children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                      variant: "contained",
                      color: "primary",
                      size: "large",
                      className: classes.btn,
                      children: t('saas-landing.see_detail')
                    })
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 6,
              xs: 12,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.illustrationRight,
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                  translateY: isMobile ? [10, 10] : [10, -25],
                  className: "section",
                  children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                    className: cx(classes.figure, classes.screen),
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: imgAPI/* default.saas.2 */.Z.saas[2],
                      alt: "screen"
                    })
                  })
                }), !isMobile && /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                  translateY: isMobile ? [-25, -25] : [-25, 25],
                  className: "section",
                  children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                    className: classes.graphic,
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: imgAPI/* default.saas.3 */.Z.saas[3],
                      alt: "illustration"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(Medium/* default */.Z, {})]
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: cx(classes.item, classes.last),
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Title/* default */.Z, {
            align: "center",
            children: [t('saas-landing.feature_title3'), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: t('saas-landing.feature_titlestrong3')
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.tab,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
              container: true,
              spacing: 6,
              children: [!isMobile && /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                item: true,
                md: 1,
                xs: 12
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                md: 10,
                xs: 12,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Tabs_default()), {
                  value: value,
                  onChange: handleChange,
                  indicatorColor: "primary",
                  textColor: "primary",
                  centered: true,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Tab_default()), {
                    classes: {
                      root: classes.tabLabel,
                      selected: classes.selected
                    },
                    label: "Pellentesque"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), {
                    classes: {
                      root: classes.tabLabel,
                      selected: classes.selected
                    },
                    label: "Donec"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Tab_default()), {
                    classes: {
                      root: classes.tabLabel,
                      selected: classes.selected
                    },
                    label: "Vestibulum"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.tabContent,
                  children: [value === 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      component: "h6",
                      display: "block",
                      align: "center",
                      className: text.subtitle2,
                      children: t('saas-landing.feature_desc3')
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.illustrationCenter,
                      children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                        className: cx(classes.figure, classes.screen),
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: imgAPI/* default.saas.4 */.Z.saas[4],
                          alt: "screen"
                        })
                      })
                    })]
                  }), value === 1 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      component: "h6",
                      display: "block",
                      align: "center",
                      className: text.subtitle2,
                      children: t('saas-landing.feature_desc3')
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.illustrationCenter,
                      children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                        className: cx(classes.figure, classes.screen),
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: imgAPI/* default.saas.5 */.Z.saas[5],
                          alt: "screen"
                        })
                      })
                    })]
                  }), value === 2 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      component: "h6",
                      display: "block",
                      align: "center",
                      className: text.subtitle2,
                      children: t('saas-landing.feature_desc3')
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: classes.illustrationCenter,
                      children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                        className: cx(classes.figure, classes.screen),
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: imgAPI/* default.saas.6 */.Z.saas[6],
                          alt: "screen"
                        })
                      })
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx(ParallaxLarge, {})]
                })]
              })]
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const Feature_Feature = (Feature);
;// CONCATENATED MODULE: ./components/Feature/index.js


/***/ }),

/***/ 7156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4618);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4539);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5722);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_5__]);
_Footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function FooterWithDeco(props) {
  const {
    classes
  } = (0,_footer_style__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const {
    classes: text
  } = (0,_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useText */ .XK)();
  const {
    toggleDir
  } = props;
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classes.footerDeco,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classes.decoration,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
        className: classes.leftDeco,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("use", {
          xlinkHref: "/images/saas/deco-bg-left.svg#main"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
        className: classes.rightDeco,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("use", {
          xlinkHref: "/images/saas/deco-bg-right.svg#main"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classes.action,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
        variant: "h4",
        className: text.title2,
        children: t('saas-landing.footer_waiting')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "contained",
        color: "secondary",
        size: "large",
        children: t('saas-landing.getstarted')
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      toggleDir: toggleDir
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterWithDeco);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ NewsEvent_NewsEvent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/News.js








function News(props) {
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const {
    text,
    img,
    type
  } = props;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.news,
    children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: img,
        alt: "thumb"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.desc,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.text,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "caption",
          className: classes.type,
          children: t('saas-landing.' + type)
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          display: "block",
          component: "p",
          children: text
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        size: "small",
        className: classes.btn,
        children: t('saas-landing.news_readmore')
      })]
    })]
  });
}

/* harmony default export */ const Cards_News = (News);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/NewsEvent/news-event-style.js

const newsEventStyle = (0,mui_.makeStyles)({
  uniqId: 'news'
})(theme => ({
  root: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },
  carousel: {
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-7),
      '& li': {
        width: 15,
        height: 10,
        border: `1px solid ${theme.palette.text.disabled}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          width: 30
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing()
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const news_event_style = (newsEventStyle);
;// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const newsContent = [{
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.1 */.Z.photo[1],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.2 */.Z.photo[2],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.3 */.Z.photo[3],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.4 */.Z.photo[4],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.5 */.Z.photo[5],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: imgAPI/* default.photo.6 */.Z.photo[6],
  type: 'caption_news'
}];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function NewsEvent() {
  const slider = (0,external_react_.useRef)(null);
  const {
    classes
  } = news_event_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carousel,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: slider
      }, settings), {}, {
        children: newsContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Cards_News, {
              img: item.img,
              text: item.text,
              type: item.type
            })
          })
        }, index.toString()))
      }))
    })
  });
}

/* harmony default export */ const NewsEvent_NewsEvent = (NewsEvent);
;// CONCATENATED MODULE: ./components/NewsEvent/index.js


/***/ }),

/***/ 4316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageNav_PageNav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(8363);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = (0,mui_.makeStyles)({
  uniqId: 'pagenav'
})((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.dark}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pagenav_style = (pagenav);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const {
    classes,
    cx
  } = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
            title: t('saas-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LinkBtn, {
                href: item.url
              })
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Fab_default()), {
          color: "primary",
          "aria-label": "To top",
          component: LinkBtn,
          href: "#home",
          className: classes.fab,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
        })
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = (PageNav);
;// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParallaxMedium)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7068);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ParallaxMedium() {
  const {
    classes
  } = (0,_parallax_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: classes.innerParallax,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-25, 50],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
            className: classes.plus,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
              xlinkHref: "/images/decoration/plus.svg#main"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-20, 20],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
            className: classes.circle,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
              xlinkHref: "/images/decoration/circle.svg#main"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-40, -10],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
            className: classes.zigzag,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
              xlinkHref: "/images/decoration/zigzag.svg#main"
            })
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);

const parallaxStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'parallax'
})(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& [class="figure"] > svg': {
      position: 'absolute'
    }
  },
  plus: {
    fill: '#ECA426',
    left: -20,
    top: 0,
    width: 100,
    height: 100,
    transform: 'scale(0.5)'
  },
  circle: {
    fill: theme.palette.secondary.main,
    right: 70,
    top: 20,
    width: 120,
    height: 120,
    transform: 'scale(0.5)'
  },
  zigzag: {
    fill: theme.palette.primary.main,
    left: 0,
    bottom: 20,
    width: 250,
    height: 75,
    transform: 'scale(0.5)'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parallaxStyles);

/***/ }),

/***/ 4129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PricingPlan_PricingPlan)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./components/Title/index.js + 1 modules
var Title = __webpack_require__(619);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(4918);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/Pricing.js







function Pricing(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    title,
    price,
    featureList,
    desc,
    type
  } = props;

  const setType = cardType => {
    switch (cardType) {
      case 'basic':
        return classes.basic;

      case 'value':
        return classes.value;

      default:
        return '';
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
    className: cx(classes.pricing, setType(type)),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.title,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
        variant: "h4",
        children: [price > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "$"
        }), price > 0 ? price : 'Free']
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: featureList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: item
      }, index.toString()))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.btnArea,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        display: "block",
        className: classes.desc,
        children: desc
      }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
        variant: "contained",
        color: type === 'basic' ? 'secondary' : 'primary',
        className: classes.button,
        size: "large",
        children: "Choose Plan"
      })]
    })]
  });
}
Pricing.defaultProps = {
  type: ''
};
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PricingPlan/pricing-plan-style.js

const pricingStyles = (0,mui_.makeStyles)({
  uniqId: 'pricing'
})(theme => ({
  subtitle: {
    marginBottom: theme.spacing(5)
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    '&:hover': {
      zIndex: '21 !important'
    }
  },
  pricingWrap: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5)
    },
    '& > *': {
      margin: theme.spacing(0, -1),
      zIndex: 2
    },
    '& > *:first-of-type, & > *:last-child': {
      zIndex: 1
    }
  },
  pop: {
    zIndex: 3
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const pricing_plan_style = (pricingStyles);
;// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.js













const feature = {
  basic: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus'],
  best: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus', 'Vivamus sit amet', 'Cras convallis lacus orci'],
  pro: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Nulla lobortis nunc', 'Vitae scelerisque', 'Duis sed augue'],
  enterprise: ['Nam sollicitudin dignissim', 'Pellentesque ac bibendum ', 'Vestibulum consequat', 'Donec commodo', 'Duis tristique metus']
};

function PricingPlan() {
  const {
    classes,
    cx
  } = pricing_plan_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const theme = (0,styles_.useTheme)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decoration,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        fill: "#cccccc",
        children: /*#__PURE__*/jsx_runtime_.jsx("use", {
          xlinkHref: "/images/saas/deco-med-bg.svg#main"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
      fixed: isDesktop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.item,
        children: /*#__PURE__*/jsx_runtime_.jsx(Title/* default */.Z, {
          align: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: t('saas-landing.pricing_title')
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: cx(classes.subtitle, text.subtitle2),
        display: "block",
        align: "center",
        children: t('saas-landing.pricing_subtitle')
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.pricingWrap,
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 200,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Basic",
              price: 0,
              featureList: feature.basic,
              desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
              type: "basic"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 400,
          duration: 0.4,
          className: classes.pop,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Best Value",
              price: 24,
              featureList: feature.best,
              desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
              type: "value"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 600,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Pro",
              price: 54,
              featureList: feature.pro,
              desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
          animateOnce: true,
          animateIn: "fadeInUpShort",
          offset: -200,
          delay: 800,
          duration: 0.4,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.item,
            children: /*#__PURE__*/jsx_runtime_.jsx(Pricing, {
              title: "Enterprise",
              price: 99,
              featureList: feature.enterprise,
              desc: " Interdum et malesuada fames ac ante ipsum primis in faucibus. "
            })
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const PricingPlan_PricingPlan = (PricingPlan);
;// CONCATENATED MODULE: ./components/PricingPlan/index.js


/***/ }),

/***/ 4052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Testimonials_Testimonials)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(889);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/ButtonBase"
var ButtonBase_ = __webpack_require__(2494);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: external "@mui/icons-material/FormatQuote"
const FormatQuote_namespaceObject = require("@mui/icons-material/FormatQuote");
var FormatQuote_default = /*#__PURE__*/__webpack_require__.n(FormatQuote_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4618);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(4882);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Testimonials/testi-style.js

const testiStyles = (0,mui_.makeStyles)({
  uniqId: 'testi'
})((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10)
    },
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        padding: 0
      }
    }
  },
  decoration: {
    position: 'absolute',
    top: 0,
    width: 830,
    height: 600,
    left: -200,
    [theme.breakpoints.down('lg')]: {
      left: -360
    },
    '& svg': {
      fill: theme.palette.primary.main,
      transform: 'scale(1.2)',
      width: '100%',
      height: '100%'
    }
  },
  title: {
    position: 'relative',
    margin: theme.spacing(0, 3, 8),
    paddingTop: theme.spacing(7),
    color: theme.palette.common.white,
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  sliderWrap: {
    position: 'relative'
  },
  icon: {
    fontSize: 140,
    position: 'absolute',
    color: theme.palette.common.white,
    opacity: 0.15,
    top: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      left: theme.spacing(30)
    }
  },
  carousel: {
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2)
    },
    '& div[class*="slick-active"]': {
      '& p': {
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        transform: 'translate3d(0, 0, 0)'
      }
    }
  },
  item: {
    position: 'relative'
  },
  inner: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
    '& p': {
      opacity: 0,
      transform: 'translate3d(-10%, 0, 0)',
      marginTop: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%'
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        height: 75,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  profile: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 6)
    }
  },
  avatar: {
    width: 85,
    height: 85,
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  name: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& span': {
      marginTop: theme.spacing(0.5),
      fontSize: 14,
      display: 'block'
    }
  },
  logoWrap: {
    position: 'relative'
  },
  active: {},
  figureBtn: {
    display: 'inline-block',
    padding: theme.spacing(3),
    lineHeight: '150px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '30%',
    height: 150,
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      display: 'block',
      width: '100%',
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)'
    },
    [`& .${classes.active}, &:hover`]: {
      '& img': {
        filter: 'none'
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const testi_style = (testiStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const testiContent = [{
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: imgAPI/* default.avatar.10 */.Z.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/agency.png'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: imgAPI/* default.avatar.1 */.Z.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/architect.png'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.2 */.Z.avatar[2],
  name: 'Jena Doe',
  title: 'Graphic Designer',
  logo: '/images/logos/cloud.png'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: imgAPI/* default.avatar.3 */.Z.avatar[3],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  logo: '/images/logos/starter.png'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.4 */.Z.avatar[4],
  name: 'Jihan Doe',
  title: 'CEO Software House',
  logo: '/images/logos/coin.png'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: imgAPI/* default.avatar.6 */.Z.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  logo: '/images/logos/fashion.png'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.7 */.Z.avatar[7],
  name: 'John Doe',
  title: 'Senior Graphic Designer',
  logo: '/images/logos/mobile.png'
}, {
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: imgAPI/* default.avatar.10 */.Z.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/profile.png'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.1 */.Z.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  logo: '/images/logos/saas.png'
}];

function Testimonials() {
  const slider = (0,external_react_.useRef)(null);
  const {
    classes,
    cx
  } = testi_style();
  const {
    classes: hide
  } = (0,common/* useHidden */.qf)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    0: currentSlide,
    1: setCurSlide
  } = (0,external_react_.useState)(0);
  const theme = (0,styles_.useTheme)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: curSlide => {
      setCurSlide(curSlide);
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 7,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.sliderWrap,
            children: [!isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.decoration,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                width: "900px",
                height: "618px",
                viewBox: "0 0 900 618",
                version: "1.1",
                children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                    x1: "78.2441494%",
                    y1: "65.8737759%",
                    x2: "10.5892887%",
                    y2: "33.8596367%",
                    id: "linearGradient-1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                      stopColor: theme.palette.primary.dark,
                      offset: "0%"
                    }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                      stopColor: theme.palette.primary.main,
                      offset: "100%"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  stroke: "none",
                  strokeWidth: "0",
                  fill: "none",
                  fillRule: "evenodd",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z",
                    id: "Oval",
                    fill: "url(#linearGradient-1)"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
              variant: "h3",
              align: isMobile ? 'center' : 'left',
              className: cx(classes.title, text.title2),
              children: [t('saas-landing.testi_title'), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: t('saas-landing.testi_titlestrong')
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((FormatQuote_default()), {
              className: classes.icon
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.carousel,
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
                ref: slider
              }, settings), {}, {
                children: testiContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.item,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: classes.inner,
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: classes.profile,
                      children: [/*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
                        alt: item.name,
                        src: item.avatar,
                        className: classes.avatar
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h6",
                        className: classes.name,
                        children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: item.title
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                      component: "p",
                      className: text.paragraph,
                      children: item.text
                    })]
                  })
                }, index.toString()))
              }))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 5,
          xs: 12,
          className: hide.smDown,
          children: !isMobile && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.logoWrap,
            children: testiContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.figureBtn,
              children: /*#__PURE__*/jsx_runtime_.jsx((ButtonBase_default()), {
                onClick: () => slider.current.slickGoTo(index),
                className: currentSlide === index ? classes.active : '',
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: item.logo,
                  alt: 'logo' + index.toString()
                }, index.toString())
              })
            }, index.toString()))
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Testimonials_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./components/Testimonials/index.js


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Title)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(8460);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/Title.js




function Title(props) {
  const {
    classes,
    cx
  } = (0,title_style/* default */.Z)();
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

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: cx(classes.title, setAlign(align)),
    children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h3",
      children: children
    })
  });
}
Title.defaultProps = {
  align: 'left'
};
;// CONCATENATED MODULE: ./components/Title/index.js


/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_getStatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1834);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3413);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1982);
/* harmony import */ var _components_CompanyLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(315);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9085);
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7996);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4052);
/* harmony import */ var _components_PricingPlan__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4129);
/* harmony import */ var _components_Faq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7551);
/* harmony import */ var _components_NewsEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5167);
/* harmony import */ var _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7156);
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4316);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_7__, _components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)


















const sectionMargin = margin => margin * 20;

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'home'
})(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    }
  },
  spaceBottomTesti: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(20)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const {
    classes,
    cx
  } = useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme => theme.breakpoints.down('md'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("title", {
        children: (_public_text_brand__WEBPACK_IMPORTED_MODULE_6___default().saas.name) + ' - Home Page'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: classes.mainWrap,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        onToggleDark: onToggleDark,
        onToggleDir: onToggleDir
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("main", {
        className: classes.containerWrap,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "home",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_CompanyLogo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Counter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "feature",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Feature__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "testimonials",
          className: classes.spaceBottomTesti,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "pricing",
          className: classes.spaceTop,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PricingPlan__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
          id: "faq",
          className: classes.spaceTopShort,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Faq__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
          className: cx(classes.spaceTopShort, classes.spaceBottomShort),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_NewsEvent__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
        id: "footer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Footer_FooterWithDeco__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          toggleDir: onToggleDir
        })
      }), !isTablet && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_PageNav__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})]
      })]
    })]
  });
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)
const getStaticProps = (0,_lib_getStatic__WEBPACK_IMPORTED_MODULE_5__/* .makeStaticProps */ .pc)(['common']);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/ffffff', 'https://via.placeholder.com/967x725/ea6d6d/ffffff', 'https://via.placeholder.com/1280x849/ea6db7/ffffff', 'https://via.placeholder.com/967x725/bb6dea/ffffff', 'https://via.placeholder.com/1048x701/6d6fea/ffffff', 'https://via.placeholder.com/1050x700/6dc0ea/ffffff', 'https://via.placeholder.com/970x725/6deaa6/ffffff', 'https://via.placeholder.com/1051x700/b8de27/ffffff', 'https://via.placeholder.com/1051x701/de9f27/ffffff', 'https://via.placeholder.com/1050x700/ef4545/ffffff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  saas: ['https://via.placeholder.com/1000x625/f2c9ff/757575', 'https://via.placeholder.com/1472x637/5abce4/FFFFFF', 'https://via.placeholder.com/1000x625/e6f8ff/757575', '/images/saas/app-counter.png', 'https://via.placeholder.com/1000x680/b44fd4/FFFFFF', 'https://via.placeholder.com/1000x680/00a7e8/FFFFFF', 'https://via.placeholder.com/1000x680/e91e63/FFFFFF', '/images/saas/desktop_illustration.png']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgAPI);

/***/ }),

/***/ 434:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 9366:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQ8AAADNCAMAAAArZeRCAAAAM1BMVEUAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBeLJMlAAAAEHRSTlMAv4DvQBCfIGDfzzBwUI+v39E5bwAADsBJREFUeNrs3F1ymzAUgFEkhPgH7X+1HdfNQyZpmjSOEfY5b2yA+bhcqalFn1Ja4kV4kS9PQ0pzAwDwsLq0XgJoLP8whRyH1DUAAA+jS0MMU/miNmxLagAATm4eYmjLN4xZFAEAZ9WvWyi3EaImAgBOph/yWG4rLFatAYCTeGmh22vzassaAKhd2qbyo/ZBEgEA1erW3Ja3JBEA8By6YS/3k9cGAKAqay531m59AwBQiTm35QhhaAAAjtctU/k8QyIA4NHMuRxsd1MjAHCgYSoVmPw2AwCO0cWxVGJcHMAHAO6u39pSkTYqIgDgrvrD14YUEQDwBc9QQ4oIAPi7Z6khRQQA3Em3lZq1sYFH0qeLeLWHV8pVG17Z49WaLnwiANxeF6vaon7P6PQ9Z9Zd62cLIUzlVqY/mbSklFxhCvBdQzUn7D8yuqGRk5nTGmMOYSz3EULIMQ6mRwD/IYVyEmFuoHpdSjHuYSqH+p1Gygjgk7p616jfkb3dqVafhphDdcPWMewxJtNVgI8M1S8OvdYuDVRmTnGrr4PeCHtcrBkBvKM/za8ya0T8Yu9OkCMHYSgMB4HBxhv3P+10ZqomnUpv7niT+L8z2NRDEnBCSUcQ+i47GWijAcAVKSrNbHFxtH6UWeFu4oqLQrEIAC76U7xiT9MMuqQgUe2vcysVUSsCUDelxaF/Mk0z7K9vJ6ds4O4l3knL2U0AdUrad7gTm1rsKAyGikK3uYlQBKA62o6V3eDHD2AHvf0o9C0UMVQEoBrNXCxgrhobS+Oke2j6Ld4xUwSgCr22A8LMVWN/QWb9VdT3ZQpFAKwbih2OJRvra6osC/3UxYGJIgBW6XqfgxIRdpbaiqaFXuBnMhEAi/ReOkSJCFtLbbTSS16Vj/TOABgzGpyIoEQEstDmujgyYw3ADEujQ5SIsOK8EFnoBVlonQEwwdboECUirCGIuR7yhnxsKRMBf4VPrXwJF9xVoUJjedl3fINYLg1Vn6l/U2bCGtVKYRSJzvnygHcuyhB4Vuq01L/QwXXVWBVNsvd1E/8b6hJGia4ry3gXZWT7cDq9+X1wpESEV6XBxh3tC9E5A5ZqwvDbd5xz5Mr3Mwnm41ApHdVJvCJMtmul+5mJRLCsH8V5rje1pi1VkA/goWaMFWwNHiESAc+ldnJlfU7Yti9GHHpPJn+DLtlTRCLgriaI82U7XPm+DHGIk/dYWRrokl0hEgE3y0K53MH1phZUFIcuZj4z/NBzlmxrMyfOoNvOd9TPvIJzACl18fRnQRg6gI/8elDqmPd68kAk2tdUqsNYNf4LhKEddRPrO7Q59L2eTKv5CZplv5RZlPEpcJjsOdZ3VKw//r2euf3AHcShFXg+MNAmO0pklAgapPYk7/X4yImzW4hD3FYNwpB2nVCi/cPeHWinCQRRAJUQVBQs//+1bc1JT1OtAoHjMnPvNyTrY2d2hrKdyxrL2nZ+sm6IQ0tpBe60DsLQ61XuaClVcyyxku6SaFX9kJpRRCmZM1SKWnM1BTp01VCok4+IG1a4GkXEPM1RGCqJSyLKUliV7Eat0vxJHPpgFBGz9NZxFEcnEcXo91sopCubraApOwY/YhQR3tbHYUwjr1dmy9B9lf+YpYlDV5Wv0wx0UBetNZOIV2qOG7s61ki0rP3AVW0WSnSahsqnt5pXOXQbC0NXrUT0m6VlS7vsCKwX/bfhhyIAI3luKhHtdl7a/836DtTJIlEE4AlhSCL64GnZDes7UCeLpH3TSMR/CEMS0SdPy+6wvgN1sljqvdta7hCG7ms1wH7TFrvH1nYy0yGSw5s62WZ5f89XwpDX91/ppV5ZbX1HGMdi5+3jhGciYeiZytf8bO8D1nfEdd7OWDX0RfCYMDSKKvNMjV8LK+/D0kIdhhmN/JJ56OIUtZcIsyglWN8R1bsW6kgc8QhDrlTX1A08UDmBt6rptFBHIxEhDGm7W815wPqOgLyuj8nze5wN2oj+YYvrc9Z3ZOV1fWTOeObrcz2vqLV8THAZMIoomD7FXXhmEhHC0Eitopmn9sNgFFFKroZSkIiY6px1d6HBMeM0Sf8+/EVF5WooDYkIYcgHvWrZSC4dk3E1lItExDiHzGFIz4e3ZX8YRZSFq6F8JCLyjqCe5qLE4W3Zkk4O32K5GkpKIkIYUuIwiXEcVdgEXA0lJhFhWY8u2J/s3Q1ygjAQBtBShUBRm/uftjMd29GO/4klMe+dAcLHJrtJFdrrPPRAvSClodZJRDQ7gtpw4UzamdGZ0UrNsSxKQ0hECEP+6I0eupFjaa9JaQj3miEMKRE5TL2QSediGZSGkIgwglqJKNkY0XlfL6UhJCKEISWiHHxNDLeql4I4GkARhpSIsniPpLDwLifsLHucNo1vNEkYUiJ6WO/ZSdTpaFnG2EWQiBCGEgxKRMpDavN1UxrCHF6EIa9JTh4gJaL6KA1xk85S3wphSF9QuogSUV1mCx8SEcKQvqC8gjyUSeeBushFRNzDyGqEoUv80ec3yENqjhVZW/mQiBCG9nTeZxSiPKTmWIuwMSoLd+vwox+FIceq8xnkIatuJdzJgZHVuJvsiC2OfEKUh6KIXQHd9UhECEOnaJTOY5CHvtmFLZoj1BjQyK+wsSAcM606gxDloT0H9Yu1HiJIRHybhaGn2r21apCHDmm9L4+768lravgHuH7zznrwbB+N7pmtozx0xLnqsvSmULNnQCPbQRi6wJ5Zmk4eepqVunyqrX0y9iSi1umsv8qeWZJ1lIf+sGlWCnVxDng7mxY2msmus2eWZJKHnmuwaaZ9hEIZWV2J+d1q8P9WrZVQN1EeOkmn2WMMFqEqElH5turE9zGb8TH9Sh46y3jGOzg0RKUkopL146cjQwvqWtrf2EV56BwHFe7islZqJREVypSh5U3tfLvmKA+dY8m9nRPUX+zdWXLjMAxFUUvUTErG/lfb009XkorllFUGHu7Zg+lHDBRiY8rPH7pkTqTZku7IQ4/w3aRvEIYggp+nKzNdMkeS3BYWIw89wmD191gngwYSkRfsknmTYvF+LOShU/hu0ieEIcghEb0fLy66lGHx/jDy0Akkok8IQ5BU+gwXYbcoDPkl39wYjDx0Hl+S/IcjENJYfDiNwlAm6kNEG3noSXw36TcGqKGNRHQCt6J0tIeIeiMPvctG14x1WrhFInqIVbJ8lIeIqpGHnsYc0YuMO8VxODbleYTurfaDwlAguv9aHXnoaSSil5j5Nhnco6t9tdo6QyzTTVMz8tCPsN7LpABS6Nh8uMzM9HRMm+R/Vi3kIQfKkWpQYdwnRoYQR94a7pVGmmSBFcVO8mbkIR+mLGV5quOIZ81Yw73S0HMMxFb0Lgm9kYfcSLBsRmEIUSWr4V6pNgYHFfQ3LdXIQ55oH7mVGyFCS1PDvVBtbNXL0HqacVzJQ97cNWc3eVsECjr9Gu5HDE8jx1T1ZOQhf1a1TyfNC00yqGCQiFMAilPVu5GHfNK5hbJCAjm80UgWgtpU9VzIQ24VgVEFshBEJVh9IAsh1VT1ZuQhz9Yj8DWUUxDStFcfmJ1GsreqDyMPebe1iIdubXeyEOTpdLWvMJCF0hCYql6MPBRBrEg07uzUIw2KRF8aeWsxmS1wK+OvWshDUQRpnA2NFhmy6Zb4d+NXmhkazKjEHncdNyMPBbJOu+djty4HF0LkpLD68BqVG1FeoZvHdyMPRdM1j2UiohDSk3syjBYZnnXcwuqNPBTROi1+Dt5xaBOlceCPrXku4F6qLpwDCLxmthh5KCwPmajufUdlHPjfPd8o0S/27ijHdRAGoCg2TkJCCd7/at/096kapdOmEHrPGqrqBjBMpsIUGS49ZpYjPXRt69xq7ywXrXwMAl+fRJnlYQwwZjZFp4cGIHtZwudYooQAkiiEpXBoEGO8ZjZtTg+NIsqeLJzLis4sigMkETtkGOw1s+r00GC2qidU0WJJK/99wPO2LodBX04hLp7HWHP3s9NDY4oya7EpvMrsppXj0sBL1r2EYRhv8GDAMTN1emhwq1TVYs+VUb5XkAoZBLxPvdRrO1yrgTeo19ktTk4PfZFVRGa9K/a/pHeziPBvB5xlnS97mogNMvzFdpWPgOT0EAB80rZ3/dzOAws3jGH0MbPi9BAAfNy2l2t8NtuNYXp8wanqHOkhAHjKAPeoHmKJRSF8y2tmOTo9BAANyd7+wR1KCCeTzneIc3R6CABai7KnLlaKsunOHWM4wdrFD/yXHKKHAKAT26y2hDbuIcRkKR74hruqc3R6CAD6IlWLhU/Jlnh+B78a/2rGHJ0eAoAuRZk1nbdalK2oCh2EQwa/iSi500MA0LcooprMwhssZkm1si2GVmKPb9Ykp4cA4EJERFVv9mMKh9iPoqq7sBSEPuzdzZndnB4CgEuTx3hyBx3bOpszm50eAgAAHxZvoR9TdXoIAAAcNeLdjNPm9BAAADhqxGPVOTo9BAAAGqk9LBGl6PQQAAA4brwlot2dHgIAAC3VJbQ0bU4PAQCA540zaGbR6SEAANCe5HBU+72yf+zcW2rDMBBAUcnys3Hi2f9q+xNoSk1LSGokc84qLtLM6CEA4FHj56ovH6GHAIBalDkdbi2hhwCAiuQ+HWrKEXoIAKjLr5tm9TwO6SEA4Ls2x4guHxF6CACoUemOKKLhFqGHAIBa7RVRTV9leggA+KmxIuqXCD0EAFSu3Kb0T/ocoYcAgBaMl5RSpTWkhwCAY+S51hrSQwDAUUo3pfeZlwg9BAA0J89DeoepKxF6CABoUhmv6VXzFhF6CABo12tJdB1LhB4CAJq3rVN63nCPIT0EAJzCMs5PNdFlzXGnhwCA01i2rh/Sn4a+yyW+6CEA4FyW3K39lHZN/bqTQnoIADilkvPWPRhzLrFPDwEA6CEAAD0EAKCHAAD0EACAHgIA0EPw2W4dCAAAAAAI8reeYIOiCAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAXhfA17g2PN0TAAAAAElFTkSuQmCC"

/***/ }),

/***/ 6442:
/***/ ((module) => {

module.exports = "/_next/static/images/deco-wave-light-547dbc75dca0ad954515d9c8305eeed8.png";

/***/ }),

/***/ 965:
/***/ ((module) => {

module.exports = "/_next/static/images/faq-db4e1f5683a8681ddd0282b31c9e1765.png";

/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 2494:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ButtonBase");

/***/ }),

/***/ 889:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 1168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 6080:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Slide");

/***/ }),

/***/ 9174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 9829:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SnackbarContent");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 3191:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 5902:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-animation-wrapper");

/***/ }),

/***/ 7446:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 6578:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

"use strict";
module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,932,676,63,173,618,567,460,647], () => (__webpack_exec__(9315)));
module.exports = __webpack_exports__;

})();