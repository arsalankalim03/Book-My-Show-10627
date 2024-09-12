import React from 'react'
import MovieNavbar from '../Components/Navbar/MovieNavbar.component'

const MovielayoutHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <MovieNavbar />
                    <Component {...props} />
                    <div>Footer</div>
                </div>
            );
        };

export default MovielayoutHoc;