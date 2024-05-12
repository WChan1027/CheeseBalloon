"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchIndex.module.scss";

export default function Search() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    router.push(`/searchresult?query=${query}`);
  };

  useEffect(() => {
    window.location.reload(); // 페이지 새로고침
  }, [router.query.query]);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input className={styles.search__input} type="text" name="query" />
      </form>
    </div>
  );
}
