import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FormElement from './FormElement';
import DOMpurify from 'dompurify';

export default class Checkbox extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    DOMpurify.addHook('afterSanitizeAttributes', function(node) {
      // set all elements owning target to target=_blank as dompurify removes it
      if ('target' in node) {
          node.setAttribute('target','_blank');
      }
    });
  }

  componentWillUnmount(){
    DOMpurify.removeHook('afterSanitizeAttributes');
  }


  componentWillReceiveProps(nextProps) {
    const input = this.node.getElementsByTagName('input')[0];
    if (nextProps.defaultChecked !== input.checked) {
      input.checked = nextProps.defaultChecked;
    }
  }

  onChange() {
    if (!this.props.disabled) {
      if (this.props.checked) {
        this.props.checked = false;
        this.props.value = 'false';
      } else {
        this.props.checked = true;
        this.props.value = 'true';
      }
    }
  }

  renderCheckbox({ className, label, checkboxRef, ...props }) {
    const checkClassNames = classnames(className, 'slds-checkbox');
    return (
      <label
        ref={(node) => {
          this.node = node;
          if (checkboxRef) checkboxRef(node);
        }}
        className={ checkClassNames }
      >
        <input type='checkbox' { ...props } />
        <span className='slds-checkbox--faux' />
        <span className='slds-form-element__label' dangerouslySetInnerHTML={{__html: DOMpurify.sanitize(label)}}></span>
      </label>
    );
  }

  render() {
    const { grouped, required, error, totalCols, cols, ...props } = this.props;
    const formElemProps = { required, error, totalCols, cols };
    if (typeof props.onChange === 'undefined') {
      props.onChange = this.onChange;
    }
    return (
      grouped ?
        this.renderCheckbox(props) :
          <FormElement
            formElementRef={node => (this.node = node)}
            { ...formElemProps }
          >
            { this.renderCheckbox(props) }
          </FormElement>
    );
  }

}

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: FormElement.propTypes.error,
  totalCols: PropTypes.number,
  cols: PropTypes.number,
  grouped: PropTypes.bool,
  checkboxRef: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};
