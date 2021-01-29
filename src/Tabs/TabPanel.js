import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

export function TabPanel({ children, value, index, ...props }) {
	return (
		<div
			{...props}
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
		>
			{value === index && <Box>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
