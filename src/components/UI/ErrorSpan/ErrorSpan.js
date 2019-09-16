import React, { memo } from 'react';
import './ErrorSpan.scss';


const ErrorSpan = (props) => (
	<span className="ErrorSpan">{props.error}</span>
);

export default memo(ErrorSpan);