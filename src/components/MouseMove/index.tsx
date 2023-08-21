"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const FollowCursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999;

  pointer-events: none;
  background-color: #fa0000;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  mix-blend-mode: exclusion;
`;

export const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <FollowCursorContainer
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    ></FollowCursorContainer>
  );
};
