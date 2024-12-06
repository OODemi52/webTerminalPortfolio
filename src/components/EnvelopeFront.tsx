import { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeFlap from "./EnvelopeFlap";
import MessageCard from "./MessageCard";

interface EnvelopeFrontProps {
  isVisible: boolean;
  setAllAnimationsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  imageSet: string;
}

const EnvelopeFront: React.FC<EnvelopeFrontProps> = memo(({ isVisible, setAllAnimationsComplete, imageSet }) => {
    const [flapHalfFlipped, setFlapHalfFlipped] = useState(false);
    const [flapFullyFlipped, setFlapFullyFlipped] = useState(false);
    const [onMessageCardAnimationComplete, setOnMessageCardAnimationComplete] = useState(false);

    const envelopeFrontOverlay = useMemo(() => {
      switch (imageSet) {
        case "both":
          return "/envelope_images/both/envelope_front_overlay.png";
        case "trad":
          return "/envelope_images/trad/envelope_front_overlay.png";
        case "white":
          return "/envelope_images/white/envelope_front_overlay.png";
        default:
          return "";
      }
    }, [imageSet]);
  
    const envelopeFrontOverlayAlpha = useMemo(() => {
      switch (imageSet) {
        case "both":
          return "/envelope_images/both/envelope_front_overlay_alpha.png";
        case "trad":
          return "/envelope_images/trad/envelope_front_overlay_alpha.png";
        case "white":
          return "/envelope_images/white/envelope_front_overlay_alpha.png";
        default:
          return "";
      }
    }, [imageSet]);
    
    return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        className="envelope-container"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          zIndex: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotateY: [180, 360],
          top: onMessageCardAnimationComplete ? "5%" : "0",
          left: onMessageCardAnimationComplete ? "-25%" : "0",
        }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          rotateY: { duration: 1.25, ease: "easeOut" },
          top: { duration: 1.25, delay: 1, ease: "easeOut" },
          left: { duration: 1.25, delay: 1, ease: "easeOut" },

        }}
        onAnimationComplete={() => {
          Promise.all([
            new Promise(resolve => setTimeout(resolve, 11000)),
          ]).then(() => setAllAnimationsComplete(true));
        }}
      >
        <motion.img
          className="envelope-front-underlay"
          src={envelopeFrontOverlay}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            zIndex: 1,
          }}
          />
        <EnvelopeFlap
            flapHalfFlipped={flapHalfFlipped}
            setFlapHalfFlipped={setFlapHalfFlipped}
            setFlapFullyFlipped={setFlapFullyFlipped}
            imageSet={imageSet}
        />
        <motion.img
          className="envelope-front-overlay"
          src={envelopeFrontOverlayAlpha}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            zIndex: 5
          }}
        />
        <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
        }}
        initial={{ size: "100%" }}
          animate={{
            top: onMessageCardAnimationComplete ? "-10%" : "0",
            left: onMessageCardAnimationComplete ? "60%" : "0",
          }}
          exit={{ opacity: 0 }}
          transition={{
            top: { duration: 1.25, delay: 1, ease: "easeOut" },
            left: { duration: 1.25, delay: 1, ease: "easeOut" },
          }}
        >
        <MessageCard
          flapFullyFlipped={flapFullyFlipped}
          setMessageCardAnimationComplete={setOnMessageCardAnimationComplete}
          imageSet={imageSet}
        />
        </motion.div>
      </motion.div>   
    )}
  </AnimatePresence>
    );
});

export default EnvelopeFront;