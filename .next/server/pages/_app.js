"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ SiteNavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: ./components/LogoBarCultural.tsx

const LogoBarCultural = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        id: "triangle",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "30%",
        height: "30%",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
            points: "50 15, 100 100, 0 100"
        })
    });

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/SiteNavBar.tsx






function SiteNavBar() {
    const { setTheme  } = (0,external_next_themes_.useTheme)();
    const { isDark  } = (0,react_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar, {
        isBordered: true,
        variant: "floating",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Brand, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LogoBarCultural, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        b: true,
                        color: "inherit",
                        hideIn: "xs",
                        children: "ACME"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                hideIn: "xs",
                variant: "highlight-rounded",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        href: "#",
                        children: "Festas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        isActive: true,
                        href: "#",
                        children: "Filia\xe7\xe3o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        href: "#",
                        children: "Parceiros"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Link, {
                        href: "#",
                        children: "Sobre n\xf3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Navbar.Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                            checked: isDark,
                            onChange: (e)=>setTheme(e.target.checked ? "dark" : "light")
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Navbar.Item, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            auto: true,
                            flat: true,
                            as: react_.Link,
                            href: "#",
                            children: "Sign Up"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const configuration = {
    firebase: {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    },
    emulatorHost: process.env.NEXT_PUBLIC_EMULATOR_HOST,
    emulator: process.env.NEXT_PUBLIC_EMULATOR === "true"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configuration);


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4535);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9698);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9133);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, reactfire__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, reactfire__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const lightTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
    type: "light",
    theme: {
        colors: {
            primary: "#4ADE7B",
            secondary: "#F9CB80",
            error: "#FCC5D8"
        }
    }
});
const darkTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
    type: "dark",
    theme: {
        colors: {
            primary: "#4ADE7B",
            secondary: "#F9CB80",
            error: "#FCC5D8"
        }
    }
});
function MyApp({ Component , pageProps  }) {
    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(_configuration__WEBPACK_IMPORTED_MODULE_7__/* ["default"].firebase */ .Z.firebase);
    const persistence = isBrowser() ? firebase_auth__WEBPACK_IMPORTED_MODULE_5__.indexedDBLocalPersistence : firebase_auth__WEBPACK_IMPORTED_MODULE_5__.inMemoryPersistence;
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.initializeAuth)(app, {
        persistence
    });
    // prevent emulator from being
    // called multiple times on page navigations
    if (_configuration__WEBPACK_IMPORTED_MODULE_7__/* ["default"].emulator */ .Z.emulator && !("emulator" in auth.config)) {
        // we can get the host by combining the local emulator host with the Auth port
        const host = getAuthEmulatorHost();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.connectAuthEmulator)(auth, host);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactfire__WEBPACK_IMPORTED_MODULE_6__.FirebaseAppProvider, {
        firebaseApp: app,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactfire__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {
            sdk: auth,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                defaultTheme: "system",
                attribute: "class",
                value: {
                    light: lightTheme.className,
                    dark: darkTheme.className
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__/* .SiteNavBar */ .v, {}),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
function getAuthEmulatorHost() {
    const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
    const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;
    return [
        "http://",
        host,
        ":",
        port
    ].join("");
}
function isBrowser() {
    return "undefined" !== "undefined";
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3847));
module.exports = __webpack_exports__;

})();