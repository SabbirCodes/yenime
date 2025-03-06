import { useEffect, useState, useRef } from "react";
import AnimeCard from "./components/AnimeCard";
import LoadMore from "./components/LoadMore";
import { fecthData } from "./data";
import HeroImg from "./components/HeroImg";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef(null)


  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fecthData(page);
        if(res.length === 0){
          setHasMore(false)
        }else{
          setData((prev) => [...prev, ...res]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnime();
  }, [page]);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setPage((prev) => prev + 1),
      { threshold: 0.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div className="max-w-7xl mx-auto">
      <HeroImg  />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-4xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item, index) => (
            <AnimeCard key={item.id} anime={item} idx={index} />
          ))}
        </section>
        <LoadMore />
        {hasMore && <div ref={loaderRef} className="h-10"></div>}
      </main>
    </div>
  );
};

export default App;
