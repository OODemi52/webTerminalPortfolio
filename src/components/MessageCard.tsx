import { memo, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface MessageCardProps {
    flapFullyFlipped: boolean;
    setMessageCardAnimationComplete: (messageCardAnimationComplete: boolean) => void;
    imageSet: string;
}

const MessageCard: React.FC<MessageCardProps> = memo(({ flapFullyFlipped, setMessageCardAnimationComplete, imageSet }) => {
  const [slideBackDown, setSlideBackDown] = useState(false);

  const lowResCard = useMemo(() => {
    switch (imageSet) {
      case "both":
        return "/envelope_images/both/message_card.png";
      case "trad":
        return "/envelope_images/trad/message_card.png";
      case "white":
        return "/envelope_images/white/message_card.png";
      default:
        return "";
    }
  }, [imageSet]);

  console.log(lowResCard);

  const style = useMemo(() => ({
    position: "absolute",
    width: "570px",
    height: "810px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
    zIndex: 4,
    transformStyle: "preserve-3d",
  }), []);

  const initial = useMemo(() => ({
    opacity: 1,
    rotateZ: -90,
    top: "-100px",
    right: "150px",
    zIndex: 4,
  }), []);

  const animate = useMemo(() => ({
    opacity: 1,
    top: slideBackDown ? "-100px" : flapFullyFlipped ? "-750px" : "-100px",
    zIndex: flapFullyFlipped ? 5 : 4,
    rotateZ: flapFullyFlipped ? 0 : -90,
  }), [slideBackDown, flapFullyFlipped]);

  const transition = useMemo(() => ({
    top: slideBackDown
      ? { duration: 1 }
      : { duration: 1.5 },
    rotateZ: { delay: 1.5, duration: 1 },
    zIndex: { delay: 1.5 },
  }), [slideBackDown]);

  const onAnimationComplete = useCallback(() => {
    if (!slideBackDown && flapFullyFlipped) {
      setTimeout(() => setSlideBackDown(true), 1000);
      setTimeout(() => setMessageCardAnimationComplete(true), 2000);
    }
  }, [slideBackDown, flapFullyFlipped, setMessageCardAnimationComplete]);

  const memoizedMotionImg = useMemo(() => (
    <motion.img
      className="message-card"
      src={lowResCard}
      alt="Save the date message card"
      style={style as React.CSSProperties}
      initial={initial}
      animate={animate}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
    />
  ), [style, initial, animate, transition, onAnimationComplete, lowResCard]);

  return memoizedMotionImg;
});

export default MessageCard;