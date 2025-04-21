import { useParams } from "react-router-dom"
import { API_URL } from "./context"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
const Single = () => {


  const { id } = useParams()
  console.log(id)
  
  
      const [isLoading, setIsLoading] = useState(true);
      const [movie, setMovie] = useState("");
     
  
  
      const getMovies = async (url) => {
        setIsLoading(true);
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          if(data.Response === "True"){
              setMovie(data);
              setIsLoading(false);
          }
         
      }catch(err){
          console.log(err);
      }
      
      }
  
  
      useEffect(()=>{
          let timerOut = setTimeout(()=>{
              getMovies(`${API_URL}&i=${id}`);
  
          },800)
  
          return () => clearTimeout(timerOut);
          
      },[id])

      if(isLoading){
        return (
        <div className="loading flex justify-center items-center min-h-screen text-white">Loading...</div>
      )
      }

  return (
    <>

    
     <section className="flex justify-center items-center min-h-screen">
  <div className="relative max-w-4xl w-full">
    
    {/* glowing background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 blur-3xl opacity-20 rounded-2xl z-0" />

    {/* main data */}
    <div className="relative z-10 backdrop-blur-md bg-white/30 border border-white/20 shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0">
        <img
          className="w-72 h-auto rounded-lg object-cover shadow-md"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>

      <div className="flex flex-col justify-center text-white space-y-3">
        <h2 className="text-4xl font-bold">{movie.Title}</h2>
        <p><span className="font-semibold">Released:</span> {movie.Released}</p>
        <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
        <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
        <p><span className="font-semibold">Director:</span> {movie.Director}</p>
        <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
        <p className="mt-4 leading-relaxed"><span className="font-semibold">Plot:</span> {movie.Plot}</p>
        <NavLink to="/" className="mt-4 self-start bg-gray-600 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-300">Back to Home</NavLink>
      </div>
    </div>

  </div>
</section>




    </>
  )
}

export default Single