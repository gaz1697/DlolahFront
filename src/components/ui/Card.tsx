import React from 'react';

const Card = (props: {
    className: string;
    children:
        | React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
          >
        | Iterable<React.ReactNode>
        | React.ReactPortal;
}) => {
    const clsName =
        'rounded-md overflow-hidden flex flex-col mx-auto ' +
        props.className;
    return <div className={clsName}>{props.children}</div>;
};

export default Card;
