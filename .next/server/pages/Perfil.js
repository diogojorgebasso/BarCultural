"use strict";
(() => {
var exports = {};
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 7293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GuardedPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_2__]);
reactfire__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function GuardedPage({ children , whenSignedOut  }) {
    const auth = (0,reactfire__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
    const { status  } = (0,reactfire__WEBPACK_IMPORTED_MODULE_2__.useSigninCheck)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (status !== "success") {
            return;
        }
        // keep this running for the whole session
        // unless the component was unmounted, for example, on log-outs
        const listener = auth.onAuthStateChanged((user)=>{
            const shouldLogOut = !user && whenSignedOut;
            // log user out if user is falsy
            // and if the consumer provided a route to redirect the user
            if (shouldLogOut) {
                // we then redirect the user to the page
                // specified in the props of the component
                if (window.location.pathname !== whenSignedOut) {
                    window.location.assign(whenSignedOut);
                }
            }
        });
        // destroy listener on un-mounts
        return ()=>listener();
    }, [
        auth,
        status,
        whenSignedOut
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Perfil)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GuardedPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7293);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_GuardedPage__WEBPACK_IMPORTED_MODULE_2__, reactfire__WEBPACK_IMPORTED_MODULE_3__]);
([_components_GuardedPage__WEBPACK_IMPORTED_MODULE_2__, reactfire__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Perfil() {
    const { status , data: user  } = (0,reactfire__WEBPACK_IMPORTED_MODULE_3__.useUser)();
    if (status === "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "carregando teus dados..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuardedPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            children: [
                "Bem vindo de volta! ",
                user.displayName,
                "."
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9698:
/***/ ((module) => {

module.exports = import("reactfire");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3458));
module.exports = __webpack_exports__;

})();