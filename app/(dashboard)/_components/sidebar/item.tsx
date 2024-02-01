"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Hint from "@/components/common/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, imageUrl, name }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList({});

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="relative aspect-square">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={handleClick}
          className={cn(
            "cursor-pointer rounded-md opacity-75 transition-opacity duration-200 ease-in-out hover:opacity-100",
            isActive && "opacity-100",
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
