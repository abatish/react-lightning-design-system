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
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor', 'style']);

      var iconColor = this.getIconColor(fillColor, category, icon);
      var iconClassNames = (0, _classnames3.default)((_classnames = {
        'slds-icon': !/slds\-button__icon/.test(className)
      }, (0, _defineProperty3.default)(_classnames, 'slds-icon--' + size, /^(x-small|small|medium|large)$/.test(size)), (0, _defineProperty3.default)(_classnames, 'slds-icon-text-' + textColor, /^(default|warning|error)$/.test(textColor) && !iconColor), (0, _defineProperty3.default)(_classnames, 'slds-icon-' + iconColor, !container && iconColor), (0, _defineProperty3.default)(_classnames, 'slds-m-left--x-small', align === 'right'), (0, _defineProperty3.default)(_classnames, 'slds-m-right--x-small', align === 'left'), _classnames), className);

      // icon and category prop should not include chars other than alphanumerics, underscore, and hyphen
      icon = (icon || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign
      category = (category || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign

      var iconUrl = (0, _util.getAssetRoot)() + '/icons/' + category + '-sprite/svg/symbols.svg#' + icon;
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
          this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
        );
      }

      return this.renderSVG((0, _extends3.default)({}, props, { category: category, icon: icon }));
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

