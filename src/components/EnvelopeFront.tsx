import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeFrontOverlay from "../../public/both_images/envelope_front_overlay.png";
import envelopeFrontOverlayAlpha from "../../public/both_images/envelope_front_overlay_alpha.png";
import envelopeLining from "../../public/both_images/envelope_lining.png";
import EnvelopeFlap from "./EnvelopeFlap";
import MessageCard from "./MessageCard";

interface EnvelopeFrontProps {
  isVisible: boolean;
  setAllAnimationsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnvelopeFront: React.FC<EnvelopeFrontProps> = memo(({ isVisible, setAllAnimationsComplete }) => {
    const [flapHalfFlipped, setFlapHalfFlipped] = useState(false);
    const [flapFullyFlipped, setFlapFullyFlipped] = useState(false);
    const [onMessageCardAnimationComplete, setOnMessageCardAnimationComplete] = useState(false);
    
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
            new Promise(resolve => setTimeout(resolve, 11000)), // wait for the longest animation duration
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
        />
        <motion.img
          className="envelope-lining"
          src={envelopeLining}
          style={{
            position: "absolute",
            width: "100%",
            height: "34%",
            backgroundSize: "cover",
            backfaceVisibility: "hidden",
            zIndex: 3,
          }}
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
        />
        </motion.div>
      </motion.div>   
    )}
  </AnimatePresence>
    );
});

export default EnvelopeFront;