import React from "react";
import MenuSlider from "./MenuSlider";
import { Button } from "../button";

export default function Navbar() {
  return (
    <div className="flex justify-between border-b py-6 px-10">
      <MenuSlider />
      <Button>Connect Wallet</Button>
    </div>
  );
}