Icon.ICONS = {
  STANDARD_ICONS: STANDARD_ICONS,
  CUSTOM_ICONS: CUSTOM_ICONS,
  ACTION_ICONS: ACTION_ICONS,
  DOCTYPE_ICONS: DOCTYPE_ICONS,
  UTILITY_ICONS: UTILITY_ICONS
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOlsiU1RBTkRBUkRfSUNPTlMiLCJyZXBsYWNlIiwic3BsaXQiLCJDVVNUT01fSUNPTlMiLCJBcnJheSIsImpvaW4iLCJtYXAiLCJhIiwiaSIsIkFDVElPTl9JQ09OUyIsIkRPQ1RZUEVfSUNPTlMiLCJVVElMSVRZX0lDT05TIiwiSWNvbiIsInByb3BzIiwic3RhdGUiLCJjaGVja0ljb25Db2xvciIsInN2Z0VsIiwic3ZnSWNvbiIsInNldEF0dHJpYnV0ZSIsInRhYkluZGV4IiwiZmlsbENvbG9yIiwiY2F0ZWdvcnkiLCJpY29uIiwiaWNvbkNvbG9yIiwidGVzdCIsImNvbnRhaW5lciIsImVsIiwiaWNvbkNvbnRhaW5lciIsImJnQ29sb3JTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsInNpemUiLCJhbGlnbiIsInRleHRDb2xvciIsInN0eWxlIiwiZ2V0SWNvbkNvbG9yIiwiaWNvbkNsYXNzTmFtZXMiLCJpY29uVXJsIiwibm9kZSIsInRpdGxlIiwiaW5kZXhPZiIsImNvbnRhaW5lckNsYXNzTmFtZSIsInBwcm9wcyIsImNjb250YWluZXJDbGFzc05hbWUiLCJyZW5kZXJTVkciLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm9uZU9mVHlwZSIsImJvb2wiLCJjb2xvciIsIm51bWJlciIsIklDT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7QUFDQSxJQUFNQSxpQkFBaUIsMjdCQWFwQkMsT0Fib0IsQ0FhWixZQWJZLEVBYUUsRUFiRixFQWFNQyxLQWJOLENBYVksUUFiWixDQUF2Qjs7QUFlQSxJQUFNQyxlQUNKLElBQUlDLEtBQUosQ0FBVSxHQUFWLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsRUFB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QXJFO0FBREosU0FERjtBQUtEOztBQUVELGFBQU8sS0FBS0UsU0FBTCw0QkFBb0JoQyxLQUFwQixJQUEyQlEsa0JBQTNCLEVBQXFDQyxVQUFyQyxJQUFQO0FBQ0Q7Ozs7O2tCQTdHa0JWLEk7OztBQWdIckJBLEtBQUtrQyxTQUFMLEdBQWlCO0FBQ2ZmLGFBQVcsb0JBQVVnQixNQUROO0FBRWZMLHNCQUFvQixvQkFBVUssTUFGZjtBQUdmMUIsWUFBVSxvQkFBVTJCLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixTQUFyQixFQUFnQyxVQUFoQyxFQUE0QyxTQUE1QyxDQUFoQixDQUhLO0FBSWYxQixRQUFNLG9CQUFVeUIsTUFKRDtBQUtmZixRQUFNLG9CQUFVZ0IsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFFBQXJCLEVBQStCLE9BQS9CLENBQWhCLENBTFM7QUFNZnZCLGFBQVcsb0JBQVV3QixTQUFWLENBQW9CLENBQzdCLG9CQUFVQyxJQURtQixFQUU3QixvQkFBVUYsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxRQUFaLENBQWhCLENBRjZCLENBQXBCLENBTkk7QUFVZkcsU0FBTyxvQkFBVUosTUFWRjtBQVdmYixhQUFXLG9CQUFVYyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBaEIsQ0FYSTtBQVlmN0IsWUFBVSxvQkFBVWlDLE1BWkw7QUFhZlosU0FBTyxvQkFBVU8sTUFiRjtBQWNmM0IsYUFBVyxvQkFBVTJCO0FBZE4sQ0FBakI7O0FBaUJBbkMsS0FBS3lDLEtBQUwsR0FBYTtBQUNYckQsZ0NBRFc7QUFFWEcsNEJBRlc7QUFHWE0sNEJBSFc7QUFJWEMsOEJBSlc7QUFLWEM7QUFMVyxDQUFiIiwiZmlsZSI6Ikljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5pbXBvcnQgeyBnZXRBc3NldFJvb3QgfSBmcm9tICcuL3V0aWwnO1xuXG5zdmc0ZXZlcnlib2R5KCk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IFNUQU5EQVJEX0lDT05TID0gYFxuYWNjb3VudCxhbm5vdW5jZW1lbnQsYW5zd2VyX2Jlc3QsYW5zd2VyX3ByaXZhdGUsYW5zd2VyX3B1YmxpYyxhcHByb3ZhbCxhcHBzLGFwcHNfYWRtaW4sXG5hcnRpY2xlLGF2YXRhcixhdmF0YXJfbG9hZGluZyxjYWxpYnJhdGlvbixjYWxsLGNhbGxfaGlzdG9yeSxjYW1wYWlnbixjYW1wYWlnbl9tZW1iZXJzLFxuY2FudmFzLGNhc2UsY2FzZV9jaGFuZ2Vfc3RhdHVzLGNhc2VfY29tbWVudCxjYXNlX2VtYWlsLGNhc2VfbG9nX2FfY2FsbCxjYXNlX3RyYW5zY3JpcHQsXG5jbGllbnQsY29hY2hpbmcsY29ubmVjdGVkX2FwcHMsY29udGFjdCxjb250cmFjdCxjdXN0b20sZGFzaGJvYXJkLGRlZmF1bHQsZG9jdW1lbnQsXG5kcmFmdHMsZW1haWwsZW1haWxfSVEsZW1haWxfY2hhdHRlcixlbXB0eSxlbmRvcnNlbWVudCxlbnZpcm9ubWVudF9odWIsZXZlbnQsZmVlZCxmZWVkYmFjayxcbmZpbGUsZmxvdyxmb2xkZXIsZ2VuZXJpY19sb2FkaW5nLGdvYWxzLGdyb3VwX2xvYWRpbmcsZ3JvdXBzLGhpZXJhcmNoeSxob21lLGhvdXNlaG9sZCxpbnNpZ2h0cyxpbnZlc3RtZW50X2FjY291bnQsXG5sZWFkLGxpbmssbG9nX2FfY2FsbCxtYXJrZXRpbmdfYWN0aW9ucyxtZXRyaWNzLG5ld3Msbm90ZSxvcHBvcnR1bml0eSxcbm9yZGVycyxwZW9wbGUscGVyZm9ybWFuY2UscGVyc29uX2FjY291bnQscGhvdG8scG9sbCxwb3J0YWwscG9zdCxwcmljZWJvb2sscHJvY2Vzcyxwcm9kdWN0LHF1ZXN0aW9uX2Jlc3QsXG5xdWVzdGlvbl9mZWVkLHF1b3RlcyxyZWNlbnQscmVjb3JkLHJlbGF0ZWRfbGlzdCxyZXBvcnQscmV3YXJkLHNjYW5fY2FyZCxza2lsbF9lbnRpdHksXG5zb2NpYWwsc29sdXRpb24sc29zc2Vzc2lvbix0YXNrLHRhc2syLHRlYW1fbWVtYmVyLHRoYW5rcyx0aGFua3NfbG9hZGluZyx0b2RheSx0b3BpYyxcbnVubWF0Y2hlZCx1c2VyLHdvcmtfb3JkZXIsd29ya19vcmRlcl9pdGVtXG5gXG4gIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblxuY29uc3QgQ1VTVE9NX0lDT05TID1cbiAgbmV3IEFycmF5KDEwMSkuam9pbignXycpLnNwbGl0KCcnKVxuICAgIC5tYXAoKGEsIGkpID0+IGBjdXN0b20keyhpICsgMSl9YCk7XG5cbmNvbnN0IEFDVElPTl9JQ09OUyA9IGBcbmFkZF9jb250YWN0LGFubm91bmNlbWVudCxhcGV4LGFwcHJvdmFsLGJhY2ssY2FsbCxjYW52YXMsY2hhbmdlX293bmVyLGNoYW5nZV9yZWNvcmRfdHlwZSxcbmNoZWNrLGNsb25lLGNsb3NlLGRlZmVyLGRlbGV0ZSxkZXNjcmlwdGlvbixkaWFsX2luLGRvd25sb2FkLGVkaXQsZWRpdF9ncm91cHMsZWRpdF9yZWxhdGlvbnNoaXAsXG5lbWFpbCxmYWxsYmFjayxmaWx0ZXIsZmxvdyxmb2xsb3csZm9sbG93aW5nLGZyZWV6ZV91c2VyLGdvYWwsZ29vZ2xlX25ld3MsaW5mbyxqb2luX2dyb3VwLFxubGVhZF9jb252ZXJ0LGxlYXZlX2dyb3VwLGxvZ19hX2NhbGwsbG9nX2V2ZW50LG1hbmFnZV9wZXJtX3NldHMsbWFwLG1vcmUsbmV3LG5ld19hY2NvdW50LFxubmV3X2NhbXBhaWduLG5ld19jYXNlLG5ld19jaGlsZF9jYXNlLG5ld19jb250YWN0LG5ld19ldmVudCxuZXdfZ3JvdXAsbmV3X2xlYWQsbmV3X25vdGUsXG5uZXdfbm90ZWJvb2ssbmV3X29wcG9ydHVuaXR5LG5ld19wZXJzb25fYWNjb3VudCxuZXdfdGFzayxwYXNzd29yZF91bmxvY2sscHJldmlldyxwcmlvcml0eSxxdWVzdGlvbl9wb3N0X2FjdGlvbixcbnF1b3RlLHJlY29yZCxyZWZyZXNoLHJlamVjdCxyZW1vdmUscmVzZXRfcGFzc3dvcmQsc2hhcmUsc2hhcmVfZmlsZSxzaGFyZV9saW5rLHNoYXJlX3BvbGwsXG5zaGFyZV9wb3N0LHNoYXJlX3RoYW5rcyxzb3J0LHN1Ym1pdF9mb3JfYXBwcm92YWwsdXBkYXRlLHVwZGF0ZV9zdGF0dXMsdXBsb2FkLHVzZXIsdXNlcl9hY3RpdmF0aW9uLFxud2ViX2xpbmssXG5uZXdfY3VzdG9tNyxuZXdfY3VzdG9tOCxuZXdfY3VzdG9tOSxuZXdfY3VzdG9tMTAsbmV3X2N1c3RvbTExLG5ld19jdXN0b20xMixuZXdfY3VzdG9tMTMsXG5uZXdfY3VzdG9tMTQsbmV3X2N1c3RvbTE1LG5ld19jdXN0b20xNixuZXdfY3VzdG9tMTcsbmV3X2N1c3RvbTE4LG5ld19jdXN0b20xOSxuZXdfY3VzdG9tMjAsXG5uZXdfY3VzdG9tMjEsbmV3X2N1c3RvbTIyLG5ld19jdXN0b20yMyxuZXdfY3VzdG9tMjQsbmV3X2N1c3RvbTI1LG5ld19jdXN0b20yNixuZXdfY3VzdG9tMjcsXG5uZXdfY3VzdG9tMjgsbmV3X2N1c3RvbTI5LG5ld19jdXN0b20zMCxuZXdfY3VzdG9tMzEsbmV3X2N1c3RvbTMyLG5ld19jdXN0b20zMyxuZXdfY3VzdG9tMzQsXG5uZXdfY3VzdG9tMzUsbmV3X2N1c3RvbTM2LG5ld19jdXN0b20zNyxuZXdfY3VzdG9tMzgsbmV3X2N1c3RvbTM5LG5ld19jdXN0b200MCxuZXdfY3VzdG9tNDEsXG5uZXdfY3VzdG9tNDIsbmV3X2N1c3RvbTQzLG5ld19jdXN0b200NCxuZXdfY3VzdG9tNDUsbmV3X2N1c3RvbTQ2LG5ld19jdXN0b200NyxuZXdfY3VzdG9tNDgsXG5uZXdfY3VzdG9tNDksbmV3X2N1c3RvbTUwLG5ld19jdXN0b201MSxuZXdfY3VzdG9tNTIsbmV3X2N1c3RvbTUzLG5ld19jdXN0b201NCxuZXdfY3VzdG9tNTUsXG5uZXdfY3VzdG9tNTYsbmV3X2N1c3RvbTU3LG5ld19jdXN0b201OCxuZXdfY3VzdG9tNTksbmV3X2N1c3RvbTYwLG5ld19jdXN0b202MSxuZXdfY3VzdG9tNjIsXG5uZXdfY3VzdG9tNjMsbmV3X2N1c3RvbTY0LG5ld19jdXN0b202NSxuZXdfY3VzdG9tNjYsbmV3X2N1c3RvbTY3LG5ld19jdXN0b202OCxuZXdfY3VzdG9tNjksXG5uZXdfY3VzdG9tNzAsbmV3X2N1c3RvbTcxLG5ld19jdXN0b203MixuZXdfY3VzdG9tNzMsbmV3X2N1c3RvbTc0LG5ld19jdXN0b203NSxuZXdfY3VzdG9tNzYsXG5uZXdfY3VzdG9tNzcsbmV3X2N1c3RvbTc4LG5ld19jdXN0b203OSxuZXdfY3VzdG9tODAsbmV3X2N1c3RvbTgxLG5ld19jdXN0b204MixuZXdfY3VzdG9tODMsXG5uZXdfY3VzdG9tODQsbmV3X2N1c3RvbTg1LG5ld19jdXN0b204NixuZXdfY3VzdG9tODcsbmV3X2N1c3RvbTg4LG5ld19jdXN0b204OSxuZXdfY3VzdG9tOTAsXG5uZXdfY3VzdG9tOTEsbmV3X2N1c3RvbTkyLG5ld19jdXN0b205MyxuZXdfY3VzdG9tOTQsbmV3X2N1c3RvbTk1LG5ld19jdXN0b205NixuZXdfY3VzdG9tOTcsXG5uZXdfY3VzdG9tOTgsbmV3X2N1c3RvbTk5LG5ld19jdXN0b20xMDBcbmBcbiAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXG5cbmNvbnN0IERPQ1RZUEVfSUNPTlMgPSBgXG5haSxhdHRhY2htZW50LGF1ZGlvLGJveF9ub3Rlcyxjc3YsZXBzLGV4Y2VsLGV4ZSxmbGFzaCxnZG9jLGdkb2NzLGdwcmVzLGdzaGVldCxodG1sLGltYWdlLGtleW5vdGUsXG5saW5rLG1wNCxvdmVybGF5LHBhY2sscGFnZXMscGRmLHBwdCxwc2QscnRmLHNsaWRlLHN0eXBpLHR4dCx1bmtub3duLHZpZGVvLHZpc2lvLFxud2ViZXgsd29yZCx4bWwsemlwXG5gXG4gIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblxuXG5jb25zdCBVVElMSVRZX0lDT05TID0gYFxuYWRkLGFkZHVzZXIsYW5ub3VuY2VtZW50LGFuc3dlcixhcHBzLGFycm93ZG93bixhcnJvd3VwLGF0dGFjaCxiYWNrLGJhbixib2xkLGJvb2ttYXJrLGJydXNoLFxuYnVja2V0LGJ1aWxkZXIsY2FsbCxjYXBzbG9jayxjYXNlcyxjZW50ZXJfYWxpZ25fdGV4dCxjaGFydCxjaGF0LGNoZWNrLGNoZWNraW4sY2hldnJvbmRvd24sXG5jaGV2cm9ubGVmdCxjaGV2cm9ucmlnaHQsY2hldnJvbnVwLGNsZWFyLGNsb2NrLGNsb3NlLGNvbW1lbnRzLGNvbXBhbnksY29ubmVjdGVkX2FwcHMsXG5jb250cmFjdCxjb250cmFjdF9hbHQsY29weSxjcm9zc2ZpbHRlcixjdXN0b21fYXBwcyxjdXQsZGFzaCxkYXRhZG90Y29tLGRheXZpZXcsZGVsZXRlLGRlcHJlY2F0ZSxcbmRlc2NyaXB0aW9uLGRlc2t0b3AsZG93bixkb3dubG9hZCxlZGl0LGVkaXRfZm9ybSxlbWFpbCxlbmRfY2FsbCxlcmVjdF93aW5kb3csZXJyb3IsZXZlbnQsZXhwYW5kLFxuZXhwYW5kX2FsdCxmYXZvcml0ZSxmZWVkLGZpbGUsZmlsdGVyLGZpbHRlckxpc3QsZm9yd2FyZCxmcm96ZW4sZ3JvdXBzLGhlbHAsaG9tZSxpZGVudGl0eSxpbWFnZSxpbmJveCxpbmZvLFxuaW5zZXJ0X3RhZ19maWVsZCxpbnNlcnRfdGVtcGxhdGUsaXRhbGljLGp1c3RpZnlfdGV4dCxrYW5iYW4sa25vd2xlZGdlX2Jhc2UsbGF5ZXJzLGxheW91dCxcbmxlZnQsbGVmdF9hbGlnbl90ZXh0LGxpa2UsbGluayxsaXN0LGxvY2F0aW9uLGxvY2ssbG9nX2FfY2FsbCxsb2dvdXQsbWFnaWN3YW5kLG1hdHJpeCxtZXRyaWNzLG1pbmltaXplX3dpbmRvdyxcbm1vbmV5YmFnLG1vbnRobHl2aWV3LG1vdmUsbXV0ZWQsbmV3LG5ld193aW5kb3csbmV3cyxub3RlLG5vdGVib29rLG5vdGlmaWNhdGlvbixvZmZpY2UzNjUsb2ZmbGluZSxcbm9wZW4sb3Blbl9mb2xkZXIsb3BlbmVkX2ZvbGRlcixvdmVyZmxvdyxwYWNrYWdlLHBhY2thZ2Vfb3JnLHBhY2thZ2Vfb3JnX2JldGEscGFnZSxwYWxldHRlLHBhc3RlLFxucGVvcGxlLHBob25lX2xhbmRzY2FwZSxwaG9uZV9wb3J0cmFpdCxwaG90byxwaWNrbGlzdCxwb3dlcixwcmV2aWV3LHByaW9yaXR5LHByb2Nlc3MscHVzaCxwdXp6bGUsXG5xdWVzdGlvbixxdWVzdGlvbnNfYW5kX2Fuc3dlcnMscmVjb3JkLHJlZG8scmVmcmVzaCxyZWxhdGUscmVtb3ZlX2Zvcm1hdHRpbmcscmVtb3ZlX2xpbmssXG5yZXBsYWNlLHJlcGx5LHJlc2V0X3Bhc3N3b3JkLHJldHdlZXQscmljaHRleHRidWxsZXRlZGxpc3QscmljaHRleHRpbmRlbnQscmljaHRleHRudW1iZXJlZGxpc3QsXG5yaWNodGV4dG91dGRlbnQscmlnaHQscmlnaHRfYWxpZ25fdGV4dCxyb3RhdGUscm93cyxzYWxlc2ZvcmNlMSxzZWFyY2gsc2V0dGluZ3Msc2V0dXAsc2V0dXBfYXNzaXN0YW50X2d1aWRlLFxuc2hhcmUsc2hhcmVfcG9zdCxzaGllbGQsc2lkZV9saXN0LHNpZ25wb3N0LHNtcyxzbmlwcGV0LHNvY2lhbHNoYXJlLHNvcnQsc3Bpbm5lcixzdGFuZGFyZF9vYmplY3RzLFxuc3RvcCxzdHJpa2V0aHJvdWdoLHN1Y2Nlc3Msc3VtbWFyeSxzdW1tYXJ5ZGV0YWlsLHN3aXRjaCx0YWJsZSx0YWJsZXRfbGFuZHNjYXBlLHRhYmxldF9wb3J0cmFpdCxcbnRhYnNldCx0YXNrLHRleHRfYmFja2dyb3VuZF9jb2xvcix0ZXh0X2NvbG9yLHRocmVlZG90cyx0aWxlX2NhcmRfbGlzdCx0b3BpYyx0b3VjaF9hY3Rpb24sdHJhaWwsdW5kZWxldGUsdW5kZXByZWNhdGUsXG51bmRlcmxpbmUsdW5kbyx1bmxvY2ssdW5tdXRlZCx1cCx1cGxvYWQsdXNlcix1c2VyX3JvbGUsdm9sdW1lX2hpZ2gsdm9sdW1lX2xvdyx2b2x1bWVfb2ZmLHdhcm5pbmcsXG53ZWVrbHl2aWV3LHdvcmxkLHpvb21pbix6b29tb3V0XG5gXG4gIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICAgIGNvbnN0IHN2Z0VsID0gdGhpcy5zdmdJY29uO1xuICAgIGlmIChzdmdFbCkge1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCB0aGlzLnByb3BzLnRhYkluZGV4ID49IDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XG4gIH1cblxuICBnZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbikge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVubmVlZGVkLXRlcm5hcnkgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuaWNvbkNvbG9yID8gdGhpcy5zdGF0ZS5pY29uQ29sb3IgOlxuICAgICAgICBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnID8gbnVsbCA6XG4gICAgICAgICAgZmlsbENvbG9yID09PSAnbm9uZScgPyBudWxsIDpcbiAgICAgICAgICAgIGZpbGxDb2xvciA/IGZpbGxDb2xvciA6XG4gICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAndXRpbGl0eScgPyBudWxsIDpcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ2N1c3RvbScgPyBpY29uLnJlcGxhY2UoL15jdXN0b20vLCAnY3VzdG9tLScpIDpcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAnYWN0aW9uJyAmJiAvXm5ld19jdXN0b20vLnRlc3QoaWNvbikgPyBpY29uLnJlcGxhY2UoL15uZXdfY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICAgICAgICAgICAgICAgIGAke2NhdGVnb3J5fS0keyhpY29uIHx8ICcnKS5yZXBsYWNlKC9fL2csICctJyl9YFxuICAgICk7XG4gIH1cblxuICBjaGVja0ljb25Db2xvcigpIHtcbiAgICBjb25zdCB7IGZpbGxDb2xvciwgY2F0ZWdvcnkgPSAndXRpbGl0eScsIGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGljb25Db2xvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZmlsbENvbG9yIHx8IGNhdGVnb3J5ID09PSAnZG9jdHlwZScgfHxcbiAgICAgICghZmlsbENvbG9yICYmIGNhdGVnb3J5ID09PSAndXRpbGl0eScpIHx8XG4gICAgICBpY29uQ29sb3IgPT09ICdzdGFuZGFyZC1kZWZhdWx0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGNvbnRhaW5lciA/IHRoaXMuaWNvbkNvbnRhaW5lciA6IHRoaXMuc3ZnSWNvbjtcbiAgICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGJnQ29sb3JTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpWydiYWNrZ3JvdW5kLWNvbG9yJ107XG4gICAgLy8gaWYgbm8gYmFja2dyb3VuZCBjb2xvciBzZXQgdG8gdGhlIGljb25cbiAgICBpZiAoL14odHJhbnNwYXJlbnR8cmdiYVxcKDAsXFxzKjAsXFxzKjAsXFxzKjBcXCkpJC8udGVzdChiZ0NvbG9yU3R5bGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaWNvbkNvbG9yOiAnc3RhbmRhcmQtZGVmYXVsdCcgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU1ZHKHtcbiAgICBjbGFzc05hbWUsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBpY29uLCBzaXplLCBhbGlnbiwgZmlsbENvbG9yLCBjb250YWluZXIsXG4gICAgdGV4dENvbG9yID0gJ2RlZmF1bHQnLCBzdHlsZSwgLi4ucHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xuICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaWNvbic6ICEvc2xkc1xcLWJ1dHRvbl9faWNvbi8udGVzdChjbGFzc05hbWUpLFxuICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfG1lZGl1bXxsYXJnZSkkLy50ZXN0KHNpemUpLFxuICAgICAgICBbYHNsZHMtaWNvbi10ZXh0LSR7dGV4dENvbG9yfWBdOiAvXihkZWZhdWx0fHdhcm5pbmd8ZXJyb3IpJC8udGVzdCh0ZXh0Q29sb3IpICYmICFpY29uQ29sb3IsXG4gICAgICAgIFtgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWBdOiAhY29udGFpbmVyICYmIGljb25Db2xvcixcbiAgICAgICAgJ3NsZHMtbS1sZWZ0LS14LXNtYWxsJzogYWxpZ24gPT09ICdyaWdodCcsXG4gICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG5cbiAgICAvLyBpY29uIGFuZCBjYXRlZ29yeSBwcm9wIHNob3VsZCBub3QgaW5jbHVkZSBjaGFycyBvdGhlciB0aGFuIGFscGhhbnVtZXJpY3MsIHVuZGVyc2NvcmUsIGFuZCBoeXBoZW5cbiAgICBpY29uID0gKGljb24gfHwgJycpLnJlcGxhY2UoL1teXFx3XFwtXS9nLCAnJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBjYXRlZ29yeSA9IChjYXRlZ29yeSB8fCAnJykucmVwbGFjZSgvW15cXHdcXC1dL2csICcnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gICAgY29uc3QgaWNvblVybCA9IGAke2dldEFzc2V0Um9vdCgpfS9pY29ucy8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnIyR7aWNvbn1gO1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17IGljb25DbGFzc05hbWVzIH1cbiAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgcmVmPXsgbm9kZSA9PiAodGhpcy5zdmdJY29uID0gbm9kZSkgfVxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8dXNlIHhsaW5rSHJlZj17aWNvblVybH0gLz5cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIHRpdGxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBjYXRlZ29yeSwgaWNvbiB9ID0gcHJvcHM7XG5cbiAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICBbY2F0ZWdvcnksIGljb25dID0gaWNvbi5zcGxpdCgnOicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzTmFtZSwgZmlsbENvbG9yLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICBjb25zdCBjY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAnc2xkcy1pY29uX19jb250YWluZXInLFxuICAgICAgICBjb250YWluZXIgPT09ICdjaXJjbGUnID8gJ3NsZHMtaWNvbl9fY29udGFpbmVyLS1jaXJjbGUnIDogbnVsbCxcbiAgICAgICAgaWNvbkNvbG9yID8gYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gIDogbnVsbFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIHRpdGxlPXsgdGl0bGUgfSBjbGFzc05hbWU9eyBjY29udGFpbmVyQ2xhc3NOYW1lIH0gcmVmPXsgbm9kZSA9PiAodGhpcy5pY29uQ29udGFpbmVyID0gbm9kZSkgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU1ZHKHsgY2F0ZWdvcnksIGljb24sIGZpbGxDb2xvcjogaWNvbkNvbG9yLCBjb250YWluZXIsIC4uLnBwcm9wcyB9KSB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU1ZHKHsgLi4ucHJvcHMsIGNhdGVnb3J5LCBpY29uIH0pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5vbmVPZihbJ2FjdGlvbicsICdjdXN0b20nLCAnZG9jdHlwZScsICdzdGFuZGFyZCcsICd1dGlsaXR5J10pLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NpcmNsZSddKSxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWxsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JY29uLklDT05TID0ge1xuICBTVEFOREFSRF9JQ09OUyxcbiAgQ1VTVE9NX0lDT05TLFxuICBBQ1RJT05fSUNPTlMsXG4gIERPQ1RZUEVfSUNPTlMsXG4gIFVUSUxJVFlfSUNPTlMsXG59O1xuIl19