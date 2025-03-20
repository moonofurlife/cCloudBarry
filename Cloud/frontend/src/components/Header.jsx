import React from "react";
import { MainMenu } from "./MainMenu";

export const Header = () => {
  return (
    <>
      <div className="fixed-top mb-5">
        <MainMenu />
      </div>
    </>
  );
};
