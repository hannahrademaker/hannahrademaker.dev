import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useTransform(mouseX, (value) => value - 5);
  const y = useTransform(mouseY, (value) => value - 5);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <motion.div className="follower" style={{ x: springX, y: springY }} />;
};

export default MouseFollower;
