import React from "react";
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
const ClientLogos = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Client 1 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client1}
            alt="Client 1"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 2 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client2}
            alt="Client 2"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 3 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client3}
            alt="Client 3"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 4 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client4}
            alt="Client 4"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 5 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client5}
            alt="Client 5"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 6 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={client6}
            alt="Client 6"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
