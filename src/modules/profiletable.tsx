"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileTable(user: any) {
  const router = useRouter();
  const [works, setWorks] = useState(user.user.works); // initial works from server
  const [selectedFilter, setSelectedFilter] = useState(""); // genre filter
  const [page, setPage] = useState(1); // track current page
  const [hasMore, setHasMore] = useState(true); // track if there's more to load
  const [loading, setLoading] = useState(false); // loading state for fetch

  const fetchWorks = async (page: number, genre: string) => {
    setLoading(true); // set loading to true when fetching data
    try {
      const res = await fetch(`/api/work?genre=${genre}&page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      
      if (data.length > 0) {
        setWorks((prevWorks: any[]) => [...prevWorks, ...data]);
        setPage(page); 
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setWorks([]); 
    setPage(1); 
    setHasMore(true);
    fetchWorks(1, selectedFilter);
  }, [selectedFilter]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading && hasMore) {
        fetchWorks(page + 1, selectedFilter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, selectedFilter, hasMore, loading]);

  return (
    <>
      {/* Filters */}
      <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />

      {/* Table */}
      <div className={`${styles.workTable}`}>
        <table className={`${styles.table}`}>
          <thead>
            <tr className={`${styles.theader} ${styles.smhidden}`}>
              <th className={styles.theadlist}>Year</th>
              <th className={styles.theadlist}>Title</th>
              <th className={styles.theadlist}>Publisher</th>
              <th className={styles.theadlist}>Genre</th>
            </tr>
          </thead>
          <tbody>
            {works.map((work: any) => (
              <tr key={work.id} className={styles.trow}>
                <td className={`${styles.yearsgenre} ${styles.years}`}>{work.year}</td>
                <td className={`${styles.publisher} ${styles.mdhidden}`}>{work.title}</td>
                <td className={`${styles.publisher} ${styles.mdhidden}`}>
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "inline-flex",
                    }}
                  >
                    <Image
                      src={work.publisher.avatar}
                      alt={work.publisher.name}
                      width={32}
                      height={32}
                      style={{ borderRadius: 100 }}
                    />{" "}
                    <span style={{ alignContent: "center" }}>{work.publisher.name}</span>
                  </div>
                </td>
                <td className={`${styles.yearsgenre} ${styles.mdhidden}`}>
                  <div className={styles.genrecolor}>
                    <div>{work.genre}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && <div>Loading...</div>}
      </div>
    </>
  );
}

function Filters({ selectedFilter, setSelectedFilter }: any) {
  const [filters, setFilters] = useState([
    { name: "Fiction", count: 12 },
    { name: "Nonfiction", count: 16 },
    { name: "Poetry", count: 4 },
  ]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/work-count");
      const data = await res.json();
      console.log(data);
      if (data.data) {
        setFilters([
          { name: "Fiction", count: data.data.fictionCount },
          { name: "Nonfiction", count: data.data.nonfictionCount },
          { name: "Poetry", count: data.data.poetryCount },
        ]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={`${styles.filters}`}>
      {filters.map((filter) => (
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 8,
            background: filter.name === selectedFilter ? "#1C1C1C" : "#F7F7F7",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
          onClick={() => setSelectedFilter(filter.name)}
        >
          <div
            style={{ color: filter.name === selectedFilter ? "white" : "#1C1C1C", fontSize: 16 }}
          >
            {filter.name}
          </div>
          <div
            style={{
              width: 24,
              height: 24,
              background: "white",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div style={{ color: "#1C1C1C", fontSize: 12 }}>{filter.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
