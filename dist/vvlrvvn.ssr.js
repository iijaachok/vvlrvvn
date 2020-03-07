'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        { return function () { }; }
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: function () { return context._renderStyles(context._styles); }
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return function (id, style) { return addStyle(id, style, context); };
}
function addStyle(id, css, context) {
    var group =  css.media || 'default' ;
    var style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        var code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    var css = '';
    for (var key in styles) {
        var style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:(_vm.variant + " " + _vm.size + " " + (_vm.hover ? 'hover' : '')),attrs:{"disabled":_vm.disabled}},[_vm._ssrNode("<span>","</span>",[_vm._t("default",[_vm._v("Button")])],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-0d71326d_0", { source: ".btn[data-v-0d71326d]{position:relative;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;outline:0;user-select:none;-webkit-tap-highlight-color:transparent;padding:var(--button-padding-vertical) var(--button-padding-horizontal);border-radius:var(--border-radius-small);transition:background var(--background-transition),color var(--color-transition),box-shadow var(--shadow-transition),border var(--color-transition),transform var(--transform-transition)}.btn[data-v-0d71326d]:disabled{cursor:not-allowed;color:var(--shade-color-2);border:1px solid var(--shade-color-1);background-color:var(--shade-color-1)}.btn.primary[data-v-0d71326d]:not(:disabled){color:var(--secondary-color);background-color:var(--primary-color);border:1px solid var(--primary-color)}.btn.primary[data-v-0d71326d]:hover:not(:disabled){color:var(--primary-color);background-color:var(--secondary-color)}.btn.primary[data-v-0d71326d]:active:not(:disabled){background-color:var(--shade-color-1)}.btn.secondary[data-v-0d71326d]:not(:disabled){color:var(--shade-color-2);background-color:var(--secondary-color);border:1px solid var(--shade-color-1)}.btn.secondary[data-v-0d71326d]:hover:not(:disabled){color:var(--primary-color);border:1px solid var(--primary-color)}.btn.secondary[data-v-0d71326d]:active:not(:disabled){background-color:var(--shade-color-1)}.btn.hover[data-v-0d71326d]{box-shadow:var(--shadow-small);border:1px solid transparent}.btn.hover[data-v-0d71326d]:hover:not(:disabled){transform:var(--translate-raise-small);box-shadow:var(--shadow-medium);border:1px solid transparent}.btn.hover.primary[data-v-0d71326d]:hover:not(:disabled){color:var(--secondary-color);background-color:var(--primary-color)}.btn.hover.primary[data-v-0d71326d]:active:not(:disabled){color:var(--primary-color);background-color:var(--shade-color-1);border-color:var(--primary-color)}.btn.hover.secondary[data-v-0d71326d]:hover:not(:disabled){color:var(--primary-color);background-color:var(--secondary-color)}.btn.hover.secondary[data-v-0d71326d]:active:not(:disabled){color:var(--primary-color);background-color:var(--shade-color-1);border-color:var(--primary-color)}.btn.small[data-v-0d71326d]{font-size:var(--font-size-small);padding:var(--button-padding-vertical-small) var(--button-padding-horizontal-small)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-0d71326d";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-0d71326d";
  /* functional template */
  var __vue_is_functional_template__ = false;
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
    createInjectorSSR,
    undefined
  );//
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
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:("" + (_vm.hover ? 'hover' : ''))},[_vm._t("default")],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-a96391e0_0", { source: ".card[data-v-a96391e0]{box-shadow:var(--shadow-small);border-radius:var(--border-radius-small);border:1px solid var(--shade-color-1);transition:box-shadow var(--shadow-transition),transform var(--transform-transition)}.card.hover[data-v-a96391e0]{box-shadow:var(--shadow-small);border:1px solid transparent}.card.hover[data-v-a96391e0]:hover:not(:disabled){transform:var(--translate-raise-small);box-shadow:var(--shadow-medium)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-a96391e0";
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-a96391e0";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
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
    createInjectorSSR,
    undefined
  );//
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
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"pill",class:("" + _vm.variant)},[_vm._t("default")],2)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = function (inject) {
    if (!inject) { return }
    inject("data-v-36af9d10_0", { source: ".pill[data-v-36af9d10]{display:inline-block;vertical-align:middle;line-height:var(--font-size-smaller);font-size:var(--font-size-smaller);border-radius:var(--pill-border-radius);padding:var(--pill-padding-vertical) var(--pill-padding-horizontal);border:1px solid transparent}.pill.primary[data-v-36af9d10]{color:var(--secondary-color);background-color:var(--primary-color)}.pill.secondary[data-v-36af9d10]{color:var(--primary-color);border-color:var(--primary-color);background-color:var(--secondary-color)}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$2 = "data-v-36af9d10";
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-36af9d10";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
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
    createInjectorSSR,
    undefined
  );//
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
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"checkmark",class:{ 'checkmark-done': _vm.checked },attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 52 52"}},[_vm._ssrNode("<circle cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\" class=\"checkmark__circle\"></circle> "+((_vm.checked)?("<path fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\" class=\"checkmark__check\"></path>"):"<!---->"))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = function (inject) {
    if (!inject) { return }
    inject("data-v-508387dd_0", { source: ".checkmark[data-v-508387dd]{width:var(--icon-size);height:100%;border-radius:50%;display:inline-block;stroke-width:5;stroke:inherit;stroke-miterlimit:10}.checkmark-done[data-v-508387dd]{animation:ease-in-out .2s forwards,scale-data-v-508387dd .3s ease-in-out .1s both}.checkmark__circle[data-v-508387dd]{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:5;stroke-miterlimit:10;animation:stroke-data-v-508387dd .8s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check[data-v-508387dd]{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:stroke-data-v-508387dd .3s cubic-bezier(.65,0,.45,1) .3s forwards}@keyframes stroke-data-v-508387dd{100%{stroke-dashoffset:0}}@keyframes scale-data-v-508387dd{0%,100%{transform:none}30%{transform:scale3d(1.2,1.2,0)}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$3 = "data-v-508387dd";
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-508387dd";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
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
    createInjectorSSR,
    undefined
  );//
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
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"checklist-item"},[_c('vvl-checkmark',{staticClass:"checklist--checkmark",attrs:{"checked":_vm.checked}}),_vm._ssrNode(" "),_vm._ssrNode("<span"+(_vm._ssrClass("checklist-item--text",{ 'checklist-item--text-complete': _vm.checked }))+">","</span>",[_vm._t("default")],2)],2)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = function (inject) {
    if (!inject) { return }
    inject("data-v-659adf9e_0", { source: ".checklist-item[data-v-659adf9e]{cursor:pointer}.checklist-item--text[data-v-659adf9e]{vertical-align:middle}.checklist-item--text-complete[data-v-659adf9e]{color:var(--shade-color-2)}.checklist--checkmark[data-v-659adf9e]{stroke:var(--danger-color);margin-right:var(--icon-spacing);vertical-align:middle}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$4 = "data-v-659adf9e";
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-659adf9e";
  /* functional template */
  var __vue_is_functional_template__$4 = false;
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
    createInjectorSSR,
    undefined
  );//
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
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',_vm._l((_vm.items),function(item,index){return _c('vvl-checklist-row',{key:index,staticClass:"checklist--row",attrs:{"checked":_vm.isChecked(index)},nativeOn:{"click":function($event){return _vm.check(index)}}},[_vm._v(_vm._s(item))])}),1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = function (inject) {
    if (!inject) { return }
    inject("data-v-d7c1067e_0", { source: ".checklist--row[data-v-d7c1067e]{margin-top:var(--list-margin-vertical)}.checklist--row[data-v-d7c1067e]:first-child{margin-top:0}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$5 = "data-v-d7c1067e";
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-d7c1067e";
  /* functional template */
  var __vue_is_functional_template__$5 = false;
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
    createInjectorSSR,
    undefined
  );var components=/*#__PURE__*/Object.freeze({__proto__:null,VvlButton: __vue_component__,VvlCard: __vue_component__$1,VvlPill: __vue_component__$2,VvlChecklist: __vue_component__$5});// Import vue components

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
}exports.VvlButton=__vue_component__;exports.VvlCard=__vue_component__$1;exports.VvlChecklist=__vue_component__$5;exports.VvlPill=__vue_component__$2;exports.default=plugin;