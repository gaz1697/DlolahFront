import React from 'react';

const Card = (props) => {
    const clsName =
        'rounded-md overflow-hidden flex flex-col mx-auto ' +
        props.className;
    return <div className={clsName}>{props.children}</div>;
};

export default Card;
