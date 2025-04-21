import { useGlobalContext } from "./context";

const Search = () => {
  const {query, setQuery,isError} = useGlobalContext();
  return (
    <>
      <section className="search-section p-5 relative flex justify-between items-center min-h-[30vh] bg-[url('https://e1.pxfuel.com/desktop-wallpaper/1006/499/desktop-wallpaper-faceless-close-up-scary-scary-people.jpg')] bg-cover bg-center bg-no-repeat">

      <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="z-20 pl-5 pt-10 self-start">
          <h1 className="text-5xl font-bold text-gray-300">Cinephile</h1>
          <p className="text-gray-400">Your Movie Search Companion</p>
        </div>
        <div className="z-10 ">
          <form className="search-form p-5 " onSubmit={(e) => e.preventDefault()}>
            <h2 
            className="text-3xl font-bold  mb-4 text-gray-400"
            >Search Your Favourite Movies</h2>
            <input 
            className="border-2 w-70 border-gray-300 text-gray-300 rounded-lg p-2 outline-none focus:border-blue-500 transition duration-300"
            type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter Movie Name" />
            <button 
            className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-300 hover:scale-105"
            type="submit">Search</button>
          </form>
          <div className="error text-red-500 pl-5 mt-4">
          {isError.show && isError.msg}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Search