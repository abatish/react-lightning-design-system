import React, { PropTypes } from 'react';
import classnames from 'classnames';
import util from './util';


export default class Spinner extends React.Component {

  render() {
    const { className, size, type, alt, spinnerSrc, ...props } = this.props;
    const spinnerClassNames = classnames(className, `slds-spinner--${size}`);
    const spinnerImgName =
      type === 'brand' ? 'slds_spinner_brand' :
      type === 'inverse' ? 'slds_spinner_inverse' :
      'slds_spinner';
    const finalSpinnerSrc = spinnerSrc || `${util.getAssetRoot()}/images/spinners/${spinnerImgName}.gif`

    return (
      <div className={ spinnerClassNames } { ...props }>
        <img src={ finalSpinnerSrc } alt={ alt } />
      </div>
    );
  }
}

Spinner.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
};
