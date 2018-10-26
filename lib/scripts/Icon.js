'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svg4everybody = require('svg4everybody');

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

/* eslint-disable max-len */
var STANDARD_ICONS = '\naccount,announcement,answer_best,answer_private,answer_public,approval,apps,apps_admin,\narticle,avatar,avatar_loading,calibration,call,call_history,campaign,campaign_members,\ncanvas,case,case_change_status,case_comment,case_email,case_log_a_call,case_transcript,\nclient,coaching,connected_apps,contact,contract,custom,dashboard,default,document,\ndrafts,email,email_IQ,email_chatter,empty,endorsement,environment_hub,event,feed,feedback,\nfile,flow,folder,generic_loading,goals,group_loading,groups,hierarchy,home,household,insights,investment_account,\nlead,link,log_a_call,marketing_actions,metrics,news,note,opportunity,\norders,people,performance,person_account,photo,poll,portal,post,pricebook,process,product,question_best,\nquestion_feed,quotes,recent,record,related_list,report,reward,scan_card,skill_entity,\nsocial,solution,sossession,task,task2,team_member,thanks,thanks_loading,today,topic,\nunmatched,user,work_order,work_order_item\n'.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var CUSTOM_ICONS = new Array(101).join('_').split('').map(function (a, i) {
  return 'custom' + (i + 1);
});

var ACTION_ICONS = '\nadd_contact,announcement,apex,approval,back,call,canvas,change_owner,change_record_type,\ncheck,clone,close,defer,delete,description,dial_in,download,edit,edit_groups,edit_relationship,\nemail,fallback,filter,flow,follow,following,freeze_user,goal,google_news,info,join_group,\nlead_convert,leave_group,log_a_call,log_event,manage_perm_sets,map,more,new,new_account,\nnew_campaign,new_case,new_child_case,new_contact,new_event,new_group,new_lead,new_note,\nnew_notebook,new_opportunity,new_person_account,new_task,password_unlock,preview,priority,question_post_action,\nquote,record,refresh,reject,remove,reset_password,share,share_file,share_link,share_poll,\nshare_post,share_thanks,sort,submit_for_approval,update,update_status,upload,user,user_activation,\nweb_link,\nnew_custom7,new_custom8,new_custom9,new_custom10,new_custom11,new_custom12,new_custom13,\nnew_custom14,new_custom15,new_custom16,new_custom17,new_custom18,new_custom19,new_custom20,\nnew_custom21,new_custom22,new_custom23,new_custom24,new_custom25,new_custom26,new_custom27,\nnew_custom28,new_custom29,new_custom30,new_custom31,new_custom32,new_custom33,new_custom34,\nnew_custom35,new_custom36,new_custom37,new_custom38,new_custom39,new_custom40,new_custom41,\nnew_custom42,new_custom43,new_custom44,new_custom45,new_custom46,new_custom47,new_custom48,\nnew_custom49,new_custom50,new_custom51,new_custom52,new_custom53,new_custom54,new_custom55,\nnew_custom56,new_custom57,new_custom58,new_custom59,new_custom60,new_custom61,new_custom62,\nnew_custom63,new_custom64,new_custom65,new_custom66,new_custom67,new_custom68,new_custom69,\nnew_custom70,new_custom71,new_custom72,new_custom73,new_custom74,new_custom75,new_custom76,\nnew_custom77,new_custom78,new_custom79,new_custom80,new_custom81,new_custom82,new_custom83,\nnew_custom84,new_custom85,new_custom86,new_custom87,new_custom88,new_custom89,new_custom90,\nnew_custom91,new_custom92,new_custom93,new_custom94,new_custom95,new_custom96,new_custom97,\nnew_custom98,new_custom99,new_custom100\n'.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var DOCTYPE_ICONS = '\nai,attachment,audio,box_notes,csv,eps,excel,exe,flash,gdoc,gdocs,gpres,gsheet,html,image,keynote,\nlink,mp4,overlay,pack,pages,pdf,ppt,psd,rtf,slide,stypi,txt,unknown,video,visio,\nwebex,word,xml,zip\n'.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);

