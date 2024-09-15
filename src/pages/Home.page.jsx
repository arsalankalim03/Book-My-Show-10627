import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.component';

//Layout HOC
import DefaultlayoutHoc from '../layouts/Default.layout';



const Homepage = () => {
    const [recomendedMovies, setRecommendedMovies] = useState([]);
    const [premiereMovies, setPremiereMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
        };

        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremiereMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);


    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-4 md:px-12 my-8 '>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3  '>
                    The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8 '>
                <PosterSlider
                    title='Recomended Movies'
                    subject='List of Recomended Movies'
                    posters={recomendedMovies}
                    isDark={false}
                />
            </div>
            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Rupay Icon" className='w-full h-full'
                        />
                    </div>
                    <PosterSlider
                        title='Premiers'
                        subject='Brand new movies every Friday'
                        posters={premiereMovies}
                        isDark={true}
                    />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3' >
                <PosterSlider
                    title='Online Streaming Events'
                    subject=''
                    posters={onlineStreamEvents}
                    isDark={false}

                />
            </div>
        </>
    );
};

export default DefaultlayoutHoc(Homepage);