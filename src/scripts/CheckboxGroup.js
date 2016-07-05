import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const addUniqueValue = (values, value) => {
  return values.indexOf(value) < 0 ? [ ...values, value] : values;
}

export default class CheckboxGroup extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.renderControl = this.renderControl.bind(this);
  }

  onChange(e) {
    const { value } = this.props;

    const finalValue = e.target.checked ?
      addUniqueValue(value, e.target.value) :
      value.filter(i => ( i !== e.target.value ));

    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }
  }

  renderControl(checkbox, i) {
    const props = { grouped: true , ... this.props };
    if (this.props.name) {
      props.name = this.props.name;
    }
    return React.cloneElement(checkbox, props);
  }

  render() {
    const { className, label, totalCols, cols, style, required, error, onChange, children, ...props } = this.props;
    const grpClassNames = classnames(
      className,
      'slds-form-element',
      {
        'slds-has-error': error,
        'slds-is-required': required,
      },
      typeof totalCols === 'number' ? `slds-size--${cols || 1}-of-${totalCols}` : null
    );
    const grpStyles = typeof totalCols === 'number' ? { display: 'inline-block', ...style } : style;
    const errorMessage =
      error ?
      (typeof error === 'string' ? error :
       typeof error === 'object' ? error.message :
       undefined) :
      undefined;
    return (
      <fieldset className={ grpClassNames } style={ grpStyles } onChange={ this.onChange } { ...props } >
        <legend className='slds-form-element__label slds-form-element__label--top'>
          { label }
          {
            required ?
            <abbr className='slds-required'>*</abbr> :
            undefined
          }
        </legend>
        <div className='slds-form-element__control'>
          { React.Children.map(children, this.renderControl) }
          {
            errorMessage ?
            <div className='slds-form-element__help'>{ errorMessage }</div> :
            undefined
          }
        </div>
      </fieldset>
    );
  }

}

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  name: PropTypes.string,
  totalCols: PropTypes.number,
  style: PropTypes.object,
  cols: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

CheckboxGroup.isFormElement = true;
