import { motion } from "framer-motion";
import envelopeBack from "../../public/both_images/envelope_back.png";


interface EnvelopeBackProps {
  setAllAnimationsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  onRotationComplete: () => void;
}

const EnvelopeBack: React.FC<EnvelopeBackProps> = ({ onRotationComplete }) => (
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
  
  export default EnvelopeBack;