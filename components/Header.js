import React from "react";
import WalletConnection from "./WalletConnection";

export const Header = () => {
  return (
    <div className="h-[10vh] bg-black flex justify-center">
      <div className="max-w-[900px] flex justify-between items-center w-full">
        <div className="text-white font-bold text-[30px]">Hello</div>
        <div>
          <WalletConnection />
        </div>
      </div>
    </div>
  );
};