import {
  MapCameraChangedEvent,
  MapCameraProps,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

const useMaps = () => {
  const INITIAL_CAMERA = {
    center: { lat: -6.2, lng: 106.816666 },
    zoom: 15,
  };
  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);
  const handleCameraChange = useCallback(
    (ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
    []
  );
  return{cameraProps,setCameraProps, handleCameraChange};
};

export default useMaps;
