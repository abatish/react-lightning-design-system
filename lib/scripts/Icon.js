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
          props = (0, _objectWithoutProperties3.default)(_props2, ['container']);
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
        if (typeof title !== 'undefined') {
          return _react2.default.createElement(
            'span',
            { title: title, className: ccontainerClassName, ref: function ref(node) {
                return _this3.iconContainer = node;
              } },
            this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
          );
        } else {
          return _react2.default.createElement(
            'span',
            { className: ccontainerClassName, ref: function ref(node) {
                return _this3.iconContainer = node;
              } },
            this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
          );
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOlsiU1RBTkRBUkRfSUNPTlMiLCJyZXBsYWNlIiwic3BsaXQiLCJDVVNUT01fSUNPTlMiLCJBcnJheSIsImpvaW4iLCJtYXAiLCJhIiwiaSIsIkFDVElPTl9JQ09OUyIsIkRPQ1RZUEVfSUNPTlMiLCJVVElMSVRZX0lDT05TIiwiSWNvbiIsInByb3BzIiwic3RhdGUiLCJjaGVja0ljb25Db2xvciIsInN2Z0VsIiwic3ZnSWNvbiIsInNldEF0dHJpYnV0ZSIsInRhYkluZGV4IiwiZmlsbENvbG9yIiwiY2F0ZWdvcnkiLCJpY29uIiwiaWNvbkNvbG9yIiwidGVzdCIsImNvbnRhaW5lciIsImVsIiwiaWNvbkNvbnRhaW5lciIsImJnQ29sb3JTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsInNpemUiLCJhbGlnbiIsInRleHRDb2xvciIsInN0eWxlIiwiZ2V0SWNvbkNvbG9yIiwiaWNvbkNsYXNzTmFtZXMiLCJpY29uVXJsIiwibm9kZSIsImluZGV4T2YiLCJjb250YWluZXJDbGFzc05hbWUiLCJwcHJvcHMiLCJjY29udGFpbmVyQ2xhc3NOYW1lIiwidGl0bGUiLCJyZW5kZXJTVkciLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm9uZU9mVHlwZSIsImJvb2wiLCJjb2xvciIsIm51bWJlciIsIklDT05TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7QUFDQSxJQUFNQSxpQkFBaUIsMjdCQWFwQkMsT0Fib0IsQ0FhWixZQWJZLEVBYUUsRUFiRixFQWFNQyxLQWJOLENBYVksUUFiWixDQUF2Qjs7QUFlQSxJQUFNQyxlQUNKLElBQUlDLEtBQUosQ0FBVSxHQUFWLEVBQWVDLElBQWYsQ0FBb0IsR0FBcEIsRUFB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QVUyQjtBQWROLENBQWpCOztBQWlCQW5DLEtBQUt5QyxLQUFMLEdBQWE7QUFDWHJELGdDQURXO0FBRVhHLDRCQUZXO0FBR1hNLDRCQUhXO0FBSVhDLDhCQUpXO0FBS1hDO0FBTFcsQ0FBYiIsImZpbGUiOiJJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xuaW1wb3J0IHsgZ2V0QXNzZXRSb290IH0gZnJvbSAnLi91dGlsJztcblxuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBTVEFOREFSRF9JQ09OUyA9IGBcbmFjY291bnQsYW5ub3VuY2VtZW50LGFuc3dlcl9iZXN0LGFuc3dlcl9wcml2YXRlLGFuc3dlcl9wdWJsaWMsYXBwcm92YWwsYXBwcyxhcHBzX2FkbWluLFxuYXJ0aWNsZSxhdmF0YXIsYXZhdGFyX2xvYWRpbmcsY2FsaWJyYXRpb24sY2FsbCxjYWxsX2hpc3RvcnksY2FtcGFpZ24sY2FtcGFpZ25fbWVtYmVycyxcbmNhbnZhcyxjYXNlLGNhc2VfY2hhbmdlX3N0YXR1cyxjYXNlX2NvbW1lbnQsY2FzZV9lbWFpbCxjYXNlX2xvZ19hX2NhbGwsY2FzZV90cmFuc2NyaXB0LFxuY2xpZW50LGNvYWNoaW5nLGNvbm5lY3RlZF9hcHBzLGNvbnRhY3QsY29udHJhY3QsY3VzdG9tLGRhc2hib2FyZCxkZWZhdWx0LGRvY3VtZW50LFxuZHJhZnRzLGVtYWlsLGVtYWlsX0lRLGVtYWlsX2NoYXR0ZXIsZW1wdHksZW5kb3JzZW1lbnQsZW52aXJvbm1lbnRfaHViLGV2ZW50LGZlZWQsZmVlZGJhY2ssXG5maWxlLGZsb3csZm9sZGVyLGdlbmVyaWNfbG9hZGluZyxnb2Fscyxncm91cF9sb2FkaW5nLGdyb3VwcyxoaWVyYXJjaHksaG9tZSxob3VzZWhvbGQsaW5zaWdodHMsaW52ZXN0bWVudF9hY2NvdW50LFxubGVhZCxsaW5rLGxvZ19hX2NhbGwsbWFya2V0aW5nX2FjdGlvbnMsbWV0cmljcyxuZXdzLG5vdGUsb3Bwb3J0dW5pdHksXG5vcmRlcnMscGVvcGxlLHBlcmZvcm1hbmNlLHBlcnNvbl9hY2NvdW50LHBob3RvLHBvbGwscG9ydGFsLHBvc3QscHJpY2Vib29rLHByb2Nlc3MscHJvZHVjdCxxdWVzdGlvbl9iZXN0LFxucXVlc3Rpb25fZmVlZCxxdW90ZXMscmVjZW50LHJlY29yZCxyZWxhdGVkX2xpc3QscmVwb3J0LHJld2FyZCxzY2FuX2NhcmQsc2tpbGxfZW50aXR5LFxuc29jaWFsLHNvbHV0aW9uLHNvc3Nlc3Npb24sdGFzayx0YXNrMix0ZWFtX21lbWJlcix0aGFua3MsdGhhbmtzX2xvYWRpbmcsdG9kYXksdG9waWMsXG51bm1hdGNoZWQsdXNlcix3b3JrX29yZGVyLHdvcmtfb3JkZXJfaXRlbVxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cbmNvbnN0IENVU1RPTV9JQ09OUyA9XG4gIG5ldyBBcnJheSgxMDEpLmpvaW4oJ18nKS5zcGxpdCgnJylcbiAgICAubWFwKChhLCBpKSA9PiBgY3VzdG9tJHsoaSArIDEpfWApO1xuXG5jb25zdCBBQ1RJT05fSUNPTlMgPSBgXG5hZGRfY29udGFjdCxhbm5vdW5jZW1lbnQsYXBleCxhcHByb3ZhbCxiYWNrLGNhbGwsY2FudmFzLGNoYW5nZV9vd25lcixjaGFuZ2VfcmVjb3JkX3R5cGUsXG5jaGVjayxjbG9uZSxjbG9zZSxkZWZlcixkZWxldGUsZGVzY3JpcHRpb24sZGlhbF9pbixkb3dubG9hZCxlZGl0LGVkaXRfZ3JvdXBzLGVkaXRfcmVsYXRpb25zaGlwLFxuZW1haWwsZmFsbGJhY2ssZmlsdGVyLGZsb3csZm9sbG93LGZvbGxvd2luZyxmcmVlemVfdXNlcixnb2FsLGdvb2dsZV9uZXdzLGluZm8sam9pbl9ncm91cCxcbmxlYWRfY29udmVydCxsZWF2ZV9ncm91cCxsb2dfYV9jYWxsLGxvZ19ldmVudCxtYW5hZ2VfcGVybV9zZXRzLG1hcCxtb3JlLG5ldyxuZXdfYWNjb3VudCxcbm5ld19jYW1wYWlnbixuZXdfY2FzZSxuZXdfY2hpbGRfY2FzZSxuZXdfY29udGFjdCxuZXdfZXZlbnQsbmV3X2dyb3VwLG5ld19sZWFkLG5ld19ub3RlLFxubmV3X25vdGVib29rLG5ld19vcHBvcnR1bml0eSxuZXdfcGVyc29uX2FjY291bnQsbmV3X3Rhc2sscGFzc3dvcmRfdW5sb2NrLHByZXZpZXcscHJpb3JpdHkscXVlc3Rpb25fcG9zdF9hY3Rpb24sXG5xdW90ZSxyZWNvcmQscmVmcmVzaCxyZWplY3QscmVtb3ZlLHJlc2V0X3Bhc3N3b3JkLHNoYXJlLHNoYXJlX2ZpbGUsc2hhcmVfbGluayxzaGFyZV9wb2xsLFxuc2hhcmVfcG9zdCxzaGFyZV90aGFua3Msc29ydCxzdWJtaXRfZm9yX2FwcHJvdmFsLHVwZGF0ZSx1cGRhdGVfc3RhdHVzLHVwbG9hZCx1c2VyLHVzZXJfYWN0aXZhdGlvbixcbndlYl9saW5rLFxubmV3X2N1c3RvbTcsbmV3X2N1c3RvbTgsbmV3X2N1c3RvbTksbmV3X2N1c3RvbTEwLG5ld19jdXN0b20xMSxuZXdfY3VzdG9tMTIsbmV3X2N1c3RvbTEzLFxubmV3X2N1c3RvbTE0LG5ld19jdXN0b20xNSxuZXdfY3VzdG9tMTYsbmV3X2N1c3RvbTE3LG5ld19jdXN0b20xOCxuZXdfY3VzdG9tMTksbmV3X2N1c3RvbTIwLFxubmV3X2N1c3RvbTIxLG5ld19jdXN0b20yMixuZXdfY3VzdG9tMjMsbmV3X2N1c3RvbTI0LG5ld19jdXN0b20yNSxuZXdfY3VzdG9tMjYsbmV3X2N1c3RvbTI3LFxubmV3X2N1c3RvbTI4LG5ld19jdXN0b20yOSxuZXdfY3VzdG9tMzAsbmV3X2N1c3RvbTMxLG5ld19jdXN0b20zMixuZXdfY3VzdG9tMzMsbmV3X2N1c3RvbTM0LFxubmV3X2N1c3RvbTM1LG5ld19jdXN0b20zNixuZXdfY3VzdG9tMzcsbmV3X2N1c3RvbTM4LG5ld19jdXN0b20zOSxuZXdfY3VzdG9tNDAsbmV3X2N1c3RvbTQxLFxubmV3X2N1c3RvbTQyLG5ld19jdXN0b200MyxuZXdfY3VzdG9tNDQsbmV3X2N1c3RvbTQ1LG5ld19jdXN0b200NixuZXdfY3VzdG9tNDcsbmV3X2N1c3RvbTQ4LFxubmV3X2N1c3RvbTQ5LG5ld19jdXN0b201MCxuZXdfY3VzdG9tNTEsbmV3X2N1c3RvbTUyLG5ld19jdXN0b201MyxuZXdfY3VzdG9tNTQsbmV3X2N1c3RvbTU1LFxubmV3X2N1c3RvbTU2LG5ld19jdXN0b201NyxuZXdfY3VzdG9tNTgsbmV3X2N1c3RvbTU5LG5ld19jdXN0b202MCxuZXdfY3VzdG9tNjEsbmV3X2N1c3RvbTYyLFxubmV3X2N1c3RvbTYzLG5ld19jdXN0b202NCxuZXdfY3VzdG9tNjUsbmV3X2N1c3RvbTY2LG5ld19jdXN0b202NyxuZXdfY3VzdG9tNjgsbmV3X2N1c3RvbTY5LFxubmV3X2N1c3RvbTcwLG5ld19jdXN0b203MSxuZXdfY3VzdG9tNzIsbmV3X2N1c3RvbTczLG5ld19jdXN0b203NCxuZXdfY3VzdG9tNzUsbmV3X2N1c3RvbTc2LFxubmV3X2N1c3RvbTc3LG5ld19jdXN0b203OCxuZXdfY3VzdG9tNzksbmV3X2N1c3RvbTgwLG5ld19jdXN0b204MSxuZXdfY3VzdG9tODIsbmV3X2N1c3RvbTgzLFxubmV3X2N1c3RvbTg0LG5ld19jdXN0b204NSxuZXdfY3VzdG9tODYsbmV3X2N1c3RvbTg3LG5ld19jdXN0b204OCxuZXdfY3VzdG9tODksbmV3X2N1c3RvbTkwLFxubmV3X2N1c3RvbTkxLG5ld19jdXN0b205MixuZXdfY3VzdG9tOTMsbmV3X2N1c3RvbTk0LG5ld19jdXN0b205NSxuZXdfY3VzdG9tOTYsbmV3X2N1c3RvbTk3LFxubmV3X2N1c3RvbTk4LG5ld19jdXN0b205OSxuZXdfY3VzdG9tMTAwXG5gXG4gIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblxuXG5jb25zdCBET0NUWVBFX0lDT05TID0gYFxuYWksYXR0YWNobWVudCxhdWRpbyxib3hfbm90ZXMsY3N2LGVwcyxleGNlbCxleGUsZmxhc2gsZ2RvYyxnZG9jcyxncHJlcyxnc2hlZXQsaHRtbCxpbWFnZSxrZXlub3RlLFxubGluayxtcDQsb3ZlcmxheSxwYWNrLHBhZ2VzLHBkZixwcHQscHNkLHJ0ZixzbGlkZSxzdHlwaSx0eHQsdW5rbm93bix2aWRlbyx2aXNpbyxcbndlYmV4LHdvcmQseG1sLHppcFxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cblxuY29uc3QgVVRJTElUWV9JQ09OUyA9IGBcbmFkZCxhZGR1c2VyLGFubm91bmNlbWVudCxhbnN3ZXIsYXBwcyxhcnJvd2Rvd24sYXJyb3d1cCxhdHRhY2gsYmFjayxiYW4sYm9sZCxib29rbWFyayxicnVzaCxcbmJ1Y2tldCxidWlsZGVyLGNhbGwsY2Fwc2xvY2ssY2FzZXMsY2VudGVyX2FsaWduX3RleHQsY2hhcnQsY2hhdCxjaGVjayxjaGVja2luLGNoZXZyb25kb3duLFxuY2hldnJvbmxlZnQsY2hldnJvbnJpZ2h0LGNoZXZyb251cCxjbGVhcixjbG9jayxjbG9zZSxjb21tZW50cyxjb21wYW55LGNvbm5lY3RlZF9hcHBzLFxuY29udHJhY3QsY29udHJhY3RfYWx0LGNvcHksY3Jvc3NmaWx0ZXIsY3VzdG9tX2FwcHMsY3V0LGRhc2gsZGF0YWRvdGNvbSxkYXl2aWV3LGRlbGV0ZSxkZXByZWNhdGUsXG5kZXNjcmlwdGlvbixkZXNrdG9wLGRvd24sZG93bmxvYWQsZWRpdCxlZGl0X2Zvcm0sZW1haWwsZW5kX2NhbGwsZXJlY3Rfd2luZG93LGVycm9yLGV2ZW50LGV4cGFuZCxcbmV4cGFuZF9hbHQsZmF2b3JpdGUsZmVlZCxmaWxlLGZpbHRlcixmaWx0ZXJMaXN0LGZvcndhcmQsZnJvemVuLGdyb3VwcyxoZWxwLGhvbWUsaWRlbnRpdHksaW1hZ2UsaW5ib3gsaW5mbyxcbmluc2VydF90YWdfZmllbGQsaW5zZXJ0X3RlbXBsYXRlLGl0YWxpYyxqdXN0aWZ5X3RleHQsa2FuYmFuLGtub3dsZWRnZV9iYXNlLGxheWVycyxsYXlvdXQsXG5sZWZ0LGxlZnRfYWxpZ25fdGV4dCxsaWtlLGxpbmssbGlzdCxsb2NhdGlvbixsb2NrLGxvZ19hX2NhbGwsbG9nb3V0LG1hZ2ljd2FuZCxtYXRyaXgsbWV0cmljcyxtaW5pbWl6ZV93aW5kb3csXG5tb25leWJhZyxtb250aGx5dmlldyxtb3ZlLG11dGVkLG5ldyxuZXdfd2luZG93LG5ld3Msbm90ZSxub3RlYm9vayxub3RpZmljYXRpb24sb2ZmaWNlMzY1LG9mZmxpbmUsXG5vcGVuLG9wZW5fZm9sZGVyLG9wZW5lZF9mb2xkZXIsb3ZlcmZsb3cscGFja2FnZSxwYWNrYWdlX29yZyxwYWNrYWdlX29yZ19iZXRhLHBhZ2UscGFsZXR0ZSxwYXN0ZSxcbnBlb3BsZSxwaG9uZV9sYW5kc2NhcGUscGhvbmVfcG9ydHJhaXQscGhvdG8scGlja2xpc3QscG93ZXIscHJldmlldyxwcmlvcml0eSxwcm9jZXNzLHB1c2gscHV6emxlLFxucXVlc3Rpb24scXVlc3Rpb25zX2FuZF9hbnN3ZXJzLHJlY29yZCxyZWRvLHJlZnJlc2gscmVsYXRlLHJlbW92ZV9mb3JtYXR0aW5nLHJlbW92ZV9saW5rLFxucmVwbGFjZSxyZXBseSxyZXNldF9wYXNzd29yZCxyZXR3ZWV0LHJpY2h0ZXh0YnVsbGV0ZWRsaXN0LHJpY2h0ZXh0aW5kZW50LHJpY2h0ZXh0bnVtYmVyZWRsaXN0LFxucmljaHRleHRvdXRkZW50LHJpZ2h0LHJpZ2h0X2FsaWduX3RleHQscm90YXRlLHJvd3Msc2FsZXNmb3JjZTEsc2VhcmNoLHNldHRpbmdzLHNldHVwLHNldHVwX2Fzc2lzdGFudF9ndWlkZSxcbnNoYXJlLHNoYXJlX3Bvc3Qsc2hpZWxkLHNpZGVfbGlzdCxzaWducG9zdCxzbXMsc25pcHBldCxzb2NpYWxzaGFyZSxzb3J0LHNwaW5uZXIsc3RhbmRhcmRfb2JqZWN0cyxcbnN0b3Asc3RyaWtldGhyb3VnaCxzdWNjZXNzLHN1bW1hcnksc3VtbWFyeWRldGFpbCxzd2l0Y2gsdGFibGUsdGFibGV0X2xhbmRzY2FwZSx0YWJsZXRfcG9ydHJhaXQsXG50YWJzZXQsdGFzayx0ZXh0X2JhY2tncm91bmRfY29sb3IsdGV4dF9jb2xvcix0aHJlZWRvdHMsdGlsZV9jYXJkX2xpc3QsdG9waWMsdG91Y2hfYWN0aW9uLHRyYWlsLHVuZGVsZXRlLHVuZGVwcmVjYXRlLFxudW5kZXJsaW5lLHVuZG8sdW5sb2NrLHVubXV0ZWQsdXAsdXBsb2FkLHVzZXIsdXNlcl9yb2xlLHZvbHVtZV9oaWdoLHZvbHVtZV9sb3csdm9sdW1lX29mZix3YXJuaW5nLFxud2Vla2x5dmlldyx3b3JsZCx6b29taW4sem9vbW91dFxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcbiAgICBjb25zdCBzdmdFbCA9IHRoaXMuc3ZnSWNvbjtcbiAgICBpZiAoc3ZnRWwpIHtcbiAgICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgdGhpcy5wcm9wcy50YWJJbmRleCA+PSAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICB9XG5cbiAgZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bm5lZWRlZC10ZXJuYXJ5ICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmljb25Db2xvciA/IHRoaXMuc3RhdGUuaWNvbkNvbG9yIDpcbiAgICAgICAgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyA/IG51bGwgOlxuICAgICAgICAgIGZpbGxDb2xvciA9PT0gJ25vbmUnID8gbnVsbCA6XG4gICAgICAgICAgICBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOlxuICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09ICdjdXN0b20nID8gaWNvbi5yZXBsYWNlKC9eY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ2FjdGlvbicgJiYgL15uZXdfY3VzdG9tLy50ZXN0KGljb24pID8gaWNvbi5yZXBsYWNlKC9ebmV3X2N1c3RvbS8sICdjdXN0b20tJykgOlxuICAgICAgICAgICAgICAgICAgICBgJHtjYXRlZ29yeX0tJHsoaWNvbiB8fCAnJykucmVwbGFjZSgvXy9nLCAnLScpfWBcbiAgICApO1xuICB9XG5cbiAgY2hlY2tJY29uQ29sb3IoKSB7XG4gICAgY29uc3QgeyBmaWxsQ29sb3IsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpY29uQ29sb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGZpbGxDb2xvciB8fCBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnIHx8XG4gICAgICAoIWZpbGxDb2xvciAmJiBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknKSB8fFxuICAgICAgaWNvbkNvbG9yID09PSAnc3RhbmRhcmQtZGVmYXVsdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBjb250YWluZXIgPyB0aGlzLmljb25Db250YWluZXIgOiB0aGlzLnN2Z0ljb247XG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBiZ0NvbG9yU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVsnYmFja2dyb3VuZC1jb2xvciddO1xuICAgIC8vIGlmIG5vIGJhY2tncm91bmQgY29sb3Igc2V0IHRvIHRoZSBpY29uXG4gICAgaWYgKC9eKHRyYW5zcGFyZW50fHJnYmFcXCgwLFxccyowLFxccyowLFxccyowXFwpKSQvLnRlc3QoYmdDb2xvclN0eWxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGljb25Db2xvcjogJ3N0YW5kYXJkLWRlZmF1bHQnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNWRyh7XG4gICAgY2xhc3NOYW1lLCBjYXRlZ29yeSA9ICd1dGlsaXR5JywgaWNvbiwgc2l6ZSwgYWxpZ24sIGZpbGxDb2xvciwgY29udGFpbmVyLFxuICAgIHRleHRDb2xvciA9ICdkZWZhdWx0Jywgc3R5bGUsIC4uLnByb3BzXG4gIH0pIHtcbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLmdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKTtcbiAgICBjb25zdCBpY29uQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICB7XG4gICAgICAgICdzbGRzLWljb24nOiAhL3NsZHNcXC1idXR0b25fX2ljb24vLnRlc3QoY2xhc3NOYW1lKSxcbiAgICAgICAgW2BzbGRzLWljb24tLSR7c2l6ZX1gXTogL14oeC1zbWFsbHxzbWFsbHxtZWRpdW18bGFyZ2UpJC8udGVzdChzaXplKSxcbiAgICAgICAgW2BzbGRzLWljb24tdGV4dC0ke3RleHRDb2xvcn1gXTogL14oZGVmYXVsdHx3YXJuaW5nfGVycm9yKSQvLnRlc3QodGV4dENvbG9yKSAmJiAhaWNvbkNvbG9yLFxuICAgICAgICBbYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gXTogIWNvbnRhaW5lciAmJiBpY29uQ29sb3IsXG4gICAgICAgICdzbGRzLW0tbGVmdC0teC1zbWFsbCc6IGFsaWduID09PSAncmlnaHQnLFxuICAgICAgICAnc2xkcy1tLXJpZ2h0LS14LXNtYWxsJzogYWxpZ24gPT09ICdsZWZ0JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgLy8gaWNvbiBhbmQgY2F0ZWdvcnkgcHJvcCBzaG91bGQgbm90IGluY2x1ZGUgY2hhcnMgb3RoZXIgdGhhbiBhbHBoYW51bWVyaWNzLCB1bmRlcnNjb3JlLCBhbmQgaHlwaGVuXG4gICAgaWNvbiA9IChpY29uIHx8ICcnKS5yZXBsYWNlKC9bXlxcd1xcLV0vZywgJycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgY2F0ZWdvcnkgPSAoY2F0ZWdvcnkgfHwgJycpLnJlcGxhY2UoL1teXFx3XFwtXS9nLCAnJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICAgIGNvbnN0IGljb25VcmwgPSBgJHtnZXRBc3NldFJvb3QoKX0vaWNvbnMvJHtjYXRlZ29yeX0tc3ByaXRlL3N2Zy9zeW1ib2xzLnN2ZyMke2ljb259YDtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzc05hbWU9eyBpY29uQ2xhc3NOYW1lcyB9XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMuc3ZnSWNvbiA9IG5vZGUpIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPHVzZSB4bGlua0hyZWY9e2ljb25Vcmx9IC8+XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBjYXRlZ29yeSwgaWNvbiB9ID0gcHJvcHM7XG5cbiAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XG4gICAgICBbY2F0ZWdvcnksIGljb25dID0gaWNvbi5zcGxpdCgnOicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lckNsYXNzTmFtZSwgZmlsbENvbG9yLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgICBjb25zdCBjY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAnc2xkcy1pY29uX19jb250YWluZXInLFxuICAgICAgICBjb250YWluZXIgPT09ICdjaXJjbGUnID8gJ3NsZHMtaWNvbl9fY29udGFpbmVyLS1jaXJjbGUnIDogbnVsbCxcbiAgICAgICAgaWNvbkNvbG9yID8gYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gIDogbnVsbFxuICAgICAgKTtcbiAgICAgIGlmICh0eXBlb2YgdGl0bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gdGl0bGU9eyB0aXRsZSB9IGNsYXNzTmFtZT17IGNjb250YWluZXJDbGFzc05hbWUgfSByZWY9eyBub2RlID0+ICh0aGlzLmljb25Db250YWluZXIgPSBub2RlKSB9PlxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlclNWRyh7IGNhdGVnb3J5LCBpY29uLCBmaWxsQ29sb3I6IGljb25Db2xvciwgY29udGFpbmVyLCAuLi5wcHJvcHMgfSkgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgY2NvbnRhaW5lckNsYXNzTmFtZSB9IHJlZj17IG5vZGUgPT4gKHRoaXMuaWNvbkNvbnRhaW5lciA9IG5vZGUpIH0+XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyU1ZHKHsgY2F0ZWdvcnksIGljb24sIGZpbGxDb2xvcjogaWNvbkNvbG9yLCBjb250YWluZXIsIC4uLnBwcm9wcyB9KSB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU1ZHKHsgLi4ucHJvcHMsIGNhdGVnb3J5LCBpY29uIH0pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRhaW5lckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5vbmVPZihbJ2FjdGlvbicsICdjdXN0b20nLCAnZG9jdHlwZScsICdzdGFuZGFyZCcsICd1dGlsaXR5J10pLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NpcmNsZSddKSxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnd2FybmluZycsICdlcnJvciddKSxcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWxsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JY29uLklDT05TID0ge1xuICBTVEFOREFSRF9JQ09OUyxcbiAgQ1VTVE9NX0lDT05TLFxuICBBQ1RJT05fSUNPTlMsXG4gIERPQ1RZUEVfSUNPTlMsXG4gIFVUSUxJVFlfSUNPTlMsXG59O1xuIl19