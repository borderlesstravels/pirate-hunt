import { useRef } from "react";
import useSettle from "./useSettle";
import useMedia from "./useMedia";
import { useScroll, useSpring, useTransform } from "framer-motion";

interface IUseParallaxOptions {
  invertedOnMobile?: boolean;
}

const useParallax = (options?: IUseParallaxOptions) => {
  const desktopTransform1 = [-60, 0];
  const mobileTransform1 = [0, -60];
  const desktopTransform2 = [-30, 0];
  const mobileTransform2 = [0, -30];
  const desktopOpacityTransform = [0.8, 1];
  const mobileOpacityTransform = [1, 0.8];

  const ref = useRef(null);
  const { isSettled } = useSettle();
  const { isMobile } = useMedia();
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const selectedMobileTransform1 = options?.invertedOnMobile
    ? desktopTransform1
    : mobileTransform1;
  const selectedMobileTransform2 = options?.invertedOnMobile
    ? desktopTransform2
    : mobileTransform2;

  const transform1 = isMobile ? selectedMobileTransform1 : desktopTransform1;
  const transform2 = isMobile ? selectedMobileTransform2 : desktopTransform2;
  const oTransform = isMobile
    ? mobileOpacityTransform
    : desktopOpacityTransform;
  const transformY1 = useTransform(scrollYProgressSpring, [0, 1], transform1);
  const transformY2 = useTransform(scrollYProgressSpring, [0, 1], transform2);
  const opacityTransform = useTransform(
    scrollYProgressSpring,
    [0, 1],
    oTransform
  );

  const transformValue1 = isSettled ? transformY1 : 0;
  const transformValue2 = isSettled ? transformY2 : 0;
  const opacityYTransformValue = isSettled ? opacityTransform : 1;

  return {
    transformValue1,
    transformValue2,
    opacityYTransformValue,
    ref,
  };
};

export default useParallax;
