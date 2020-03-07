//
//
//
//
//
//

var NAME = 'vvl-button';

var script = {
  name: NAME,
  props: {
    variant: {
      type: String,
      default: 'primary',
      required: false,
      validator: function (value) { return ['primary', 'secondary']; }
    },
    hover: {
      type: Boolean,
      default: false,
      required: false
    },
    size: {
      type: String,
      default: 'regular',
      required: false,
      validator: function (value) { return ['regular', 'small'].includes(value); }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:(_vm.variant + " " + _vm.size + " " + (_vm.hover ? 'hover' : '')),attrs:{"disabled":_vm.disabled}},[_c('span',[_vm._t("default",[_vm._v("Button")])],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-0d71326d";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var NAME$1 = 'vvl-card';
var script$1 = {
  name: NAME$1,
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:("" + (_vm.hover ? 'hover' : ''))},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = "data-v-a96391e0";
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var NAME$2 = 'vvl-pill';

var script$2 = {
  name: NAME$2,
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'regular'
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"pill",class:("" + _vm.variant)},[_vm._t("default")],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = "data-v-36af9d10";
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//

var NAME$3 = 'vvl-checkmark';

var script$3 = {
  name: NAME$3,
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"checkmark",class:{ 'checkmark-done': _vm.checked },attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 52 52"}},[_c('circle',{staticClass:"checkmark__circle",attrs:{"cx":"26","cy":"26","r":"25","fill":"none"}}),_vm._v(" "),(_vm.checked)?_c('path',{staticClass:"checkmark__check",attrs:{"fill":"none","d":"M14.1 27.2l7.1 7.2 16.7-16.8"}}):_vm._e()])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = "data-v-508387dd";
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$3 = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//

var NAME$4 = 'vvl-checklist-row';

var script$4 = {
  name: NAME$4,
  components: {
    VvlCheckmark: __vue_component__$3
  },
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"checklist-item"},[_c('vvl-checkmark',{staticClass:"checklist--checkmark",attrs:{"checked":_vm.checked}}),_vm._v(" "),_c('span',{staticClass:"checklist-item--text",class:{ 'checklist-item--text-complete': _vm.checked }},[_vm._t("default")],2)],1)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = "data-v-659adf9e";
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$4 = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//

var NAME$5 = 'vvl-checklist';

var script$5 = {
  name: NAME$5,
  components: {
    VvlChecklistRow: __vue_component__$4
  },
  props: {
    items: {
      type: Array,
      default: function () { return []; }
    },
    checked: {
      type: Array,
      default: function () { return []; }
    }
  },
  methods: {
    check: function check(index) {
      var checkedItems = this.isChecked(index)
        ? this.checked.filter(function (item) { return item !== index; })
        : ( this.checked ).concat( [index]);

      this.$emit('check', checkedItems);
    },
    isChecked: function isChecked(index) {
      return this.checked.includes(index)
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',_vm._l((_vm.items),function(item,index){return _c('vvl-checklist-row',{key:index,staticClass:"checklist--row",attrs:{"checked":_vm.isChecked(index)},nativeOn:{"click":function($event){return _vm.check(index)}}},[_vm._v(_vm._s(item))])}),1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = "data-v-d7c1067e";
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$5 = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VvlButton: __vue_component__,
  VvlCard: __vue_component__$1,
  VvlPill: __vue_component__$2,
  VvlChecklist: __vue_component__$5
});

// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// To auto-install when vue is found
// global window global
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export { __vue_component__ as VvlButton, __vue_component__$1 as VvlCard, __vue_component__$5 as VvlChecklist, __vue_component__$2 as VvlPill };
