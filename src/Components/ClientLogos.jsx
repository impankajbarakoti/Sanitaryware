import React from "react";

const ClientLogos = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Client 1 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-1.png"
            alt="Client 1"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 2 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-2.png"
            alt="Client 2"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 3 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-3.png"
            alt="Client 3"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 4 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-4.png"
            alt="Client 4"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 5 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-5.png"
            alt="Client 5"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Client 6 */}
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src="http://hmehdi.com/demos/faucets/images/client/client-6.png"
            alt="Client 6"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
