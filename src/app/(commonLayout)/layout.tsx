import { Navbar } from "@/components/layout/navbar";
import FooterPage from "@/components/modules/homepage/footer/Footer";
import React from "react";

 

export default function CommonLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="bg-accent">
        <Navbar></Navbar>
        {children}
        <FooterPage></FooterPage>
    </div>
  )
}
