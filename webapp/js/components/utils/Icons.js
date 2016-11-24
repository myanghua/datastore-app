
import React, { PropTypes, Component } from 'react';
import ModeComment from 'material-ui/svg-icons/editor/mode-comment';


const style = {
    alignItems: 'center',
    justifyContent: 'center',
};
const iconStyle = {
    fill: 'rgb(117, 117, 117)',
    display: 'block',
    margin: '0 auto 0 auto',
    width: '100px',
    height: 'auto',
};

export class ModeCommentIconWithText extends Component {
    render() {
        const { text } = this.props;
        return (
      <div className="value-area" style={style}>
        <div>
          <ModeComment style={iconStyle} />
          <p>{ text }</p>
        </div>
      </div>
        );
    }
}

ModeCommentIconWithText.propTypes = {
    text: PropTypes.string,
};
