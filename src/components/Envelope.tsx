import { useState, memo, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeBack from "./EnvelopeBack";
import EnvelopeFront from "./EnvelopeFront";

interface EnvelopeProps {
    setAllAnimationsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const Envelope: React.FC<EnvelopeProps> = memo(({ setAllAnimationsComplete }) => {
    const [showFront, setShowFront] = useState(false);
    const [isFirstHalfRotationComplete, setIsFirstHalfRotationComplete] = useState(false);
  
    const handleRotationComplete = useCallback(() => {
      setShowFront(true);
      setIsFirstHalfRotationComplete(true);
    }, []);

    const animatedPresenceMemo = useMemo(() => (
      <AnimatePresence>
        {isFirstHalfRotationComplete
          ? <EnvelopeFront isVisible={showFront} setAllAnimationsComplete={setAllAnimationsComplete} />
          : <EnvelopeBack onRotationComplete={handleRotationComplete} setAllAnimationsComplete={setAllAnimationsComplete} />
        }
      </AnimatePresence>
    ), [isFirstHalfRotationComplete, showFront, setAllAnimationsComplete, handleRotationComplete]);

    const motionDivStyle = useMemo(() => ({
      position: "relative",
      width: "840px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      perspective: "1000px",
      transformStyle: "preserve-3d",
    }), []);

    const memoizedMotionDiv = useMemo(() => (
      <motion.div style={motionDivStyle as React.CSSProperties}>
        {animatedPresenceMemo}
      </motion.div>
    ), [motionDivStyle, animatedPresenceMemo]);

    return memoizedMotionDiv;
});

export default Envelope;