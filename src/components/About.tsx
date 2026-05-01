import { Award, TrendingDown, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-lg md:text-xl font-medium tracking-[0.25em] text-[#c9a84c] mb-4 uppercase">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6">
            Designing Spaces With
            <br />
            <span className="text-[#c9a84c] italic">
              Vision & Precision
            </span>
          </h2>
        </div>

        {/* 🔥 CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left: Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="Modern architecture"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </div>

          {/* Right: Details */}
          <div>
            <p className="text-[#5a5a5a] leading-relaxed mb-6">
              SK Interiors & Architectures is a design-driven studio focused on
              creating thoughtful, functional, and visually striking spaces.
              We specialize in planning, architectural design, and interiors —
              delivering solutions that align with your lifestyle and vision.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed mb-10">
              Our philosophy is simple: great design is a balance of creativity
              and practicality. From concept to execution, we pay attention to
              every detail, ensuring each space we design is not only beautiful
              but also purposeful and enduring.
            </p>

            {/* Features */}
            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Thoughtful Design Approach
                  </h4>
                  <p className="text-sm text-[#777]">
                    Every space is crafted with detail, intent, and clarity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <TrendingDown size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Smart & Efficient Planning
                  </h4>
                  <p className="text-sm text-[#777]">
                    Optimized layouts that enhance space and usability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-[#c9a84c]/30 rounded-sm text-[#c9a84c]">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Client-Centric Execution
                  </h4>
                  <p className="text-sm text-[#777]">
                    Your ideas shape the design — we refine and deliver
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}