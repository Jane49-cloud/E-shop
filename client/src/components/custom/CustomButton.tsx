import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomButton: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <button className="custom-button  px-5 hover:bg-secondary-light text-xl ">
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
