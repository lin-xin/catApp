(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1badc801 */ "./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");
/* harmony import */ var D_project_test_catApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var D_project_test_catApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_project_test_catApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/D_project_test_catApp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/index/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_project_test_catApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Index",
  components: {},
  setup: function setup() {
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ "k"])({
      msg: "",
      msg2: "",
      type: "text",
      show: false,
      cover: false,
      voice: [__webpack_require__(/*! ../../assets/voice/1.mp3 */ "./src/assets/voice/1.mp3"), __webpack_require__(/*! ../../assets/voice/2.mp3 */ "./src/assets/voice/2.mp3"), __webpack_require__(/*! ../../assets/voice/3.mp3 */ "./src/assets/voice/3.mp3"), __webpack_require__(/*! ../../assets/voice/4.mp3 */ "./src/assets/voice/4.mp3")],
      catText: ["铲屎的，我饿了", "主人陪我玩一下嘛", "摸摸我吧", "主人求抱抱", "我想吃零食了", "我要玩具"]
    }); // 音频播放

    var innerAudioContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.createInnerAudioContext();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setInnerAudioOption({
      obeyMuteSwitch: false
    });

    var playVoice = function playVoice() {
      if (!state.msg.length) {
        state.msg2 = "输入想对喵喵说的话";
        state.show = true;
        return;
      }

      var tempFilePath = "";

      if (state.msg.length < 5) {
        tempFilePath = state.voice[Math.round(Math.random() * 2)];
      } else {
        tempFilePath = state.voice[3];
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.playVoice({
        filePath: tempFilePath,
        complete: function complete() {
          state.msg2 = "播放完成";
          state.show = true;
        }
      });
    };

    var action = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])(0);

    var tabSwitch = function tabSwitch(val) {
      action.value = val.index;
    }; // 录音


    var msg3 = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])("开始录音");
    var recording = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])(false);
    var recordSrc = "";
    var recordDuration = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])(0);
    var recordText = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ "l"])("");
    var recorderManager = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getRecorderManager();
    recorderManager.onStart(function () {
      console.log("recorder start");
    });
    recorderManager.onStop(function (res) {
      console.log("recorder stop", res);
      var tempFilePath = res.tempFilePath,
          duration = res.duration;
      innerAudioContext.src = recordSrc = tempFilePath;
      innerAudioContext.play();
      recordDuration.value = Math.ceil(duration / 1000);
      recordText.value = state.catText[Math.round(Math.random() * 6)];
    });

    var handleRecord = function handleRecord() {// if (!recording.value) {
      //     msg3.value = "录音中，点击停止";
      //     recordText.value = "";
      //     recording.value = true;
      //     recorderManager.start();
      // } else {
      //     recorderManager.stop();
      //     msg3.value = "开始录音";
      //     recording.value = false;
      // }
    };

    var playRecordSrc = function playRecordSrc() {
      innerAudioContext.src = recordSrc;
      innerAudioContext.play();
    };

    var handleLongpress = function handleLongpress() {
      console.log(123123);

      if (!recording.value) {
        msg3.value = "录音中，点击停止";
        recordText.value = "";
        recording.value = true;
        recorderManager.start();
      } else {
        recorderManager.stop();
        msg3.value = "开始录音";
        recording.value = false;
      }
    };

    var touchEnd = function touchEnd() {
      console.log("end");
      recorderManager.stop();
      msg3.value = "开始录音";
      recording.value = false;
    };

    return Object(D_project_test_catApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(D_project_test_catApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ "r"])(state)), {}, {
      playVoice: playVoice,
      action: action,
      tabSwitch: tabSwitch,
      msg3: msg3,
      recording: recording,
      recordDuration: recordDuration,
      recordText: recordText,
      handleRecord: handleRecord,
      playRecordSrc: playRecordSrc,
      handleLongpress: handleLongpress,
      touchEnd: touchEnd
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _assets_imgs_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/imgs/banner.jpg */ "./src/assets/imgs/banner.jpg");
/* harmony import */ var _assets_imgs_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_banner_jpg__WEBPACK_IMPORTED_MODULE_2__);


var _hoisted_1 = {
  class: "index"
};
var _hoisted_2 = {
  class: "header"
};

