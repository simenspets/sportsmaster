
import { useEffect, useState } from "react";

const LoadingOverlay = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 25;
        return next > 100 ? 100 : next;
      });
    }, 200);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-40 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-blue-500 h-1 transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingOverlay;
