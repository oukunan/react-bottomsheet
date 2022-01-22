import Sheet, { SheetProps } from './Sheet';
import SheetOverlay, { SheetOverlayProps } from './SheetOverlay';

// Ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-894053907
const SheetCompound = Object.assign(Sheet, { Overlay: SheetOverlay });

export type { SheetProps, SheetOverlayProps };

export default SheetCompound;