var _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("image", {
  class: "banner",
  mode: "aspectFill",
  src: _assets_imgs_banner_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  class: "mask"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  class: "userinfo"
};

var _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", {
  class: "userinfo-text"
}, "胖虎", -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 0,
  class: "main-index"
};

var _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  style: {
    "margin-bottom": "10px"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", {
  class: "main-title"
}, "转成喵语")], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "k"])("转换并播放 ");

var _hoisted_10 = {
  key: 1,
  class: "main-index"
};

var _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  style: {
    "margin-bottom": "10px"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", {
  class: "main-title"
}, "翻译喵语")], -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  class: "voice-view mgt20 voice-view-text"
};
var _hoisted_14 = {
  key: 2,
  class: "main-index"
};

var _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  style: {
    "margin-bottom": "10px"
  }
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", {
  class: "main-title"
}, "个人中心")], -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_15];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_avatar = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-avatar");

  var _component_nut_input = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-input");

  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-button");

  var _component_nut_toast = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-toast");

  var _component_nut_tabbar_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-tabbar-item");

  var _component_nut_tabbar = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "B"])("nut-tabbar");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "y"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_2, [_hoisted_3, _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_avatar, {
    size: "large",
    icon: "https://lin-xin.gitee.io/images/linxin.jpg"
  }), _hoisted_6])]), $setup.action === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "y"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_7, [_hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_input, {
    placeholder: "输入想对喵喵说的话",
    label: "铲屎官:",
    modelValue: _ctx.msg,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.msg = $event;
    }),
    clearable: "",
    "max-length": "10"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_button, {
    class: "main-btn mgt20",
    block: "",
    type: "info",
    onClick: $setup.playVoice
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "J"])(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])) : $setup.action === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "y"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_10, [_hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_button, {
    class: "main-btn mgt20",
    block: "",
    type: "info",
    icon: "microphone",
    onLongpress: $setup.handleLongpress,
    onTouchend: $setup.touchEnd
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "J"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "L"])($setup.msg3), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onLongpress", "onTouchend"]), !$setup.recording && $setup.recordText ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "y"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
    class: "voice-view mgt20",
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.playRecordSrc && $setup.playRecordSrc.apply($setup, arguments);
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "L"])($setup.recordDuration) + "''", 1
  /* TEXT */
  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("text", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "L"])($setup.recordText), 1
  /* TEXT */
  )])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "f"])("v-if", true)])) : $setup.action === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "y"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_14, _hoisted_16)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "f"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_toast, {
    msg: _ctx.msg2,
    visible: _ctx.show,
    "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.show = $event;
    }),
    type: _ctx.type,
    cover: _ctx.cover
  }, null, 8
  /* PROPS */
  , ["msg", "visible", "type", "cover"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_tabbar, {
    "unactive-color": "#7d7e80",
    "active-color": "#1989fa",
    bottom: true,
    onTabSwitch: $setup.tabSwitch
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "J"])(function () {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_tabbar_item, {
        "tab-title": "首页",
        icon: "home",
        key: "home"
      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_tabbar_item, {
        "tab-title": "喵语",
        icon: "service",
        key: "service"
      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_tabbar_item, {
        "tab-title": "我的",
        icon: "my2",
        key: "my2"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onTabSwitch"])]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    for (const [key, val] of props) {
        sfc[key] = val;
    }
    return sfc;
};


/***/ }),

/***/ "./src/assets/imgs/banner.jpg":
/*!************************************!*\
  !*** ./src/assets/imgs/banner.jpg ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/imgs/banner.jpg";

/***/ }),

/***/ "./src/assets/voice/1.mp3":
/*!********************************!*\
  !*** ./src/assets/voice/1.mp3 ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/voice/1.mp3";

/***/ }),

/***/ "./src/assets/voice/2.mp3":
/*!********************************!*\
  !*** ./src/assets/voice/2.mp3 ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/voice/2.mp3";

/***/ }),

/***/ "./src/assets/voice/3.mp3":
/*!********************************!*\
  !*** ./src/assets/voice/3.mp3 ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/voice/3.mp3";

/***/ }),

/***/ "./src/assets/voice/4.mp3":
/*!********************************!*\
  !*** ./src/assets/voice/4.mp3 ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/voice/4.mp3";

/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!********************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!*****************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \*****************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=1badc801 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/index/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map