import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";

const LoadingSpinner: React.FC = memo(() => {
  return useMemo(() => (
    <motion.div
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #d4af37",
        borderRadius: "50%",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  ), []);
});

export default LoadingSpinner;