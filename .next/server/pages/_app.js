"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo192.a030374e.png","height":192,"width":192,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtElEQVR42mOAga0MDEww9gwGBkYGZLASKpnOwKDAwMDAwQACMEUVSKofr1vx6M6mVX0g9v/LZ1gYQODppjWsIPpKTUHJ4zu3/z8+c+L/GQaGBAYGBoa3XTUQRWd99I2PLV34/+S5c/9v3rr5/876Vf/3MjDYMcDA4fSoupMzJp27sHrp9nv7dx+8umX9zV3+NuUMILC3o5GZAQf4v2oWwjdvPr5n/vf/P/P///+Z/v//D5cAANq+STIeXt7qAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AvatarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9698);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_3__]);
reactfire__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function AvatarButton() {
    const { status , data: user  } = (0,reactfire__WEBPACK_IMPORTED_MODULE_3__.useUser)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    if (status === "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Content, {
            css: {
                "@xs": {
                    w: "12%",
                    jc: "flex-end"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                placement: "bottom-right",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Trigger, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                bordered: true,
                                as: "button",
                                color: "secondary",
                                size: "md",
                                src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                        "aria-label": "Menu do usu\xe1rio",
                        color: "secondary",
                        onAction: (actionKey)=>router.push("/" + actionKey),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                css: {
                                    height: "$18"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        b: true,
                                        color: "inherit",
                                        css: {
                                            d: "flex"
                                        },
                                        children: "Logado como"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        b: true,
                                        color: "inherit",
                                        css: {
                                            d: "flex"
                                        },
                                        children: user.email
                                    })
                                ]
                            }, "profile"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                withDivider: true,
                                children: "Minha Carterinha"
                            }, "settings"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                children: "Minhas Festas"
                            }, "analytics"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                withDivider: true,
                                children: "Suporte"
                            }, "suporte"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                withDivider: true,
                                color: "error",
                                children: "Sair"
                            }, "auth/logout")
                        ]
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            color: "currentColor",
            size: "sm"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogInButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);



function LogInButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        auto: true,
        flat: true,
        as: _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Link,
        href: "signup",
        children: "Cadastre-se"
    });
}


/***/ }),

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SiteNavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_logo192_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5498);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9698);
/* harmony import */ var _LogInButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2540);
/* harmony import */ var _AvatarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactfire__WEBPACK_IMPORTED_MODULE_6__, _AvatarButton__WEBPACK_IMPORTED_MODULE_8__]);
([reactfire__WEBPACK_IMPORTED_MODULE_6__, _AvatarButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SiteNavBar() {
    const { setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { isDark  } = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { data: signInCheckResult  } = (0,reactfire__WEBPACK_IMPORTED_MODULE_6__.useSigninCheck)();
    const collapseItems = [
        "Festas",
        "S\xf3cios",
        "Empresas Parceiras",
        "Sobre n\xf3s",
        "Perfil"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
        isCompact: true,
        variant: "floating",
        shouldHideOnScroll: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        width: 100,
                        height: 100,
                        src: _public_logo192_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        priority: true,
                        alt: "Logo Bar Cultural"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        b: true,
                        color: "inherit",
                        hideIn: "xs",
                        children: "Bar Cultural"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Content, {
                hideIn: "xs",
                variant: "highlight-rounded",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Link, {
                        href: "festas",
                        children: "Festas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Link, {
                        href: "socios",
                        children: "S\xf3cios"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Link, {
                        href: "parceiros",
                        children: "Parceiros"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Link, {
                        href: "sobre-nos",
                        children: "Sobre n\xf3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Content, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                            checked: isDark,
                            onChange: (e)=>setTheme(e.target.checked ? "dark" : "light")
                        })
                    }),
                    signInCheckResult?.signedIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AvatarButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogInButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
                children: collapseItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Navbar.CollapseItem, {
                        activeColor: "secondary",
                        css: {
                            color: index === collapseItems.length - 1 ? "$error" : ""
                        },
                        isActive: index === 2,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                            color: "inherit",
                            css: {
                                minWidth: "100%"
                            },
                            href: "#",
                            children: item
                        })
                    }, item))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(671);
/* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2405);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__, firebase_app__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, reactfire__WEBPACK_IMPORTED_MODULE_6__]);
([_components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__, firebase_app__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, reactfire__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






//import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';


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
    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)({
        apiKey: "AIzaSyCVM9NDO_NvQm4cMAUFo4gzQ51Q-nLADAg",
        authDomain: "bar-cultural-unifei.firebaseapp.com",
        projectId: "bar-cultural-unifei",
        storageBucket: "bar-cultural-unifei.appspot.com",
        messagingSenderId: "346192697346",
        appId: "1:346192697346:web:9b92780e784cdacaf8ef1b",
        measurementId: "G-4W16F70233"
    });
    const persistence = isBrowser() ? firebase_auth__WEBPACK_IMPORTED_MODULE_5__.indexedDBLocalPersistence : firebase_auth__WEBPACK_IMPORTED_MODULE_5__.inMemoryPersistence;
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.initializeAuth)(app, {
        persistence
    });
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
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: (_next_font_google_target_css_path_pages_app_tsx_import_Roboto_arguments_weight_400_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_7___default().className),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SiteNavBar__WEBPACK_IMPORTED_MODULE_3__/* .SiteNavBar */ .v, {}),
                            "/",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                })
            })
        })
    });
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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [121,2], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();