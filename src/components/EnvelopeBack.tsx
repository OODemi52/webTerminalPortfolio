import { useMemo } from "react";
import { motion } from "framer-motion";
interface EnvelopeBackProps {
  setAllAnimationsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  onRotationComplete: () => void;
  imageSet: string;
}

const EnvelopeBack: React.FC<EnvelopeBackProps> = ({ onRotationComplete, imageSet }) => {
  const envelopeBack = useMemo(() => {
    switch (imageSet) {
      case "both":
        return "/envelope_images/both/envelope_back.png";
      case "trad":
        return "/envelope_images/trad/envelope_back.png";
      case "white":
        return "/envelope_images/white/envelope_back.png";
      default:
        return "";
    }
  }, [imageSet]);

  return (
    <motion.img
      className="envelope-back"
      src={envelopeBack}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotateY: [0, 180],
      }}
      transition={{
        opacity: { duration: 0.5 },
        rotateY: { duration: 1.25, delay: 2, ease: "easeIn" },
      }}
      onAnimationComplete={onRotationComplete}
    />
  );
};
  
  export default EnvelopeBack;