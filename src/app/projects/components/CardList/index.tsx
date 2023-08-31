"use client";
import React, { useState } from "react";
import { CardListWrapper } from "./styled";

type CardListProps = {
  name?: string;
  description?: string;
  url?: string;
};

export const CardList = ({
  name = "name",
  description = "",
  url = "",
}: CardListProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <CardListWrapper
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      $showTooltip={showTooltip}
    >
      <button>
        <a href={url} target="_blank">
          Link
        </a>
      </button>

      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </CardListWrapper>
  );
};
