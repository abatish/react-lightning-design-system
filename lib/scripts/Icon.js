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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOlsiU1RBTkRBUkRfSUNPTlMiLCJyZXBsYWNlIiwic3BsaXQiLCJDVVNUT01fSUNPTlMiLCJBcnJheSIsImpvaW4iLCJtYXAiLCJhIiwiaSIsIkFDVElPTl9JQ09OUyIsIkRPQ1RZUEVfSUNPTlMiLCJVVElMSVRZX0lDT05TIiwiSWNvbiIsInByb3BzIiwic3RhdGUiLCJjaGVja0ljb25Db2xvciIsInN2Z0VsIiwic3ZnSWNvbiIsInNldEF0dHJpYnV0ZSIsInRhYkluZGV4IiwiZmlsbENvbG9yIiwiY2F0ZWdvcnkiLCJpY29uIiwiaWNvbkNvbG9yIiwidGVzdCIsImNvbnRhaW5lciIsImVsIiwiaWNvbkNvbnRhaW5lciIsImJnQ29sb3JTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsInNpemUiLCJhbGlnbiIsInRleHRDb2xvciIsInN0eWxlIiwiYXNzZXRSb290IiwiZ2V0SWNvbkNvbG9yIiwiaWNvbkNsYXNzTmFtZXMiLCJpY29uVXJsIiwibm9kZSIsInRpdGxlIiwiY29udGV4dCIsImluZGV4T2YiLCJjb250YWluZXJDbGFzc05hbWUiLCJwcHJvcHMiLCJjY29udGFpbmVyQ2xhc3NOYW1lIiwicmVuZGVyU1ZHIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJvbmVPZlR5cGUiLCJib29sIiwiY29sb3IiLCJudW1iZXIiLCJjb250ZXh0VHlwZXMiLCJJQ09OUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBO0FBQ0EsSUFBTUEsaUJBQWlCLDI3QkFhcEJDLE9BYm9CLENBYVosWUFiWSxFQWFFLEVBYkYsRUFhTUMsS0FiTixDQWFZLFFBYlosQ0FBdkI7O0FB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O0FBYWZmLFNBQU9TLG9CQUFVQyxNQWJGO0FBY2YvQixhQUFXOEIsb0JBQVVDO0FBZE4sQ0FBakI7O0FBaUJBdkMsS0FBSzZDLFlBQUwsR0FBb0I7QUFDbEJyQixhQUFXYyxvQkFBVUM7QUFESCxDQUFwQjs7QUFJQXZDLEtBQUs4QyxLQUFMLEdBQWE7QUFDWDFELGdDQURXO0FBRVhHLDRCQUZXO0FBR1hNLDRCQUhXO0FBSVhDLDhCQUpXO0FBS1hDO0FBTFcsQ0FBYiIsImZpbGUiOiJJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSwgZ2V0QXNzZXRSb290IH0gZnJvbSAnLi91dGlsJztcblxuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBTVEFOREFSRF9JQ09OUyA9IGBcbmFjY291bnQsYW5ub3VuY2VtZW50LGFuc3dlcl9iZXN0LGFuc3dlcl9wcml2YXRlLGFuc3dlcl9wdWJsaWMsYXBwcm92YWwsYXBwcyxhcHBzX2FkbWluLFxuYXJ0aWNsZSxhdmF0YXIsYXZhdGFyX2xvYWRpbmcsY2FsaWJyYXRpb24sY2FsbCxjYWxsX2hpc3RvcnksY2FtcGFpZ24sY2FtcGFpZ25fbWVtYmVycyxcbmNhbnZhcyxjYXNlLGNhc2VfY2hhbmdlX3N0YXR1cyxjYXNlX2NvbW1lbnQsY2FzZV9lbWFpbCxjYXNlX2xvZ19hX2NhbGwsY2FzZV90cmFuc2NyaXB0LFxuY2xpZW50LGNvYWNoaW5nLGNvbm5lY3RlZF9hcHBzLGNvbnRhY3QsY29udHJhY3QsY3VzdG9tLGRhc2hib2FyZCxkZWZhdWx0LGRvY3VtZW50LFxuZHJhZnRzLGVtYWlsLGVtYWlsX0lRLGVtYWlsX2NoYXR0ZXIsZW1wdHksZW5kb3JzZW1lbnQsZW52aXJvbm1lbnRfaHViLGV2ZW50LGZlZWQsZmVlZGJhY2ssXG5maWxlLGZsb3csZm9sZGVyLGdlbmVyaWNfbG9hZGluZyxnb2Fscyxncm91cF9sb2FkaW5nLGdyb3VwcyxoaWVyYXJjaHksaG9tZSxob3VzZWhvbGQsaW5zaWdodHMsaW52ZXN0bWVudF9hY2NvdW50LFxubGVhZCxsaW5rLGxvZ19hX2NhbGwsbWFya2V0aW5nX2FjdGlvbnMsbWV0cmljcyxuZXdzLG5vdGUsb3Bwb3J0dW5pdHksXG5vcmRlcnMscGVvcGxlLHBlcmZvcm1hbmNlLHBlcnNvbl9hY2NvdW50LHBob3RvLHBvbGwscG9ydGFsLHBvc3QscHJpY2Vib29rLHByb2Nlc3MscHJvZHVjdCxxdWVzdGlvbl9iZXN0LFxucXVlc3Rpb25fZmVlZCxxdW90ZXMscmVjZW50LHJlY29yZCxyZWxhdGVkX2xpc3QscmVwb3J0LHJld2FyZCxzY2FuX2NhcmQsc2tpbGxfZW50aXR5LFxuc29jaWFsLHNvbHV0aW9uLHNvc3Nlc3Npb24sdGFzayx0YXNrMix0ZWFtX21lbWJlcix0aGFua3MsdGhhbmtzX2xvYWRpbmcsdG9kYXksdG9waWMsXG51bm1hdGNoZWQsdXNlcix3b3JrX29yZGVyLHdvcmtfb3JkZXJfaXRlbVxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cbmNvbnN0IENVU1RPTV9JQ09OUyA9XG4gIG5ldyBBcnJheSgxMDEpLmpvaW4oJ18nKS5zcGxpdCgnJylcbiAgICAubWFwKChhLCBpKSA9PiBgY3VzdG9tJHsoaSArIDEpfWApO1xuXG5jb25zdCBBQ1RJT05fSUNPTlMgPSBgXG5hZGRfY29udGFjdCxhbm5vdW5jZW1lbnQsYXBleCxhcHByb3ZhbCxiYWNrLGNhbGwsY2FudmFzLGNoYW5nZV9vd25lcixjaGFuZ2VfcmVjb3JkX3R5cGUsXG5jaGVjayxjbG9uZSxjbG9zZSxkZWZlcixkZWxldGUsZGVzY3JpcHRpb24sZGlhbF9pbixkb3dubG9hZCxlZGl0LGVkaXRfZ3JvdXBzLGVkaXRfcmVsYXRpb25zaGlwLFxuZW1haWwsZmFsbGJhY2ssZmlsdGVyLGZsb3csZm9sbG93LGZvbGxvd2luZyxmcmVlemVfdXNlcixnb2FsLGdvb2dsZV9uZXdzLGluZm8sam9pbl9ncm91cCxcbmxlYWRfY29udmVydCxsZWF2ZV9ncm91cCxsb2dfYV9jYWxsLGxvZ19ldmVudCxtYW5hZ2VfcGVybV9zZXRzLG1hcCxtb3JlLG5ldyxuZXdfYWNjb3VudCxcbm5ld19jYW1wYWlnbixuZXdfY2FzZSxuZXdfY2hpbGRfY2FzZSxuZXdfY29udGFjdCxuZXdfZXZlbnQsbmV3X2dyb3VwLG5ld19sZWFkLG5ld19ub3RlLFxubmV3X25vdGVib29rLG5ld19vcHBvcnR1bml0eSxuZXdfcGVyc29uX2FjY291bnQsbmV3X3Rhc2sscGFzc3dvcmRfdW5sb2NrLHByZXZpZXcscHJpb3JpdHkscXVlc3Rpb25fcG9zdF9hY3Rpb24sXG5xdW90ZSxyZWNvcmQscmVmcmVzaCxyZWplY3QscmVtb3ZlLHJlc2V0X3Bhc3N3b3JkLHNoYXJlLHNoYXJlX2ZpbGUsc2hhcmVfbGluayxzaGFyZV9wb2xsLFxuc2hhcmVfcG9zdCxzaGFyZV90aGFua3Msc29ydCxzdWJtaXRfZm9yX2FwcHJvdmFsLHVwZGF0ZSx1cGRhdGVfc3RhdHVzLHVwbG9hZCx1c2VyLHVzZXJfYWN0aXZhdGlvbixcbndlYl9saW5rLFxubmV3X2N1c3RvbTcsbmV3X2N1c3RvbTgsbmV3X2N1c3RvbTksbmV3X2N1c3RvbTEwLG5ld19jdXN0b20xMSxuZXdfY3VzdG9tMTIsbmV3X2N1c3RvbTEzLFxubmV3X2N1c3RvbTE0LG5ld19jdXN0b20xNSxuZXdfY3VzdG9tMTYsbmV3X2N1c3RvbTE3LG5ld19jdXN0b20xOCxuZXdfY3VzdG9tMTksbmV3X2N1c3RvbTIwLFxubmV3X2N1c3RvbTIxLG5ld19jdXN0b20yMixuZXdfY3VzdG9tMjMsbmV3X2N1c3RvbTI0LG5ld19jdXN0b20yNSxuZXdfY3VzdG9tMjYsbmV3X2N1c3RvbTI3LFxubmV3X2N1c3RvbTI4LG5ld19jdXN0b20yOSxuZXdfY3VzdG9tMzAsbmV3X2N1c3RvbTMxLG5ld19jdXN0b20zMixuZXdfY3VzdG9tMzMsbmV3X2N1c3RvbTM0LFxubmV3X2N1c3RvbTM1LG5ld19jdXN0b20zNixuZXdfY3VzdG9tMzcsbmV3X2N1c3RvbTM4LG5ld19jdXN0b20zOSxuZXdfY3VzdG9tNDAsbmV3X2N1c3RvbTQxLFxubmV3X2N1c3RvbTQyLG5ld19jdXN0b200MyxuZXdfY3VzdG9tNDQsbmV3X2N1c3RvbTQ1LG5ld19jdXN0b200NixuZXdfY3VzdG9tNDcsbmV3X2N1c3RvbTQ4LFxubmV3X2N1c3RvbTQ5LG5ld19jdXN0b201MCxuZXdfY3VzdG9tNTEsbmV3X2N1c3RvbTUyLG5ld19jdXN0b201MyxuZXdfY3VzdG9tNTQsbmV3X2N1c3RvbTU1LFxubmV3X2N1c3RvbTU2LG5ld19jdXN0b201NyxuZXdfY3VzdG9tNTgsbmV3X2N1c3RvbTU5LG5ld19jdXN0b202MCxuZXdfY3VzdG9tNjEsbmV3X2N1c3RvbTYyLFxubmV3X2N1c3RvbTYzLG5ld19jdXN0b202NCxuZXdfY3VzdG9tNjUsbmV3X2N1c3RvbTY2LG5ld19jdXN0b202NyxuZXdfY3VzdG9tNjgsbmV3X2N1c3RvbTY5LFxubmV3X2N1c3RvbTcwLG5ld19jdXN0b203MSxuZXdfY3VzdG9tNzIsbmV3X2N1c3RvbTczLG5ld19jdXN0b203NCxuZXdfY3VzdG9tNzUsbmV3X2N1c3RvbTc2LFxubmV3X2N1c3RvbTc3LG5ld19jdXN0b203OCxuZXdfY3VzdG9tNzksbmV3X2N1c3RvbTgwLG5ld19jdXN0b204MSxuZXdfY3VzdG9tODIsbmV3X2N1c3RvbTgzLFxubmV3X2N1c3RvbTg0LG5ld19jdXN0b204NSxuZXdfY3VzdG9tODYsbmV3X2N1c3RvbTg3LG5ld19jdXN0b204OCxuZXdfY3VzdG9tODksbmV3X2N1c3RvbTkwLFxubmV3X2N1c3RvbTkxLG5ld19jdXN0b205MixuZXdfY3VzdG9tOTMsbmV3X2N1c3RvbTk0LG5ld19jdXN0b205NSxuZXdfY3VzdG9tOTYsbmV3X2N1c3RvbTk3LFxubmV3X2N1c3RvbTk4LG5ld19jdXN0b205OSxuZXdfY3VzdG9tMTAwXG5gXG4gIC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblxuXG5jb25zdCBET0NUWVBFX0lDT05TID0gYFxuYWksYXR0YWNobWVudCxhdWRpbyxib3hfbm90ZXMsY3N2LGVwcyxleGNlbCxleGUsZmxhc2gsZ2RvYyxnZG9jcyxncHJlcyxnc2hlZXQsaHRtbCxpbWFnZSxrZXlub3RlLFxubGluayxtcDQsb3ZlcmxheSxwYWNrLHBhZ2VzLHBkZixwcHQscHNkLHJ0ZixzbGlkZSxzdHlwaSx0eHQsdW5rbm93bix2aWRlbyx2aXNpbyxcbndlYmV4LHdvcmQseG1sLHppcFxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cblxuY29uc3QgVVRJTElUWV9JQ09OUyA9IGBcbmFkZCxhZGR1c2VyLGFubm91bmNlbWVudCxhbnN3ZXIsYXBwcyxhcnJvd2Rvd24sYXJyb3d1cCxhdHRhY2gsYmFjayxiYW4sYm9sZCxib29rbWFyayxicnVzaCxcbmJ1Y2tldCxidWlsZGVyLGNhbGwsY2Fwc2xvY2ssY2FzZXMsY2VudGVyX2FsaWduX3RleHQsY2hhcnQsY2hhdCxjaGVjayxjaGVja2luLGNoZXZyb25kb3duLFxuY2hldnJvbmxlZnQsY2hldnJvbnJpZ2h0LGNoZXZyb251cCxjbGVhcixjbG9jayxjbG9zZSxjb21tZW50cyxjb21wYW55LGNvbm5lY3RlZF9hcHBzLFxuY29udHJhY3QsY29udHJhY3RfYWx0LGNvcHksY3Jvc3NmaWx0ZXIsY3VzdG9tX2FwcHMsY3V0LGRhc2gsZGF0YWRvdGNvbSxkYXl2aWV3LGRlbGV0ZSxkZXByZWNhdGUsXG5kZXNjcmlwdGlvbixkZXNrdG9wLGRvd24sZG93bmxvYWQsZWRpdCxlZGl0X2Zvcm0sZW1haWwsZW5kX2NhbGwsZXJlY3Rfd2luZG93LGVycm9yLGV2ZW50LGV4cGFuZCxcbmV4cGFuZF9hbHQsZmF2b3JpdGUsZmVlZCxmaWxlLGZpbHRlcixmaWx0ZXJMaXN0LGZvcndhcmQsZnJvemVuLGdyb3VwcyxoZWxwLGhvbWUsaWRlbnRpdHksaW1hZ2UsaW5ib3gsaW5mbyxcbmluc2VydF90YWdfZmllbGQsaW5zZXJ0X3RlbXBsYXRlLGl0YWxpYyxqdXN0aWZ5X3RleHQsa2FuYmFuLGtub3dsZWRnZV9iYXNlLGxheWVycyxsYXlvdXQsXG5sZWZ0LGxlZnRfYWxpZ25fdGV4dCxsaWtlLGxpbmssbGlzdCxsb2NhdGlvbixsb2NrLGxvZ19hX2NhbGwsbG9nb3V0LG1hZ2ljd2FuZCxtYXRyaXgsbWV0cmljcyxtaW5pbWl6ZV93aW5kb3csXG5tb25leWJhZyxtb250aGx5dmlldyxtb3ZlLG11dGVkLG5ldyxuZXdfd2luZG93LG5ld3Msbm90ZSxub3RlYm9vayxub3RpZmljYXRpb24sb2ZmaWNlMzY1LG9mZmxpbmUsXG5vcGVuLG9wZW5fZm9sZGVyLG9wZW5lZF9mb2xkZXIsb3ZlcmZsb3cscGFja2FnZSxwYWNrYWdlX29yZyxwYWNrYWdlX29yZ19iZXRhLHBhZ2UscGFsZXR0ZSxwYXN0ZSxcbnBlb3BsZSxwaG9uZV9sYW5kc2NhcGUscGhvbmVfcG9ydHJhaXQscGhvdG8scGlja2xpc3QscG93ZXIscHJldmlldyxwcmlvcml0eSxwcm9jZXNzLHB1c2gscHV6emxlLFxucXVlc3Rpb24scXVlc3Rpb25zX2FuZF9hbnN3ZXJzLHJlY29yZCxyZWRvLHJlZnJlc2gscmVsYXRlLHJlbW92ZV9mb3JtYXR0aW5nLHJlbW92ZV9saW5rLFxucmVwbGFjZSxyZXBseSxyZXNldF9wYXNzd29yZCxyZXR3ZWV0LHJpY2h0ZXh0YnVsbGV0ZWRsaXN0LHJpY2h0ZXh0aW5kZW50LHJpY2h0ZXh0bnVtYmVyZWRsaXN0LFxucmljaHRleHRvdXRkZW50LHJpZ2h0LHJpZ2h0X2FsaWduX3RleHQscm90YXRlLHJvd3Msc2FsZXNmb3JjZTEsc2VhcmNoLHNldHRpbmdzLHNldHVwLHNldHVwX2Fzc2lzdGFudF9ndWlkZSxcbnNoYXJlLHNoYXJlX3Bvc3Qsc2hpZWxkLHNpZGVfbGlzdCxzaWducG9zdCxzbXMsc25pcHBldCxzb2NpYWxzaGFyZSxzb3J0LHNwaW5uZXIsc3RhbmRhcmRfb2JqZWN0cyxcbnN0b3Asc3RyaWtldGhyb3VnaCxzdWNjZXNzLHN1bW1hcnksc3VtbWFyeWRldGFpbCxzd2l0Y2gsdGFibGUsdGFibGV0X2xhbmRzY2FwZSx0YWJsZXRfcG9ydHJhaXQsXG50YWJzZXQsdGFzayx0ZXh0X2JhY2tncm91bmRfY29sb3IsdGV4dF9jb2xvcix0aHJlZWRvdHMsdGlsZV9jYXJkX2xpc3QsdG9waWMsdG91Y2hfYWN0aW9uLHRyYWlsLHVuZGVsZXRlLHVuZGVwcmVjYXRlLFxudW5kZXJsaW5lLHVuZG8sdW5sb2NrLHVubXV0ZWQsdXAsdXBsb2FkLHVzZXIsdXNlcl9yb2xlLHZvbHVtZV9oaWdoLHZvbHVtZV9sb3csdm9sdW1lX29mZix3YXJuaW5nLFxud2Vla2x5dmlldyx3b3JsZCx6b29taW4sem9vbW91dFxuYFxuICAucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICByZWdpc3RlclN0eWxlKCdpY29uJywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtaWNvbiB1c2UnLFxuICAgICAgICAneyBwb2ludGVyLWV2ZW50czogbm9uZTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICAgIGNvbnN0IHN2Z0VsID0gdGhpcy5zdmdJY29uO1xuICAgIGlmIChzdmdFbCkge1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdmb2N1c2FibGUnLCB0aGlzLnByb3BzLnRhYkluZGV4ID49IDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XG4gIH1cblxuICBnZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbikge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVubmVlZGVkLXRlcm5hcnkgKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuaWNvbkNvbG9yID8gdGhpcy5zdGF0ZS5pY29uQ29sb3IgOlxuICAgICAgICBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnID8gbnVsbCA6XG4gICAgICAgICAgZmlsbENvbG9yID09PSAnbm9uZScgPyBudWxsIDpcbiAgICAgICAgICAgIGZpbGxDb2xvciA/IGZpbGxDb2xvciA6XG4gICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAndXRpbGl0eScgPyBudWxsIDpcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gJ2N1c3RvbScgPyBpY29uLnJlcGxhY2UoL15jdXN0b20vLCAnY3VzdG9tLScpIDpcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSAnYWN0aW9uJyAmJiAvXm5ld19jdXN0b20vLnRlc3QoaWNvbikgPyBpY29uLnJlcGxhY2UoL15uZXdfY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICAgICAgICAgICAgICAgIGAke2NhdGVnb3J5fS0keyhpY29uIHx8ICcnKS5yZXBsYWNlKC9fL2csICctJyl9YFxuICAgICk7XG4gIH1cblxuICBjaGVja0ljb25Db2xvcigpIHtcbiAgICBjb25zdCB7IGZpbGxDb2xvciwgY2F0ZWdvcnkgPSAndXRpbGl0eScsIGNvbnRhaW5lciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGljb25Db2xvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZmlsbENvbG9yIHx8IGNhdGVnb3J5ID09PSAnZG9jdHlwZScgfHxcbiAgICAgICghZmlsbENvbG9yICYmIGNhdGVnb3J5ID09PSAndXRpbGl0eScpIHx8XG4gICAgICBpY29uQ29sb3IgPT09ICdzdGFuZGFyZC1kZWZhdWx0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGNvbnRhaW5lciA/IHRoaXMuaWNvbkNvbnRhaW5lciA6IHRoaXMuc3ZnSWNvbjtcbiAgICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGJnQ29sb3JTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpWydiYWNrZ3JvdW5kLWNvbG9yJ107XG4gICAgLy8gaWYgbm8gYmFja2dyb3VuZCBjb2xvciBzZXQgdG8gdGhlIGljb25cbiAgICBpZiAoL14odHJhbnNwYXJlbnR8cmdiYVxcKDAsXFxzKjAsXFxzKjAsXFxzKjBcXCkpJC8udGVzdChiZ0NvbG9yU3R5bGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaWNvbkNvbG9yOiAnc3RhbmRhcmQtZGVmYXVsdCcgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU1ZHKHtcbiAgICBjbGFzc05hbWUsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBpY29uLCBzaXplLCBhbGlnbiwgZmlsbENvbG9yLCBjb250YWluZXIsXG4gICAgdGV4dENvbG9yID0gJ2RlZmF1bHQnLCBzdHlsZSwgYXNzZXRSb290LCAuLi5wcm9wc1xuICB9KSB7XG4gICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XG4gICAgY29uc3QgaWNvbkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAge1xuICAgICAgICAnc2xkcy1pY29uJzogIS9zbGRzXFwtYnV0dG9uX19pY29uLy50ZXN0KGNsYXNzTmFtZSksXG4gICAgICAgIFtgc2xkcy1pY29uLS0ke3NpemV9YF06IC9eKHgtc21hbGx8c21hbGx8bWVkaXVtfGxhcmdlKSQvLnRlc3Qoc2l6ZSksXG4gICAgICAgIFtgc2xkcy1pY29uLXRleHQtJHt0ZXh0Q29sb3J9YF06IC9eKGRlZmF1bHR8d2FybmluZ3xlcnJvcikkLy50ZXN0KHRleHRDb2xvcikgJiYgIWljb25Db2xvcixcbiAgICAgICAgW2BzbGRzLWljb24tJHtpY29uQ29sb3J9YF06ICFjb250YWluZXIgJiYgaWNvbkNvbG9yLFxuICAgICAgICAnc2xkcy1tLWxlZnQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgJ3NsZHMtbS1yaWdodC0teC1zbWFsbCc6IGFsaWduID09PSAnbGVmdCcsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIC8vIGljb24gYW5kIGNhdGVnb3J5IHByb3Agc2hvdWxkIG5vdCBpbmNsdWRlIGNoYXJzIG90aGVyIHRoYW4gYWxwaGFudW1lcmljcywgdW5kZXJzY29yZSwgYW5kIGh5cGhlblxuICAgIGljb24gPSAoaWNvbiB8fCAnJykucmVwbGFjZSgvW15cXHdcXC1dL2csICcnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGNhdGVnb3J5ID0gKGNhdGVnb3J5IHx8ICcnKS5yZXBsYWNlKC9bXlxcd1xcLV0vZywgJycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICBjb25zdCBpY29uVXJsID0gYCR7YXNzZXRSb290fS9pY29ucy8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnIyR7aWNvbn1gO1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17IGljb25DbGFzc05hbWVzIH1cbiAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgcmVmPXsgbm9kZSA9PiAodGhpcy5zdmdJY29uID0gbm9kZSkgfVxuICAgICAgICBzdHlsZT17IHN0eWxlIH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8dXNlIHhsaW5rSHJlZj17aWNvblVybH0gLz5cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIHRpdGxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFzc2V0Um9vdCA9IGdldEFzc2V0Um9vdCgpIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IHsgY2F0ZWdvcnksIGljb24gfSA9IHByb3BzO1xuXG4gICAgaWYgKGljb24uaW5kZXhPZignOicpID4gMCkge1xuICAgICAgW2NhdGVnb3J5LCBpY29uXSA9IGljb24uc3BsaXQoJzonKTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3QgeyBjb250YWluZXJDbGFzc05hbWUsIGZpbGxDb2xvciwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xuICAgICAgY29uc3QgY2NvbnRhaW5lckNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgICAgJ3NsZHMtaWNvbl9fY29udGFpbmVyJyxcbiAgICAgICAgY29udGFpbmVyID09PSAnY2lyY2xlJyA/ICdzbGRzLWljb25fX2NvbnRhaW5lci0tY2lyY2xlJyA6IG51bGwsXG4gICAgICAgIGljb25Db2xvciA/IGBzbGRzLWljb24tJHtpY29uQ29sb3J9YCA6IG51bGxcbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiB0aXRsZT17IHRpdGxlIH0gY2xhc3NOYW1lPXsgY2NvbnRhaW5lckNsYXNzTmFtZSB9IHJlZj17IG5vZGUgPT4gKHRoaXMuaWNvbkNvbnRhaW5lciA9IG5vZGUpIH0+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNWRyh7IGNhdGVnb3J5LCBpY29uLCBmaWxsQ29sb3I6IGljb25Db2xvciwgY29udGFpbmVyLCBhc3NldFJvb3QsIC4uLnBwcm9wcyB9KSB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU1ZHKHsgLi4ucHJvcHMsIGNhdGVnb3J5LCBpY29uLCBhc3NldFJvb3QgfSk7XG4gIH1cbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGFpbmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2N1c3RvbScsICdkb2N0eXBlJywgJ3N0YW5kYXJkJywgJ3V0aWxpdHknXSksXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBjb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2lyY2xlJ10pLFxuICBdKSxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpbGxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkljb24uY29udGV4dFR5cGVzID0ge1xuICBhc3NldFJvb3Q6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JY29uLklDT05TID0ge1xuICBTVEFOREFSRF9JQ09OUyxcbiAgQ1VTVE9NX0lDT05TLFxuICBBQ1RJT05fSUNPTlMsXG4gIERPQ1RZUEVfSUNPTlMsXG4gIFVUSUxJVFlfSUNPTlMsXG59O1xuIl19