import { useState, useEffect, useMemo, Suspense } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Envelope from "./components/Envelope";
import LoadingSpinner from "./components/LoadingSpinner";
import DetailsDrawer from "./components/DetailsDrawer";

const App: React.FC = () => {
  const [areComponentsLoaded, setAreComponentsLoaded] = useState(false);
  const [allAnimationsComplete, setAllAnimationsComplete] = useState(false);
  const { queryParam } = useParams<{ queryParam: string }>();

  useEffect(() => {
    setTimeout(() => setAreComponentsLoaded(true), 1000);
  }, []);

  const imageSet = useMemo(() => {
    switch (queryParam) {
      case "both":
        return "both";
      case "trad":
        return "trad";
      case "white":
        return "white";
      default:
        return "";
    }
  }, [queryParam]);

  const backgroundImage = useMemo(() => {
    switch (queryParam) {
      case "both":
        return "/envelope_images/both/background.jpeg";
      case "trad":
        return "/envelope_images/trad/background.jpeg";
      case "white":
        return "/envelope_images/white/background.jpeg";
      default:
        return "";
    }
  }, [queryParam]);

  console.log("Background Image:", backgroundImage);

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
    <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:" no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
    <Suspense fallback={<LoadingSpinner />}>
      {areComponentsLoaded ? (
        <>
          <motion.div
            animate={animate}
            transition={transition}
            style={style}
          >
            <Envelope setAllAnimationsComplete={setAllAnimationsComplete} imageSet={imageSet} />
          </motion.div>
          <DetailsDrawer allAnimationsComplete={allAnimationsComplete} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Suspense>
    </div>
  );
};

export default App;