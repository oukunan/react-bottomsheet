import React from 'react';

export type SheetOverlayProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
>;

const SheetOverlay = React.forwardRef<HTMLDivElement, SheetOverlayProps>(
  (props, forwardRef) => {
    return <div data-react-bs-overlay ref={forwardRef} {...props} />;
  }
);

SheetOverlay.displayName = 'SheetOverlay';

export default SheetOverlay;
