import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";

import * as THREE from "three";
import Lights from "./Lights";
// import Loader from "./Loader";
import IPhone from "./IPhone";
import { Suspense } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2
      } ? 'right-[-100%] : ''`}
    >
      <AmbientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* <Lights /> */}

      <Suspense fallback={<div>Loading</div>}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
