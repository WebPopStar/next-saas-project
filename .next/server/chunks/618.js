"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 4618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lr": () => (/* binding */ useTextAlign),
/* harmony export */   "XK": () => (/* binding */ useText),
/* harmony export */   "qf": () => (/* binding */ useHidden)
/* harmony export */ });
/* unused harmony export useFloat */
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
 // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useTextAlign = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'textalign'
})({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useFloat = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'float'
})({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useText = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'text'
})(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useHidden = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'hidden'
})(theme => ({
  lgDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ })

};
;