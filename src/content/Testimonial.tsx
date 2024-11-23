import React, { useEffect, useRef,useState } from 'react';
import {  motion, useScroll, useTransform } from 'framer-motion';

const Testimonial: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(()=>{
    const handleResize = ()=>{
      setIsSmallDevice(window.innerWidth <= 640);
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  },[])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <div className="flex flex-col items-center space-y-6">
      <p className="text-[#0968E8] border border-solid border-[#0968E8] bg-white px-4 py-1 rounded">
        Testimonials
      </p>
      <h2 className="text-[30px] font-medium text-center">
        What Our Clients Have to Say
      </h2>
      <p className="text-[#ADADAD] text-[15px] text-center">
        Here's what some of our clients say about our platform
      </p>

      <motion.div 
      ref={targetRef}  className={`lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible flex lg:flex-none`}
      style={isSmallDevice ? { x: translateX } : undefined}>
        {/* Testimonial 1 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "We needed a solution that could handle complex scheduling and
              ensure compliance. This software delivered beyond expectations
              with its advanced analytics and seamless payroll integration."
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/man1.webp"
                alt="Seun Abu"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Seun Abu
                </strong>
                <p className="text-sm text-gray-600">
                  Chief Optometrist, Abu Care
                </p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 2 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "The mobile app makes it so easy to check my schedule and log
              overtime. I love that I get reminders before my shifts, and I can
              track all my hours in one place. It’s so convenient!"
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/girl1.webp"
                alt="Amaka Ibe"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Amaka Ibe
                </strong>
                <p className="text-sm text-gray-600">Front Desk Officer</p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 3 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "This platform has completely streamlined our shift management
              process. The Wi-Fi-verified clock-ins ensure accuracy, and the
              real-time dashboard keeps us updated at all times. It's been a
              game-changer for our team."
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/man3.jpg"
                alt="Dr. Okposio Kp"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Dr. Okposio Kp
                </strong>
                <p className="text-sm text-gray-600">CEO, KP's Tech</p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 4 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "The seamless integration with payroll systems and customizable
              shift schedules have been a huge plus for our HR department. It’s
              the all-in-one solution we’ve been searching for."
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/girl1.avif"
                alt="Nessie KP"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Nessie KP
                </strong>
                <p className="text-sm text-gray-600">HR, Innovative Tech</p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 5 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "This software has brought incredible efficiency to our
              operations. From scheduling to overtime management, everything
              works flawlessly!"
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/man.webp"
                alt="Victor Osazuwa"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Victor Osazuwa
                </strong>
                <p className="text-sm text-gray-600">Operations Manager</p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 6 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "Real-time analytics and seamless payroll integration have saved
              us so much time. This tool is indispensable!"
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/man.webp"
                alt="John Doe"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  John Doe
                </strong>
                <p className="text-sm text-gray-600">Finance Director</p>
              </div>
            </div>
          </figcaption>
        </div>

        {/* Testimonial 7 */}
        <div className="w-80 h-64 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
          <figcaption className="text-center text-gray-800">
            <p className="text-[14px] font-medium italic leading-relaxed text-start">
              "The user-friendly interface and smart reminders have improved
              both our efficiency and employee satisfaction."
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center">
              <img
                src="/img/girl1.webp"
                alt="Jane Smith"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div className="flex flex-col items-start">
                <strong className="block text-base font-bold text-gray-900">
                  Jane Smith
                </strong>
                <p className="text-sm text-gray-600">HR Specialist</p>
              </div>
            </div>
          </figcaption>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
