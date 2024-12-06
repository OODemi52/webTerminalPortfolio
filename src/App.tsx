import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Envelope from "./components/Envelope";
import LoadingSpinner from "./components/LoadingSpinner";
import DetailsDrawer from "./components/DetailsDrawer";

const App: React.FC = () => {
  const [areComponentsLoaded, setAreComponentsLoaded] = useState(false);
  const [allAnimationsComplete, setAllAnimationsComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAreComponentsLoaded(true), 1000);
  }, []);

  const animate = useMemo(() => (
    allAnimationsComplete ? { x: -350 } : { x: 0 }
  ), [allAnimationsComplete]);

  const transition = useMemo(() => (
    { duration: 1 }
  ), []);

  const style = useMemo(() => (
    { display: "inline-block" }
  ), []);

  return (
      <Suspense fallback={<LoadingSpinner />}>
        {areComponentsLoaded ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <motion.div
              animate={animate}
              transition={transition}
              style={style}
            >
              <Envelope setAllAnimationsComplete={setAllAnimationsComplete} />
            </motion.div>
            <DetailsDrawer allAnimationsComplete={allAnimationsComplete} />
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Suspense>
  );
};

export default App;
