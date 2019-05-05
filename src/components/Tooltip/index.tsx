import React from 'react';
import Tippy from '@tippy.js/react';

interface TipProps {
  content: string;
  children: any;
}

const Tip = (props: TipProps) => {
  const { content, children } = props;
  return (
    <Tippy
      placement="top"
      touch={false}
      arrow={true}
      arrowType={'round'}
      content={
        <span style={{ fontSize: '14px', fontWeight: 600 }}>
          {content}
        </span>
      }
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      }}
    >
      {children}
    </Tippy>
  )
}

export default Tip;
