/*** IMPORTS FROM imports-loader ***/
var React = require("react");

// 0.21.2
// from https://github.com/react-bootstrap/react-bootstrap/releases
//
// when updating, replace:
// var React =  define(['react'], factory)
// with:
// var React = define(['react'], factory)
//
// Update all instances of css classes with the prefix of 'bt3-'
// TODO: split into individual react components
//
(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("react"), require("react-dom"));
    else if(typeof define === 'function' && define.amd)
        define(["react", "react-dom"], factory);
    else if(typeof exports === 'object')
        exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
    else
        root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_66__) {
return /******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};

/******/    // The require function
/******/    function __webpack_require__(moduleId) {

/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;

/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            exports: {},
/******/            id: moduleId,
/******/            loaded: false
/******/        };

/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/        // Flag the module as loaded
/******/        module.loaded = true;

/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }


/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;

/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;

/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";

/******/    // Load entry module and return exports
/******/    return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Accordion = __webpack_require__(2);

    var _Accordion2 = _interopRequireDefault(_Accordion);

    var _Affix = __webpack_require__(3);

    var _Affix2 = _interopRequireDefault(_Affix);

    var _AffixMixin = __webpack_require__(4);

    var _AffixMixin2 = _interopRequireDefault(_AffixMixin);

    var _Alert = __webpack_require__(5);

    var _Alert2 = _interopRequireDefault(_Alert);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _Badge = __webpack_require__(7);

    var _Badge2 = _interopRequireDefault(_Badge);

    var _Button = __webpack_require__(8);

    var _Button2 = _interopRequireDefault(_Button);

    var _ButtonGroup = __webpack_require__(9);

    var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

    var _ButtonToolbar = __webpack_require__(10);

    var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

    var _CollapsableNav = __webpack_require__(11);

    var _CollapsableNav2 = _interopRequireDefault(_CollapsableNav);

    var _CollapsibleNav = __webpack_require__(12);

    var _CollapsibleNav2 = _interopRequireDefault(_CollapsibleNav);

    var _Carousel = __webpack_require__(13);

    var _Carousel2 = _interopRequireDefault(_Carousel);

    var _CarouselItem = __webpack_require__(14);

    var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

    var _Col = __webpack_require__(15);

    var _Col2 = _interopRequireDefault(_Col);

    var _CollapsableMixin = __webpack_require__(16);

    var _CollapsableMixin2 = _interopRequireDefault(_CollapsableMixin);

    var _CollapsibleMixin = __webpack_require__(17);

    var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

    var _DropdownButton = __webpack_require__(18);

    var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

    var _DropdownMenu = __webpack_require__(19);

    var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

    var _DropdownStateMixin = __webpack_require__(20);

    var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

    var _FadeMixin = __webpack_require__(21);

    var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

    var _Glyphicon = __webpack_require__(22);

    var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

    var _Grid = __webpack_require__(23);

    var _Grid2 = _interopRequireDefault(_Grid);

    var _Input = __webpack_require__(24);

    var _Input2 = _interopRequireDefault(_Input);

    var _Interpolate = __webpack_require__(25);

    var _Interpolate2 = _interopRequireDefault(_Interpolate);

    var _Jumbotron = __webpack_require__(26);

    var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

    var _Label = __webpack_require__(27);

    var _Label2 = _interopRequireDefault(_Label);

    var _ListGroup = __webpack_require__(33);

    var _ListGroup2 = _interopRequireDefault(_ListGroup);

    var _ListGroupItem = __webpack_require__(28);

    var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

    var _MenuItem = __webpack_require__(29);

    var _MenuItem2 = _interopRequireDefault(_MenuItem);

    var _Modal = __webpack_require__(30);

    var _Modal2 = _interopRequireDefault(_Modal);

    var _Nav = __webpack_require__(31);

    var _Nav2 = _interopRequireDefault(_Nav);

    var _Navbar = __webpack_require__(32);

    var _Navbar2 = _interopRequireDefault(_Navbar);

    var _NavItem = __webpack_require__(1);

    var _NavItem2 = _interopRequireDefault(_NavItem);

    var _ModalTrigger = __webpack_require__(34);

    var _ModalTrigger2 = _interopRequireDefault(_ModalTrigger);

    var _OverlayTrigger = __webpack_require__(35);

    var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

    var _OverlayMixin = __webpack_require__(36);

    var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

    var _PageHeader = __webpack_require__(37);

    var _PageHeader2 = _interopRequireDefault(_PageHeader);

    var _Panel = __webpack_require__(38);

    var _Panel2 = _interopRequireDefault(_Panel);

    var _PanelGroup = __webpack_require__(39);

    var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

    var _PageItem = __webpack_require__(40);

    var _PageItem2 = _interopRequireDefault(_PageItem);

    var _Pager = __webpack_require__(41);

    var _Pager2 = _interopRequireDefault(_Pager);

    var _Popover = __webpack_require__(42);

    var _Popover2 = _interopRequireDefault(_Popover);

    var _ProgressBar = __webpack_require__(43);

    var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

    var _Row = __webpack_require__(44);

    var _Row2 = _interopRequireDefault(_Row);

    var _SplitButton = __webpack_require__(45);

    var _SplitButton2 = _interopRequireDefault(_SplitButton);

    var _SubNav = __webpack_require__(46);

    var _SubNav2 = _interopRequireDefault(_SubNav);

    var _TabbedArea = __webpack_require__(47);

    var _TabbedArea2 = _interopRequireDefault(_TabbedArea);

    var _Table = __webpack_require__(48);

    var _Table2 = _interopRequireDefault(_Table);

    var _TabPane = __webpack_require__(49);

    var _TabPane2 = _interopRequireDefault(_TabPane);

    var _Tooltip = __webpack_require__(50);

    var _Tooltip2 = _interopRequireDefault(_Tooltip);

    var _Well = __webpack_require__(51);

    var _Well2 = _interopRequireDefault(_Well);

    var _styleMaps = __webpack_require__(52);

    var _styleMaps2 = _interopRequireDefault(_styleMaps);

    exports['default'] = {
      Accordion: _Accordion2['default'],
      Affix: _Affix2['default'],
      AffixMixin: _AffixMixin2['default'],
      Alert: _Alert2['default'],
      BootstrapMixin: _BootstrapMixin2['default'],
      Badge: _Badge2['default'],
      Button: _Button2['default'],
      ButtonGroup: _ButtonGroup2['default'],
      ButtonToolbar: _ButtonToolbar2['default'],
      CollapsableNav: _CollapsableNav2['default'],
      CollapsibleNav: _CollapsibleNav2['default'],
      Carousel: _Carousel2['default'],
      CarouselItem: _CarouselItem2['default'],
      Col: _Col2['default'],
      CollapsableMixin: _CollapsableMixin2['default'],
      CollapsibleMixin: _CollapsibleMixin2['default'],
      DropdownButton: _DropdownButton2['default'],
      DropdownMenu: _DropdownMenu2['default'],
      DropdownStateMixin: _DropdownStateMixin2['default'],
      FadeMixin: _FadeMixin2['default'],
      Glyphicon: _Glyphicon2['default'],
      Grid: _Grid2['default'],
      Input: _Input2['default'],
      Interpolate: _Interpolate2['default'],
      Jumbotron: _Jumbotron2['default'],
      Label: _Label2['default'],
      ListGroup: _ListGroup2['default'],
      ListGroupItem: _ListGroupItem2['default'],
      MenuItem: _MenuItem2['default'],
      Modal: _Modal2['default'],
      Nav: _Nav2['default'],
      Navbar: _Navbar2['default'],
      NavItem: _NavItem2['default'],
      ModalTrigger: _ModalTrigger2['default'],
      OverlayTrigger: _OverlayTrigger2['default'],
      OverlayMixin: _OverlayMixin2['default'],
      PageHeader: _PageHeader2['default'],
      Panel: _Panel2['default'],
      PanelGroup: _PanelGroup2['default'],
      PageItem: _PageItem2['default'],
      Pager: _Pager2['default'],
      Popover: _Popover2['default'],
      ProgressBar: _ProgressBar2['default'],
      Row: _Row2['default'],
      SplitButton: _SplitButton2['default'],
      SubNav: _SubNav2['default'],
      TabbedArea: _TabbedArea2['default'],
      Table: _Table2['default'],
      TabPane: _TabPane2['default'],
      Tooltip: _Tooltip2['default'],
      Well: _Well2['default'],
      styleMaps: _styleMaps2['default']
    };
    module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var NavItem = _react2['default'].createClass({
      displayName: 'NavItem',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        onSelect: _react2['default'].PropTypes.func,
        active: _react2['default'].PropTypes.bool,
        disabled: _react2['default'].PropTypes.bool,
        href: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.node,
        eventKey: _react2['default'].PropTypes.any,
        target: _react2['default'].PropTypes.string
      },

      getDefaultProps: function getDefaultProps() {
        return {
          href: '#'
        };
      },

      render: function render() {
        var _props = this.props;
        var disabled = _props.disabled;
        var active = _props.active;
        var href = _props.href;
        var title = _props.title;
        var target = _props.target;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['disabled', 'active', 'href', 'title', 'target', 'children']);

        var classes = {
          'bt3-active': active,
          'bt3-disabled': disabled
        };
        var linkProps = {
          href: href,
          title: title,
          target: target,
          onClick: this.handleClick,
          ref: 'anchor'
        };

        if (href === '#') {
          linkProps.role = 'button';
        }

        return _react2['default'].createElement(
          'li',
          _extends({}, props, { className: _classnames2['default'](props.className, classes) }),
          _react2['default'].createElement(
            'a',
            linkProps,
            children
          )
        );
      },

      handleClick: function handleClick(e) {
        if (this.props.onSelect) {
          e.preventDefault();

          if (!this.props.disabled) {
            this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
          }
        }
      }
    });

    exports['default'] = NavItem;
    module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _PanelGroup = __webpack_require__(39);

    var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

    var Accordion = _react2['default'].createClass({
      displayName: 'Accordion',

      render: function render() {
        return _react2['default'].createElement(
          _PanelGroup2['default'],
          _extends({}, this.props, { accordion: true }),
          this.props.children
        );
      }
    });

    exports['default'] = Accordion;
    module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _AffixMixin = __webpack_require__(4);

    var _AffixMixin2 = _interopRequireDefault(_AffixMixin);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var Affix = _react2['default'].createClass({
      displayName: 'Affix',

      statics: {
        domUtils: _utilsDomUtils2['default']
      },

      mixins: [_AffixMixin2['default']],

      render: function render() {
        var holderStyle = { top: this.state.affixPositionTop };

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, this.state.affixClass),
            style: holderStyle }),
          this.props.children
        );
      }
    });

    exports['default'] = Affix;
    module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsEventListener = __webpack_require__(57);

    var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

    var AffixMixin = {
      propTypes: {
        offset: _react2['default'].PropTypes.number,
        offsetTop: _react2['default'].PropTypes.number,
        offsetBottom: _react2['default'].PropTypes.number
      },

      getInitialState: function getInitialState() {
        return {
          affixClass: 'affix-top'
        };
      },

      getPinnedOffset: function getPinnedOffset(DOMNode) {
        if (this.pinnedOffset) {
          return this.pinnedOffset;
        }

        DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, '');
        DOMNode.className += DOMNode.className.length ? ' affix' : 'affix';

        this.pinnedOffset = _utilsDomUtils2['default'].getOffset(DOMNode).top - window.pageYOffset;

        return this.pinnedOffset;
      },

      checkPosition: function checkPosition() {
        var DOMNode = undefined,
            scrollHeight = undefined,
            scrollTop = undefined,
            position = undefined,
            offsetTop = undefined,
            offsetBottom = undefined,
            affix = undefined,
            affixType = undefined,
            affixPositionTop = undefined;

        // TODO: or not visible
        if (!this.isMounted()) {
          return;
        }

        DOMNode = _reactDom2['default'].findDOMNode(this);
        scrollHeight = document.documentElement.offsetHeight;
        scrollTop = window.pageYOffset;
        position = _utilsDomUtils2['default'].getOffset(DOMNode);

        if (this.affixed === 'top') {
          position.top += scrollTop;
        }

        offsetTop = this.props.offsetTop != null ? this.props.offsetTop : this.props.offset;
        offsetBottom = this.props.offsetBottom != null ? this.props.offsetBottom : this.props.offset;

        if (offsetTop == null && offsetBottom == null) {
          return;
        }
        if (offsetTop == null) {
          offsetTop = 0;
        }
        if (offsetBottom == null) {
          offsetBottom = 0;
        }

        if (this.unpin != null && scrollTop + this.unpin <= position.top) {
          affix = false;
        } else if (offsetBottom != null && position.top + DOMNode.offsetHeight >= scrollHeight - offsetBottom) {
          affix = 'bottom';
        } else if (offsetTop != null && scrollTop <= offsetTop) {
          affix = 'top';
        } else {
          affix = false;
        }

        if (this.affixed === affix) {
          return;
        }

        if (this.unpin != null) {
          DOMNode.style.top = '';
        }

        affixType = 'affix' + (affix ? '-' + affix : '');

        this.affixed = affix;
        this.unpin = affix === 'bottom' ? this.getPinnedOffset(DOMNode) : null;

        if (affix === 'bottom') {
          DOMNode.className = DOMNode.className.replace(/affix-top|affix-bottom|affix/, 'affix-bottom');
          affixPositionTop = scrollHeight - offsetBottom - DOMNode.offsetHeight - _utilsDomUtils2['default'].getOffset(DOMNode).top;
        }

        this.setState({
          affixClass: affixType,
          affixPositionTop: affixPositionTop
        });
      },

      checkPositionWithEventLoop: function checkPositionWithEventLoop() {
        setTimeout(this.checkPosition, 0);
      },

      componentDidMount: function componentDidMount() {
        this._onWindowScrollListener = _utilsEventListener2['default'].listen(window, 'scroll', this.checkPosition);
        this._onDocumentClickListener = _utilsEventListener2['default'].listen(_utilsDomUtils2['default'].ownerDocument(this), 'click', this.checkPositionWithEventLoop);
      },

      componentWillUnmount: function componentWillUnmount() {
        if (this._onWindowScrollListener) {
          this._onWindowScrollListener.remove();
        }

        if (this._onDocumentClickListener) {
          this._onDocumentClickListener.remove();
        }
      },

      componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        if (prevState.affixClass === this.state.affixClass) {
          this.checkPositionWithEventLoop();
        }
      }
    };

    exports['default'] = AffixMixin;
    module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var Alert = _react2['default'].createClass({
      displayName: 'Alert',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        onDismiss: _react2['default'].PropTypes.func,
        dismissAfter: _react2['default'].PropTypes.number
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'alert',
          bsStyle: 'info'
        };
      },

      renderDismissButton: function renderDismissButton() {
        return _react2['default'].createElement(
          'button',
          {
            type: 'button',
            className: 'close',
            onClick: this.props.onDismiss,
            'aria-hidden': 'true' },
          '×'
        );
      },

      render: function render() {
        var classes = this.getBsClassSet();
        var isDismissable = !!this.props.onDismiss;

        classes['bt3-alert-dismissable'] = isDismissable;

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          isDismissable ? this.renderDismissButton() : null,
          this.props.children
        );
      },

      componentDidMount: function componentDidMount() {
        if (this.props.dismissAfter && this.props.onDismiss) {
          this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
        }
      },

      componentWillUnmount: function componentWillUnmount() {
        clearTimeout(this.dismissTimer);
      }
    });

    exports['default'] = Alert;
    module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _styleMaps = __webpack_require__(52);

    var _styleMaps2 = _interopRequireDefault(_styleMaps);

    var _utilsCustomPropTypes = __webpack_require__(56);

    var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

    var BootstrapMixin = {
      propTypes: {
        bsClass: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].CLASSES),
        bsStyle: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].STYLES),
        bsSize: _utilsCustomPropTypes2['default'].keyOf(_styleMaps2['default'].SIZES)
      },

      getBsClassSet: function getBsClassSet() {
        var classes = {};

        var bsClass = this.props.bsClass && _styleMaps2['default'].CLASSES[this.props.bsClass];
        if (bsClass) {
          classes[bsClass] = true;

          var prefix = bsClass + '-';

          var bsSize = this.props.bsSize && _styleMaps2['default'].SIZES[this.props.bsSize];
          if (bsSize) {
            classes[prefix + bsSize] = true;
          }

          var bsStyle = this.props.bsStyle && _styleMaps2['default'].STYLES[this.props.bsStyle];
          if (this.props.bsStyle) {
            classes[prefix + bsStyle] = true;
          }
        }

        return classes;
      },

      prefixClass: function prefixClass(subClass) {
        return _styleMaps2['default'].CLASSES[this.props.bsClass] + '-' + subClass;
      }
    };

    exports['default'] = BootstrapMixin;
    module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var Badge = _react2['default'].createClass({
      displayName: 'Badge',

      propTypes: {
        pullRight: _react2['default'].PropTypes.bool
      },

      hasContent: function hasContent() {
        return _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || _react2['default'].Children.count(this.props.children) > 1 || typeof this.props.children === 'string' || typeof this.props.children === 'number';
      },

      render: function render() {
        var classes = {
          'bt3-pull-right': this.props.pullRight,
          'bt3-badge': this.hasContent()
        };
        return _react2['default'].createElement(
          'span',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = Badge;
    module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var Button = _react2['default'].createClass({
      displayName: 'Button',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        active: _react2['default'].PropTypes.bool,
        disabled: _react2['default'].PropTypes.bool,
        block: _react2['default'].PropTypes.bool,
        navItem: _react2['default'].PropTypes.bool,
        navDropdown: _react2['default'].PropTypes.bool,
        componentClass: _react2['default'].PropTypes.node,
        href: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'button',
          bsStyle: 'default',
          type: 'button'
        };
      },

      render: function render() {
        var classes = this.props.navDropdown ? {} : this.getBsClassSet();
        var renderFuncName = undefined;

        classes = _extends({
          'bt3-active': this.props.active,
          'bt3-btn-block': this.props.block }, classes);

        if (this.props.navItem) {
          return this.renderNavItem(classes);
        }

        renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

        return this[renderFuncName](classes);
      },

      renderAnchor: function renderAnchor(classes) {

        var Component = this.props.componentClass || 'a';
        var href = this.props.href || '#';
        classes['bt3-disabled'] = this.props.disabled;

        return _react2['default'].createElement(
          Component,
          _extends({}, this.props, {
            href: href,
            className: _classnames2['default'](this.props.className, classes),
            role: 'button' }),
          this.props.children
        );
      },

      renderButton: function renderButton(classes) {
        var Component = this.props.componentClass || 'button';
        var buttonProps = _extends({}, this.props);
        if (Component === 'button') {
          buttonProps = _filterUnsupportedDOMProperties(buttonProps);
        }

        return _react2['default'].createElement(
          Component,
          _extends({}, buttonProps, {
            className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      },

      renderNavItem: function renderNavItem(classes) {
        var liClasses = {
          'bt3-active': this.props.active
        };

        return _react2['default'].createElement(
          'li',
          { className: _classnames2['default'](liClasses) },
          this.renderAnchor(classes)
        );
      }
    });

    exports['default'] = Button;
    module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var ButtonGroup = _react2['default'].createClass({
      displayName: 'ButtonGroup',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        vertical: _react2['default'].PropTypes.bool,
        justified: _react2['default'].PropTypes.bool
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'button-group'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();
        classes['bt3-btn-group'] = !this.props.vertical;
        classes['bt3-btn-group-vertical'] = this.props.vertical;
        classes['bt3-btn-group-justified'] = this.props.justified;

        return _react2['default'].createElement(
          'div',
          _extends({}, _filterUnsupportedDOMProperties(this.props), {
            className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = ButtonGroup;
    module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var ButtonToolbar = _react2['default'].createClass({
      displayName: 'ButtonToolbar',

      mixins: [_BootstrapMixin2['default']],

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'button-toolbar'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, {
            role: 'toolbar',
            className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = ButtonToolbar;
    module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _CollapsibleNav = __webpack_require__(12);

    var _CollapsibleNav2 = _interopRequireDefault(_CollapsibleNav);

    var CollapsableNav = _CollapsibleNav2['default'];

    CollapsableNav.__deprecated__ = true;

    exports['default'] = CollapsableNav;
    module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _CollapsibleMixin = __webpack_require__(17);

    var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsDeprecationWarning = __webpack_require__(58);

    var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var CollapsibleNav = _react2['default'].createClass({
      displayName: 'CollapsibleNav',

      mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

      propTypes: {
        onSelect: _react2['default'].PropTypes.func,
        activeHref: _react2['default'].PropTypes.string,
        activeKey: _react2['default'].PropTypes.any,
        collapsable: _react2['default'].PropTypes.bool,
        expanded: _react2['default'].PropTypes.bool,
        eventKey: _react2['default'].PropTypes.any
      },

      getCollapsibleDOMNode: function getCollapsibleDOMNode() {
        return this.getDOMNode();
      },

      getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
        var height = 0;
        var nodes = this.refs;
        for (var key in nodes) {
          if (nodes.hasOwnProperty(key)) {

            var n = nodes[key].getDOMNode(),
                h = n.offsetHeight,
                computedStyles = _utilsDomUtils2['default'].getComputedStyles(n);

            height += h + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
          }
        }
        return height;
      },

      componentDidMount: function componentDidMount() {
        if (this.constructor.__deprecated__) {
          _utilsDeprecationWarning2['default']('CollapsableNav', 'CollapsibleNav', 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963');
        }
      },

      render: function render() {
        /*
         * this.props.collapsable is set in NavBar when a eventKey is supplied.
         */
        var classes = this.props.collapsable ? this.getCollapsibleClassSet() : {};
        /*
         * prevent duplicating navbar-collapse call if passed as prop.
         * kind of overkill...
         * good cadidate to have check implemented as an util that can
         * also be used elsewhere.
         */
        if (this.props.className === undefined || this.props.className.split(' ').indexOf('navbar-collapse') === -2) {
          classes['bt3-navbar-collapse'] = this.props.collapsable;
        }

        return _react2['default'].createElement(
          'div',
          { eventKey: this.props.eventKey, className: _classnames2['default'](this.props.className, classes) },
          _utilsValidComponentChildren2['default'].map(this.props.children, this.props.collapsable ? this.renderCollapsibleNavChildren : this.renderChildren)
        );
      },

      getChildActiveProp: function getChildActiveProp(child) {
        if (child.props.active) {
          return true;
        }
        if (this.props.activeKey != null) {
          if (child.props.eventKey === this.props.activeKey) {
            return true;
          }
        }
        if (this.props.activeHref != null) {
          if (child.props.href === this.props.activeHref) {
            return true;
          }
        }

        return child.props.active;
      },

      renderChildren: function renderChildren(child, index) {
        var key = child.key ? child.key : index;
        return _react.cloneElement(child, {
          activeKey: this.props.activeKey,
          activeHref: this.props.activeHref,
          ref: 'nocollapse_' + key,
          key: key,
          navItem: true
        });
      },

      renderCollapsibleNavChildren: function renderCollapsibleNavChildren(child, index) {
        var key = child.key ? child.key : index;
        return _react.cloneElement(child, {
          active: this.getChildActiveProp(child),
          activeKey: this.props.activeKey,
          activeHref: this.props.activeHref,
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
          ref: 'collapsible_' + key,
          key: key,
          navItem: true
        });
      }
    });

    exports['default'] = CollapsibleNav;
    module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var Carousel = _react2['default'].createClass({
      displayName: 'Carousel',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        slide: _react2['default'].PropTypes.bool,
        indicators: _react2['default'].PropTypes.bool,
        interval: _react2['default'].PropTypes.number,
        controls: _react2['default'].PropTypes.bool,
        pauseOnHover: _react2['default'].PropTypes.bool,
        wrap: _react2['default'].PropTypes.bool,
        onSelect: _react2['default'].PropTypes.func,
        onSlideEnd: _react2['default'].PropTypes.func,
        activeIndex: _react2['default'].PropTypes.number,
        defaultActiveIndex: _react2['default'].PropTypes.number,
        direction: _react2['default'].PropTypes.oneOf(['prev', 'next'])
      },

      getDefaultProps: function getDefaultProps() {
        return {
          slide: true,
          interval: 5000,
          pauseOnHover: true,
          wrap: true,
          indicators: true,
          controls: true
        };
      },

      getInitialState: function getInitialState() {
        return {
          activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
          previousActiveIndex: null,
          direction: null
        };
      },

      getDirection: function getDirection(prevIndex, index) {
        if (prevIndex === index) {
          return null;
        }

        return prevIndex > index ? 'prev' : 'next';
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var activeIndex = this.getActiveIndex();

        if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
          clearTimeout(this.timeout);
          this.setState({
            previousActiveIndex: activeIndex,
            direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
          });
        }
      },

      componentDidMount: function componentDidMount() {
        this.waitForNext();
      },

      componentWillUnmount: function componentWillUnmount() {
        clearTimeout(this.timeout);
      },

      next: function next(e) {
        if (e) {
          e.preventDefault();
        }

        var index = this.getActiveIndex() + 1;
        var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

        if (index > count - 1) {
          if (!this.props.wrap) {
            return;
          }
          index = 0;
        }

        this.handleSelect(index, 'next');
      },

      prev: function prev(e) {
        if (e) {
          e.preventDefault();
        }

        var index = this.getActiveIndex() - 1;

        if (index < 0) {
          if (!this.props.wrap) {
            return;
          }
          index = _utilsValidComponentChildren2['default'].numberOf(this.props.children) - 1;
        }

        this.handleSelect(index, 'prev');
      },

      pause: function pause() {
        this.isPaused = true;
        clearTimeout(this.timeout);
      },

      play: function play() {
        this.isPaused = false;
        this.waitForNext();
      },

      waitForNext: function waitForNext() {
        if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
          this.timeout = setTimeout(this.next, this.props.interval);
        }
      },

      handleMouseOver: function handleMouseOver() {
        if (this.props.pauseOnHover) {
          this.pause();
        }
      },

      handleMouseOut: function handleMouseOut() {
        if (this.isPaused) {
          this.play();
        }
      },

      render: function render() {
        var classes = {
          'bt3-carousel': true,
          'bt3-slide': this.props.slide
        };

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, classes),
            onMouseOver: this.handleMouseOver,
            onMouseOut: this.handleMouseOut }),
          this.props.indicators ? this.renderIndicators() : null,
          _react2['default'].createElement(
            'div',
            { className: 'carousel-inner', ref: 'inner' },
            _utilsValidComponentChildren2['default'].map(this.props.children, this.renderItem)
          ),
          this.props.controls ? this.renderControls() : null
        );
      },

      renderPrev: function renderPrev() {
        return _react2['default'].createElement(
          'a',
          { className: 'left carousel-control', href: '#prev', key: 0, onClick: this.prev },
          _react2['default'].createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
        );
      },

      renderNext: function renderNext() {
        return _react2['default'].createElement(
          'a',
          { className: 'right carousel-control', href: '#next', key: 1, onClick: this.next },
          _react2['default'].createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
        );
      },

      renderControls: function renderControls() {
        if (!this.props.wrap) {
          var activeIndex = this.getActiveIndex();
          var count = _utilsValidComponentChildren2['default'].numberOf(this.props.children);

          return [activeIndex !== 0 ? this.renderPrev() : null, activeIndex !== count - 1 ? this.renderNext() : null];
        }

        return [this.renderPrev(), this.renderNext()];
      },

      renderIndicator: function renderIndicator(child, index) {
        var className = index === this.getActiveIndex() ? 'bt3-active' : null;

        return _react2['default'].createElement('li', {
          key: index,
          className: className,
          onClick: this.handleSelect.bind(this, index, null) });
      },

      renderIndicators: function renderIndicators() {
        var indicators = [];
        _utilsValidComponentChildren2['default'].forEach(this.props.children, function (child, index) {
          indicators.push(this.renderIndicator(child, index),

          // Force whitespace between indicator elements, bootstrap
          // requires this for correct spacing of elements.
          ' ');
        }, this);

        return _react2['default'].createElement(
          'ol',
          { className: 'carousel-indicators' },
          indicators
        );
      },

      getActiveIndex: function getActiveIndex() {
        return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
      },

      handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
        this.setState({
          previousActiveIndex: null,
          direction: null
        }, function () {
          this.waitForNext();

          if (this.props.onSlideEnd) {
            this.props.onSlideEnd();
          }
        });
      },

      renderItem: function renderItem(child, index) {
        var activeIndex = this.getActiveIndex();
        var isActive = index === activeIndex;
        var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;

        return _react.cloneElement(child, {
          active: isActive,
          ref: child.ref,
          key: child.key ? child.key : index,
          index: index,
          animateOut: isPreviousActive,
          animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
          direction: this.state.direction,
          onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
        });
      },

      handleSelect: function handleSelect(index, direction) {
        clearTimeout(this.timeout);

        var previousActiveIndex = this.getActiveIndex();
        direction = direction || this.getDirection(previousActiveIndex, index);

        if (this.props.onSelect) {
          this.props.onSelect(index, direction);
        }

        if (this.props.activeIndex == null && index !== previousActiveIndex) {
          if (this.state.previousActiveIndex != null) {
            // If currently animating don't activate the new index.
            // TODO: look into queuing this canceled call and
            // animating after the current animation has ended.
            return;
          }

          this.setState({
            activeIndex: index,
            previousActiveIndex: previousActiveIndex,
            direction: direction
          });
        }
      }
    });

    exports['default'] = Carousel;
    module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsTransitionEvents = __webpack_require__(60);

    var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

    var CarouselItem = _react2['default'].createClass({
      displayName: 'CarouselItem',

      propTypes: {
        direction: _react2['default'].PropTypes.oneOf(['prev', 'next']),
        onAnimateOutEnd: _react2['default'].PropTypes.func,
        active: _react2['default'].PropTypes.bool,
        animateIn: _react2['default'].PropTypes.bool,
        animateOut: _react2['default'].PropTypes.bool,
        caption: _react2['default'].PropTypes.node,
        index: _react2['default'].PropTypes.number
      },

      getInitialState: function getInitialState() {
        return {
          direction: null
        };
      },

      getDefaultProps: function getDefaultProps() {
        return {
          animation: true
        };
      },

      handleAnimateOutEnd: function handleAnimateOutEnd() {
        if (this.props.onAnimateOutEnd && this.isMounted()) {
          this.props.onAnimateOutEnd(this.props.index);
        }
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
          this.setState({
            direction: null
          });
        }
      },

      componentDidUpdate: function componentDidUpdate(prevProps) {
        if (!this.props.active && prevProps.active) {
          _utilsTransitionEvents2['default'].addEndEventListener(_reactDom2['default'].findDOMNode(this), this.handleAnimateOutEnd);
        }

        if (this.props.active !== prevProps.active) {
          setTimeout(this.startAnimation, 20);
        }
      },

      startAnimation: function startAnimation() {
        if (!this.isMounted()) {
          return;
        }

        this.setState({
          direction: this.props.direction === 'prev' ? 'right' : 'left'
        });
      },

      render: function render() {
        var classes = {
          'bt3-item': true,
          'bt3-active': this.props.active && !this.props.animateIn || this.props.animateOut,
          'bt3-next': this.props.active && this.props.animateIn && this.props.direction === 'next',
          'bt3-prev': this.props.active && this.props.animateIn && this.props.direction === 'prev'
        };

        if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
          classes['bt3-' + this.state.direction] = true;
        }

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children,
          this.props.caption ? this.renderCaption() : null
        );
      },

      renderCaption: function renderCaption() {
        return _react2['default'].createElement(
          'div',
          { className: 'carousel-caption' },
          this.props.caption
        );
      }
    });

    exports['default'] = CarouselItem;
    module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _styleMaps = __webpack_require__(52);

    var _styleMaps2 = _interopRequireDefault(_styleMaps);

    var Col = _react2['default'].createClass({
      displayName: 'Col',

      propTypes: {
        xs: _react2['default'].PropTypes.number,
        sm: _react2['default'].PropTypes.number,
        md: _react2['default'].PropTypes.number,
        lg: _react2['default'].PropTypes.number,
        xsOffset: _react2['default'].PropTypes.number,
        smOffset: _react2['default'].PropTypes.number,
        mdOffset: _react2['default'].PropTypes.number,
        lgOffset: _react2['default'].PropTypes.number,
        xsPush: _react2['default'].PropTypes.number,
        smPush: _react2['default'].PropTypes.number,
        mdPush: _react2['default'].PropTypes.number,
        lgPush: _react2['default'].PropTypes.number,
        xsPull: _react2['default'].PropTypes.number,
        smPull: _react2['default'].PropTypes.number,
        mdPull: _react2['default'].PropTypes.number,
        lgPull: _react2['default'].PropTypes.number,
        componentClass: _react2['default'].PropTypes.node.isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          componentClass: 'div'
        };
      },

      render: function render() {
        var ComponentClass = this.props.componentClass;
        var classes = {};

        Object.keys(_styleMaps2['default'].SIZES).forEach(function (key) {
          var size = _styleMaps2['default'].SIZES[key];
          var prop = size;
          var classPart = size + '-';

          if (this.props[prop]) {
            classes['col-' + classPart + this.props[prop]] = true;
          }

          prop = size + 'Offset';
          classPart = size + '-offset-';
          if (this.props[prop] >= 0) {
            classes['col-' + classPart + this.props[prop]] = true;
          }

          prop = size + 'Push';
          classPart = size + '-push-';
          if (this.props[prop] >= 0) {
            classes['col-' + classPart + this.props[prop]] = true;
          }

          prop = size + 'Pull';
          classPart = size + '-pull-';
          if (this.props[prop] >= 0) {
            classes['col-' + classPart + this.props[prop]] = true;
          }
        }, this);

        return _react2['default'].createElement(
          ComponentClass,
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = Col;
    module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _utilsObjectAssign = __webpack_require__(61);

    var _utilsObjectAssign2 = _interopRequireDefault(_utilsObjectAssign);

    var _utilsDeprecationWarning = __webpack_require__(58);

    var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

    var _CollapsibleMixin = __webpack_require__(17);

    var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

    var link = 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963';

    var CollapsableMixin = _utilsObjectAssign2['default']({}, _CollapsibleMixin2['default'], {
      getCollapsableClassSet: function getCollapsableClassSet(className) {
        _utilsDeprecationWarning2['default']('CollapsableMixin.getCollapsableClassSet()', 'CollapsibleMixin.getCollapsibleClassSet()', link);
        return _CollapsibleMixin2['default'].getCollapsibleClassSet.call(this, className);
      },

      getCollapsibleDOMNode: function getCollapsibleDOMNode() {
        _utilsDeprecationWarning2['default']('CollapsableMixin.getCollapsableDOMNode()', 'CollapsibleMixin.getCollapsibleDOMNode()', link);
        return this.getCollapsableDOMNode();
      },

      getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
        _utilsDeprecationWarning2['default']('CollapsableMixin.getCollapsableDimensionValue()', 'CollapsibleMixin.getCollapsibleDimensionValue()', link);
        return this.getCollapsableDimensionValue();
      },

      componentDidMount: function componentDidMount() {
        _utilsDeprecationWarning2['default']('CollapsableMixin', 'CollapsibleMixin', link);
      }
    });

    exports['default'] = CollapsableMixin;
    module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactLibReactTransitionEvents = __webpack_require__(64);

    var _reactLibReactTransitionEvents2 = _interopRequireDefault(_reactLibReactTransitionEvents);

    var _utilsDeprecationWarning = __webpack_require__(58);

    var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

    var CollapsibleMixin = {

      propTypes: {
        defaultExpanded: _react2['default'].PropTypes.bool,
        expanded: _react2['default'].PropTypes.bool
      },

      getInitialState: function getInitialState() {
        var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

        return {
          expanded: defaultExpanded,
          collapsing: false
        };
      },

      componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
        var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;
        if (willExpanded === this.isExpanded()) {
          return;
        }

        // if the expanded state is being toggled, ensure node has a dimension value
        // this is needed for the animation to work and needs to be set before
        // the collapsing class is applied (after collapsing is applied the in class
        // is removed and the node's dimension will be wrong)

        var node = this.getCollapsibleDOMNode();
        var dimension = this.dimension();
        var value = '0';

        if (!willExpanded) {
          value = this.getCollapsibleDimensionValue();
        }

        node.style[dimension] = value + 'px';

        this._afterWillUpdate();
      },

      componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        // check if expanded is being toggled; if so, set collapsing
        this._checkToggleCollapsing(prevProps, prevState);

        // check if collapsing was turned on; if so, start animation
        this._checkStartAnimation();
      },

      // helps enable test stubs
      _afterWillUpdate: function _afterWillUpdate() {},

      _checkStartAnimation: function _checkStartAnimation() {
        if (!this.state.collapsing) {
          return;
        }

        var node = this.getCollapsibleDOMNode();
        var dimension = this.dimension();
        var value = this.getCollapsibleDimensionValue();

        // setting the dimension here starts the transition animation
        var result = undefined;
        if (this.isExpanded()) {
          result = value + 'px';
        } else {
          result = '0px';
        }
        node.style[dimension] = result;
      },

      _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
        var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
        var isExpanded = this.isExpanded();
        if (wasExpanded !== isExpanded) {
          if (wasExpanded) {
            this._handleCollapse();
          } else {
            this._handleExpand();
          }
        }
      },

      _handleExpand: function _handleExpand() {
        var _this = this;

        var node = this.getCollapsibleDOMNode();
        var dimension = this.dimension();

        var complete = function complete() {
          _this._removeEndEventListener(node, complete);
          // remove dimension value - this ensures the collapsible item can grow
          // in dimension after initial display (such as an image loading)
          node.style[dimension] = '';
          _this.setState({
            collapsing: false
          });
        };

        this._addEndEventListener(node, complete);

        this.setState({
          collapsing: true
        });
      },

      _handleCollapse: function _handleCollapse() {
        var _this2 = this;

        var node = this.getCollapsibleDOMNode();

        var complete = function complete() {
          _this2._removeEndEventListener(node, complete);
          _this2.setState({
            collapsing: false
          });
        };

        this._addEndEventListener(node, complete);

        this.setState({
          collapsing: true
        });
      },

      // helps enable test stubs
      _addEndEventListener: function _addEndEventListener(node, complete) {
        _reactLibReactTransitionEvents2['default'].addEndEventListener(node, complete);
      },

      // helps enable test stubs
      _removeEndEventListener: function _removeEndEventListener(node, complete) {
        _reactLibReactTransitionEvents2['default'].removeEndEventListener(node, complete);
      },

      dimension: function dimension() {
        if (typeof this.getCollapsableDimension === 'function') {
          _utilsDeprecationWarning2['default']('CollapsableMixin.getCollapsableDimension()', 'CollapsibleMixin.getCollapsibleDimension()', 'https://github.com/react-bootstrap/react-bootstrap/issues/425#issuecomment-97110963');
          return this.getCollapsableDimension();
        }

        return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
      },

      isExpanded: function isExpanded() {
        return this.props.expanded != null ? this.props.expanded : this.state.expanded;
      },

      getCollapsibleClassSet: function getCollapsibleClassSet(className) {
        var classes = {};

        if (typeof className === 'string') {
          className.split(' ').forEach(function (subClasses) {
            if (subClasses) {
              classes[subClasses] = true;
            }
          });
        }

        classes['bt3-collapsing'] = this.state.collapsing;
        classes['bt3-collapse'] = !this.state.collapsing;
        classes['bt3-in'] = this.isExpanded() && !this.state.collapsing;

        return classes;
      }
    };

    exports['default'] = CollapsibleMixin;
    module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _DropdownStateMixin = __webpack_require__(20);

    var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

    var _Button = __webpack_require__(8);

    var _Button2 = _interopRequireDefault(_Button);

    var _ButtonGroup = __webpack_require__(9);

    var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

    var _DropdownMenu = __webpack_require__(19);

    var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var DropdownButton = _react2['default'].createClass({
      displayName: 'DropdownButton',

      mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],

      propTypes: {
        pullRight: _react2['default'].PropTypes.bool,
        dropup: _react2['default'].PropTypes.bool,
        title: _react2['default'].PropTypes.node,
        href: _react2['default'].PropTypes.string,
        onClick: _react2['default'].PropTypes.func,
        onSelect: _react2['default'].PropTypes.func,
        navItem: _react2['default'].PropTypes.bool,
        noCaret: _react2['default'].PropTypes.bool,
        buttonClassName: _react2['default'].PropTypes.string
      },

      render: function render() {
        var renderMethod = this.props.navItem ? 'renderNavItem' : 'renderButtonGroup';

        var caret = this.props.noCaret ? null : _react2['default'].createElement('span', { className: 'bt3-caret' });

        return this[renderMethod]([_react2['default'].createElement(
          _Button2['default'],
          _extends({}, this.props, {
            ref: 'dropdownButton',
            className: _classnames2['default']('bt3-dropdown-toggle', this.props.buttonClassName),
            onClick: this.handleDropdownClick,
            key: 0,
            navDropdown: this.props.navItem,
            navItem: null,
            title: null,
            pullRight: null,
            dropup: null }),
          this.props.title,
          ' ',
          caret
        ), _react2['default'].createElement(
          _DropdownMenu2['default'],
          {
            ref: 'menu',
            'aria-labelledby': this.props.id,
            pullRight: this.props.pullRight,
            key: 1 },
          _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
        )]);
      },

      renderButtonGroup: function renderButtonGroup(children) {
        var groupClasses = {
          'bt3-open': this.state.open,
          'bt3-dropup': this.props.dropup
        };

        return _react2['default'].createElement(
          _ButtonGroup2['default'],
          {
            bsSize: this.props.bsSize,
            className: _classnames2['default'](this.props.className, groupClasses) },
          children
        );
      },

      renderNavItem: function renderNavItem(children) {
        var classes = {
          'bt3-dropdown': true,
          'bt3-open': this.state.open,
          'bt3-dropup': this.props.dropup
        };

        return _react2['default'].createElement(
          'li',
          { className: _classnames2['default'](this.props.className, classes) },
          children
        );
      },

      renderMenuItem: function renderMenuItem(child, index) {
        // Only handle the option selection if an onSelect prop has been set on the
        // component or it's child, this allows a user not to pass an onSelect
        // handler and have the browser preform the default action.
        var handleOptionSelect = this.props.onSelect || child.props.onSelect ? this.handleOptionSelect : null;

        return _react.cloneElement(child, {
          // Capture onSelect events
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, handleOptionSelect),
          key: child.key ? child.key : index
        });
      },

      handleDropdownClick: function handleDropdownClick(e) {
        e.preventDefault();

        this.setDropdownState(!this.state.open);
      },

      handleOptionSelect: function handleOptionSelect(key) {
        if (this.props.onSelect) {
          this.props.onSelect(key);
        }

        this.setDropdownState(false);
      }
    });

    exports['default'] = DropdownButton;
    module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var DropdownMenu = _react2['default'].createClass({
      displayName: 'DropdownMenu',

      propTypes: {
        pullRight: _react2['default'].PropTypes.bool,
        onSelect: _react2['default'].PropTypes.func
      },

      render: function render() {
        var classes = {
          'bt3-dropdown-menu': true,
          'bt3-dropdown-menu-right': this.props.pullRight
        };

        return _react2['default'].createElement(
          'ul',
          _extends({}, _filterUnsupportedDOMProperties(this.props), {
            className: _classnames2['default'](this.props.className, classes),
            role: 'menu' }),
          _utilsValidComponentChildren2['default'].map(this.props.children, this.renderMenuItem)
        );
      },

      renderMenuItem: function renderMenuItem(child, index) {
        return _react.cloneElement(child, {
          // Capture onSelect events
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),

          // Force special props to be transferred
          key: child.key ? child.key : index
        });
      }
    });

    exports['default'] = DropdownMenu;
    module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsEventListener = __webpack_require__(57);

    var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

    /**
     * Checks whether a node is within
     * a root nodes tree
     *
     * @param {DOMElement} node
     * @param {DOMElement} root
     * @returns {boolean}
     */
    function isNodeInRoot(node, root) {
      while (node) {
        if (node === root) {
          return true;
        }
        node = node.parentNode;
      }

      return false;
    }

    var DropdownStateMixin = {
      getInitialState: function getInitialState() {
        return {
          open: false
        };
      },

      setDropdownState: function setDropdownState(newState, onStateChangeComplete) {
        if (newState) {
          this.bindRootCloseHandlers();
        } else {
          this.unbindRootCloseHandlers();
        }

        this.setState({
          open: newState
        }, onStateChangeComplete);
      },

      handleDocumentKeyUp: function handleDocumentKeyUp(e) {
        if (e.keyCode === 27) {
          this.setDropdownState(false);
        }
      },

      handleDocumentClick: function handleDocumentClick(e) {
        // If the click originated from within this component
        // don't do anything.
        if (isNodeInRoot(e.target, _reactDom2['default'].findDOMNode(this))) {
          return;
        }

        this.setDropdownState(false);
      },

      bindRootCloseHandlers: function bindRootCloseHandlers() {
        var doc = _utilsDomUtils2['default'].ownerDocument(this);

        this._onDocumentClickListener = _utilsEventListener2['default'].listen(doc, 'click', this.handleDocumentClick);
        this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(doc, 'keyup', this.handleDocumentKeyUp);
      },

      unbindRootCloseHandlers: function unbindRootCloseHandlers() {
        if (this._onDocumentClickListener) {
          this._onDocumentClickListener.remove();
        }

        if (this._onDocumentKeyupListener) {
          this._onDocumentKeyupListener.remove();
        }
      },

      componentWillUnmount: function componentWillUnmount() {
        this.unbindRootCloseHandlers();
      }
    };

    exports['default'] = DropdownStateMixin;
    module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    // TODO: listen for onTransitionEnd to remove el
    function getElementsAndSelf(root, classes) {
      var els = root.querySelectorAll('.' + classes.join('.'));

      els = [].map.call(els, function (e) {
        return e;
      });

      for (var i = 0; i < classes.length; i++) {
        if (!root.className.match(new RegExp('\\b' + classes[i] + '\\b'))) {
          return els;
        }
      }
      els.unshift(root);
      return els;
    }

    exports['default'] = {
      _fadeIn: function _fadeIn() {
        var els = undefined;

        if (this.isMounted()) {
          els = getElementsAndSelf(_reactDom2['default'].findDOMNode(this), ['fade']);

          if (els.length) {
            els.forEach(function (el) {
              el.className += ' in';
            });
          }
        }
      },

      _fadeOut: function _fadeOut() {
        var els = getElementsAndSelf(this._fadeOutEl, ['fade', 'in']);

        if (els.length) {
          els.forEach(function (el) {
            el.className = el.className.replace(/\bin\b/, '');
          });
        }

        setTimeout(this._handleFadeOutEnd, 300);
      },

      _handleFadeOutEnd: function _handleFadeOutEnd() {
        if (this._fadeOutEl && this._fadeOutEl.parentNode) {
          this._fadeOutEl.parentNode.removeChild(this._fadeOutEl);
        }
      },

      componentDidMount: function componentDidMount() {
        if (document.querySelectorAll) {
          // Firefox needs delay for transition to be triggered
          setTimeout(this._fadeIn, 20);
        }
      },

      componentWillUnmount: function componentWillUnmount() {
        var els = getElementsAndSelf(_reactDom2['default'].findDOMNode(this), ['fade']),
            container = this.props.container && _reactDom2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;

        if (els.length) {
          this._fadeOutEl = document.createElement('div');
          container.appendChild(this._fadeOutEl);
          this._fadeOutEl.appendChild(_reactDom2['default'].findDOMNode(this).cloneNode(true));
          // Firefox needs delay for transition to be triggered
          setTimeout(this._fadeOut, 20);
        }
      }
    };
    module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _styleMaps = __webpack_require__(52);

    var _styleMaps2 = _interopRequireDefault(_styleMaps);

    var Glyphicon = _react2['default'].createClass({
      displayName: 'Glyphicon',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        glyph: _react2['default'].PropTypes.oneOf(_styleMaps2['default'].GLYPHS).isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'glyphicon'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();

        classes['bt3-glyphicon-' + this.props.glyph] = true;

        return _react2['default'].createElement(
          'span',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = Glyphicon;
    module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var Grid = _react2['default'].createClass({
      displayName: 'Grid',

      propTypes: {
        fluid: _react2['default'].PropTypes.bool,
        componentClass: _react2['default'].PropTypes.node.isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          componentClass: 'div'
        };
      },

      render: function render() {
        var ComponentClass = this.props.componentClass;
        var className = this.props.fluid ? 'container-fluid' : 'container';

        return _react2['default'].createElement(
          ComponentClass,
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, className) }),
          this.props.children
        );
      }
    });

    exports['default'] = Grid;
    module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _Button = __webpack_require__(8);

    var _Button2 = _interopRequireDefault(_Button);

    var _FormGroup = __webpack_require__(62);

    var _FormGroup2 = _interopRequireDefault(_FormGroup);

    var Input = (function (_React$Component) {
      function Input() {
        _classCallCheck(this, Input);

        if (_React$Component != null) {
          _React$Component.apply(this, arguments);
        }
      }

      _inherits(Input, _React$Component);

      _createClass(Input, [{
        key: 'getInputDOMNode',
        value: function getInputDOMNode() {
          return _reactDom2['default'].findDOMNode(this.refs.input);
        }
      }, {
        key: 'getValue',
        value: function getValue() {
          if (this.props.type === 'static') {
            return this.props.value;
          } else if (this.props.type) {
            if (this.props.type === 'select' && this.props.multiple) {
              return this.getSelectedOptions();
            } else {
              return this.getInputDOMNode().value;
            }
          } else {
            throw 'Cannot use getValue without specifying input type.';
          }
        }
      }, {
        key: 'getChecked',
        value: function getChecked() {
          return this.getInputDOMNode().checked;
        }
      }, {
        key: 'getSelectedOptions',
        value: function getSelectedOptions() {
          var values = [];

          Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
            if (option.selected) {
              var value = option.getAttribute('value') || option.innerHtml;
              values.push(value);
            }
          });

          return values;
        }
      }, {
        key: 'isCheckboxOrRadio',
        value: function isCheckboxOrRadio() {
          return this.props.type === 'checkbox' || this.props.type === 'radio';
        }
      }, {
        key: 'isFile',
        value: function isFile() {
          return this.props.type === 'file';
        }
      }, {
        key: 'renderInputGroup',
        value: function renderInputGroup(children) {
          var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
            'span',
            { className: 'input-group-addon', key: 'addonBefore' },
            this.props.addonBefore
          ) : null;

          var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
            'span',
            { className: 'input-group-addon', key: 'addonAfter' },
            this.props.addonAfter
          ) : null;

          var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
            'span',
            { className: 'input-group-btn' },
            this.props.buttonBefore
          ) : null;

          var buttonAfter = this.props.buttonAfter ? _react2['default'].createElement(
            'span',
            { className: 'input-group-btn' },
            this.props.buttonAfter
          ) : null;

          var inputGroupClassName = undefined;
          switch (this.props.bsSize) {
            case 'small':
              inputGroupClassName = 'input-group-sm';break;
            case 'large':
              inputGroupClassName = 'input-group-lg';break;
          }

          return addonBefore || addonAfter || buttonBefore || buttonAfter ? _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](inputGroupClassName, 'input-group'), key: 'input-group' },
            addonBefore,
            buttonBefore,
            children,
            addonAfter,
            buttonAfter
          ) : children;
        }
      }, {
        key: 'renderIcon',
        value: function renderIcon() {
          var classes = {
            'bt3-glyphicon': true,
            'bt3-form-control-feedback': true,
            'bt3-glyphicon-ok': this.props.bsStyle === 'success',
            'bt3-glyphicon-warning-sign': this.props.bsStyle === 'warning',
            'bt3-glyphicon-remove': this.props.bsStyle === 'error'
          };

          return this.props.hasFeedback ? _react2['default'].createElement('span', { className: _classnames2['default'](classes), key: 'icon' }) : null;
        }
      }, {
        key: 'renderHelp',
        value: function renderHelp() {
          return this.props.help ? _react2['default'].createElement(
            'span',
            { className: 'bt3-help-block', key: 'help' },
            this.props.help
          ) : null;
        }
      }, {
        key: 'renderCheckboxAndRadioWrapper',
        value: function renderCheckboxAndRadioWrapper(children) {
          var classes = {
            'bt3-checkbox': this.props.type === 'checkbox',
            'bt3-radio': this.props.type === 'radio'
          };

          return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](classes), key: 'checkboxRadioWrapper' },
            children
          );
        }
      }, {
        key: 'renderWrapper',
        value: function renderWrapper(children) {
          return this.props.wrapperClassName ? _react2['default'].createElement(
            'div',
            { className: this.props.wrapperClassName, key: 'wrapper' },
            children
          ) : children;
        }
      }, {
        key: 'renderLabel',
        value: function renderLabel(children) {
          var classes = {
            'control-label': !this.isCheckboxOrRadio()
          };
          classes[this.props.labelClassName] = this.props.labelClassName;

          return this.props.label ? _react2['default'].createElement(
            'label',
            { htmlFor: this.props.id, className: _classnames2['default'](classes), key: 'label' },
            children,
            this.props.label
          ) : children;
        }
      }, {
        key: 'renderInput',
        value: function renderInput() {
          if (!this.props.type) {
            return this.props.children;
          }

          switch (this.props.type) {
            case 'select':
              return _react2['default'].createElement(
                'select',
                _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }),
                this.props.children
              );
            case 'textarea':
              return _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }));
            case 'static':
              return _react2['default'].createElement(
                'p',
                _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
                this.props.value
              );
            case 'submit':
              return _react2['default'].createElement(_Button2['default'], _extends({}, this.props, { componentClass: 'input', ref: 'input', key: 'input' }));
          }

          var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
          return _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.props.className, className), ref: 'input', key: 'input' }));
        }
      }, {
        key: 'renderFormGroup',
        value: function renderFormGroup(children) {
          if (this.props.type === 'submit') {
            var _props = this.props;
            var bsStyle = _props.bsStyle;

            var other = _objectWithoutProperties(_props, ['bsStyle']);

            /* eslint no-unused-vars: 0 */
            return _react2['default'].createElement(
              _FormGroup2['default'],
              other,
              children
            );
          }

          return _react2['default'].createElement(
            _FormGroup2['default'],
            this.props,
            children
          );
        }
      }, {
        key: 'renderChildren',
        value: function renderChildren() {
          return !this.isCheckboxOrRadio() ? [this.renderLabel(), this.renderWrapper([this.renderInputGroup(this.renderInput()), this.renderIcon(), this.renderHelp()])] : this.renderWrapper([this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())), this.renderHelp()]);
        }
      }, {
        key: 'render',
        value: function render() {
          var children = this.renderChildren();
          return this.renderFormGroup(children);
        }
      }]);

      return Input;
    })(_react2['default'].Component);

    Input.propTypes = {
      type: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.node,
      help: _react2['default'].PropTypes.node,
      addonBefore: _react2['default'].PropTypes.node,
      addonAfter: _react2['default'].PropTypes.node,
      buttonBefore: _react2['default'].PropTypes.node,
      buttonAfter: _react2['default'].PropTypes.node,
      bsSize: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']),
      bsStyle: function bsStyle(props) {
        if (props.type === 'submit') {
          return null;
        }
        return _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']).apply(null, arguments);
      },
      hasFeedback: _react2['default'].PropTypes.bool,
      id: _react2['default'].PropTypes.string,
      groupClassName: _react2['default'].PropTypes.string,
      wrapperClassName: _react2['default'].PropTypes.string,
      labelClassName: _react2['default'].PropTypes.string,
      multiple: _react2['default'].PropTypes.bool,
      disabled: _react2['default'].PropTypes.bool,
      value: _react2['default'].PropTypes.any
    };

    exports['default'] = Input;
    module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    // https://www.npmjs.org/package/react-interpolate-component
    // TODO: Drop this in favor of es6 string interpolation

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsObjectAssign = __webpack_require__(61);

    var _utilsObjectAssign2 = _interopRequireDefault(_utilsObjectAssign);

    var REGEXP = /\%\((.+?)\)s/;

    var Interpolate = _react2['default'].createClass({
      displayName: 'Interpolate',

      propTypes: {
        format: _react2['default'].PropTypes.string
      },

      getDefaultProps: function getDefaultProps() {
        return { component: 'span' };
      },

      render: function render() {
        var format = _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || typeof this.props.children === 'string' ? this.props.children : this.props.format;
        var parent = this.props.component;
        var unsafe = this.props.unsafe === true;
        var props = _utilsObjectAssign2['default']({}, this.props);

        delete props.children;
        delete props.format;
        delete props.component;
        delete props.unsafe;

        if (unsafe) {
          var content = format.split(REGEXP).reduce(function (memo, match, index) {
            var html = undefined;

            if (index % 2 === 0) {
              html = match;
            } else {
              html = props[match];
              delete props[match];
            }

            if (_react2['default'].isValidElement(html)) {
              throw new Error('cannot interpolate a React component into unsafe text');
            }

            memo += html;

            return memo;
          }, '');

          props.dangerouslySetInnerHTML = { __html: content };

          return _react2['default'].createElement(parent, props);
        } else {
          var kids = format.split(REGEXP).reduce(function (memo, match, index) {
            var child = undefined;

            if (index % 2 === 0) {
              if (match.length === 0) {
                return memo;
              }

              child = match;
            } else {
              child = props[match];
              delete props[match];
            }

            memo.push(child);

            return memo;
          }, []);

          return _react2['default'].createElement(parent, props, kids);
        }
      }
    });

    exports['default'] = Interpolate;
    module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var Jumbotron = _react2['default'].createClass({
      displayName: 'Jumbotron',

      render: function render() {
        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'jumbotron') }),
          this.props.children
        );
      }
    });

    exports['default'] = Jumbotron;
    module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var Label = _react2['default'].createClass({
      displayName: 'Label',

      mixins: [_BootstrapMixin2['default']],

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'label',
          bsStyle: 'default'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();

        return _react2['default'].createElement(
          'span',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = Label;
    module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var ListGroupItem = _react2['default'].createClass({
      displayName: 'ListGroupItem',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        bsStyle: _react2['default'].PropTypes.oneOf(['danger', 'info', 'success', 'warning']),
        className: _react2['default'].PropTypes.string,
        active: _react2['default'].PropTypes.any,
        disabled: _react2['default'].PropTypes.any,
        header: _react2['default'].PropTypes.node,
        listItem: _react2['default'].PropTypes.bool,
        onClick: _react2['default'].PropTypes.func,
        eventKey: _react2['default'].PropTypes.any,
        href: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'list-group-item'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();

        classes['bt3-active'] = this.props.active;
        classes['bt3-disabled'] = this.props.disabled;

        if (this.props.href || this.props.onClick) {
          return this.renderAnchor(classes);
        } else if (this.props.listItem) {
          return this.renderLi(classes);
        } else {
          return this.renderSpan(classes);
        }
      },

      renderLi: function renderLi(classes) {
        return _react2['default'].createElement(
          'li',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.header ? this.renderStructuredContent() : this.props.children
        );
      },

      renderAnchor: function renderAnchor(classes) {
        return _react2['default'].createElement(
          'a',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, classes)
          }),
          this.props.header ? this.renderStructuredContent() : this.props.children
        );
      },

      renderSpan: function renderSpan(classes) {
        return _react2['default'].createElement(
          'span',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.header ? this.renderStructuredContent() : this.props.children
        );
      },

      renderStructuredContent: function renderStructuredContent() {
        var header = undefined;
        if (_react2['default'].isValidElement(this.props.header)) {
          header = _react.cloneElement(this.props.header, {
            key: 'header',
            className: _classnames2['default'](this.props.header.props.className, 'list-group-item-heading')
          });
        } else {
          header = _react2['default'].createElement(
            'h4',
            { key: 'header', className: 'list-group-item-heading' },
            this.props.header
          );
        }

        var content = _react2['default'].createElement(
          'p',
          { key: 'content', className: 'list-group-item-text' },
          this.props.children
        );

        return [header, content];
      }
    });

    exports['default'] = ListGroupItem;
    module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var MenuItem = _react2['default'].createClass({
      displayName: 'MenuItem',

      propTypes: {
        header: _react2['default'].PropTypes.bool,
        divider: _react2['default'].PropTypes.bool,
        href: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string,
        onSelect: _react2['default'].PropTypes.func,
        eventKey: _react2['default'].PropTypes.any
      },

      getDefaultProps: function getDefaultProps() {
        return {
          href: '#'
        };
      },

      handleClick: function handleClick(e) {
        if (this.props.onSelect) {
          e.preventDefault();
          this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
        }
      },

      renderAnchor: function renderAnchor() {
        return _react2['default'].createElement(
          'a',
          { onClick: this.handleClick, href: this.props.href, target: this.props.target, title: this.props.title, tabIndex: '-1' },
          this.props.children
        );
      },

      render: function render() {
        var classes = {
          'bt3-dropdown-header': this.props.header,
          'bt3-divider': this.props.divider
        };

        var children = null;
        if (this.props.header) {
          children = this.props.children;
        } else if (!this.props.divider) {
          children = this.renderAnchor();
        }

        return _react2['default'].createElement(
          'li',
          _extends({}, _filterUnsupportedDOMProperties(this.props), { role: 'presentation', title: null, href: null,
            className: _classnames2['default'](this.props.className, classes) }),
          children
        );
      }
    });

    exports['default'] = MenuItem;
    module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _FadeMixin = __webpack_require__(21);

    var _FadeMixin2 = _interopRequireDefault(_FadeMixin);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsEventListener = __webpack_require__(57);

    var _utilsEventListener2 = _interopRequireDefault(_utilsEventListener);

    // TODO:
    // - aria-labelledby
    // - Add `modal-body` div if only one child passed in that doesn't already have it
    // - Tests

    var Modal = _react2['default'].createClass({
      displayName: 'Modal',

      mixins: [_BootstrapMixin2['default'], _FadeMixin2['default']],

      propTypes: {
        title: _react2['default'].PropTypes.node,
        backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
        keyboard: _react2['default'].PropTypes.bool,
        closeButton: _react2['default'].PropTypes.bool,
        animation: _react2['default'].PropTypes.bool,
        onRequestHide: _react2['default'].PropTypes.func.isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'modal',
          backdrop: true,
          keyboard: true,
          animation: true,
          closeButton: true
        };
      },

      render: function render() {
        var modalStyle = { display: 'block' };
        var dialogClasses = this.getBsClassSet();
        delete dialogClasses.modal;
        dialogClasses['modal-dialog'] = true;

        var classes = {
          'bt3-modal': true,
          'bt3-fade': this.props.animation,
          'bt3-in': !this.props.animation || !document.querySelectorAll
        };

        var modal = _react2['default'].createElement(
          'div',
          _extends({}, this.props, {
            title: null,
            tabIndex: '-1',
            role: 'dialog',
            style: modalStyle,
            className: _classnames2['default'](this.props.className, classes),
            onClick: this.props.backdrop === true ? this.handleBackdropClick : null,
            ref: 'modal' }),
          _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](dialogClasses) },
            _react2['default'].createElement(
              'div',
              { className: 'modal-content', style: { overflow: 'hidden' } },
              this.props.title ? this.renderHeader() : null,
              this.props.children
            )
          )
        );

        return this.props.backdrop ? this.renderBackdrop(modal) : modal;
      },

      renderBackdrop: function renderBackdrop(modal) {
        var classes = {
          'bt3-modal-backdrop': true,
          'bt3-fade': this.props.animation
        };

        classes['in'] = !this.props.animation || !document.querySelectorAll;

        var onClick = this.props.backdrop === true ? this.handleBackdropClick : null;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('div', { className: _classnames2['default'](classes), ref: 'backdrop', onClick: onClick }),
          modal
        );
      },

      renderHeader: function renderHeader() {
        var closeButton = undefined;
        if (this.props.closeButton) {
          closeButton = _react2['default'].createElement(
            'button',
            { type: 'button', className: 'close', 'aria-hidden': 'true', onClick: this.props.onRequestHide },
            '×'
          );
        }

        var style = this.props.bsStyle;
        var classes = {
          'bt3-modal-header': true
        };
        classes['bt3-bg-' + style] = style;
        classes['bt3-text-' + style] = style;

        var className = _classnames2['default'](classes);

        return _react2['default'].createElement(
          'div',
          { className: className },
          closeButton,
          this.renderTitle()
        );
      },

      renderTitle: function renderTitle() {
        return _react2['default'].isValidElement(this.props.title) ? this.props.title : _react2['default'].createElement(
          'h4',
          { className: 'modal-title' },
          this.props.title
        );
      },

      iosClickHack: function iosClickHack() {
        // IOS only allows click events to be delegated to the document on elements
        // it considers 'clickable' - anchors, buttons, etc. We fake a click handler on the
        // DOM nodes themselves. Remove if handled by React: https://github.com/facebook/react/issues/1169
        _reactDom2['default'].findDOMNode(this.refs.modal).onclick = function () {};
        _reactDom2['default'].findDOMNode(this.refs.backdrop).onclick = function () {};
      },

      componentDidMount: function componentDidMount() {
        this._onDocumentKeyupListener = _utilsEventListener2['default'].listen(_utilsDomUtils2['default'].ownerDocument(this), 'keyup', this.handleDocumentKeyUp);

        var container = this.props.container && _reactDom2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
        container.className += container.className.length ? ' modal-open' : 'modal-open';

        if (this.props.backdrop) {
          this.iosClickHack();
        }
      },

      componentDidUpdate: function componentDidUpdate(prevProps) {
        if (this.props.backdrop && this.props.backdrop !== prevProps.backdrop) {
          this.iosClickHack();
        }
      },

      componentWillUnmount: function componentWillUnmount() {
        this._onDocumentKeyupListener.remove();
        var container = this.props.container && _reactDom2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
        container.className = container.className.replace(/ ?modal-open/, '');
      },

      handleBackdropClick: function handleBackdropClick(e) {
        if (e.target !== e.currentTarget) {
          return;
        }

        this.props.onRequestHide();
      },

      handleDocumentKeyUp: function handleDocumentKeyUp(e) {
        if (this.props.keyboard && e.keyCode === 27) {
          this.props.onRequestHide();
        }
      }
    });

    exports['default'] = Modal;
    module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _CollapsibleMixin = __webpack_require__(17);

    var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var Nav = _react2['default'].createClass({
      displayName: 'Nav',

      mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

      propTypes: {
        activeHref: _react2['default'].PropTypes.string,
        activeKey: _react2['default'].PropTypes.any,
        bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
        stacked: _react2['default'].PropTypes.bool,
        justified: _react2['default'].PropTypes.bool,
        onSelect: _react2['default'].PropTypes.func,
        collapsable: _react2['default'].PropTypes.bool,
        expanded: _react2['default'].PropTypes.bool,
        navbar: _react2['default'].PropTypes.bool,
        eventKey: _react2['default'].PropTypes.any,
        pullRight: _react2['default'].PropTypes.bool,
        right: _react2['default'].PropTypes.bool
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'nav'
        };
      },

      getCollapsibleDOMNode: function getCollapsibleDOMNode() {
        return _reactDom2['default'].findDOMNode(this);
      },

      getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
        var node = _reactDom2['default'].findDOMNode(this.refs.ul),
            height = node.offsetHeight,
            computedStyles = _utilsDomUtils2['default'].getComputedStyles(node);

        return height + parseInt(computedStyles.marginTop, 10) + parseInt(computedStyles.marginBottom, 10);
      },

      render: function render() {
        var classes = this.props.collapsable ? this.getCollapsibleClassSet() : {};

        classes['bt3-navbar-collapse'] = this.props.collapsable;

        if (this.props.navbar && !this.props.collapsable) {
          return this.renderUl();
        }

        return _react2['default'].createElement(
          'nav',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.renderUl()
        );
      },

      renderUl: function renderUl() {
        var classes = this.getBsClassSet();

        classes['bt3-nav-stacked'] = this.props.stacked;
        classes['bt3-nav-justified'] = this.props.justified;
        classes['bt3-navbar-nav'] = this.props.navbar;
        classes['bt3-pull-right'] = this.props.pullRight;
        classes['bt3-navbar-right'] = this.props.right;

        return _react2['default'].createElement(
          'ul',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes), ref: 'ul' }),
          _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
        );
      },

      getChildActiveProp: function getChildActiveProp(child) {
        if (child.props.active) {
          return true;
        }
        if (this.props.activeKey != null) {
          if (child.props.eventKey === this.props.activeKey) {
            return true;
          }
        }
        if (this.props.activeHref != null) {
          if (child.props.href === this.props.activeHref) {
            return true;
          }
        }

        return child.props.active;
      },

      renderNavItem: function renderNavItem(child, index) {
        return _react.cloneElement(child, {
          active: this.getChildActiveProp(child),
          activeKey: this.props.activeKey,
          activeHref: this.props.activeHref,
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
          key: child.key ? child.key : index,
          navItem: true
        });
      }
    });

    exports['default'] = Nav;
    module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var Navbar = _react2['default'].createClass({
      displayName: 'Navbar',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        fixedTop: _react2['default'].PropTypes.bool,
        fixedBottom: _react2['default'].PropTypes.bool,
        staticTop: _react2['default'].PropTypes.bool,
        inverse: _react2['default'].PropTypes.bool,
        fluid: _react2['default'].PropTypes.bool,
        role: _react2['default'].PropTypes.string,
        componentClass: _react2['default'].PropTypes.node.isRequired,
        brand: _react2['default'].PropTypes.node,
        toggleButton: _react2['default'].PropTypes.node,
        toggleNavKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
        onToggle: _react2['default'].PropTypes.func,
        navExpanded: _react2['default'].PropTypes.bool,
        defaultNavExpanded: _react2['default'].PropTypes.bool
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'navbar',
          bsStyle: 'default',
          role: 'navigation',
          componentClass: 'nav'
        };
      },

      getInitialState: function getInitialState() {
        return {
          navExpanded: this.props.defaultNavExpanded
        };
      },

      shouldComponentUpdate: function shouldComponentUpdate() {
        // Defer any updates to this component during the `onSelect` handler.
        return !this._isChanging;
      },

      handleToggle: function handleToggle() {
        if (this.props.onToggle) {
          this._isChanging = true;
          this.props.onToggle();
          this._isChanging = false;
        }

        this.setState({
          navExpanded: !this.state.navExpanded
        });
      },

      isNavExpanded: function isNavExpanded() {
        return this.props.navExpanded != null ? this.props.navExpanded : this.state.navExpanded;
      },

      render: function render() {
        var classes = this.getBsClassSet();
        var ComponentClass = this.props.componentClass;

        classes['bt3-navbar-fixed-top'] = this.props.fixedTop;
        classes['bt3-navbar-fixed-bottom'] = this.props.fixedBottom;
        classes['bt3-navbar-static-top'] = this.props.staticTop;
        classes['bt3-navbar-inverse'] = this.props.inverse;

        return _react2['default'].createElement(
          ComponentClass,
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          _react2['default'].createElement(
            'div',
            { className: this.props.fluid ? 'container-fluid' : 'container' },
            this.props.brand || this.props.toggleButton || this.props.toggleNavKey != null ? this.renderHeader() : null,
            _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChild)
          )
        );
      },

      renderChild: function renderChild(child, index) {
        return _react.cloneElement(child, {
          navbar: true,
          collapsable: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey,
          expanded: this.props.toggleNavKey != null && this.props.toggleNavKey === child.props.eventKey && this.isNavExpanded(),
          key: child.key ? child.key : index
        });
      },

      renderHeader: function renderHeader() {
        var brand = undefined;

        if (this.props.brand) {
          if (_react2['default'].isValidElement(this.props.brand)) {
            brand = _react.cloneElement(this.props.brand, {
              className: _classnames2['default'](this.props.brand.props.className, 'navbar-brand')
            });
          } else {
            brand = _react2['default'].createElement(
              'span',
              { className: 'navbar-brand' },
              this.props.brand
            );
          }
        }

        return _react2['default'].createElement(
          'div',
          { className: 'navbar-header' },
          brand,
          this.props.toggleButton || this.props.toggleNavKey != null ? this.renderToggleButton() : null
        );
      },

      renderToggleButton: function renderToggleButton() {
        var children = undefined;

        if (_react2['default'].isValidElement(this.props.toggleButton)) {

          return _react.cloneElement(this.props.toggleButton, {
            className: _classnames2['default'](this.props.toggleButton.props.className, 'navbar-toggle'),
            onClick: _utilsCreateChainedFunction2['default'](this.handleToggle, this.props.toggleButton.props.onClick)
          });
        }

        children = this.props.toggleButton != null ? this.props.toggleButton : [_react2['default'].createElement(
          'span',
          { className: 'sr-only', key: 0 },
          'Toggle navigation'
        ), _react2['default'].createElement('span', { className: 'icon-bar', key: 1 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 2 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 3 })];

        return _react2['default'].createElement(
          'button',
          { className: 'navbar-toggle', type: 'button', onClick: this.handleToggle },
          children
        );
      }
    });

    exports['default'] = Navbar;
    module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var ListGroup = (function (_React$Component) {
      function ListGroup() {
        _classCallCheck(this, ListGroup);

        if (_React$Component != null) {
          _React$Component.apply(this, arguments);
        }
      }

      _inherits(ListGroup, _React$Component);

      _createClass(ListGroup, [{
        key: 'render',
        value: function render() {
          var _this = this;

          var items = _utilsValidComponentChildren2['default'].map(this.props.children, function (item, index) {
            return _react.cloneElement(item, { key: item.key ? item.key : index });
          });

          var childrenAnchors = false;

          if (!this.props.children) {
            return this.renderDiv(items);
          } else if (_react2['default'].Children.count(this.props.children) === 1 && !Array.isArray(this.props.children)) {
            var child = this.props.children;

            childrenAnchors = this.isAnchor(child.props);
          } else {

            childrenAnchors = Array.prototype.some.call(this.props.children, function (child) {
              return !Array.isArray(child) ? _this.isAnchor(child.props) : Array.prototype.some.call(child, function (subChild) {
                return _this.isAnchor(subChild.props);
              });
            });
          }

          if (childrenAnchors) {
            return this.renderDiv(items);
          } else {
            return this.renderUL(items);
          }
        }
      }, {
        key: 'isAnchor',
        value: function isAnchor(props) {
          return props.href || props.onClick;
        }
      }, {
        key: 'renderUL',
        value: function renderUL(items) {
          var listItems = _utilsValidComponentChildren2['default'].map(items, function (item, index) {
            return _react.cloneElement(item, { listItem: true });
          });

          return _react2['default'].createElement(
            'ul',
            _extends({}, this.props, {
              className: _classnames2['default'](this.props.className, 'list-group') }),
            listItems
          );
        }
      }, {
        key: 'renderDiv',
        value: function renderDiv(items) {
          return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
              className: _classnames2['default'](this.props.className, 'list-group') }),
            items
          );
        }
      }]);

      return ListGroup;
    })(_react2['default'].Component);

    ListGroup.propTypes = {
      className: _react2['default'].PropTypes.string,
      id: _react2['default'].PropTypes.string
    };

    exports['default'] = ListGroup;
    module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _OverlayMixin = __webpack_require__(36);

    var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var ModalTrigger = _react2['default'].createClass({
      displayName: 'ModalTrigger',

      mixins: [_OverlayMixin2['default']],

      propTypes: {
        modal: _react2['default'].PropTypes.node.isRequired
      },

      getInitialState: function getInitialState() {
        return {
          isOverlayShown: false
        };
      },

      show: function show() {
        this.setState({
          isOverlayShown: true
        });
      },

      hide: function hide() {
        this.setState({
          isOverlayShown: false
        });
      },

      toggle: function toggle() {
        this.setState({
          isOverlayShown: !this.state.isOverlayShown
        });
      },

      renderOverlay: function renderOverlay() {
        if (!this.state.isOverlayShown) {
          return _react2['default'].createElement('span', null);
        }

        return _react.cloneElement(this.props.modal, {
          onRequestHide: this.hide
        });
      },

      render: function render() {
        var child = _react2['default'].Children.only(this.props.children);
        var props = {};

        props.onClick = _utilsCreateChainedFunction2['default'](child.props.onClick, this.toggle);
        props.onMouseOver = _utilsCreateChainedFunction2['default'](child.props.onMouseOver, this.props.onMouseOver);
        props.onMouseOut = _utilsCreateChainedFunction2['default'](child.props.onMouseOut, this.props.onMouseOut);
        props.onFocus = _utilsCreateChainedFunction2['default'](child.props.onFocus, this.props.onFocus);
        props.onBlur = _utilsCreateChainedFunction2['default'](child.props.onBlur, this.props.onBlur);

        return _react.cloneElement(child, props);
      }
    });

    exports['default'] = ModalTrigger;
    module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _OverlayMixin = __webpack_require__(36);

    var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var _utilsObjectAssign = __webpack_require__(61);

    var _utilsObjectAssign2 = _interopRequireDefault(_utilsObjectAssign);

    /**
     * Check if value one is inside or equal to the of value
     *
     * @param {string} one
     * @param {string|array} of
     * @returns {boolean}
     */
    function isOneOf(one, of) {
      if (Array.isArray(of)) {
        return of.indexOf(one) >= 0;
      }
      return one === of;
    }

    var OverlayTrigger = _react2['default'].createClass({
      displayName: 'OverlayTrigger',

      mixins: [_OverlayMixin2['default']],

      propTypes: {
        trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['manual', 'click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),
        placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        delay: _react2['default'].PropTypes.number,
        delayShow: _react2['default'].PropTypes.number,
        delayHide: _react2['default'].PropTypes.number,
        defaultOverlayShown: _react2['default'].PropTypes.bool,
        overlay: _react2['default'].PropTypes.node.isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          placement: 'right',
          trigger: ['hover', 'focus']
        };
      },

      getInitialState: function getInitialState() {
        return {
          isOverlayShown: this.props.defaultOverlayShown == null ? false : this.props.defaultOverlayShown,
          overlayLeft: null,
          overlayTop: null
        };
      },

      show: function show() {
        this.setState({
          isOverlayShown: true
        }, function () {
          this.updateOverlayPosition();
        });
      },

      hide: function hide() {
        this.setState({
          isOverlayShown: false
        });
      },

      toggle: function toggle() {
        if (this.state.isOverlayShown) {
          this.hide();
        } else {
          this.show();
        }
      },

      renderOverlay: function renderOverlay() {
        if (!this.state.isOverlayShown) {
          return _react2['default'].createElement('span', null);
        }

        return _react.cloneElement(this.props.overlay, {
          onRequestHide: this.hide,
          placement: this.props.placement,
          positionLeft: this.state.overlayLeft,
          positionTop: this.state.overlayTop
        });
      },

      render: function render() {
        var child = _react2['default'].Children.only(this.props.children);
        if (this.props.trigger === 'manual') {
          return child;
        }

        var props = {};

        props.onClick = _utilsCreateChainedFunction2['default'](child.props.onClick, this.props.onClick);
        if (isOneOf('click', this.props.trigger)) {
          props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);
        }

        if (isOneOf('hover', this.props.trigger)) {
          props.onMouseOver = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onMouseOver);
          props.onMouseOut = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onMouseOut);
        }

        if (isOneOf('focus', this.props.trigger)) {
          props.onFocus = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onFocus);
          props.onBlur = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onBlur);
        }

        return _react.cloneElement(child, props);
      },

      componentWillUnmount: function componentWillUnmount() {
        clearTimeout(this._hoverDelay);
      },

      componentDidMount: function componentDidMount() {
        if (this.props.defaultOverlayShown) {
          this.updateOverlayPosition();
        }
      },

      handleDelayedShow: function handleDelayedShow() {
        if (this._hoverDelay != null) {
          clearTimeout(this._hoverDelay);
          this._hoverDelay = null;
          return;
        }

        var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

        if (!delay) {
          this.show();
          return;
        }

        this._hoverDelay = setTimeout((function () {
          this._hoverDelay = null;
          this.show();
        }).bind(this), delay);
      },

      handleDelayedHide: function handleDelayedHide() {
        if (this._hoverDelay != null) {
          clearTimeout(this._hoverDelay);
          this._hoverDelay = null;
          return;
        }

        var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

        if (!delay) {
          this.hide();
          return;
        }

        this._hoverDelay = setTimeout((function () {
          this._hoverDelay = null;
          this.hide();
        }).bind(this), delay);
      },

      updateOverlayPosition: function updateOverlayPosition() {
        if (!this.isMounted()) {
          return;
        }

        var pos = this.calcOverlayPosition();

        this.setState({
          overlayLeft: pos.left,
          overlayTop: pos.top
        });
      },

      calcOverlayPosition: function calcOverlayPosition() {
        var childOffset = this.getPosition();

        var overlayNode = this.getOverlayDOMNode();
        var overlayHeight = overlayNode.offsetHeight;
        var overlayWidth = overlayNode.offsetWidth;

        switch (this.props.placement) {
          case 'right':
            return {
              top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
              left: childOffset.left + childOffset.width
            };
          case 'left':
            return {
              top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
              left: childOffset.left - overlayWidth
            };
          case 'top':
            return {
              top: childOffset.top - overlayHeight,
              left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
            };
          case 'bottom':
            return {
              top: childOffset.top + childOffset.height,
              left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
            };
          default:
            throw new Error('calcOverlayPosition(): No such placement of "' + this.props.placement + '" found.');
        }
      },

      getPosition: function getPosition() {
        var node = _reactDom2['default'].findDOMNode(this);
        var container = this.getContainerDOMNode();

        var offset = container.tagName === 'BODY' ? _utilsDomUtils2['default'].getOffset(node) : _utilsDomUtils2['default'].getPosition(node, container);

        return _utilsObjectAssign2['default']({}, offset, {
          height: node.offsetHeight,
          width: node.offsetWidth
        });
      }
    });

    exports['default'] = OverlayTrigger;
    module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _utilsCustomPropTypes = __webpack_require__(56);

    var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);

    var _utilsDomUtils = __webpack_require__(55);

    var _utilsDomUtils2 = _interopRequireDefault(_utilsDomUtils);

    exports['default'] = {
      propTypes: {
        container: _utilsCustomPropTypes2['default'].mountable
      },

      componentWillUnmount: function componentWillUnmount() {
        this._unrenderOverlay();
        if (this._overlayTarget) {
          this.getContainerDOMNode().removeChild(this._overlayTarget);
          this._overlayTarget = null;
        }
      },

      componentDidUpdate: function componentDidUpdate() {
        this._renderOverlay();
      },

      componentDidMount: function componentDidMount() {
        this._renderOverlay();
      },

      _mountOverlayTarget: function _mountOverlayTarget() {
        this._overlayTarget = document.createElement('div');
        this.getContainerDOMNode().appendChild(this._overlayTarget);
      },

      _renderOverlay: function _renderOverlay() {
        if (!this._overlayTarget) {
          this._mountOverlayTarget();
        }

        var overlay = this.renderOverlay();

        // Save reference to help testing
        if (overlay !== null) {
          this._overlayInstance = _reactDom2['default'].render(overlay, this._overlayTarget);
        } else {
          // Unrender if the component is null for transitions to null
          this._unrenderOverlay();
        }
      },

      _unrenderOverlay: function _unrenderOverlay() {
        _reactDom2['default'].unmountComponentAtNode(this._overlayTarget);
        this._overlayInstance = null;
      },

      getOverlayDOMNode: function getOverlayDOMNode() {
        if (!this.isMounted()) {
          throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
        }

        if (this._overlayInstance) {
          return _reactDom2['default'].findDOMNode(this._overlayInstance);
        }

        return null;
      },

      getContainerDOMNode: function getContainerDOMNode() {
        return _reactDom2['default'].findDOMNode(this.props.container) || _utilsDomUtils2['default'].ownerDocument(this).body;
      }
    };
    module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var PageHeader = _react2['default'].createClass({
      displayName: 'PageHeader',

      render: function render() {
        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'page-header') }),
          _react2['default'].createElement(
            'h1',
            null,
            this.props.children
          )
        );
      }
    });

    exports['default'] = PageHeader;
    module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _CollapsibleMixin = __webpack_require__(17);

    var _CollapsibleMixin2 = _interopRequireDefault(_CollapsibleMixin);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var Panel = _react2['default'].createClass({
      displayName: 'Panel',

      mixins: [_BootstrapMixin2['default'], _CollapsibleMixin2['default']],

      propTypes: {
        collapsable: _react2['default'].PropTypes.bool,
        onSelect: _react2['default'].PropTypes.func,
        header: _react2['default'].PropTypes.node,
        id: _react2['default'].PropTypes.string,
        footer: _react2['default'].PropTypes.node,
        eventKey: _react2['default'].PropTypes.any
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'panel',
          bsStyle: 'default'
        };
      },

      handleSelect: function handleSelect(e) {
        e.selected = true;

        if (this.props.onSelect) {
          this.props.onSelect(e, this.props.eventKey);
        } else {
          e.preventDefault();
        }

        if (e.selected) {
          this.handleToggle();
        }
      },

      handleToggle: function handleToggle() {
        this.setState({ expanded: !this.state.expanded });
      },

      getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
        return _reactDom2['default'].findDOMNode(this.refs.panel).scrollHeight;
      },

      getCollapsibleDOMNode: function getCollapsibleDOMNode() {
        if (!this.isMounted() || !this.refs || !this.refs.panel) {
          return null;
        }

        return _reactDom2['default'].findDOMNode(this.refs.panel);
      },

      render: function render() {
        var classes = this.getBsClassSet();

        return _react2['default'].createElement(
          'div',
          _extends({}, _filterUnsupportedDOMProperties(this.props), {
            className: _classnames2['default'](this.props.className, classes),
            id: this.props.collapsable ? null : this.props.id, onSelect: null }),
          this.renderHeading(),
          this.props.collapsable ? this.renderCollapsableBody() : this.renderBody(),
          this.renderFooter()
        );
      },

      renderCollapsableBody: function renderCollapsableBody() {
        var collapseClass = this.prefixClass('collapse');

        return _react2['default'].createElement(
          'div',
          {
            className: _classnames2['default'](this.getCollapsibleClassSet(collapseClass)),
            id: this.props.id,
            ref: 'panel',
            'aria-expanded': this.isExpanded() ? 'true' : 'false' },
          this.renderBody()
        );
      },

      renderBody: function renderBody() {
        var allChildren = this.props.children;
        var bodyElements = [];
        var panelBodyChildren = [];
        var bodyClass = this.prefixClass('body');

        function getProps() {
          return { key: bodyElements.length };
        }

        function addPanelChild(child) {
          bodyElements.push(_react.cloneElement(child, getProps()));
        }

        function addPanelBody(children) {
          bodyElements.push(_react2['default'].createElement(
            'div',
            _extends({ className: bodyClass }, getProps()),
            children
          ));
        }

        function maybeRenderPanelBody() {
          if (panelBodyChildren.length === 0) {
            return;
          }

          addPanelBody(panelBodyChildren);
          panelBodyChildren = [];
        }

        // Handle edge cases where we should not iterate through children.
        if (!Array.isArray(allChildren) || allChildren.length === 0) {
          if (this.shouldRenderFill(allChildren)) {
            addPanelChild(allChildren);
          } else {
            addPanelBody(allChildren);
          }
        } else {

          allChildren.forEach((function (child) {
            if (this.shouldRenderFill(child)) {
              maybeRenderPanelBody();

              // Separately add the filled element.
              addPanelChild(child);
            } else {
              panelBodyChildren.push(child);
            }
          }).bind(this));

          maybeRenderPanelBody();
        }

        return bodyElements;
      },

      shouldRenderFill: function shouldRenderFill(child) {
        return _react2['default'].isValidElement(child) && child.props.fill != null;
      },

      renderHeading: function renderHeading() {
        var header = this.props.header;

        if (!header) {
          return null;
        }

        if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
          header = this.props.collapsable ? this.renderCollapsableTitle(header) : header;
        } else if (this.props.collapsable) {

          header = _react.cloneElement(header, {
            className: _classnames2['default'](this.prefixClass('title')),
            children: this.renderAnchor(header.props.children)
          });
        } else {

          header = _react.cloneElement(header, {
            className: _classnames2['default'](this.prefixClass('title'))
          });
        }

        return _react2['default'].createElement(
          'div',
          { className: this.prefixClass('heading') },
          header
        );
      },

      renderAnchor: function renderAnchor(header) {
        return _react2['default'].createElement(
          'a',
          {
            href: '#' + (this.props.id || ''),
            className: this.isExpanded() ? null : 'bt3-collapsed',
            'aria-expanded': this.isExpanded() ? 'true' : 'false',
            onClick: this.handleSelect },
          header
        );
      },

      renderCollapsableTitle: function renderCollapsableTitle(header) {
        return _react2['default'].createElement(
          'h4',
          { className: this.prefixClass('title') },
          this.renderAnchor(header)
        );
      },

      renderFooter: function renderFooter() {
        if (!this.props.footer) {
          return null;
        }

        return _react2['default'].createElement(
          'div',
          { className: this.prefixClass('footer') },
          this.props.footer
        );
      }
    });

    exports['default'] = Panel;
    module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    /* eslint react/prop-types: [1, {ignore: ["children", "className", "bsStyle"]}]*/
    /* BootstrapMixin contains `bsStyle` type validation */

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var PanelGroup = _react2['default'].createClass({
      displayName: 'PanelGroup',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        collapsable: _react2['default'].PropTypes.bool,
        accordion: _react2['default'].PropTypes.bool,
        activeKey: _react2['default'].PropTypes.any,
        defaultActiveKey: _react2['default'].PropTypes.any,
        onSelect: _react2['default'].PropTypes.func
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'panel-group'
        };
      },

      getInitialState: function getInitialState() {
        var defaultActiveKey = this.props.defaultActiveKey;

        return {
          activeKey: defaultActiveKey
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();
        return _react2['default'].createElement(
          'div',
          _extends({}, _filterUnsupportedDOMProperties(this.props), {
            className: _classnames2['default'](this.props.className, classes), onSelect: null
          }),
          _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPanel)
        );
      },

      renderPanel: function renderPanel(child, index) {
        var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

        var props = {
          bsStyle: child.props.bsStyle || this.props.bsStyle,
          key: child.key ? child.key : index,
          ref: child.ref
        };

        if (this.props.accordion) {
          props.collapsable = true;
          props.expanded = child.props.eventKey === activeKey;
          props.onSelect = this.handleSelect;
        }

        return _react.cloneElement(child, props);
      },

      shouldComponentUpdate: function shouldComponentUpdate() {
        // Defer any updates to this component during the `onSelect` handler.
        return !this._isChanging;
      },

      handleSelect: function handleSelect(e, key) {
        e.preventDefault();

        if (this.props.onSelect) {
          this._isChanging = true;
          this.props.onSelect(key);
          this._isChanging = false;
        }

        if (this.state.activeKey === key) {
          key = null;
        }

        this.setState({
          activeKey: key
        });
      }
    });

    exports['default'] = PanelGroup;
    module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var PageItem = _react2['default'].createClass({
      displayName: 'PageItem',

      propTypes: {
        href: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string,
        disabled: _react2['default'].PropTypes.bool,
        previous: _react2['default'].PropTypes.bool,
        next: _react2['default'].PropTypes.bool,
        onSelect: _react2['default'].PropTypes.func,
        eventKey: _react2['default'].PropTypes.any
      },

      getDefaultProps: function getDefaultProps() {
        return {
          href: '#'
        };
      },

      render: function render() {
        var classes = {
          'bt3-disabled': this.props.disabled,
          'bt3-previous': this.props.previous,
          'bt3-next': this.props.next
        };

        return _react2['default'].createElement(
          'li',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, classes) }),
          _react2['default'].createElement(
            'a',
            {
              href: this.props.href,
              title: this.props.title,
              target: this.props.target,
              onClick: this.handleSelect,
              ref: 'anchor' },
            this.props.children
          )
        );
      },

      handleSelect: function handleSelect(e) {
        if (this.props.onSelect) {
          e.preventDefault();

          if (!this.props.disabled) {
            this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
          }
        }
      }
    });

    exports['default'] = PageItem;
    module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var Pager = _react2['default'].createClass({
      displayName: 'Pager',

      propTypes: {
        onSelect: _react2['default'].PropTypes.func
      },

      render: function render() {
        return _react2['default'].createElement(
          'ul',
          _extends({}, this.props, {
            className: _classnames2['default'](this.props.className, 'pager') }),
          _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPageItem)
        );
      },

      renderPageItem: function renderPageItem(child, index) {
        return _react.cloneElement(child, {
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
          key: child.key ? child.key : index
        });
      }
    });

    exports['default'] = Pager;
    module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var Popover = _react2['default'].createClass({
      displayName: 'Popover',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        positionLeft: _react2['default'].PropTypes.number,
        positionTop: _react2['default'].PropTypes.number,
        arrowOffsetLeft: _react2['default'].PropTypes.number,
        arrowOffsetTop: _react2['default'].PropTypes.number,
        title: _react2['default'].PropTypes.node
      },

      getDefaultProps: function getDefaultProps() {
        return {
          placement: 'right'
        };
      },

      render: function render() {
        var _classes;

        var classes = (_classes = {
          'bt3-popover': true }, _defineProperty(_classes, this.props.placement, true), _defineProperty(_classes, 'bt3-in', this.props.positionLeft != null || this.props.positionTop != null), _classes);

        var style = {
          'left': this.props.positionLeft,
          'top': this.props.positionTop,
          'display': 'block'
        };

        var arrowStyle = {
          'left': this.props.arrowOffsetLeft,
          'top': this.props.arrowOffsetTop
        };

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes), style: style, title: null }),
          _react2['default'].createElement('div', { className: 'bt3-arrow', style: arrowStyle }),
          this.props.title ? this.renderTitle() : null,
          _react2['default'].createElement(
            'div',
            { className: 'bt3-popover-content' },
            this.props.children
          )
        );
      },

      renderTitle: function renderTitle() {
        return _react2['default'].createElement(
          'h3',
          { className: 'bt3-popover-title' },
          this.props.title
        );
      }
    });

    exports['default'] = Popover;
    module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _Interpolate = __webpack_require__(25);

    var _Interpolate2 = _interopRequireDefault(_Interpolate);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var ProgressBar = _react2['default'].createClass({
      displayName: 'ProgressBar',

      propTypes: {
        min: _react2['default'].PropTypes.number,
        now: _react2['default'].PropTypes.number,
        max: _react2['default'].PropTypes.number,
        label: _react2['default'].PropTypes.node,
        srOnly: _react2['default'].PropTypes.bool,
        striped: _react2['default'].PropTypes.bool,
        active: _react2['default'].PropTypes.bool
      },

      mixins: [_BootstrapMixin2['default']],

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'progress-bar',
          min: 0,
          max: 100
        };
      },

      getPercentage: function getPercentage(now, min, max) {
        var roundPrecision = 1000;
        return Math.round((now - min) / (max - min) * 100 * roundPrecision) / roundPrecision;
      },

      render: function render() {
        var classes = {
          'bt3-progress': true
        };

        if (this.props.active) {
          classes['progress-striped'] = true;
          classes.active = true;
        } else if (this.props.striped) {
          classes['progress-striped'] = true;
        }

        if (!_utilsValidComponentChildren2['default'].hasValidComponent(this.props.children)) {
          if (!this.props.isChild) {
            return _react2['default'].createElement(
              'div',
              _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
              this.renderProgressBar()
            );
          } else {
            return this.renderProgressBar();
          }
        } else {
          return _react2['default'].createElement(
            'div',
            _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
            _utilsValidComponentChildren2['default'].map(this.props.children, this.renderChildBar)
          );
        }
      },

      renderChildBar: function renderChildBar(child, index) {
        return _react.cloneElement(child, {
          isChild: true,
          key: child.key ? child.key : index
        });
      },

      renderProgressBar: function renderProgressBar() {
        var percentage = this.getPercentage(this.props.now, this.props.min, this.props.max);

        var label = undefined;

        if (typeof this.props.label === 'string') {
          label = this.renderLabel(percentage);
        } else if (this.props.label) {
          label = this.props.label;
        }

        if (this.props.srOnly) {
          label = this.renderScreenReaderOnlyLabel(label);
        }

        var classes = this.getBsClassSet();

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes), role: 'progressbar',
            style: { width: percentage + '%' },
            'aria-valuenow': this.props.now,
            'aria-valuemin': this.props.min,
            'aria-valuemax': this.props.max }),
          label
        );
      },

      renderLabel: function renderLabel(percentage) {
        var InterpolateClass = this.props.interpolateClass || _Interpolate2['default'];

        return _react2['default'].createElement(
          InterpolateClass,
          {
            now: this.props.now,
            min: this.props.min,
            max: this.props.max,
            percent: percentage,
            bsStyle: this.props.bsStyle },
          this.props.label
        );
      },

      renderScreenReaderOnlyLabel: function renderScreenReaderOnlyLabel(label) {
        return _react2['default'].createElement(
          'span',
          { className: 'sr-only' },
          label
        );
      }
    });

    exports['default'] = ProgressBar;
    module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var Row = _react2['default'].createClass({
      displayName: 'Row',

      propTypes: {
        componentClass: _react2['default'].PropTypes.node.isRequired
      },

      getDefaultProps: function getDefaultProps() {
        return {
          componentClass: 'div'
        };
      },

      render: function render() {
        var ComponentClass = this.props.componentClass;

        return _react2['default'].createElement(
          ComponentClass,
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'row') }),
          this.props.children
        );
      }
    });

    exports['default'] = Row;
    module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    /* eslint react/prop-types: [1, {ignore: ["children", "className", "bsSize"]}]*/
    /* BootstrapMixin contains `bsSize` type validation */

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _DropdownStateMixin = __webpack_require__(20);

    var _DropdownStateMixin2 = _interopRequireDefault(_DropdownStateMixin);

    var _Button = __webpack_require__(8);

    var _Button2 = _interopRequireDefault(_Button);

    var _ButtonGroup = __webpack_require__(9);

    var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

    var _DropdownMenu = __webpack_require__(19);

    var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

    var SplitButton = _react2['default'].createClass({
      displayName: 'SplitButton',

      mixins: [_BootstrapMixin2['default'], _DropdownStateMixin2['default']],

      propTypes: {
        pullRight: _react2['default'].PropTypes.bool,
        title: _react2['default'].PropTypes.node,
        href: _react2['default'].PropTypes.string,
        id: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string,
        dropdownTitle: _react2['default'].PropTypes.node,
        dropup: _react2['default'].PropTypes.bool,
        onClick: _react2['default'].PropTypes.func,
        onSelect: _react2['default'].PropTypes.func,
        disabled: _react2['default'].PropTypes.bool
      },

      getDefaultProps: function getDefaultProps() {
        return {
          dropdownTitle: 'Toggle dropdown'
        };
      },

      render: function render() {
        var groupClasses = {
          'bt3-open': this.state.open,
          'bt3-dropup': this.props.dropup
        };

        var button = _react2['default'].createElement(
          _Button2['default'],
          _extends({}, this.props, {
            ref: 'button',
            onClick: this.handleButtonClick,
            title: null,
            id: null }),
          this.props.title
        );

        var dropdownButton = _react2['default'].createElement(
          _Button2['default'],
          _extends({}, this.props, {
            ref: 'dropdownButton',
            className: _classnames2['default'](this.props.className, 'dropdown-toggle'),
            onClick: this.handleDropdownClick,
            title: null,
            href: null,
            target: null,
            id: null }),
          _react2['default'].createElement(
            'span',
            { className: 'sr-only' },
            this.props.dropdownTitle
          ),
          _react2['default'].createElement('span', { className: 'bt3-caret' }),
          _react2['default'].createElement(
            'span',
            { style: { letterSpacing: '-.3em' } },
            ' '
          )
        );

        return _react2['default'].createElement(
          _ButtonGroup2['default'],
          {
            bsSize: this.props.bsSize,
            className: _classnames2['default'](groupClasses),
            id: this.props.id },
          button,
          dropdownButton,
          _react2['default'].createElement(
            _DropdownMenu2['default'],
            {
              ref: 'menu',
              onSelect: this.handleOptionSelect,
              'aria-labelledby': this.props.id,
              pullRight: this.props.pullRight },
            this.props.children
          )
        );
      },

      handleButtonClick: function handleButtonClick(e) {
        if (this.state.open) {
          this.setDropdownState(false);
        }

        if (this.props.onClick) {
          this.props.onClick(e, this.props.href, this.props.target);
        }
      },

      handleDropdownClick: function handleDropdownClick(e) {
        e.preventDefault();

        this.setDropdownState(!this.state.open);
      },

      handleOptionSelect: function handleOptionSelect(key) {
        if (this.props.onSelect) {
          this.props.onSelect(key);
        }

        this.setDropdownState(false);
      }
    });

    exports['default'] = SplitButton;
    module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _utilsCreateChainedFunction = __webpack_require__(59);

    var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var SubNav = _react2['default'].createClass({
      displayName: 'SubNav',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        onSelect: _react2['default'].PropTypes.func,
        active: _react2['default'].PropTypes.bool,
        activeHref: _react2['default'].PropTypes.string,
        activeKey: _react2['default'].PropTypes.any,
        disabled: _react2['default'].PropTypes.bool,
        eventKey: _react2['default'].PropTypes.any,
        href: _react2['default'].PropTypes.string,
        title: _react2['default'].PropTypes.string,
        text: _react2['default'].PropTypes.node,
        target: _react2['default'].PropTypes.string
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'nav'
        };
      },

      handleClick: function handleClick(e) {
        if (this.props.onSelect) {
          e.preventDefault();

          if (!this.props.disabled) {
            this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
          }
        }
      },

      isActive: function isActive() {
        return this.isChildActive(this);
      },

      isChildActive: function isChildActive(child) {
        var _this = this;

        if (child.props.active) {
          return true;
        }

        if (this.props.activeKey != null && this.props.activeKey === child.props.eventKey) {
          return true;
        }

        if (this.props.activeHref != null && this.props.activeHref === child.props.href) {
          return true;
        }

        if (child.props.children) {
          var _ret = (function () {
            var isActive = false;

            _utilsValidComponentChildren2['default'].forEach(child.props.children, function (grandchild) {
              if (this.isChildActive(grandchild)) {
                isActive = true;
              }
            }, _this);

            return {
              v: isActive
            };
          })();

          if (typeof _ret === 'object') return _ret.v;
        }

        return false;
      },

      getChildActiveProp: function getChildActiveProp(child) {
        if (child.props.active) {
          return true;
        }
        if (this.props.activeKey != null) {
          if (child.props.eventKey === this.props.activeKey) {
            return true;
          }
        }
        if (this.props.activeHref != null) {
          if (child.props.href === this.props.activeHref) {
            return true;
          }
        }

        return child.props.active;
      },

      render: function render() {
        var classes = {
          'bt3-active': this.isActive(),
          'bt3-disabled': this.props.disabled
        };

        return _react2['default'].createElement(
          'li',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          _react2['default'].createElement(
            'a',
            {
              href: this.props.href,
              title: this.props.title,
              target: this.props.target,
              onClick: this.handleClick,
              ref: 'anchor' },
            this.props.text
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'nav' },
            _utilsValidComponentChildren2['default'].map(this.props.children, this.renderNavItem)
          )
        );
      },

      renderNavItem: function renderNavItem(child, index) {
        return _react.cloneElement(child, {
          active: this.getChildActiveProp(child),
          onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, this.props.onSelect),
          key: child.key ? child.key : index
        });
      }
    });

    exports['default'] = SubNav;
    module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _utilsValidComponentChildren = __webpack_require__(54);

    var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

    var _Nav = __webpack_require__(31);

    var _Nav2 = _interopRequireDefault(_Nav);

    var _NavItem = __webpack_require__(1);

    var _NavItem2 = _interopRequireDefault(_NavItem);

    function getDefaultActiveKeyFromChildren(children) {
      var defaultActiveKey = undefined;

      _utilsValidComponentChildren2['default'].forEach(children, function (child) {
        if (defaultActiveKey == null) {
          defaultActiveKey = child.props.eventKey;
        }
      });

      return defaultActiveKey;
    }

    var TabbedArea = _react2['default'].createClass({
      displayName: 'TabbedArea',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        activeKey: _react2['default'].PropTypes.any,
        defaultActiveKey: _react2['default'].PropTypes.any,
        bsStyle: _react2['default'].PropTypes.oneOf(['tabs', 'pills']),
        animation: _react2['default'].PropTypes.bool,
        id: _react2['default'].PropTypes.string,
        onSelect: _react2['default'].PropTypes.func
      },

      getDefaultProps: function getDefaultProps() {
        return {
          bsStyle: 'tabs',
          animation: true
        };
      },

      getInitialState: function getInitialState() {
        var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : getDefaultActiveKeyFromChildren(this.props.children);

        return {
          activeKey: defaultActiveKey,
          previousActiveKey: null
        };
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
          this.setState({
            previousActiveKey: this.props.activeKey
          });
        }
      },

      handlePaneAnimateOutEnd: function handlePaneAnimateOutEnd() {
        this.setState({
          previousActiveKey: null
        });
      },

      render: function render() {
        var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

        function renderTabIfSet(child) {
          return child.props.tab != null ? this.renderTab(child) : null;
        }

        var nav = _react2['default'].createElement(
          _Nav2['default'],
          _extends({}, this.props, { activeKey: activeKey, onSelect: this.handleSelect, ref: 'tabs' }),
          _utilsValidComponentChildren2['default'].map(this.props.children, renderTabIfSet, this)
        );

        return _react2['default'].createElement(
          'div',
          null,
          nav,
          _react2['default'].createElement(
            'div',
            { id: this.props.id, className: 'bt3-tab-content', ref: 'panes' },
            _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPane)
          )
        );
      },

      getActiveKey: function getActiveKey() {
        return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
      },

      renderPane: function renderPane(child, index) {
        var activeKey = this.getActiveKey();

        return _react.cloneElement(child, {
          active: child.props.eventKey === activeKey && (this.state.previousActiveKey == null || !this.props.animation),
          key: child.key ? child.key : index,
          animation: this.props.animation,
          onAnimateOutEnd: this.state.previousActiveKey != null && child.props.eventKey === this.state.previousActiveKey ? this.handlePaneAnimateOutEnd : null
        });
      },

      renderTab: function renderTab(child) {
        var _child$props = child.props;
        var eventKey = _child$props.eventKey;
        var className = _child$props.className;
        var tab = _child$props.tab;

        return _react2['default'].createElement(
          _NavItem2['default'],
          {
            ref: 'tab' + eventKey,
            eventKey: eventKey,
            className: className },
          tab
        );
      },

      shouldComponentUpdate: function shouldComponentUpdate() {
        // Defer any updates to this component during the `onSelect` handler.
        return !this._isChanging;
      },

      handleSelect: function handleSelect(key) {
        if (this.props.onSelect) {
          this._isChanging = true;
          this.props.onSelect(key);
          this._isChanging = false;
        } else if (key !== this.getActiveKey()) {
          this.setState({
            activeKey: key,
            previousActiveKey: this.getActiveKey()
          });
        }
      }
    });

    exports['default'] = TabbedArea;
    module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var Table = _react2['default'].createClass({
      displayName: 'Table',

      propTypes: {
        striped: _react2['default'].PropTypes.bool,
        bordered: _react2['default'].PropTypes.bool,
        condensed: _react2['default'].PropTypes.bool,
        hover: _react2['default'].PropTypes.bool,
        responsive: _react2['default'].PropTypes.bool
      },

      render: function render() {
        var classes = {
          'bt3-table': true,
          'bt3-table-striped': this.props.striped,
          'bt3-table-bordered': this.props.bordered,
          'bt3-table-condensed': this.props.condensed,
          'bt3-table-hover': this.props.hover
        };
        var table = _react2['default'].createElement(
          'table',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );

        return this.props.responsive ? _react2['default'].createElement(
          'div',
          { className: 'table-responsive' },
          table
        ) : table;
      }
    });

    exports['default'] = Table;
    module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _utilsTransitionEvents = __webpack_require__(60);

    var _utilsTransitionEvents2 = _interopRequireDefault(_utilsTransitionEvents);

    var TabPane = _react2['default'].createClass({
      displayName: 'TabPane',

      propTypes: {
        active: _react2['default'].PropTypes.bool,
        animation: _react2['default'].PropTypes.bool,
        onAnimateOutEnd: _react2['default'].PropTypes.func
      },

      getDefaultProps: function getDefaultProps() {
        return {
          animation: true
        };
      },

      getInitialState: function getInitialState() {
        return {
          animateIn: false,
          animateOut: false
        };
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props.animation) {
          if (!this.state.animateIn && nextProps.active && !this.props.active) {
            this.setState({
              animateIn: true
            });
          } else if (!this.state.animateOut && !nextProps.active && this.props.active) {
            this.setState({
              animateOut: true
            });
          }
        }
      },

      componentDidUpdate: function componentDidUpdate() {
        if (this.state.animateIn) {
          setTimeout(this.startAnimateIn, 0);
        }
        if (this.state.animateOut) {
          _utilsTransitionEvents2['default'].addEndEventListener(_reactDom2['default'].findDOMNode(this), this.stopAnimateOut);
        }
      },

      startAnimateIn: function startAnimateIn() {
        if (this.isMounted()) {
          this.setState({
            animateIn: false
          });
        }
      },

      stopAnimateOut: function stopAnimateOut() {
        if (this.isMounted()) {
          this.setState({
            animateOut: false
          });

          if (this.props.onAnimateOutEnd) {
            this.props.onAnimateOutEnd();
          }
        }
      },

      render: function render() {
        var classes = {
          'bt3-tab-pane': true,
          'bt3-fade': true,
          'bt3-active': this.props.active || this.state.animateOut,
          'bt3-in': this.props.active && !this.state.animateIn
        };

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = TabPane;
    module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var _filterUnsupportedDOMProperties = __webpack_require__(67);

    var Tooltip = _react2['default'].createClass({
      displayName: 'Tooltip',

      mixins: [_BootstrapMixin2['default']],

      propTypes: {
        placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        positionLeft: _react2['default'].PropTypes.number,
        positionTop: _react2['default'].PropTypes.number,
        arrowOffsetLeft: _react2['default'].PropTypes.number,
        arrowOffsetTop: _react2['default'].PropTypes.number
      },

      getDefaultProps: function getDefaultProps() {
        return {
          placement: 'right'
        };
      },

      render: function render() {
        var _classes;

        var classes = (_classes = {
          'bt3-tooltip': true }, _defineProperty(_classes, 'bt3-' + this.props.placement, true), _defineProperty(_classes, 'bt3-in', this.props.positionLeft != null || this.props.positionTop != null), _classes);

        var style = {
          'left': this.props.positionLeft,
          'top': this.props.positionTop
        };

        var arrowStyle = {
          'left': this.props.arrowOffsetLeft,
          'top': this.props.arrowOffsetTop
        };

        return _react2['default'].createElement(
          'div',
          _extends({}, _filterUnsupportedDOMProperties(this.props), {
            className: _classnames2['default'](this.props.className, classes), style: style
          }),
          _react2['default'].createElement('div', { className: 'bt3-tooltip-arrow', style: arrowStyle }),
          _react2['default'].createElement(
            'div',
            { className: 'bt3-tooltip-inner' },
            this.props.children
          )
        );
      }
    });

    exports['default'] = Tooltip;
    module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _BootstrapMixin = __webpack_require__(6);

    var _BootstrapMixin2 = _interopRequireDefault(_BootstrapMixin);

    var Well = _react2['default'].createClass({
      displayName: 'Well',

      mixins: [_BootstrapMixin2['default']],

      getDefaultProps: function getDefaultProps() {
        return {
          bsClass: 'well'
        };
      },

      render: function render() {
        var classes = this.getBsClassSet();

        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
          this.props.children
        );
      }
    });

    exports['default'] = Well;
    module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var styleMaps = {
      CLASSES: {
        'alert': 'bt3-alert',
        'button': 'bt3-btn',
        'button-group': 'bt3-btn-group',
        'button-toolbar': 'bt3-btn-toolbar',
        'column': 'bt3-col',
        'input-group': 'bt3-input-group',
        'form': 'bt3-form',
        'glyphicon': 'bt3-glyphicon',
        'label': 'bt3-label',
        'list-group-item': 'bt3-list-group-item',
        'panel': 'bt3-panel',
        'panel-group': 'bt3-panel-group',
        'progress-bar': 'bt3-progress-bar',
        'nav': 'bt3-nav',
        'navbar': 'bt3-navbar',
        'modal': 'bt3-modal',
        'row': 'bt3-row',
        'well': 'bt3-well'
      },
      STYLES: {
        'default': 'default',
        'primary': 'primary',
        'success': 'success',
        'info': 'info',
        'warning': 'warning',
        'danger': 'danger',
        'link': 'link',
        'inline': 'inline',
        'tabs': 'tabs',
        'pills': 'pills'
      },
      addStyle: function addStyle(name) {
        styleMaps.STYLES[name] = name;
      },
      SIZES: {
        'large': 'lg',
        'medium': 'md',
        'small': 'sm',
        'xsmall': 'xs'
      },
      GLYPHS: ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope', 'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film', 'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal', 'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox', 'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off', 'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print', 'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center', 'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video', 'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward', 'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward', 'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign', 'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign', 'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment', 'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open', 'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down', 'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up', 'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip', 'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt', 'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand', 'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved', 'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open', 'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video', 'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark', 'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file', 'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent', 'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'yen', 'ruble', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical', 'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top', 'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right', 'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left', 'menu-right', 'menu-down', 'menu-up']
    };

    exports['default'] = styleMaps;
    module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

    module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    /**
     * Maps children that are typically specified as `props.children`,
     * but only iterates over children that are "valid components".
     *
     * The mapFunction provided index will be normalised to the components mapped,
     * so an invalid component would not increase the index.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} mapFunction.
     * @param {*} mapContext Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapValidComponents(children, func, context) {
      var index = 0;

      return _react2['default'].Children.map(children, function (child) {
        if (_react2['default'].isValidElement(child)) {
          var lastIndex = index;
          index++;
          return func.call(context, child, lastIndex);
        }

        return child;
      });
    }

    /**
     * Iterates through children that are typically specified as `props.children`,
     * but only iterates over children that are "valid components".
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child with the index reflecting the position relative to "valid components".
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc.
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachValidComponents(children, func, context) {
      var index = 0;

      return _react2['default'].Children.forEach(children, function (child) {
        if (_react2['default'].isValidElement(child)) {
          func.call(context, child, index);
          index++;
        }
      });
    }

    /**
     * Count the number of "valid components" in the Children container.
     *
     * @param {?*} children Children tree container.
     * @returns {number}
     */
    function numberOfValidComponents(children) {
      var count = 0;

      _react2['default'].Children.forEach(children, function (child) {
        if (_react2['default'].isValidElement(child)) {
          count++;
        }
      });

      return count;
    }

    /**
     * Determine if the Child container has one or more "valid components".
     *
     * @param {?*} children Children tree container.
     * @returns {boolean}
     */
    function hasValidComponent(children) {
      var hasValid = false;

      _react2['default'].Children.forEach(children, function (child) {
        if (!hasValid && _react2['default'].isValidElement(child)) {
          hasValid = true;
        }
      });

      return hasValid;
    }

    exports['default'] = {
      map: mapValidComponents,
      forEach: forEachValidComponents,
      numberOf: numberOfValidComponents,
      hasValidComponent: hasValidComponent
    };
    module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _reactDom = __webpack_require__(66);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    /**
     * Get elements owner document
     *
     * @param {ReactComponent|HTMLElement} componentOrElement
     * @returns {HTMLElement}
     */
    function ownerDocument(componentOrElement) {
      var elem = _reactDom2['default'].findDOMNode(componentOrElement);
      return elem && elem.ownerDocument || document;
    }

    /**
     * Shortcut to compute element style
     *
     * @param {HTMLElement} elem
     * @returns {CssStyle}
     */
    function getComputedStyles(elem) {
      return ownerDocument(elem).defaultView.getComputedStyle(elem, null);
    }

    /**
     * Get elements offset
     *
     * TODO: REMOVE JQUERY!
     *
     * @param {HTMLElement} DOMNode
     * @returns {{top: number, left: number}}
     */
    function getOffset(DOMNode) {
      if (window.jQuery) {
        return window.jQuery(DOMNode).offset();
      }

      var docElem = ownerDocument(DOMNode).documentElement;
      var box = { top: 0, left: 0 };

      // If we don't have gBCR, just use 0,0 rather than error
      // BlackBerry 5, iOS 3 (original iPhone)
      if (typeof DOMNode.getBoundingClientRect !== 'undefined') {
        box = DOMNode.getBoundingClientRect();
      }

      return {
        top: box.top + window.pageYOffset - docElem.clientTop,
        left: box.left + window.pageXOffset - docElem.clientLeft
      };
    }

    /**
     * Get elements position
     *
     * TODO: REMOVE JQUERY!
     *
     * @param {HTMLElement} elem
     * @param {HTMLElement?} offsetParent
     * @returns {{top: number, left: number}}
     */
    function getPosition(elem, offsetParent) {
      if (window.jQuery) {
        return window.jQuery(elem).position();
      }

      var offset = undefined,
          parentOffset = { top: 0, left: 0 };

      // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
      if (getComputedStyles(elem).position === 'fixed') {
        // We assume that getBoundingClientRect is available when computed position is fixed
        offset = elem.getBoundingClientRect();
      } else {
        if (!offsetParent) {
          // Get *real* offsetParent
          offsetParent = offsetParentFunc(elem);
        }

        // Get correct offsets
        offset = getOffset(elem);
        if (offsetParent.nodeName !== 'HTML') {
          parentOffset = getOffset(offsetParent);
        }

        // Add offsetParent borders
        parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
        parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
      }

      // Subtract parent offsets and element margins
      return {
        top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
        left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
      };
    }

    /**
     * Get parent element
     *
     * @param {HTMLElement?} elem
     * @returns {HTMLElement}
     */
    function offsetParentFunc(elem) {
      var docElem = ownerDocument(elem).documentElement;
      var offsetParent = elem.offsetParent || docElem;

      while (offsetParent && (offsetParent.nodeName !== 'HTML' && getComputedStyles(offsetParent).position === 'static')) {
        offsetParent = offsetParent.offsetParent;
      }

      return offsetParent || docElem;
    }

    exports['default'] = {
      ownerDocument: ownerDocument,
      getComputedStyles: getComputedStyles,
      getOffset: getOffset,
      getPosition: getPosition,
      offsetParent: offsetParentFunc
    };
    module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var ANONYMOUS = '<<anonymous>>';

    var CustomPropTypes = {
      /**
       * Checks whether a prop provides a DOM element
       *
       * The element can be provided in two forms:
       * - Directly passed
       * - Or passed an object which has a `getDOMNode` method which will return the required DOM element
       *
       * @param props
       * @param propName
       * @param componentName
       * @returns {Error|undefined}
       */
      mountable: createMountableChecker(),
      /**
       * Checks whether a prop matches a key of an associated object
       *
       * @param props
       * @param propName
       * @param componentName
       * @returns {Error|undefined}
       */
      keyOf: createKeyOfChecker
    };

    /**
     * Create chain-able isRequired validator
     *
     * Largely copied directly from:
     *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
     */
    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName) {
        componentName = componentName || ANONYMOUS;
        if (props[propName] == null) {
          if (isRequired) {
            return new Error('Required prop `' + propName + '` was not specified in ' + '`' + componentName + '`.');
          }
        } else {
          return validate(props, propName, componentName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createMountableChecker() {
      function validate(props, propName, componentName) {
        if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
          return new Error('Invalid prop `' + propName + '` supplied to ' + '`' + componentName + '`, expected a DOM element or an object that has a `render` method');
        }
      }

      return createChainableTypeChecker(validate);
    }

    function createKeyOfChecker(obj) {
      function validate(props, propName, componentName) {
        var propValue = props[propName];
        if (!obj.hasOwnProperty(propValue)) {
          var valuesString = JSON.stringify(Object.keys(obj));
          return new Error('Invalid prop \'' + propName + '\' of value \'' + propValue + '\' ' + ('supplied to \'' + componentName + '\', expected one of ' + valuesString + '.'));
        }
      }
      return createChainableTypeChecker(validate);
    }

    exports['default'] = CustomPropTypes;
    module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /**
     * Copyright 2013-2014 Facebook, Inc.
     *
     * This file contains a modified version of:
     * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/EventListener.js
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * TODO: remove in favour of solution provided by:
     *  https://github.com/facebook/react/issues/285
     */

    /**
     * Does not take into account specific nature of platform.
     */
    var EventListener = {
      /**
       * Listen to DOM events during the bubble phase.
       *
       * @param {DOMEventTarget} target DOM element to register listener on.
       * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
       * @param {function} callback Callback function.
       * @return {object} Object with a `remove` method.
       */
      listen: function listen(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, false);
          return {
            remove: function remove() {
              target.removeEventListener(eventType, callback, false);
            }
          };
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventType, callback);
          return {
            remove: function remove() {
              target.detachEvent('on' + eventType, callback);
            }
          };
        }
      }
    };

    exports['default'] = EventListener;
    module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports['default'] = deprecationWarning;

    function deprecationWarning(oldname, newname, link) {
      if (false) {
        if (!window.console && typeof console.warn !== 'function') {
          return;
        }

        var message = '' + oldname + ' is deprecated. Use ' + newname + ' instead.';
        console.warn(message);

        if (link) {
          console.warn('You can read more about it here ' + link);
        }
      }
    }

    module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /**
     * Safe chained function
     *
     * Will only create a new function if needed,
     * otherwise will pass back existing functions or null.
     *
     * @param {function} one
     * @param {function} two
     * @returns {function|null}
     */
    function createChainedFunction(one, two) {
      var hasOne = typeof one === 'function';
      var hasTwo = typeof two === 'function';

      if (!hasOne && !hasTwo) {
        return null;
      }
      if (!hasOne) {
        return two;
      }
      if (!hasTwo) {
        return one;
      }

      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }

    exports['default'] = createChainedFunction;
    module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /**
     * Copyright 2013-2014, Facebook, Inc.
     * All rights reserved.
     *
     * This file contains a modified version of:
     * https://github.com/facebook/react/blob/v0.12.0/src/addons/transitions/ReactTransitionEvents.js
     *
     * This source code is licensed under the BSD-style license found here:
     * https://github.com/facebook/react/blob/v0.12.0/LICENSE
     * An additional grant of patent rights can be found here:
     * https://github.com/facebook/react/blob/v0.12.0/PATENTS
     */

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

    /**
     * EVENT_NAME_MAP is used to determine which event fired when a
     * transition/animation ends, based on the style property used to
     * define that event.
     */
    var EVENT_NAME_MAP = {
      transitionend: {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd'
      },

      animationend: {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
      }
    };

    var endEvents = [];

    function detectEvents() {
      var testEl = document.createElement('div');
      var style = testEl.style;

      // On some platforms, in particular some releases of Android 4.x,
      // the un-prefixed "animation" and "transition" properties are defined on the
      // style object but the events that fire will still be prefixed, so we need
      // to check if the un-prefixed events are useable, and if not remove them
      // from the map
      if (!('AnimationEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.animation;
      }

      if (!('TransitionEvent' in window)) {
        delete EVENT_NAME_MAP.transitionend.transition;
      }

      for (var baseEventName in EVENT_NAME_MAP) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            endEvents.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }

    if (canUseDOM) {
      detectEvents();
    }

    // We use the raw {add|remove}EventListener() call because EventListener
    // does not know how to remove event listeners and we really should
    // clean up. Also, these events are not triggered in older browsers
    // so we should be A-OK here.

    function addEventListener(node, eventName, eventListener) {
      node.addEventListener(eventName, eventListener, false);
    }

    function removeEventListener(node, eventName, eventListener) {
      node.removeEventListener(eventName, eventListener, false);
    }

    var ReactTransitionEvents = {
      addEndEventListener: function addEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
          // If CSS transitions are not supported, trigger an "end animation"
          // event immediately.
          window.setTimeout(eventListener, 0);
          return;
        }
        endEvents.forEach(function (endEvent) {
          addEventListener(node, endEvent, eventListener);
        });
      },

      removeEndEventListener: function removeEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
          return;
        }
        endEvents.forEach(function (endEvent) {
          removeEventListener(node, endEvent, eventListener);
        });
      }
    };

    exports['default'] = ReactTransitionEvents;
    module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /**
     * Copyright 2014, Facebook, Inc.
     * All rights reserved.
     *
     * This file contains an unmodified version of:
     * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/Object.assign.js
     *
     * This source code is licensed under the BSD-style license found here:
     * https://github.com/facebook/react/blob/v0.12.0/LICENSE
     * An additional grant of patent rights can be found here:
     * https://github.com/facebook/react/blob/v0.12.0/PATENTS
     */

    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

    function assign(target, sources) {
      if (target == null) {
        throw new TypeError('Object.assign target cannot be null or undefined');
      }

      var to = Object(target);
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
        var nextSource = arguments[nextIndex];
        if (nextSource == null) {
          continue;
        }

        var from = Object(nextSource);

        // We don't currently support accessors nor proxies. Therefore this
        // copy cannot throw. If we ever supported this then we must handle
        // exceptions and side-effects. We don't support symbols so they won't
        // be transferred.

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
      }

      return to;
    }

    exports['default'] = assign;
    module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _react = __webpack_require__(53);

    var _react2 = _interopRequireDefault(_react);

    var _classnames = __webpack_require__(63);

    var _classnames2 = _interopRequireDefault(_classnames);

    var FormGroup = (function (_React$Component) {
      function FormGroup() {
        _classCallCheck(this, FormGroup);

        if (_React$Component != null) {
          _React$Component.apply(this, arguments);
        }
      }

      _inherits(FormGroup, _React$Component);

      _createClass(FormGroup, [{
        key: 'render',
        value: function render() {
          var classes = {
            'bt3-form-group': !this.props.standalone,
            'bt3-has-feedback': this.props.hasFeedback,
            'bt3-has-success': this.props.bsStyle === 'success',
            'bt3-has-warning': this.props.bsStyle === 'warning',
            'bt3-has-error': this.props.bsStyle === 'error'
          };

          return _react2['default'].createElement(
            'div',
            { className: _classnames2['default'](classes, this.props.groupClassName) },
            this.props.children
          );
        }
      }]);

      return FormGroup;
    })(_react2['default'].Component);

    FormGroup.defaultProps = {
      standalone: false
    };

    FormGroup.propTypes = {
      standalone: _react2['default'].PropTypes.bool,
      hasFeedback: _react2['default'].PropTypes.bool,
      bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
      groupClassName: _react2['default'].PropTypes.string
    };

    exports['default'] = FormGroup;
    module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
      Copyright (c) 2015 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    function classNames() {
        var classes = '';
        var arg;

        for (var i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            if (!arg) {
                continue;
            }

            if ('string' === typeof arg || 'number' === typeof arg) {
                classes += ' ' + arg;
            } else if (Object.prototype.toString.call(arg) === '[object Array]') {
                classes += ' ' + classNames.apply(null, arg);
            } else if ('object' === typeof arg) {
                for (var key in arg) {
                    if (!arg.hasOwnProperty(key) || !arg[key]) {
                        continue;
                    }
                    classes += ' ' + key;
                }
            }
        }
        return classes.substr(1);
    }

    // safely export classNames for node / browserify
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = classNames;
    }

    // safely export classNames for RequireJS
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

    /**
     * Copyright 2013-2015, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ReactTransitionEvents
     */

    'use strict';

    var ExecutionEnvironment = __webpack_require__(65);

    /**
     * EVENT_NAME_MAP is used to determine which event fired when a
     * transition/animation ends, based on the style property used to
     * define that event.
     */
    var EVENT_NAME_MAP = {
      transitionend: {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd'
      },

      animationend: {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
      }
    };

    var endEvents = [];

    function detectEvents() {
      var testEl = document.createElement('div');
      var style = testEl.style;

      // On some platforms, in particular some releases of Android 4.x,
      // the un-prefixed "animation" and "transition" properties are defined on the
      // style object but the events that fire will still be prefixed, so we need
      // to check if the un-prefixed events are useable, and if not remove them
      // from the map
      if (!('AnimationEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.animation;
      }

      if (!('TransitionEvent' in window)) {
        delete EVENT_NAME_MAP.transitionend.transition;
      }

      for (var baseEventName in EVENT_NAME_MAP) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            endEvents.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }

    if (ExecutionEnvironment.canUseDOM) {
      detectEvents();
    }

    // We use the raw {add|remove}EventListener() call because EventListener
    // does not know how to remove event listeners and we really should
    // clean up. Also, these events are not triggered in older browsers
    // so we should be A-OK here.

    function addEventListener(node, eventName, eventListener) {
      node.addEventListener(eventName, eventListener, false);
    }

    function removeEventListener(node, eventName, eventListener) {
      node.removeEventListener(eventName, eventListener, false);
    }

    var ReactTransitionEvents = {
      addEndEventListener: function(node, eventListener) {
        if (endEvents.length === 0) {
          // If CSS transitions are not supported, trigger an "end animation"
          // event immediately.
          window.setTimeout(eventListener, 0);
          return;
        }
        endEvents.forEach(function(endEvent) {
          addEventListener(node, endEvent, eventListener);
        });
      },

      removeEndEventListener: function(node, eventListener) {
        if (endEvents.length === 0) {
          return;
        }
        endEvents.forEach(function(endEvent) {
          removeEventListener(node, endEvent, eventListener);
        });
      }
    };

    module.exports = ReactTransitionEvents;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

    /**
     * Copyright 2013-2015, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * @providesModule ExecutionEnvironment
     */

    /*jslint evil: true */

    "use strict";

    var canUseDOM = !!(
      (typeof window !== 'undefined' &&
      window.document && window.document.createElement)
    );

    /**
     * Simple, lightweight module assisting with the detection and context of
     * Worker. Helps avoid circular dependencies and allows code to reason about
     * whether or not they are in a Worker, even if they never include the main
     * `ReactWorker` dependency.
     */
    var ExecutionEnvironment = {

      canUseDOM: canUseDOM,

      canUseWorkers: typeof Worker !== 'undefined',

      canUseEventListeners:
        canUseDOM && !!(window.addEventListener || window.attachEvent),

      canUseViewport: canUseDOM && !!window.screen,

      isInWorker: !canUseDOM // For now, this is true - might change in the future.

    };

    module.exports = ExecutionEnvironment;


/***/ },
/* 66 */
/***/ function(module, exports) {

    module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  // This function was added by Coursera to make this version of react-bootstrap compatible with React v15+
  // Attributes taken from https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
  var HTMLAttributes = [
    'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt',
    'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge',
    'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable',
    'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir',
    'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod',
    'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang',
    'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label',
    'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media',
    'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open',
    'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel',
    'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless',
    'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step',
    'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'
  ];
  var RDFaAttributes = ['about', 'datatype', 'inlist', 'prefix', 'property', 'resource', 'typeof', 'vocab'];
  var customCourseraAttributes = ['onClick'];

  var filterUnsupportedDOMProperties = function(props) {
    var target = {};
    for (var key in props) {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        continue;
      }
      if (
        key.startsWith('data-') ||
        key.startsWith('aria-') ||
        HTMLAttributes.indexOf(key) >= 0 ||
        RDFaAttributes.indexOf(key) >= 0 ||
        customCourseraAttributes.indexOf(key) >= 0
      ) {
        target[key] = props[key];
      }
    }
    return target;
  }

  module.exports = filterUnsupportedDOMProperties;

/***/ },

/******/ ])
});
;


