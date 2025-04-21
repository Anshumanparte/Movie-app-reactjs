import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if(isLoading){
    return (
    <div className="loading p-5 flex justify-center items-start min-h-screen text-white">Loading...</div>
  )
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      offset: 120,
    });
  }, []);

  
  return (
    <section className="movie-page px-8 py-12 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {movie.map((curmovie) => {
          const { imdbID, Poster, Title, Year } = curmovie;
          return (
            <NavLink
              to={`/movie/${imdbID}`}
              key={imdbID}
              data-aos="fade-up"
              className="block"
            >
              {/* MAIN BODY */}
              <div className="card relative group backdrop-blur-2xl  rounded-2xl border-[1px] border-black shadow-xs hover:shadow-lg shadow-blue-100 transition-all duration-300 transform hover:-translate-y-2">

                <div className="card-img flex justify-center items-center p-2 overflow-hidden rounded-2xl">
                  <img
                    className="w-[100%] rounded-2xl h-[30rem] object-cover"
                    src={Poster}
                    alt={Title}
                  />
                </div>

                {/* HOVER */}
                <div className="absolute bg-gradient-to-t backdrop-blur-[1px  ] from-black to-transparent inset-0 left-0 bottom-0 bg-opacity-60 opacity-0 group-hover:opacity-100 text-white p-4 flex flex-col justify-end items-center transition-all duration-300 rounded-2xl">
                  <h2 className="text-lg font-semibold mb-2">{Title}</h2>
                  <p className="text-sm">Release Year: {Year}</p>
                  <p className="text-xs mt-1 italic">Click to view more</p>
                </div>


                <div className="card-info flex p-4 text-center justify-between items-center lg:hidden ">
                  <h2 className="text-lg font-semibold mb-1">{Title.length >10 ? Title.slice(0,20)+"..." : Title }</h2>
                  <h4 className="text-sm">{Year}</h4>
                </div>

               
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
