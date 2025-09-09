// import AnimatedTitle from "./AnimatedTitle";
// import Button from "./Button";

// const ImageClipBox = ({ src, clipClass }) => (
//   <div className={clipClass}>
//     <img
//       src={src}
//       alt=""
//       className="w-full h-auto"
//       width="400"
//       height="300"
//     />
//   </div>
// );

// const Contact = () => {
//   return (
//     <div id="contact" className="my-20 min-h-96 w-screen px-10 relative flex items-center justify-center">
//       <div className="relative lg:h-[20dvw] rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden lg:w-[90dvw]">
//         <div className="absolute inset-y-0 left-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 ">
//           <ImageClipBox src="/img/sfr.png" clipClass="contact-clip-path-1" />
//         </div>

//         <div className="absolute top-0 left-10 w-90 sm:top-1/2 md:left-auto md:right-10 lg:top-90 lg:right-80 lg:w-100% lg:h-100%">
//           <ImageClipBox
//             src="/img/jett.jpg"
//             clipClass="sword-man-clip-path w-[30dvh] h-[40dvh] md:scale-205"
//           />
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <p className="mb-10 font-general text-[10px] uppercase">
//             Join Arena
//           </p>

//           <AnimatedTitle
//             title="let's b<b>u</b>ild the <br /> new er<b>a</b> of <br /> g<b>a</b>ming t<b>o</b>gether."
//             className=" w-full special-font"
//           />

//           <Button
//             title="contact us"
//             containerClass="mt-10 cursor-pointer bg-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 relative flex items-center justify-center">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden lg:w-[90vw]">
        {/* Left Image */}
        <div className="absolute inset-y-0 left-0 hidden h-full w-102 overflow-hidden sm:block lg:left-20">
          <ImageClipBox src="/img/sfr.png" clipClass="contact-clip-path-1 w-130 h-full" />
        </div>

        {/* Right Image */}
        <div className="absolute top-0 left-10 w-90 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:right-70 lg:w-100% lg:h-100%">
          <ImageClipBox
            src="/img/jett.jpg"
            clipClass="sword-man-clip-path w-full lg:w-140 h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center px-6 sm:px-12">
          <p className="mb-10 font-general text-xs uppercase sm:text-sm">
            Join Arena
          </p>

          <AnimatedTitle
            title="let's b<b>u</b>ild the <br /> new er<b>a</b> of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="w-full special-font"
          />

          <Button
            title="contact us"
            containerClass="mt-10 cursor-pointer bg-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;