import React from 'react';
import Portal from '@reach/portal';
import { RemoveScroll } from 'react-remove-scroll';

export type SheetProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  (props, forwardRef) => {
    return (
      <Portal>
        <RemoveScroll>
          <div data-react-bs ref={forwardRef} {...props} />
        </RemoveScroll>
      </Portal>
    );
  }
);

Sheet.displayName = 'Sheet';

export default Sheet;