var UTILITY_ICONS = '\nadd,adduser,announcement,answer,apps,arrowdown,arrowup,attach,back,ban,bold,bookmark,brush,\nbucket,builder,call,capslock,cases,center_align_text,chart,chat,check,checkin,chevrondown,\nchevronleft,chevronright,chevronup,clear,clock,close,comments,company,connected_apps,\ncontract,contract_alt,copy,crossfilter,custom_apps,cut,dash,datadotcom,dayview,delete,deprecate,\ndescription,desktop,down,download,edit,edit_form,email,end_call,erect_window,error,event,expand,\nexpand_alt,favorite,feed,file,filter,filterList,forward,frozen,groups,help,home,identity,image,inbox,info,\ninsert_tag_field,insert_template,italic,justify_text,kanban,knowledge_base,layers,layout,\nleft,left_align_text,like,link,list,location,lock,log_a_call,logout,magicwand,matrix,metrics,minimize_window,\nmoneybag,monthlyview,move,muted,new,new_window,news,note,notebook,notification,office365,offline,\nopen,open_folder,opened_folder,overflow,package,package_org,package_org_beta,page,palette,paste,\npeople,phone_landscape,phone_portrait,photo,picklist,power,preview,priority,process,push,puzzle,\nquestion,questions_and_answers,record,redo,refresh,relate,remove_formatting,remove_link,\nreplace,reply,reset_password,retweet,richtextbulletedlist,richtextindent,richtextnumberedlist,\nrichtextoutdent,right,right_align_text,rotate,rows,salesforce1,search,settings,setup,setup_assistant_guide,\nshare,share_post,shield,side_list,signpost,sms,snippet,socialshare,sort,spinner,standard_objects,\nstop,strikethrough,success,summary,summarydetail,switch,table,tablet_landscape,tablet_portrait,\ntabset,task,text_background_color,text_color,threedots,tile_card_list,topic,touch_action,trail,undelete,undeprecate,\nunderline,undo,unlock,unmuted,up,upload,user,user_role,volume_high,volume_low,volume_off,warning,\nweeklyview,world,zoomin,zoomout\n'.replace(/^\s+|\s+$/g, '').split(/[\s,]+/);
/* eslint-enable max-len */

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon(props) {
    (0, _classCallCheck3.default)(this, Icon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).call(this, props));

    _this.state = {};
    (0, _util.registerStyle)('icon', [['.slds-icon use', '{ pointer-events: none; }']]);
    return _this;
  }

  (0, _createClass3.default)(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIconColor();
      var svgEl = this.svgIcon;
      if (svgEl) {
        svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkIconColor();
    }
  }, {
    key: 'getIconColor',
    value: function getIconColor(fillColor, category, icon) {
      /* eslint-disable no-unneeded-ternary */
      /* eslint-disable max-len */
      return this.state.iconColor ? this.state.iconColor : category === 'doctype' ? null : fillColor === 'none' ? null : fillColor ? fillColor : category === 'utility' ? null : category === 'custom' ? icon.replace(/^custom/, 'custom-') : category === 'action' && /^new_custom/.test(icon) ? icon.replace(/^new_custom/, 'custom-') : category + '-' + (icon || '').replace(/_/g, '-');
    }
  }, {
    key: 'checkIconColor',
    value: function checkIconColor() {
      var _props = this.props,
          fillColor = _props.fillColor,
          _props$category = _props.category,
          category = _props$category === undefined ? 'utility' : _props$category,
          container = _props.container;
      var iconColor = this.state.iconColor;

      if (fillColor || category === 'doctype' || !fillColor && category === 'utility' || iconColor === 'standard-default') {
        return;
      }
      var el = container ? this.iconContainer : this.svgIcon;
      if (!el) {
        return;
      }
      var bgColorStyle = getComputedStyle(el)['background-color'];
      // if no background color set to the icon
      if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
        this.setState({ iconColor: 'standard-default' });
      }
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG(_ref) {
      var _classnames,
          _this2 = this;

      var className = _ref.className,
          _ref$category = _ref.category,
          category = _ref$category === undefined ? 'utility' : _ref$category,
          icon = _ref.icon,
          size = _ref.size,
          align = _ref.align,
          fillColor = _ref.fillColor,
          container = _ref.container,
          _ref$textColor = _ref.textColor,
          textColor = _ref$textColor === undefined ? 'default' : _ref$textColor,
          style = _ref.style,
          assetRoot = _ref.assetRoot,
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor', 'style', 'assetRoot']);

      var iconColor = this.getIconColor(fillColor, category, icon);
      var iconClassNames = (0, _classnames3.default)((_classnames = {
        'slds-icon': !/slds\-button__icon/.test(className)
      }, (0, _defineProperty3.default)(_classnames, 'slds-icon--' + size, /^(x-small|small|medium|large)$/.test(size)), (0, _defineProperty3.default)(_classnames, 'slds-icon-text-' + textColor, /^(default|warning|error)$/.test(textColor) && !iconColor), (0, _defineProperty3.default)(_classnames, 'slds-icon-' + iconColor, !container && iconColor), (0, _defineProperty3.default)(_classnames, 'slds-m-left--x-small', align === 'right'), (0, _defineProperty3.default)(_classnames, 'slds-m-right--x-small', align === 'left'), _classnames), className);

      // icon and category prop should not include chars other than alphanumerics, underscore, and hyphen
      icon = (icon || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign
      category = (category || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign

      var iconUrl = assetRoot + '/icons/' + category + '-sprite/svg/symbols.svg#' + icon;
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({
          className: iconClassNames,
          'aria-hidden': true,
          ref: function ref(node) {
            return _this2.svgIcon = node;
          },
          style: style
        }, props),
        _react2.default.createElement('use', { xlinkHref: iconUrl })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          container = _props2.container,
          title = _props2.title,
          props = (0, _objectWithoutProperties3.default)(_props2, ['container', 'title']);
      var _context$assetRoot = this.context.assetRoot,
          assetRoot = _context$assetRoot === undefined ? (0, _util.getAssetRoot)() : _context$assetRoot;
      var category = props.category,
          icon = props.icon;


      if (icon.indexOf(':') > 0) {
        var _icon$split = icon.split(':');

        var _icon$split2 = (0, _slicedToArray3.default)(_icon$split, 2);

        category = _icon$split2[0];
        icon = _icon$split2[1];
      }
      if (container) {
        var containerClassName = props.containerClassName,
            fillColor = props.fillColor,
            pprops = (0, _objectWithoutProperties3.default)(props, ['containerClassName', 'fillColor']);

        var iconColor = this.getIconColor(fillColor, category, icon);
        var ccontainerClassName = (0, _classnames3.default)(containerClassName, 'slds-icon__container', container === 'circle' ? 'slds-icon__container--circle' : null, iconColor ? 'slds-icon-' + iconColor : null);
        return _react2.default.createElement(
          'span',
          { title: title, className: ccontainerClassName, ref: function ref(node) {
              return _this3.iconContainer = node;
            } },
          this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container, assetRoot: assetRoot }, pprops))
        );
      }

      return this.renderSVG((0, _extends3.default)({}, props, { category: category, icon: icon, assetRoot: assetRoot }));
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;


Icon.propTypes = {
  className: _propTypes2.default.string,
  containerClassName: _propTypes2.default.string,
  category: _propTypes2.default.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
  icon: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['x-small', 'small', 'medium', 'large']),
  container: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['default', 'circle'])]),
  color: _propTypes2.default.string,
  textColor: _propTypes2.default.oneOf(['default', 'warning', 'error']),
  tabIndex: _propTypes2.default.number,
  title: _propTypes2.default.string,
  fillColor: _propTypes2.default.string
};

