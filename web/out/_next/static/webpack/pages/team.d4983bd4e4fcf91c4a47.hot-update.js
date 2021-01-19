webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team.module.css */ \"./pages/team.module.css\");\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_team_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/pages/team.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import Contact from \"../components/contact\";\n\n\n\n\n\n\n\n\nfunction shuffleArray(array) {\n  var i = array.length - 1;\n\n  for (; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var temp = array[i];\n    array[i] = array[j];\n    array[j] = temp;\n  }\n\n  return array;\n}\n\nvar ContactList = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ContactList, _React$Component);\n\n  var _super = _createSuper(ContactList);\n\n  function ContactList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ContactList);\n\n    _this = _super.call(this, props);\n\n    var contact_cards = _this.props.contacts.map(function (c, idx) {\n      return __jsx(Contact, {\n        key: idx,\n        name: c.name,\n        position: c.position,\n        organization: c.organization,\n        website: c.website,\n        twitter: c.twitter,\n        note: c.note,\n        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 7\n        }\n      });\n    });\n\n    _this.state = {\n      contactCards: contact_cards\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ContactList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var temp = this.state.contact_cards.slice();\n\n      for (var i = temp.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [temp[j], temp[i]];\n        temp[i] = _ref[0];\n        temp[j] = _ref[1];\n      }\n\n      this.setState({\n        contact_cards: temp\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"section\", {\n        className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.cards,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, shuffled_contacts);\n    }\n  }]);\n\n  return ContactList;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component); // function ContactList(props) {\n//   // First create contact cards for everyone.\n//   const contact_cards = props.contacts.map((c, idx) =>\n//     <Contact\n//       key={idx}\n//       name={c.name} position={c.position}\n//       organization={c.organization} website={c.website}\n//       twitter={c.twitter}\n//       note={c.note} />\n//   );\n//   // Then shuffle order in which members are shown.\n//   var shuffled_contacts = shuffleArray(contact_cards)\n//   return (\n//     <section className={styles.cards}>\n//       {shuffled_contacts}\n//     </section>\n//   );\n// }\n\n\nfunction Contact(props) {\n  // Optional Website link.\n  var website_tag = \"\";\n\n  if (props.website != '') {\n    website_tag = __jsx(\"a\", {\n      href: props.website,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faDribbble\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 47\n      }\n    }), \" Web\");\n  } // Optional Twitter tag.\n\n\n  var twitter_tag = \"\";\n\n  if (props.twitter != '') {\n    var twitter_href = \"https://twitter.com/\" + props.twitter;\n    twitter_tag = __jsx(\"a\", {\n      href: twitter_href,\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__[\"faTwitter\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 46\n      }\n    }), \" Twitter\");\n  }\n\n  return __jsx(\"article\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, props.name), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, props.position), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, props.organization), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, website_tag, \" \", __jsx(\"span\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.spacer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 23\n    }\n  }), \" \", twitter_tag), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.note,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, props.note));\n}\n\n_c = Contact;\nvar __N_SSG = true;\nfunction Home(_ref2) {\n  var teamData = _ref2.teamData;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, \"GEM Team\")), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.headingXl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, \"Team\"), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks. This page acts as a directory of our amazing contributors:\"), __jsx(\"div\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.centered,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(ContactList, {\n    contacts: teamData.teamMembers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }))));\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS5qcz82MzI5Il0sIm5hbWVzIjpbInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiQ29udGFjdExpc3QiLCJwcm9wcyIsImNvbnRhY3RfY2FyZHMiLCJjb250YWN0cyIsIm1hcCIsImMiLCJpZHgiLCJuYW1lIiwicG9zaXRpb24iLCJvcmdhbml6YXRpb24iLCJ3ZWJzaXRlIiwidHdpdHRlciIsIm5vdGUiLCJzdGF0ZSIsImNvbnRhY3RDYXJkcyIsInNsaWNlIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJjYXJkcyIsInNodWZmbGVkX2NvbnRhY3RzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWN0Iiwid2Vic2l0ZV90YWciLCJmYURyaWJiYmxlIiwidHdpdHRlcl90YWciLCJ0d2l0dGVyX2hyZWYiLCJmYVR3aXR0ZXIiLCJjYXJkIiwidGl0bGUiLCJzcGFjZXIiLCJIb21lIiwidGVhbURhdGEiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ1hsIiwiZGVzY3JpcHRpb24iLCJjZW50ZXJlZCIsInRlYW1NZW1iZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLE1BQUlDLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBdkI7O0FBQ0EsU0FBT0QsQ0FBQyxHQUFHLENBQVgsRUFBY0EsQ0FBQyxFQUFmLEVBQW1CO0FBQ2pCLFFBQU1FLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsQ0FBQyxHQUFHLENBQXJCLENBQVgsQ0FBVjtBQUNBLFFBQU1NLElBQUksR0FBR1AsS0FBSyxDQUFD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RSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLGdFQUFVLENBQUNDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlFO0FBQUcsYUFBUyxFQUFFakIsd0RBQU0sQ0FBQ2tCLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbVJBSkYsRUFVRTtBQUFLLGFBQVMsRUFBRWxCLHdEQUFNLENBQUNtQixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFSixRQUFRLENBQUNLLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBSkYsQ0FERjtBQXFCRDtNQXRCdUJOLEkiLCJmaWxlIjoiLi9wYWdlcy90ZWFtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbi8vIGltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90ZWFtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFRlYW1EYXRhIH0gZnJvbSBcIi4uL2xpYi90ZWFtXCI7XG5pbXBvcnQgeyBmYURyaWJiYmxlLCBmYVR3aXR0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgbGV0IGkgPSBhcnJheS5sZW5ndGggLSAxO1xuICBmb3IgKDsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICBhcnJheVtqXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jbGFzcyBDb250YWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHZhciBjb250YWN0X2NhcmRzID0gdGhpcy5wcm9wcy5jb250YWN0cy5tYXAoKGMsIGlkeCkgPT5cbiAgICAgIDxDb250YWN0XG4gICAgICAgIGtleT17aWR4fVxuICAgICAgICBuYW1lPXtjLm5hbWV9IHBvc2l0aW9uPXtjLnBvc2l0aW9ufVxuICAgICAgICBvcmdhbml6YXRpb249e2Mub3JnYW5pemF0aW9ufSB3ZWJzaXRlPXtjLndlYnNpdGV9XG4gICAgICAgIHR3aXR0ZXI9e2MudHdpdHRlcn1cbiAgICAgICAgbm90ZT17Yy5ub3RlfSAvPlxuICAgICk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGFjdENhcmRzOiBjb250YWN0X2NhcmRzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCB0ZW1wID0gdGhpcy5zdGF0ZS5jb250YWN0X2NhcmRzLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaSA9IHRlbXAubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFt0ZW1wW2ldLCB0ZW1wW2pdXSA9IFt0ZW1wW2pdLCB0ZW1wW2ldXTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRhY3RfY2FyZHM6IHRlbXAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cbiAgICAgICAge3NodWZmbGVkX2NvbnRhY3RzfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gQ29udGFjdExpc3QocHJvcHMpIHtcbi8vICAgLy8gRmlyc3QgY3JlYXRlIGNvbnRhY3QgY2FyZHMgZm9yIGV2ZXJ5b25lLlxuLy8gICBjb25zdCBjb250YWN0X2NhcmRzID0gcHJvcHMuY29udGFjdHMubWFwKChjLCBpZHgpID0+XG4vLyAgICAgPENvbnRhY3Rcbi8vICAgICAgIGtleT17aWR4fVxuLy8gICAgICAgbmFtZT17Yy5uYW1lfSBwb3NpdGlvbj17Yy5wb3NpdGlvbn1cbi8vICAgICAgIG9yZ2FuaXphdGlvbj17Yy5vcmdhbml6YXRpb259IHdlYnNpdGU9e2Mud2Vic2l0ZX1cbi8vICAgICAgIHR3aXR0ZXI9e2MudHdpdHRlcn1cbi8vICAgICAgIG5vdGU9e2Mubm90ZX0gLz5cbi8vICAgKTtcbi8vICAgLy8gVGhlbiBzaHVmZmxlIG9yZGVyIGluIHdoaWNoIG1lbWJlcnMgYXJlIHNob3duLlxuLy8gICB2YXIgc2h1ZmZsZWRfY29udGFjdHMgPSBzaHVmZmxlQXJyYXkoY29udGFjdF9jYXJkcylcbi8vICAgcmV0dXJuIChcbi8vICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XG4vLyAgICAgICB7c2h1ZmZsZWRfY29udGFjdHN9XG4vLyAgICAgPC9zZWN0aW9uPlxuLy8gICApO1xuLy8gfVxuXG5mdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XG5cbiAgLy8gT3B0aW9uYWwgV2Vic2l0ZSBsaW5rLlxuICB2YXIgd2Vic2l0ZV90YWcgPSBcIlwiO1xuICBpZiAocHJvcHMud2Vic2l0ZSAhPSAnJykge1xuICAgIHdlYnNpdGVfdGFnID0gKFxuICAgICAgPGEgaHJlZj17cHJvcHMud2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURyaWJiYmxlfSAvPiBXZWI8L2E+XG4gICAgKTtcbiAgfVxuXG4gIC8vIE9wdGlvbmFsIFR3aXR0ZXIgdGFnLlxuICB2YXIgdHdpdHRlcl90YWcgPSBcIlwiO1xuICBpZiAocHJvcHMudHdpdHRlciAhPSAnJykge1xuICAgIHZhciB0d2l0dGVyX2hyZWYgPSBcImh0dHBzOi8vdHdpdHRlci5jb20vXCIgKyBwcm9wcy50d2l0dGVyXG4gICAgdHdpdHRlcl90YWcgPSAoXG4gICAgICA8YSBocmVmPXt0d2l0dGVyX2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSAvPiBUd2l0dGVyPC9hPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLnBvc2l0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvcHMub3JnYW5pemF0aW9ufTwvcD5cbiAgICAgIDxwPlxuICAgICAgICB7d2Vic2l0ZV90YWd9IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcn0+PC9zcGFuPiB7dHdpdHRlcl90YWd9XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RlfT57cHJvcHMubm90ZX08L3A+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGVhbURhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R0VNIFRlYW08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+XG4gICAgICAgICAgVGVhbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdFTSBpcyBhIGNvbW11bml0eS1kcml2ZW4gZWZmb3J0IHdpdGggdGhlIGdvYWwgdG8gaW1wcm92ZSBob3cgcHJvZ3Jlc3MgaW5cbiAgICAgICAgICBuYXR1cmFsIGxhbmd1YWdlIGdlbmVyYXRpb24gaXMgbWVhc3VyZWQuIEl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB3aXRob3V0XG4gICAgICAgICAgYSBsYXJnZSBncm91cCBvZiBjb2xsYWJvcmF0b3JzIHRvIHRha2Ugb24gY2hhbGxlbmdpbmcgdGFza3MuIFRoaXMgcGFnZVxuICAgICAgICAgIGFjdHMgYXMgYSBkaXJlY3Rvcnkgb2Ygb3VyIGFtYXppbmcgY29udHJpYnV0b3JzOlxuICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICA8Q29udGFjdExpc3QgY29udGFjdHM9e3RlYW1EYXRhLnRlYW1NZW1iZXJzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IGdldFRlYW1EYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRlYW1EYXRhLFxuICAgIH0sXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/team.js\n");

/***/ })

})