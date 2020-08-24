import React  from 'react';

const Rule = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 800,
        }}
    />
);

export default Rule;
