"use client";

import Each from "@/components/common/each";
import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";
const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul>
      <Each
        of={userMemberships.data}
        render={(mem: any) => (
          <Item
            key={mem.organization.id}
            id={mem.organization.id}
            imageUrl={mem.organization.imageUrl}
            name={mem.organization.name}
          />
        )}
      />
    </ul>
  );
};

export default List;
