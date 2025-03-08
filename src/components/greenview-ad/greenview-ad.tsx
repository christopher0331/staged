import Image from 'next/image';
import { PrintButton } from './print-button';

export function GreenViewAd() {
  return (
    <div className="font-sans">
      {/* Print Button */}
      <div className="mb-4 print:hidden">
        <PrintButton />
      </div>
      
      {/* 1/4 Page Magazine Ad Layout */}
      <div className="max-w-sm mx-auto bg-white border border-gray-300 print:border-0 overflow-hidden">
        {/* Header with Logo and Title */}
        <div className="bg-[#036400] p-3 flex items-center justify-between">
          <div className="w-16 h-16 relative flex-shrink-0">
            <Image 
              src="/images/greenview/logo.svg" 
              alt="GreenView Solutions Logo" 
              width={64} 
              height={64}
              className="object-contain"
            />
          </div>
          <div className="ml-2 text-white">
            <h1 className="font-serif text-xl font-bold leading-tight">PREMIUM FENCING</h1>
            <p className="text-xs uppercase tracking-wider">VETERAN-OWNED & OPERATED</p>
          </div>
        </div>
        
        {/* Main Image */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src="/image1.png"
            alt="Custom Cedar Privacy Fence"
            width={500}
            height={160}
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <p className="text-white text-sm font-medium">Transform Your Property With Expert Craftsmanship</p>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-3">
          {/* Two Column Layout */}
          <div className="mb-3">
            {/* Services Column */}
            <div className="mb-3">
              <h3 className="text-[#036400] font-medium text-sm mb-2 border-b border-[#A05B2E] pb-1">OUR SERVICES</h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                <div className="text-xs flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#A05B2E] rounded-full mr-1"></span>
                  <span>Custom Wood</span>
                </div>
                <div className="text-xs flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#A05B2E] rounded-full mr-1"></span>
                  <span>Vinyl & Composite</span>
                </div>
                <div className="text-xs flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#A05B2E] rounded-full mr-1"></span>
                  <span>Ornamental Metal</span>
                </div>
                <div className="text-xs flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#A05B2E] rounded-full mr-1"></span>
                  <span>Pergolas & Decks</span>
                </div>
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div>
              <h3 className="text-[#036400] font-medium text-sm mb-2 border-b border-[#A05B2E] pb-1">WHY CHOOSE US</h3>
              <div className="bg-[#F8F9F6] p-2 rounded border border-[#D0D6C3]">
                <div className="flex justify-between">
                  <div className="text-xs text-center px-1">
                    <div className="w-5 h-5 rounded-full bg-[#036400] text-white flex items-center justify-center text-xs font-bold mx-auto mb-1">1</div>
                    <p>Quality<br/>Craftsmanship</p>
                  </div>
                  <div className="text-xs text-center px-1">
                    <div className="w-5 h-5 rounded-full bg-[#036400] text-white flex items-center justify-center text-xs font-bold mx-auto mb-1">2</div>
                    <p>Premium<br/>Materials</p>
                  </div>
                  <div className="text-xs text-center px-1">
                    <div className="w-5 h-5 rounded-full bg-[#036400] text-white flex items-center justify-center text-xs font-bold mx-auto mb-1">3</div>
                    <p>Transparent<br/>Pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small Image Gallery */}
          <div className="flex space-x-2 mb-3">
            <div className="w-1/2 h-20 relative overflow-hidden rounded">
              <Image
                src="/image2.png"
                alt="Premium Cedar Fencing"
                width={150}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 h-20 relative overflow-hidden rounded">
              <Image
                src="/image3.png"
                alt="Ornamental Metal Fencing"
                width={150}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-[#036400] text-white p-2 text-center rounded">
            <p className="font-bold text-sm">FREE CONSULTATION & QUOTE</p>
            <p className="text-xs">(206) 670-3597 • greenviewsolutions.net</p>
          </div>
          
          {/* Footer */}
          <div className="mt-2 text-center">
            <p className="text-xs text-[#036400] font-medium">Lifetime warranties available • 6 months interest-free financing</p>
            <div className="flex justify-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
