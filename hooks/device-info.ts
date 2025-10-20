import { useEffect, useState } from "react";

export type DeviceInfo = {
  isMobile: boolean;
  isTablet: boolean;
  isPhone: boolean;
};

const PHONE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1023;

const defaultDeviceInfo: DeviceInfo = {
  isMobile: false,
  isTablet: false,
  isPhone: false,
};

const computeFromWidth = (width: number | null): DeviceInfo => {
  if (width === null) {
    return defaultDeviceInfo;
  }

  const isPhone = width <= PHONE_MAX_WIDTH;
  const isTablet = width > PHONE_MAX_WIDTH && width <= TABLET_MAX_WIDTH;

  return {
    isMobile: isPhone || isTablet,
    isTablet,
    isPhone,
  };
};

export const useDeviceInfo = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(defaultDeviceInfo);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const update = () => {
      setDeviceInfo(computeFromWidth(window.innerWidth));
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return deviceInfo;
};
