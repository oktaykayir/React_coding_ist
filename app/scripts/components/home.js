/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import ProductSearch from "./DataSearch";


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    <ProductSearch/>
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;