"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EmailPasswordSignInForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_useSignInWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9083);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useSignInWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__]);
_lib_hooks_useSignInWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function EmailPasswordSignInForm(props) {
    const [signIn, state] = (0,_lib_hooks_useSignInWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__/* .useSignInWithEmailAndPassword */ .C)();
    const loading = state.loading;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (state.success) {
            props.onSignIn();
        }
    }, [
        props,
        state.success
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (event)=>{
        event.preventDefault();
        if (loading) {
            return;
        }
        const data = new FormData(event.currentTarget);
        const email = data.get(`email`);
        const password = data.get(`password`);
        // sign user in
        return signIn(email, password);
    }, [
        loading,
        signIn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "w-full",
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                labelPlaceholder: "Email"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {
                y: 1.6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Input.Password, {
                labelPlaceholder: "Senha"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useSignInWithEmailAndPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9698);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _useRequestState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([reactfire__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useSignInWithEmailAndPassword() {
    const auth = (0,reactfire__WEBPACK_IMPORTED_MODULE_1__.useAuth)();
    const { state , setLoading , setData , setError  } = (0,_useRequestState__WEBPACK_IMPORTED_MODULE_3__/* .useRequestState */ .g)();
    const signIn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (email, password)=>{
        setLoading(true);
        try {
            const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);
            setData(credential);
        } catch (error) {
            setError(error);
        }
    }, [
        auth,
        setData,
        setError,
        setLoading
    ]);
    return [
        signIn,
        state
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var _lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1267);
/* harmony import */ var _components_EmailPasswordSignInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(904);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__, _components_EmailPasswordSignInForm__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__, _components_EmailPasswordSignInForm__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SignIn = ()=>{
    const [signInWithProvider, signInWithProviderState] = (0,_lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__/* .useSignInWithProvider */ .s)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const AuthProviderButton = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "rounded-lg p-2 font-bold bg-red-400 text-white",
            onClick: ()=>{
                signInWithProvider(new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider());
            },
            children: "Login with Google"
        });
    };
    const onSignIn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return router.push("/perfil");
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (signInWithProviderState.success) {
            onSignIn();
        }
    }, [
        signInWithProviderState.success,
        onSignIn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "Hero",
                    children: "Sign In"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthProviderButton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_EmailPasswordSignInForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onSignIn: onSignIn
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 9698:
/***/ ((module) => {

module.exports = import("reactfire");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [267], () => (__webpack_exec__(4214)));
module.exports = __webpack_exports__;

})();