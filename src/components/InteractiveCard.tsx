"use client";
import React from "react";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  // function onCarSelected(){
  //     alert("You Select "+contentName)
  // }

  //   function onCardMouseAction(event: React.SyntheticEvent) {
  //     if (event.type == "mouseover") {
  //       event.currentTarget.classList.remove("shadow-lg");
  //       event.currentTarget.classList.add("shadow-2xl");
  //     } else {
  //       event.currentTarget.classList.remove("shadow-2xl");
  //       event.currentTarget.classList.add("shadow-lg");
  //     }
  //   }

  return <div className="w-1/5 h-[300px] rounded-lg shadow-lg">{children}</div>;
}
