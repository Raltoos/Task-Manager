/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Typewriter = ({ text, speed, loop = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    const typeText = () => {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + text[index % 2][currentIndex]);
        if (currentIndex < text[index % 2].length - 1)
          setCurrentIndex((prev) => prev + 1);
        if (currentIndex === text[index % 2].length - 1) {
          clearInterval(typingInterval);
          setIndex((prev) => prev + 1);
          if (loop) {
            setTimeout(() => {
              setDisplayText("");
              setCurrentIndex(0);
            }, 1000);
          }
        }
      }, speed);
    };

    typeText();

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, speed, loop]);

  return (
    <div
      className="text-6xl"
    >
      {displayText}
    </div>
  );
};

const Landing = () => {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center gap-7">
      <div className="flex gap-5 h-[50px] mt-[35vh] items-center">
        <p className="text-3xl">Welcome to a simple</p>
        <div className="w-[317px] h-[80px] bg-white text-black p-2">
          <div>
            <Typewriter
              text={["Tasks", "Checklist"]}
              speed={200}
              loop={true}
            />
          </div>
        </div>
        <p className="text-3xl">App</p>
      </div>
    </div>
  );
};

export default Landing;
