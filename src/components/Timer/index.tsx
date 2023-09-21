"use client";

import { useState, useEffect } from "react";
export default function Timer() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <b>{time}</b>;
}
