import React from "react";
import Loader from "react-js-loader";

const Spinner = ({ message }: { message: string }) => {
  return (
  <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader 
        type= "spinner-circle"
        bgColor="#00BFFF"
        height={50}
        width={200}
        className="mb-5"
      />
      <p className="text-lg text-center px-2">{message}</p>
  </div>
  );
};

export default Spinner;
