import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searcgParams] = useSearchParams();
  const queryTerm = searcgParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  //eslint-disable-next-line
  const pageTitle = useTitle(`Search Result For ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text 3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No Result Found for '${queryTerm}'` : `Result Found for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
