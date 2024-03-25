"use client";
import React from "react";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {

  return <div className="w-full h-[300px] rounded-lg shadow-lg">{children}</div>;
}
