import { useGlobalContext } from "./context";

const Search = () => {
  const {query, setQuery,isError} = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Search Your Favourite Movies</h2>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter Movie Name" />
          <button type="submit">Search</button>
        </form>
      </section>
      <div className="error">
        {isError.show && isError.msg}

      </div>
    </>
  )
}

export default Search