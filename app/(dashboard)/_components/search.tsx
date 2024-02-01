"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedSearch,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      },
    );
    router.push(url);
  }, [debouncedSearch, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
