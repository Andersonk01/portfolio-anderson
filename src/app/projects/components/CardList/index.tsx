"use client";
import React, { useState } from "react";
import { CardListWrapper } from "./styled";
import Image from "next/image";

type CardListProps = {
  name?: string;
  description?: string;
  url?: string;
};

export const CardList = ({
  name = "name",
  description = "",
  url = "/logo.png",
}: CardListProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <CardListWrapper
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      $showTooltip={showTooltip}
    >
      <button>
        <a href="#">Link</a>
      </button>

      <Image src={url} width={280} height={280} alt="image-list" />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </CardListWrapper>
  );
};
