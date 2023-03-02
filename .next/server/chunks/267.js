"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 4379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useRequestState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @name useRequestState
 */ function useRequestState() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        loading: false,
        success: false,
        error: undefined,
        data: undefined
    });
    const setLoading = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((loading)=>{
        setState({
            loading,
            success: false,
            data: undefined,
            error: undefined
        });
    }, []);
    const setData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data)=>{
        setState({
            data,
            success: true,
            loading: false,
            error: undefined
        });
    }, []);
    const setError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((error)=>{
        setState({
            data: undefined,
            loading: false,
            success: false,
            error
        });
    }, []);
    return {
        state,
        setState,
        setLoading,
        setData,
        setError
    };
}


/***/ }),

/***/ 1267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useSignInWithProvider)
/* harmony export */ });
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9698);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var _useRequestState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([reactfire__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useSignInWithProvider() {
    const auth = (0,reactfire__WEBPACK_IMPORTED_MODULE_0__.useAuth)();
    const { state , setLoading , setData , setError  } = (0,_useRequestState__WEBPACK_IMPORTED_MODULE_2__/* .useRequestState */ .g)();
    const signInWithProvider = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async (provider)=>{
        setLoading(true);
        try {
            const credential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider, firebase_auth__WEBPACK_IMPORTED_MODULE_1__.browserPopupRedirectResolver);
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
        signInWithProvider,
        state
    ];
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;