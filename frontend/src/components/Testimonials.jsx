import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { name: "Ritu K.", text: "Wonderful quality, colors are perfect!", rating: 5 },
  { name: "Suresh P.", text: "Fast delivery and friendly service.", rating: 5 },
  { name: "Neha M.", text: "Budget-friendly and premium prints.", rating: 5 }
];

export default function Testimonials(){
  const [i,setI] = useState(0);
  useEffect(()=> {
    const t = setInterval(()=> setI(p => (p+1)%data.length), 4000);
    return ()=> clearInterval(t);
  },[]);

  return (
    <section className="max-w-6xl mx-auto p-6 mt-12">
      <h3 className="text-2xl font-semibold mb-4">What customers say</h3>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="bg-white rounded-2xl p-6 shadow-soft-lg">
            <p className="text-gray-700 italic">“{data[i].text}”</p>
            <div className="mt-3 text-sm font-semibold text-avonBlack">— {data[i].name}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}