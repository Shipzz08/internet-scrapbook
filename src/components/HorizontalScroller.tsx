import React, { useRef, useEffect } from 'react';
import './HorizontalScroller.css';

interface HorizontalScrollerProps {
  children: React.ReactNode;
}

const PAGE_ANIMATION_LOCK_MS = 700;
const WHEEL_QUIET_MS = 120;
const OVERRIDE_DELTA_THRESHOLD = 25;
const OVERRIDE_TIME_MS = 400;

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let isLocked = false;
    let lockTimer: number | null = null;
    let quietTimer: number | null = null;
    let lastEventTime = 0;
    let lastDeltaY = 0;
    let scrollStartTime = 0;

    const goToPanel = (index: number) => {
      const panelCount = scroller.querySelectorAll('.scroller-panel').length;
      const targetIndex = Math.max(0, Math.min(index, panelCount - 1));
      const targetLeft = targetIndex * scroller.clientWidth;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = prefersReducedMotion ? 'auto' : 'smooth';

      isLocked = true;
      scrollStartTime = Date.now();

      // Temporarily disable snap during programmatic scroll
      scroller.style.scrollSnapType = 'none';

      scroller.scrollTo({ left: targetLeft, behavior });

      if (lockTimer !== null) window.clearTimeout(lockTimer);
      lockTimer = window.setTimeout(() => {
        checkUnlock();
      }, PAGE_ANIMATION_LOCK_MS);
    };

    const checkUnlock = () => {
      const now = Date.now();
      const timeSinceStart = now - scrollStartTime;
      const timeSinceLastEvent = now - lastEventTime;

      if (timeSinceStart >= PAGE_ANIMATION_LOCK_MS && timeSinceLastEvent >= WHEEL_QUIET_MS) {
        isLocked = false;
        scroller.style.scrollSnapType = 'x mandatory';
      } else {
        if (lockTimer !== null) window.clearTimeout(lockTimer);
        lockTimer = window.setTimeout(checkUnlock, 100);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // ignore pinch zoom

      const dominantDelta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(dominantDelta) < 4) return; // ignore tiny deltas

      // Check if inside a panel that can scroll vertically in this direction
      const targetEl = e.target as HTMLElement | null;
      const panel = targetEl?.closest('.scroller-panel') || scroller.querySelector('.scroller-panel');

      if (panel) {
        const canScrollUp = panel.scrollTop > 0;
        const canScrollDown = panel.scrollTop + panel.clientHeight < panel.scrollHeight;

        if ((dominantDelta > 0 && canScrollDown) || (dominantDelta < 0 && canScrollUp)) {
          return; // let panel scroll vertically
        }
      }

      e.preventDefault();

      const now = Date.now();
      const timeSinceStart = now - scrollStartTime;
      const isOverride =
        isLocked &&
        timeSinceStart >= OVERRIDE_TIME_MS &&
        Math.abs(dominantDelta) > Math.abs(lastDeltaY) + OVERRIDE_DELTA_THRESHOLD;

      lastEventTime = now;
      lastDeltaY = dominantDelta;

      if (quietTimer !== null) window.clearTimeout(quietTimer);
      quietTimer = window.setTimeout(() => {
        const checkQuiet = () => {
          if (Date.now() - lastEventTime >= WHEEL_QUIET_MS && Date.now() - scrollStartTime >= PAGE_ANIMATION_LOCK_MS) {
            isLocked = false;
            scroller.style.scrollSnapType = 'x mandatory';
          } else {
            window.setTimeout(checkQuiet, 50);
          }
        };
        checkQuiet();
      }, WHEEL_QUIET_MS);

      if (isLocked && !isOverride) {
        return; // ignore during lock
      }

      // Compute current panel index
      const clientWidth = scroller.clientWidth || 1;
      const currentIndex = Math.round(scroller.scrollLeft / clientWidth);

      if (dominantDelta > 0) {
        goToPanel(currentIndex + 1);
      } else if (dominantDelta < 0) {
        goToPanel(currentIndex - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      if (document.activeElement !== scroller && !scroller.contains(document.activeElement)) {
        return;
      }

      const clientWidth = scroller.clientWidth || 1;
      const currentIndex = Math.round(scroller.scrollLeft / clientWidth);

      const isNext =
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        (e.key === ' ' && !e.shiftKey);

      const isPrev =
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' ||
        e.key === 'PageUp' ||
        (e.key === ' ' && e.shiftKey);

      if (isNext) {
        e.preventDefault();
        goToPanel(currentIndex + 1);
      } else if (isPrev) {
        e.preventDefault();
        goToPanel(currentIndex - 1);
      }
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      scroller.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (lockTimer !== null) window.clearTimeout(lockTimer);
      if (quietTimer !== null) window.clearTimeout(quietTimer);
    };
  }, []);

  return (
    <div
      ref={scrollerRef}
      id="scroller"
      className="horizontal-scroller"
      tabIndex={0}
      role="region"
      aria-label="Site sections"
    >
      {children}
    </div>
  );
}
