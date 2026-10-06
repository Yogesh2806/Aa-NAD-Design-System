// The bundle reads React from the page (window.React) — it never imports it.
const R: any = (window as any).React;
export default R;
export const { useState, useEffect, useRef, useId, useCallback, useMemo, useLayoutEffect, createContext, useContext, forwardRef, Fragment, Children, cloneElement, isValidElement } = R;
