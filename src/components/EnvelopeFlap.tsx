import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
interface EnvelopeFlapProps {
    flapHalfFlipped: boolean;
    setFlapHalfFlipped: (flapHalfFlipped: boolean) => void;
    setFlapFullyFlipped: (flapFullyFlipped: boolean) => void;
    imageSet: string;
}

const EnvelopeFlap: React.FC<EnvelopeFlapProps> = memo(({ flapHalfFlipped, setFlapHalfFlipped, setFlapFullyFlipped, imageSet }) => {

    const envelopeFlapOut = useMemo(() => {
        switch (imageSet) {
            case "both":
                return "/envelope_images/both/envelope_flap_out.png";
            case "trad":
                return "/envelope_images/trad/envelope_flap_out.png";
            case "white":
                return "/envelope_images/white/envelope_flap_out.png";
            default:
                return "";
        }
    }, [imageSet]);

    const envelopeFlapIn = useMemo(() => {
        switch (imageSet) {
            case "both":
                return "/envelope_images/both/envelope_flap_in.png";
            case "trad":
                return "/envelope_images/trad/envelope_flap_in.png";
            case "white":
                return "/envelope_images/white/envelope_flap_in.png";
            default:
                return "";
        }
    }, [imageSet]);

    const style = useMemo(() => ({
        position: 'absolute',
        width: "840px",
        height: "549px",
        top: "0",
        backfaceVisibility: 'hidden',
        zIndex: 10,
        transformOrigin: 'top',
    }), []);

    const initial = useMemo(() => flapHalfFlipped ? { rotateZ: 180 } : {}, [flapHalfFlipped]);

    const animate = useMemo(() => ({
        rotateX: flapHalfFlipped ? [90, 180] : [0, 90],
    }), [flapHalfFlipped]);

    const transition = useMemo(() => ({
        rotateX: { duration: 1.5, ease: flapHalfFlipped ? "easeOut" : "easeIn", delay: flapHalfFlipped ? 0 : 1.5 },
    }), [flapHalfFlipped]);

    return useMemo(() => (
        <motion.img
            className={flapHalfFlipped ? "envelope-flap-in" : "envelope-flap-out"}
            alt={flapHalfFlipped ? "Inside of envelope flap" : "Outside of envelope flap"}
            src={flapHalfFlipped ? envelopeFlapIn : envelopeFlapOut}
            style={style as React.CSSProperties}
            initial={initial}
            animate={animate}
            transition={transition}
            onAnimationComplete={() => flapHalfFlipped ? setFlapFullyFlipped(true) : setFlapHalfFlipped(true)}
        />
    ), [flapHalfFlipped, envelopeFlapIn, envelopeFlapOut, style, initial, animate, transition, setFlapFullyFlipped, setFlapHalfFlipped]);
});

export default EnvelopeFlap;
  