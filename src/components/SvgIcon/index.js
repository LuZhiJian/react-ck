import React from "react";
import PropTypes from "prop-types";
import './index.less';

const Svg = props => {
  const { iconName, fill, iconClass } = props;
  return (
    <svg className={'icon ' + iconClass} aria-hidden="true">
      <use className="myicon" xlinkHref={"#icon-" + iconName} fill={fill}>
      </use>
    </svg>
  );
};

Svg.propTypes = {
  // svg名字
  iconName: PropTypes.string.isRequired,
  // svg类名
  iconClass: PropTypes.string,
  // 填充颜色
  fill: PropTypes.string
};

Svg.defaultProps = {
  fill: "currentColor"
};

export default Svg;
