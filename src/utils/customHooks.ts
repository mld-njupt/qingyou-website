import { useEffect, useRef, useState, useCallback } from "react";
import { __read, __spreadArray } from "tslib";
import { wrap } from "popmotion";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = <T>(ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export const useCycle=(...args: number[])=> {
  let items: string | any[] = [];
  for (let _i = 0; _i < args.length; _i++) {
    items[_i] = args[_i];
  }
  let index = useRef(0);
  let _a = __read(useState(items[index.current]), 2),
    item = _a[0],
    setItem = _a[1];
  const nextCycle = useCallback(function (next: number) {
    index.current =
      typeof next !== "number"
        ? wrap(0, items.length, index.current + 1)
        : next;
    setItem(items[index.current]);
  }, __spreadArray([items.length], __read(items), false));
  const backCycle = useCallback(function (back: number) {
    index.current =
      typeof back !== "number"
        ? wrap(0, items.length, index.current -1)
        : back;
    setItem(items[index.current]);
  }, __spreadArray([items.length], __read(items), false));
  return [item, nextCycle,backCycle];
}