Icon.contextTypes = {
  assetRoot: _propTypes2.default.string
};

Icon.ICONS = {
  STANDARD_ICONS: STANDARD_ICONS,
  CUSTOM_ICONS: CUSTOM_ICONS,
  ACTION_ICONS: ACTION_ICONS,
  DOCTYPE_ICONS: DOCTYPE_ICONS,
  UTILITY_ICONS: UTILITY_ICONS
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOlsiU1RBTkRBUkRfSUNPTlMiLCJyZXBsYWNlIiwic3BsaXQiLCJDVVNUT01fSUNPTlMiLCJBcnJheSIsImpvaW4iLCJtYXAiLCJhIiwiaSIsIkFDVElPTl9JQ09OUyIsIkRPQ1RZUEVfSUNPTlMiLCJVVElMSVRZX0lDT05TIiwiSWNvbiIsInByb3BzIiwic3RhdGUiLCJjaGVja0ljb25Db2xvciIsInN2Z0VsIiwic3ZnSWNvbiIsInNldEF0dHJpYnV0ZSIsInRhYkluZGV4IiwiZmlsbENvbG9yIiwiY2F0ZWdvcnkiLCJpY29uIiwiaWNvbkNvbG9yIiwidGVzdCIsImNvbnRhaW5lciIsImVsIiwiaWNvbkNvbnRhaW5lciIsImJnQ29sb3JTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsInNpemUiLCJhbGlnbiIsInRleHRDb2xvciIsInN0eWxlIiwiYXNzZXRSb290IiwiZ2V0SWNvbkNvbG9yIiwiaWNvbkNsYXNzTmFtZXMiLCJpY29uVXJsIiwibm9kZSIsInRpdGxlIiwiY29udGV4dCIsImluZGV4T2YiLCJjb250YWluZXJDbGFzc05hbWUiLCJwcHJvcHMiLCJjY29udGFpbmVyQ2xhc3NOYW1lIiwicmVuZGVyU1ZHIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJvbmVPZlR5cGUiLCJib29sIiwiY29sb3IiLCJudW1iZXIiLCJjb250ZXh0VHlwZXMiLCJJQ09OUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBO0FBQ0EsSUFBTUEsaUJBQWlCLDI3QkFhcEJDLE9BYm9CLENBYVosWUFiWSxFQWFFLEVBYkYsRUFhTUMsS0FiTixDQWFZLFFBYlosQ0FBdkI7O0FBZUEsSUFBTUMsZUFDSixJQUFJQyxLQUFK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QUFkTixDQUFqQjs7QUFpQkFyQyxLQUFLMkMsWUFBTCxHQUFvQjtBQUNsQm5CLGFBQVcsb0JBQVVhO0FBREgsQ0FBcEI7O0FBSUFyQyxLQUFLNEMsS0FBTCxHQUFhO0FBQ1h4RCxnQ0FEVztBQUVYRyw0QkFGVztBQUdYTSw0QkFIVztBQUlYQyw4QkFKVztBQUtYQztBQUxXLENBQWIiLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUsIGdldEFzc2V0Um9vdCB9IGZyb20gJy4vdXRpbCc7XG5cbnN2ZzRldmVyeWJvZHkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY29uc3QgU1RBTkRBUkRfSUNPTlMgPSBgXG5hY2NvdW50LGFubm91bmNlbWVudCxhbnN3ZXJfYmVzdCxhbnN3ZXJfcHJpdmF0ZSxhbnN3ZXJfcHVibGljLGFwcHJvdmFsLGFwcHMsYXBwc19hZG1pbixcbmFydGljbGUsYXZhdGFyLGF2YXRhcl9sb2FkaW5nLGNhbGlicmF0aW9uLGNhbGwsY2FsbF9oaXN0b3J5LGNhbXBhaWduLGNhbXBhaWduX21lbWJlcnMsXG5jYW52YXMsY2FzZSxjYXNlX2NoYW5nZV9zdGF0dXMsY2FzZV9jb21tZW50LGNhc2VfZW1haWwsY2FzZV9sb2dfYV9jYWxsLGNhc2VfdHJhbnNjcmlwdCxcbmNsaWVudCxjb2FjaGluZyxjb25uZWN0ZWRfYXBwcyxjb250YWN0LGNvbnRyYWN0LGN1c3RvbSxkYXNoYm9hcmQsZGVmYXVsdCxkb2N1bWVudCxcbmRyYWZ0cyxlbWFpbCxlbWFpbF9JUSxlbWFpbF9jaGF0dGVyLGVtcHR5LGVuZG9yc2VtZW50LGVudmlyb25tZW50X2h1YixldmVudCxmZWVkLGZlZWRiYWNrLFxuZmlsZSxmbG93LGZvbGRlcixnZW5lcmljX2xvYWRpbmcsZ29hbHMsZ3JvdXBfbG9hZGluZyxncm91cHMsaGllcmFyY2h5LGhvbWUsaG91c2Vob2xkLGluc2lnaHRzLGludmVzdG1lbnRfYWNjb3VudCxcbmxlYWQsbGluayxsb2dfYV9jYWxsLG1hcmtldGluZ19hY3Rpb25zLG1ldHJpY3MsbmV3cyxub3RlLG9wcG9ydHVuaXR5LFxub3JkZXJzLHBlb3BsZSxwZXJmb3JtYW5jZSxwZXJzb25fYWNjb3VudCxwaG90byxwb2xsLHBvcnRhbCxwb3N0LHByaWNlYm9vayxwcm9jZXNzLHByb2R1Y3QscXVlc3Rpb25fYmVzdCxcbnF1ZXN0aW9uX2ZlZWQscXVvdGVzLHJlY2VudCxyZWNvcmQscmVsYXRlZF9saXN0LHJlcG9ydCxyZXdhcmQsc2Nhbl9jYXJkLHNraWxsX2VudGl0eSxcbnNvY2lhbCxzb2x1dGlvbixzb3NzZXNzaW9uLHRhc2ssdGFzazIsdGVhbV9tZW1iZXIsdGhhbmtzLHRoYW5rc19sb2FkaW5nLHRvZGF5LHRvcGljLFxudW5tYXRjaGVkLHVzZXIsd29ya19vcmRlcix3b3JrX29yZGVyX2l0ZW1cbmBcbiAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXG5jb25zdCBDVVNUT01fSUNPTlMgPVxuICBuZXcgQXJyYXkoMTAxKS5qb2luKCdfJykuc3BsaXQoJycpXG4gICAgLm1hcCgoYSwgaSkgPT4gYGN1c3RvbSR7KGkgKyAxKX1gKTtcblxuY29uc3QgQUNUSU9OX0lDT05TID0gYFxuYWRkX2NvbnRhY3QsYW5ub3VuY2VtZW50LGFwZXgsYXBwcm92YWwsYmFjayxjYWxsLGNhbnZhcyxjaGFuZ2Vfb3duZXIsY2hhbmdlX3JlY29yZF90eXBlLFxuY2hlY2ssY2xvbmUsY2xvc2UsZGVmZXIsZGVsZXRlLGRlc2NyaXB0aW9uLGRpYWxfaW4sZG93bmxvYWQsZWRpdCxlZGl0X2dyb3VwcyxlZGl0X3JlbGF0aW9uc2hpcCxcbmVtYWlsLGZhbGxiYWNrLGZpbHRlcixmbG93LGZvbGxvdyxmb2xsb3dpbmcsZnJlZXplX3VzZXIsZ29hbCxnb29nbGVfbmV3cyxpbmZvLGpvaW5fZ3JvdXAsXG5sZWFkX2NvbnZlcnQsbGVhdmVfZ3JvdXAsbG9nX2FfY2FsbCxsb2dfZXZlbnQsbWFuYWdlX3Blcm1fc2V0cyxtYXAsbW9yZSxuZXcsbmV3X2FjY291bnQsXG5uZXdfY2FtcGFpZ24sbmV3X2Nhc2UsbmV3X2NoaWxkX2Nhc2UsbmV3X2NvbnRhY3QsbmV3X2V2ZW50LG5ld19ncm91cCxuZXdfbGVhZCxuZXdfbm90ZSxcbm5ld19ub3RlYm9vayxuZXdfb3Bwb3J0dW5pdHksbmV3X3BlcnNvbl9hY2NvdW50LG5ld190YXNrLHBhc3N3b3JkX3VubG9jayxwcmV2aWV3LHByaW9yaXR5LHF1ZXN0aW9uX3Bvc3RfYWN0aW9uLFxucXVvdGUscmVjb3JkLHJlZnJlc2gscmVqZWN0LHJlbW92ZSxyZXNldF9wYXNzd29yZCxzaGFyZSxzaGFyZV9maWxlLHNoYXJlX2xpbmssc2hhcmVfcG9sbCxcbnNoYXJlX3Bvc3Qsc2hhcmVfdGhhbmtzLHNvcnQsc3VibWl0X2Zvcl9hcHByb3ZhbCx1cGRhdGUsdXBkYXRlX3N0YXR1cyx1cGxvYWQsdXNlcix1c2VyX2FjdGl2YXRpb24sXG53ZWJfbGluayxcbm5ld19jdXN0b203LG5ld19jdXN0b204LG5ld19jdXN0b205LG5ld19jdXN0b20xMCxuZXdfY3VzdG9tMTEsbmV3X2N1c3RvbTEyLG5ld19jdXN0b20xMyxcbm5ld19jdXN0b20xNCxuZXdfY3VzdG9tMTUsbmV3X2N1c3RvbTE2LG5ld19jdXN0b20xNyxuZXdfY3VzdG9tMTgsbmV3X2N1c3RvbTE5LG5ld19jdXN0b20yMCxcbm5ld19jdXN0b20yMSxuZXdfY3VzdG9tMjIsbmV3X2N1c3RvbTIzLG5ld19jdXN0b20yNCxuZXdfY3VzdG9tMjUsbmV3X2N1c3RvbTI2LG5ld19jdXN0b20yNyxcbm5ld19jdXN0b20yOCxuZXdfY3VzdG9tMjksbmV3X2N1c3RvbTMwLG5ld19jdXN0b20zMSxuZXdfY3VzdG9tMzIsbmV3X2N1c3RvbTMzLG5ld19jdXN0b20zNCxcbm5ld19jdXN0b20zNSxuZXdfY3VzdG9tMzYsbmV3X2N1c3RvbTM3LG5ld19jdXN0b20zOCxuZXdfY3VzdG9tMzksbmV3X2N1c3RvbTQwLG5ld19jdXN0b200MSxcbm5ld19jdXN0b200MixuZXdfY3VzdG9tNDMsbmV3X2N1c3RvbTQ0LG5ld19jdXN0b200NSxuZXdfY3VzdG9tNDYsbmV3X2N1c3RvbTQ3LG5ld19jdXN0b200OCxcbm5ld19jdXN0b200OSxuZXdfY3VzdG9tNTAsbmV3X2N1c3RvbTUxLG5ld19jdXN0b201MixuZXdfY3VzdG9tNTMsbmV3X2N1c3RvbTU0LG5ld19jdXN0b201NSxcbm5ld19jdXN0b201NixuZXdfY3VzdG9tNTcsbmV3X2N1c3RvbTU4LG5ld19jdXN0b201OSxuZXdfY3VzdG9tNjAsbmV3X2N1c3RvbTYxLG5ld19jdXN0b202Mixcbm5ld19jdXN0b202MyxuZXdfY3VzdG9tNjQsbmV3X2N1c3RvbTY1LG5ld19jdXN0b202NixuZXdfY3VzdG9tNjcsbmV3X2N1c3RvbTY4LG5ld19jdXN0b202OSxcbm5ld19jdXN0b203MCxuZXdfY3VzdG9tNzEsbmV3X2N1c3RvbTcyLG5ld19jdXN0b203MyxuZXdfY3VzdG9tNzQsbmV3X2N1c3RvbTc1LG5ld19jdXN0b203Nixcbm5ld19jdXN0b203NyxuZXdfY3VzdG9tNzgsbmV3X2N1c3RvbTc5LG5ld19jdXN0b204MCxuZXdfY3VzdG9tODEsbmV3X2N1c3RvbTgyLG5ld19jdXN0b204Myxcbm5ld19jdXN0b204NCxuZXdfY3VzdG9tODUsbmV3X2N1c3RvbTg2LG5ld19jdXN0b204NyxuZXdfY3VzdG9tODgsbmV3X2N1c3RvbTg5LG5ld19jdXN0b205MCxcbm5ld19jdXN0b205MSxuZXdfY3VzdG9tOTIsbmV3X2N1c3RvbTkzLG5ld19jdXN0b205NCxuZXdfY3VzdG9tOTUsbmV3X2N1c3RvbTk2LG5ld19jdXN0b205Nyxcbm5ld19jdXN0b205OCxuZXdfY3VzdG9tOTksbmV3X2N1c3RvbTEwMFxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cblxuY29uc3QgRE9DVFlQRV9JQ09OUyA9IGBcbmFpLGF0dGFjaG1lbnQsYXVkaW8sYm94X25vdGVzLGNzdixlcHMsZXhjZWwsZXhlLGZsYXNoLGdkb2MsZ2RvY3MsZ3ByZXMsZ3NoZWV0LGh0bWwsaW1hZ2Usa2V5bm90ZSxcbmxpbmssbXA0LG92ZXJsYXkscGFjayxwYWdlcyxwZGYscHB0LHBzZCxydGYsc2xpZGUsc3R5cGksdHh0LHVua25vd24sdmlkZW8sdmlzaW8sXG53ZWJleCx3b3JkLHhtbCx6aXBcbmBcbiAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXG5cbmNvbnN0IFVUSUxJVFlfSUNPTlMgPSBgXG5hZGQsYWRkdXNlcixhbm5vdW5jZW1lbnQsYW5zd2VyLGFwcHMsYXJyb3dkb3duLGFycm93dXAsYXR0YWNoLGJhY2ssYmFuLGJvbGQsYm9va21hcmssYnJ1c2gsXG5idWNrZXQsYnVpbGRlcixjYWxsLGNhcHNsb2NrLGNhc2VzLGNlbnRlcl9hbGlnbl90ZXh0LGNoYXJ0LGNoYXQsY2hlY2ssY2hlY2tpbixjaGV2cm9uZG93bixcbmNoZXZyb25sZWZ0LGNoZXZyb25yaWdodCxjaGV2cm9udXAsY2xlYXIsY2xvY2ssY2xvc2UsY29tbWVudHMsY29tcGFueSxjb25uZWN0ZWRfYXBwcyxcbmNvbnRyYWN0LGNvbnRyYWN0X2FsdCxjb3B5LGNyb3NzZmlsdGVyLGN1c3RvbV9hcHBzLGN1dCxkYXNoLGRhdGFkb3Rjb20sZGF5dmlldyxkZWxldGUsZGVwcmVjYXRlLFxuZGVzY3JpcHRpb24sZGVza3RvcCxkb3duLGRvd25sb2FkLGVkaXQsZWRpdF9mb3JtLGVtYWlsLGVuZF9jYWxsLGVyZWN0X3dpbmRvdyxlcnJvcixldmVudCxleHBhbmQsXG5leHBhbmRfYWx0LGZhdm9yaXRlLGZlZWQsZmlsZSxmaWx0ZXIsZmlsdGVyTGlzdCxmb3J3YXJkLGZyb3plbixncm91cHMsaGVscCxob21lLGlkZW50aXR5LGltYWdlLGluYm94LGluZm8sXG5pbnNlcnRfdGFnX2ZpZWxkLGluc2VydF90ZW1wbGF0ZSxpdGFsaWMsanVzdGlmeV90ZXh0LGthbmJhbixrbm93bGVkZ2VfYmFzZSxsYXllcnMsbGF5b3V0LFxubGVmdCxsZWZ0X2FsaWduX3RleHQsbGlrZSxsaW5rLGxpc3QsbG9jYXRpb24sbG9jayxsb2dfYV9jYWxsLGxvZ291dCxtYWdpY3dhbmQsbWF0cml4LG1ldHJpY3MsbWluaW1pemVfd2luZG93LFxubW9uZXliYWcsbW9udGhseXZpZXcsbW92ZSxtdXRlZCxuZXcsbmV3X3dpbmRvdyxuZXdzLG5vdGUsbm90ZWJvb2ssbm90aWZpY2F0aW9uLG9mZmljZTM2NSxvZmZsaW5lLFxub3BlbixvcGVuX2ZvbGRlcixvcGVuZWRfZm9sZGVyLG92ZXJmbG93LHBhY2thZ2UscGFja2FnZV9vcmcscGFja2FnZV9vcmdfYmV0YSxwYWdlLHBhbGV0dGUscGFzdGUsXG5wZW9wbGUscGhvbmVfbGFuZHNjYXBlLHBob25lX3BvcnRyYWl0LHBob3RvLHBpY2tsaXN0LHBvd2VyLHByZXZpZXcscHJpb3JpdHkscHJvY2VzcyxwdXNoLHB1enpsZSxcbnF1ZXN0aW9uLHF1ZXN0aW9uc19hbmRfYW5zd2VycyxyZWNvcmQscmVkbyxyZWZyZXNoLHJlbGF0ZSxyZW1vdmVfZm9ybWF0dGluZyxyZW1vdmVfbGluayxcbnJlcGxhY2UscmVwbHkscmVzZXRfcGFzc3dvcmQscmV0d2VldCxyaWNodGV4dGJ1bGxldGVkbGlzdCxyaWNodGV4dGluZGVudCxyaWNodGV4dG51bWJlcmVkbGlzdCxcbnJpY2h0ZXh0b3V0ZGVudCxyaWdodCxyaWdodF9hbGlnbl90ZXh0LHJvdGF0ZSxyb3dzLHNhbGVzZm9yY2UxLHNlYXJjaCxzZXR0aW5ncyxzZXR1cCxzZXR1cF9hc3Npc3RhbnRfZ3VpZGUsXG5zaGFyZSxzaGFyZV9wb3N0LHNoaWVsZCxzaWRlX2xpc3Qsc2lnbnBvc3Qsc21zLHNuaXBwZXQsc29jaWFsc2hhcmUsc29ydCxzcGlubmVyLHN0YW5kYXJkX29iamVjdHMsXG5zdG9wLHN0cmlrZXRocm91Z2gsc3VjY2VzcyxzdW1tYXJ5LHN1bW1hcnlkZXRhaWwsc3dpdGNoLHRhYmxlLHRhYmxldF9sYW5kc2NhcGUsdGFibGV0X3BvcnRyYWl0LFxudGFic2V0LHRhc2ssdGV4dF9iYWNrZ3JvdW5kX2NvbG9yLHRleHRfY29sb3IsdGhyZWVkb3RzLHRpbGVfY2FyZF9saXN0LHRvcGljLHRvdWNoX2FjdGlvbix0cmFpbCx1bmRlbGV0ZSx1bmRlcHJlY2F0ZSxcbnVuZGVybGluZSx1bmRvLHVubG9jayx1bm11dGVkLHVwLHVwbG9hZCx1c2VyLHVzZXJfcm9sZSx2b2x1bWVfaGlnaCx2b2x1bWVfbG93LHZvbHVtZV9vZmYsd2FybmluZyxcbndlZWtseXZpZXcsd29ybGQsem9vbWluLHpvb21vdXRcbmBcbiAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgcmVnaXN0ZXJTdHlsZSgnaWNvbicsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWljb24gdXNlJyxcbiAgICAgICAgJ3sgcG9pbnRlci1ldmVudHM6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcbiAgICBjb25zdCBzdmdFbCA9IHRoaXMuc3ZnSWNvbjtcbiAgICBpZiAoc3ZnRWwpIHtcbiAgICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgdGhpcy5wcm9wcy50YWJJbmRleCA+PSAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICB9XG5cbiAgZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bm5lZWRlZC10ZXJuYXJ5ICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmljb25Db2xvciA/IHRoaXMuc3RhdGUuaWNvbkNvbG9yIDpcbiAgICAgICAgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyA/IG51bGwgOlxuICAgICAgICAgIGZpbGxDb2xvciA9PT0gJ25vbmUnID8gbnVsbCA6XG4gICAgICAgICAgICBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOlxuICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09ICdjdXN0b20nID8gaWNvbi5yZXBsYWNlKC9eY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ2FjdGlvbicgJiYgL15uZXdfY3VzdG9tLy50ZXN0KGljb24pID8gaWNvbi5yZXBsYWNlKC9ebmV3X2N1c3RvbS8sICdjdXN0b20tJykgOlxuICAgICAgICAgICAgICAgICAgICBgJHtjYXRlZ29yeX0tJHsoaWNvbiB8fCAnJykucmVwbGFjZSgvXy9nLCAnLScpfWBcbiAgICApO1xuICB9XG5cbiAgY2hlY2tJY29uQ29sb3IoKSB7XG4gICAgY29uc3QgeyBmaWxsQ29sb3IsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpY29uQ29sb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGZpbGxDb2xvciB8fCBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnIHx8XG4gICAgICAoIWZpbGxDb2xvciAmJiBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknKSB8fFxuICAgICAgaWNvbkNvbG9yID09PSAnc3RhbmRhcmQtZGVmYXVsdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBjb250YWluZXIgPyB0aGlzLmljb25Db250YWluZXIgOiB0aGlzLnN2Z0ljb247XG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBiZ0NvbG9yU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVsnYmFja2dyb3VuZC1jb2xvciddO1xuICAgIC8vIGlmIG5vIGJhY2tncm91bmQgY29sb3Igc2V0IHRvIHRoZSBpY29uXG4gICAgaWYgKC9eKHRyYW5zcGFyZW50fHJnYmFcXCgwLFxccyowLFxccyowLFxccyowXFwpKSQvLnRlc3QoYmdDb2xvclN0eWxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGljb25Db2xvcjogJ3N0YW5kYXJkLWRlZmF1bHQnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNWRyh7XG4gICAgY2xhc3NOYW1lLCBjYXRlZ29yeSA9ICd1dGlsaXR5JywgaWNvbiwgc2l6ZSwgYWxpZ24sIGZpbGxDb2xvciwgY29udGFpbmVyLFxuICAgIHRleHRDb2xvciA9ICdkZWZhdWx0Jywgc3R5bGUsIGFzc2V0Um9vdCwgLi4ucHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xuICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaWNvbic6ICEvc2xkc1xcLWJ1dHRvbl9faWNvbi8udGVzdChjbGFzc05hbWUpLFxuICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfG1lZGl1bXxsYXJnZSkkLy50ZXN0KHNpemUpLFxuICAgICAgICBbYHNsZHMtaWNvbi10ZXh0LSR7dGV4dENvbG9yfWBdOiAvXihkZWZhdWx0fHdhcm5pbmd8ZXJyb3IpJC8udGVzdCh0ZXh0Q29sb3IpICYmICFpY29uQ29sb3IsXG4gICAgICAgIFtgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWBdOiAhY29udGFpbmVyICYmIGljb25Db2xvcixcbiAgICAgICAgJ3NsZHMtbS1sZWZ0LS14LXNtYWxsJzogYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG5cbiAgICAvLyBpY29uIGFuZCBjYXRlZ29yeSBwcm9wIHNob3VsZCBub3QgaW5jbHVkZSBjaGFycyBvdGhlciB0aGFuIGFscGhhbnVtZXJpY3MsIHVuZGVyc2NvcmUsIGFuZCBoeXBoZW5cbiAgICBpY29uID0gKGljb24gfHwgJycpLnJlcGxhY2UoL1teXFx3XFwtXS9nLCAnJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBjYXRlZ29yeSA9IChjYXRlZ29yeSB8fCAnJykucmVwbGFjZSgvW15cXHdcXC1dL2csICcnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gICAgY29uc3QgaWNvblVybCA9IGAke2Fzc2V0Um9vdH0vaWNvbnMvJHtjYXRlZ29yeX0tc3ByaXRlL3N2Zy9zeW1ib2xzLnN2ZyMke2ljb259YDtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9eyBpY29uQ2xhc3NOYW1lcyB9XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMuc3ZnSWNvbiA9IG5vZGUpIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPHVzZSB4bGlua0hyZWY9e2ljb25Vcmx9IC8+XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCB0aXRsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhc3NldFJvb3QgPSBnZXRBc3NldFJvb3QoKSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGxldCB7IGNhdGVnb3J5LCBpY29uIH0gPSBwcm9wcztcblxuICAgIGlmIChpY29uLmluZGV4T2YoJzonKSA+IDApIHtcbiAgICAgIFtjYXRlZ29yeSwgaWNvbl0gPSBpY29uLnNwbGl0KCc6Jyk7XG4gICAgfVxuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyQ2xhc3NOYW1lLCBmaWxsQ29sb3IsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLmdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKTtcbiAgICAgIGNvbnN0IGNjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICBjb250YWluZXJDbGFzc05hbWUsXG4gICAgICAgICdzbGRzLWljb25fX2NvbnRhaW5lcicsXG4gICAgICAgIGNvbnRhaW5lciA9PT0gJ2NpcmNsZScgPyAnc2xkcy1pY29uX19jb250YWluZXItLWNpcmNsZScgOiBudWxsLFxuICAgICAgICBpY29uQ29sb3IgPyBgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWAgOiBudWxsXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gdGl0bGU9eyB0aXRsZSB9IGNsYXNzTmFtZT17IGNjb250YWluZXJDbGFzc05hbWUgfSByZWY9eyBub2RlID0+ICh0aGlzLmljb25Db250YWluZXIgPSBub2RlKSB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTVkcoeyBjYXRlZ29yeSwgaWNvbiwgZmlsbENvbG9yOiBpY29uQ29sb3IsIGNvbnRhaW5lciwgYXNzZXRSb290LCAuLi5wcHJvcHMgfSkgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlclNWRyh7IC4uLnByb3BzLCBjYXRlZ29yeSwgaWNvbiwgYXNzZXRSb290IH0pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5vbmVPZihbJ2FjdGlvbicsICdjdXN0b20nLCAnZG9jdHlwZScsICdzdGFuZGFyZCcsICd1dGlsaXR5J10pLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NpcmNsZSddKSxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWxsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JY29uLmNvbnRleHRUeXBlcyA9IHtcbiAgYXNzZXRSb290OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSWNvbi5JQ09OUyA9IHtcbiAgU1RBTkRBUkRfSUNPTlMsXG4gIENVU1RPTV9JQ09OUyxcbiAgQUNUSU9OX0lDT05TLFxuICBET0NUWVBFX0lDT05TLFxuICBVVElMSVRZX0lDT05TLFxufTtcbiJdfQ==