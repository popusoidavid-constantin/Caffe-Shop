import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const ScrollImage = ({ src, alt, borderRadius, classType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Appears when visible, disappears when out of view
      },
      { threshold: 0.7 } // Triggers when 30% of the image is in view
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
      className={`${borderRadius} w-20px mx-auto ${classType}`}
    />
  );
};

const ImageScrollEffect = (props) => {
  return (
    <div
      className={`${props.width} flex flex-col items-center justify-center text-white`}
    >
      <ScrollImage
        src={props.imageSource}
        borderRadius={props.borderRadius}
        classType={props.classType}
        alt="Random Image"
      />
    </div>
  );
};

export default ImageScrollEffect;
