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
    }
  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) { ref = {}; }
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".btn[data-v-e4134fce]{position:relative;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;outline:0;padding:var(--button-padding-vertical) var(--button-padding-horizontal);border-radius:var(--border-radius-small);color:var(--secondary-color);background-color:var(--primary-color);border:1px solid var(--primary-color);font-size:inherit;line-height:inherit;transition:background var(--background-transition),color var(--color-transition),box-shadow var(--shadow-transition),border var(--color-transition),transform var(--transform-transition)}.btn[data-v-e4134fce]:hover{color:var(--primary-color);background:var(--secondary-color)}.btn[data-v-e4134fce]:active{background:var(--shade-color-1)}.btn.secondary[data-v-e4134fce]{color:var(--shade-color-2);border:1px solid var(--shade-color-1);background-color:var(--secondary-color)}.btn.secondary[data-v-e4134fce]:hover{color:var(--primary-color);border:1px solid var(--primary-color)}.btn.hover[data-v-e4134fce]{box-shadow:var(--shadow-small);border:1px solid transparent}.btn.hover[data-v-e4134fce]:hover{transform:var(--translate-raise-small);box-shadow:var(--shadow-medium);border:1px solid transparent}.btn.hover.primary[data-v-e4134fce]:hover{color:var(--secondary-color);background-color:var(--primary-color)}.btn.hover.secondary[data-v-e4134fce]:hover{color:var(--primary-color);background-color:var(--secondary-color)}.btn.small[data-v-e4134fce]{font-size:var(--font-size-small);padding:var(--button-padding-vertical-small) var(--button-padding-horizontal-small)}";
styleInject(css);

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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:(_vm.variant + " " + _vm.size + " " + (_vm.hover ? 'hover' : ''))},[_c('span',[_vm._t("default",[_vm._v("Button")])],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-e4134fce";
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
  name: NAME$1
};

var css$1 = ".card[data-v-b50f163a]{box-shadow:var(--shadow-small);border-radius:var(--border-radius-small)}";
styleInject(css$1);

/* script */
var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = "data-v-b50f163a";
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



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VvlButton: __vue_component__,
  VvlCard: __vue_component__$1
});

var css$2 = ":root {\n    --primary-color: #000000;\n    --secondary-color: #FFFFFF;\n    --shade-color-3: #333333;\n    --shade-color-2: #666666;\n    --shade-color-1: #EAEAEA;\n}";
styleInject(css$2);

var css$3 = ":root {\n    --font-size-small: 0.875rem;\n}";
styleInject(css$3);

var css$4 = ":root {\n    --border-radius-small: 0.2625rem;\n\n    /* button */\n    --button-md-min-width: 8rem;\n\n    --button-padding-vertical: 0.65rem;\n    --button-padding-horizontal: 1rem;\n\n    --button-padding-vertical-small: .25rem;\n    --button-padding-horizontal-small: .75rem;\n\n    /* animation duration */\n\n    --background-transition: 0.15s ease;\n    --color-transition: 0.15s ease;\n    --shadow-transition: 0.15s ease;\n    --transform-transition: 0.25s ease;\n}";
styleInject(css$4);

var css$5 = ":root {\n    --shadow-small: 0 4px 12px rgba(0,0,0,.1);\n    --shadow-medium: 0 8px 30px rgba(0,0,0,.1);\n}";
styleInject(css$5);

var css$6 = ":root {\n    --translate-raise-small: translate3d(0px, -1px, 0px);\n}";
styleInject(css$6);

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
export { __vue_component__ as VvlButton, __vue_component__$1 as VvlCard };
