// TRY IT
// document.addEventListener("wheel", (e) =>
//   console.log(getWheelType(e), getWheelDirection(e)),
// );

// --------------------

export function useZoomControl(el: HTMLDivElement | null, target: HTMLDivElement | string | null) {
  if (!el) return;
  if (!target) return;
  let targetEl;
  if (typeof target === 'string') {
    targetEl = document.querySelector(target);
  }
  if (target instanceof HTMLDivElement) {
    targetEl = target
  }
  if (!targetEl) return;

  let scale = 1;

  el.addEventListener('wheel', (event) => {
    //event.preventDefault();

    const wheelType = getWheelType(event);
    const wheelDirection = getWheelDirection(event);

    if (wheelType !== 'TRACK_ZOOM' && wheelType !== 'MOUSE_ZOOM') return;
    console.log(wheelType, wheelDirection);

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    // Apply scale transform
    targetEl.style.transformOrigin = event.x;
    targetEl.style.transform = `scale(${scale})`;
    return scale;
  })
}

const WHEEL_TYPES = {
  TRACK_ZOOM: "TRACK_ZOOM",
  TRACK_SCROLL: "TRACK_SCROLL",
  MOUSE_ZOOM: "MOUSE_ZOOM",
  MOUSE_SCROLL: "MOUSE_SCROLL",
};

const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  IN: "IN",
  OUT: "OUT",
};

function getWheelType(event: WheelEvent) {
  if (!(event instanceof WheelEvent)) {
    throw "Event must be a WheelEvent";
  }

  if (isWheelZoom(event)) {
    if (isWheelMouse(event)) {
      return WHEEL_TYPES.MOUSE_ZOOM;
    }
    return WHEEL_TYPES.TRACK_ZOOM;
  }

  // Not a zoom, so must be a scroll
  if (isWheelMouse(event)) {
    return WHEEL_TYPES.MOUSE_SCROLL;
  }
  return WHEEL_TYPES.TRACK_SCROLL;
};

function getWheelDirection(event: WheelEvent) {
  if (!(event instanceof WheelEvent)) {
    throw "Event must be a WheelEvent";
  }

  const maxDelta =
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;

  if (event.ctrlKey && (isWheelMouse(event) || !isCtrlKeyPressed)) {
    // it's a zoom
    return getDeltaZoomDirection(maxDelta);
  }

  if (event.shiftKey) {
    // Holding Shift while turning wheel or swiping trackpad in any direction
    // results sideways scrolls (OS dependent of course, but seems to be the
    // case on most).
    //
    // So we assume that if Shift was held, that it's a horizontal scroll.
    return getMaxDeltaScrollDirection(maxDelta, 0);
  } else {
    // Otherwise, take the larger of the two deltas as indicating direction
    return getMaxDeltaScrollDirection(event.deltaX, event.deltaY);
  }
};

// --------------------

let isCtrlKeyPressed = false;

function onPress(e: KeyboardEvent) {
  if (e.key === "Control") {
    isCtrlKeyPressed = true;
    document.removeEventListener("keydown", onPress);
    document.addEventListener("keyup", onDepress);
  }
};

function onDepress(e: KeyboardEvent) {
  if (e.key === "Control") {
    isCtrlKeyPressed = false;
    document.addEventListener("keydown", onPress);
    document.removeEventListener("keyup", onDepress);
  }
};

// NOTE this only works if the page is focused
document.addEventListener("keydown", onPress);

function isWheelMouse (event: WheelEvent) {
  if (!(event instanceof WheelEvent)) {
    throw "Event must be a WheelEvent";
  }

  // If exactly one of deltaX or deltaY is non-0,
  // and is greater than 50, it's very likely a mouse wheel.
  // Otherwise assume a trackpad.
  if (
    (event.deltaX === 0) !== (event.deltaY === 0) &&
    Math.abs(event.deltaX + event.deltaY) > 50
  ) {
    return true;
  }
  return false;
};

function isWheelZoom (event: WheelEvent) {
  if (!(event instanceof WheelEvent)) {
    throw "Event must be a WheelEvent";
  }

  // If ctrlKey is set, then it's a zoom: either pinching trackpad or holding
  // Ctrl while turning mouse wheel.
  return event.ctrlKey === true;
};

function getMaxDeltaScrollDirection(deltaX: number, deltaY: number) {
  if (deltaX === deltaY) {
    return null;
  }

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX < 0 ? DIRECTIONS.LEFT : DIRECTIONS.RIGHT;
  }

  return deltaY < 0 ? DIRECTIONS.UP : DIRECTIONS.DOWN;
};

function getDeltaZoomDirection(delta: number) {
  if (delta === 0) {
    return null;
  }

  return delta < 0 ? DIRECTIONS.IN : DIRECTIONS.OUT;
};