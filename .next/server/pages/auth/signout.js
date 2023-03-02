"use strict";
(() => {
var exports = {};
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 2587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_useSignUpWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3003);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_useSignUpWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__]);
_lib_hooks_useSignUpWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function EmailPasswordSignUpForm(props) {
    const [signUp, state] = (0,_lib_hooks_useSignUpWithEmailAndPassword__WEBPACK_IMPORTED_MODULE_2__/* .useSignUpWithEmailAndPassword */ ._)();
    const loading = state.loading;
    const error = state.error;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (state.success) {
            props.onSignup();
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
        // sign user up
        return signUp(email, password);
    }, [
        loading,
        signUp
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        className: "w-full",
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex-col space-y-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    required: true,
                    placeholder: "Your Email",
                    name: "email",
                    type: "email",
                    className: "TextField"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    required: true,
                    placeholder: "Your Password",
                    name: "password",
                    type: "password",
                    className: "TextField"
                }),
                error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-red-500",
                    children: error.message
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: loading,
                    className: "Button w-full",
                    children: "Sign Up"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailPasswordSignUpForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useSignUpWithEmailAndPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9698);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _useRequestState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([reactfire__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useSignUpWithEmailAndPassword() {
    const auth = (0,reactfire__WEBPACK_IMPORTED_MODULE_1__.useAuth)();
    const { state , setLoading , setData , setError  } = (0,_useRequestState__WEBPACK_IMPORTED_MODULE_3__/* .useRequestState */ .g)();
    const signUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (email, password)=>{
        setLoading(true);
        try {
            const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);
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
        signUp,
        state
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9488:
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
/* harmony import */ var _components_EmailPasswordSignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2587);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__, _components_EmailPasswordSignUp__WEBPACK_IMPORTED_MODULE_5__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__, _components_EmailPasswordSignUp__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SignUp = ()=>{
    const [signInWithProvider, signInWithProviderState] = (0,_lib_hooks_useSignInWithProvider__WEBPACK_IMPORTED_MODULE_4__/* .useSignInWithProvider */ .s)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const AuthProviderButton = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "rounded-lg p-2 font-bold bg-red-400 text-white",
            onClick: ()=>{
                signInWithProvider(new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider());
            },
            children: "Cadastre com sua conta Google"
        });
    };
    const onSignUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        router.push("/perfil");
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (signInWithProviderState.success) {
            onSignUp();
        }
    }, [
        signInWithProviderState.success,
        onSignUp
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col space-y-8 items-center justify-center mx-auto h-screen w-11/12 lg:w-4/12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "Hero",
                    children: "Sign Up"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthProviderButton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_EmailPasswordSignUp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onSignup: onSignUp
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [267], () => (__webpack_exec__(9488)));
module.exports = __webpack_exports__;

})();