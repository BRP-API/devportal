import React from 'react';

const Separator = ({ className = '', style = {} }) => {
    return (
        <hr className={`separator ${className}`} style={style} />
    );
};

export default Separator;