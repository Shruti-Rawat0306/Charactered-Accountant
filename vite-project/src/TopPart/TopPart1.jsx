import React, { forwardRef, useRef, useState } from "react";
import { gsap } from "gsap";
import TopPart2 from "./TopPart2";

const TopPart1 = forwardRef(() => {
  const topPart1Ref = useRef(null);
  const topPart2Ref = useRef(null);
  const [showTopPart2, setShowTopPart2] = useState(false);

  const handleSeeMore = () => {
    // Animate TopPart1 OUT
    gsap.to(topPart1Ref.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setShowTopPart2(true);

        // Animate TopPart2 IN
        gsap.fromTo(
          topPart2Ref.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      },
    });
  };

  return (
    <>
      {/* TOP PART 1 */}
      {!showTopPart2 && (
        <div
          ref={topPart1Ref}
          className="absolute top-[64px] left-0 h-[360px] w-full bg-[#F6EFF9] flex gap-20 pt-8 z-40"
        >
          {/* LEFT SIDE */}
          <div className="leftside flex gap-30">
            <ul className="ml-12">
              <li className="text-[#04137D] text-xl font-medium">Blog</li>

              {[...Array(6)].map((_, i) => (
                <li key={i} className="text-[#212121] font-medium mt-2">
                  Audit & Assurance Services
                </li>
              ))}

              <li
                onClick={handleSeeMore}
                className="text-[#04137D] mt-2 cursor-pointer font-medium"
              >
                See more
              </li>
            </ul>

            <ul>
              <li className="text-[#04137D] text-xl font-medium">Resources</li>

              {[...Array(6)].map((_, i) => (
                <li key={i} className="text-[#212121] font-medium mt-2">
                  Audit & Assurance Services
                </li>
              ))}

              <li
                onClick={handleSeeMore}
                className="text-[#04137D] mt-2 cursor-pointer font-medium"
              >
                See more
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="rightside">
            <div className="flex gap-8">
              <img
                className="h-[140px] w-[240px] object-cover"
                src="../../public/009533ddb18880647940253fa905f2a8d6a3a95e.jpg"
                alt=""
              />
              <div>
                <h2 className="text-sm">19 Jan 2022 · 30 mins</h2>
                <h1 className="font-semibold">Migrating to Linear 101</h1>
                <p className="text-[#667085]">
                  Linear helps streamline software
                  <br />
                  projects, sprints, tasks, and bug
                  <br />
                  tracking. Here's how to get...
                </p>
              </div>
            </div>

            <div className="flex gap-8 mt-4">
              <img
                className="h-[140px] w-[240px] object-cover"
                src="../../public/c220b565fba3f3369a85cb9bd4d04bf17c85be21 (1).jpg"
                alt=""
              />
              <div>
                <h2 className="text-sm">19 Jan 2022 · 30 mins</h2>
                <h1 className="font-semibold">Building your API Stack</h1>
                <p className="text-[#667085]">
                  The rise of RESTful APIs has been met
                  <br />
                  by a rise in tools for creating, testing
                  <br />
                  and managing...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP PART 2 (REPLACES TOP PART 1) */}
      {showTopPart2 && (
        <div
          ref={topPart2Ref}
          className="absolute top-[64px] left-0 w-full bg-[#F6EFF9] z-40"
        >
          <TopPart2 />
        </div>
      )}
    </>
  );
});

export default TopPart1;
