import { useCallback, useEffect, useMemo, useState } from "react";
import useSettle from "./useSettle";

type BreakpointNames = "md" | "lg" | "xl";

type BreakpointStateType = Record<BreakpointNames, boolean>;

// breakpoint values
const Breakpoints = {
  md: 768,
  xl: 1200,
  lg: 992,
};
export default function useMedia() {
  const [breakpointState, setBreakpointState] = useState<BreakpointStateType>(
    {} as BreakpointStateType
  );

  const { isSettled } = useSettle();

  const breakpointFunc = useCallback(() => {
    //   conerts the Breakpoints to an array of arrays, then sort in descending order and map
    const medias: [MediaQueryList, (e: any) => void][] = Object.entries(
      Breakpoints
    )
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => {
        // for each child array, get the initial matchmedia values
        const media = window.matchMedia(`(min-width: ${value}px)`);

        // create a function to run on a change event attached to the media variable above
        const listener = (e: MediaQueryListEvent) => {
          setBreakpointState((prev) => ({
            ...prev,
            [key]: e.matches,
          }));
        };

        // add a change event to the media when the window size changes
        media.addEventListener("change", listener);

        // this sets the initial media attributes
        setBreakpointState((prev) => ({
          ...prev,
          [key]: media.matches,
        }));

        // return an array of the media and the listener
        return [media, listener];
      });

    // clears the event
    return () => {
      medias.forEach(([media, listener]) => {
        media.removeEventListener("change", listener);
      });
    };
  }, []);

  useEffect(() => {
    breakpointFunc();
  }, [breakpointFunc]);

  const isMobile: boolean = useMemo(() => {
    return isSettled && !breakpointState.lg && !breakpointState.md;
  }, [breakpointState, isSettled]);
  const isTablet: boolean = useMemo(() => {
    return isSettled && breakpointState.md && !breakpointState.lg;
  }, [breakpointState, isSettled]);
  const isDesktop: boolean = useMemo(() => {
    return isSettled && breakpointState.lg;
  }, [breakpointState, isSettled]);

  return {
    isDesktop,
    isMobile,
    isTablet,
  };
}
