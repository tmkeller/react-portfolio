import React from 'react';
import "./style.css";
import PortfolioItem from "../PortfolioItem";
import Avo from "./images/avo.jpg";
import Burger from "./images/burger-logger.jpg";
import Chico from "./images/chico.jpg";
import Livesay from "./images/livesay.jpg";
import MRE from "./images/mre.jpg";
import NEBHE from "./images/nebhe.jpg";
import Quiz from "./images/online-quiz.jpg";
import TurnTables from "./images/turn-the-tables.jpg";
import Weather from "./images/weather-dashboard.jpg";
import Scheduler from "./images/workday-scheduler.jpg";
import Books from "./images/google-books-search.jpg";
import RadCats from "./images/radcats.jpg";

function Portfolio() {
    return (
        <section className="row custom_row">
            <article className="center_col portfolio_col">
                <section className="row custom_row">
                    <h2>Portfolio</h2>
                </section>
                <hr/>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="RadCaTS Karaoke" 
                        githubURL="https://github.com/chomieu/radcats-karaoke" 
                        deployed="http://radcats-karaoke.herokuapp.com/"
                        image={ RadCats }
                        description="A full-featured social karaoke app that dynamically loads content using the YouTube Music API, allows for custom lyric file generation, provides a hub for group sessions, and incorporates 3D elements. Built for the University of Washington's Winter 2020/21 Coding Bootcamp."
                    />
                    <PortfolioItem 
                        title="Google Books Search" 
                        githubURL="https://github.com/tmkeller/google-books-search" 
                        deployed="https://tmk-google-books-search.herokuapp.com/"
                        image={ Books }
                        description="A full-stack MERN app that queries Google Books and allows the user to store their choices in a Mongo database. Uses MongoDB/Mongoose, Express, Express Router DOM, React, Node, Bootstrap, and Axios."
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="Weather Dashboard" 
                        githubURL="https://github.com/tmkeller/weather-dashboard" 
                        deployed="https://tmkeller.github.io/weather-dashboard/"
                        image={ Weather }
                        description="Weather dashboard using OpenWeatherMap API. Built for UW's 12-week coding bootcamp."
                    />
                    <PortfolioItem 
                        title="Turn the Tables" 
                        githubURL="https://github.com/tmkeller/eightysixed-app" 
                        deployed="https://peaceful-gorge-36427.herokuapp.com/"
                        image={ TurnTables }
                        description="A customer review site that inverts the traditional model by allowing business to review their customers. Built using Node, Express, Sequelize, and Handlebars, with a Cloudinary integration. Group project #2 for the University of Washington's Winter 2020/2021 Coding Bootcamp"
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="Online Quiz" 
                        githubURL="https://github.com/tmkeller/online-quiz" 
                        deployed="https://tmkeller.github.io/online-quiz/"
                        image={ Quiz }
                        description="Online quiz that stores high scores using localStorage. Built for the University of Washington's Winter 2020/2021 Coding Bootcamp"
                    />
                    <PortfolioItem 
                        title="Workday Scheduler" 
                        githubURL="https://github.com/tmkeller/workday-scheduler" 
                        deployed="https://tmkeller.github.io/workday-scheduler/"
                        image={ Scheduler }
                        description="An interactive scheduling application built with Bootstrap, vanilla Javascript, JQuery, and CSS that uses persistant state storage through localStorage."
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="NEBHE"
                        deployed="https://nebhe.org/"
                        image={ NEBHE }
                        description="WordPress site built for the New England Board of Higher Education. Included a massive data migration of old articles and a complete front-end redesign."
                    />
                    <PortfolioItem 
                        title="American Vegetable Oil"
                        deployed="https://www.americanvegoil.com/"
                        image={ Avo }
                        description="WordPress site built for American Vegetable Oils with a custom online catalogue feature."
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="CSU Chico"
                        deployed="https://today.csuchico.edu/"
                        image={ Chico }
                        description="WordPress website for CSU Chico, featuring a migration of existing articles from the old platform."
                    />
                    <PortfolioItem 
                        title="John Livesay"
                        deployed="https://johnlivesay.com/"
                        image={ Livesay }
                        description="Personal WordPress site for professional sales speaker John Livesay that included a massive migration of old articles and several site integrations with existing API services."
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="My Rehab Exercise"
                        deployed="https://myrehabexercise.com/"
                        image={ MRE }
                        description="A personal exercise prescription site for physical rehabilitation. Built using SmartyPHP, and featuring a PayPal API integration for subscriptions through PP and personal credit cards. Also features an integration with the Wistia API, for video service and uploads."
                    />
                    <PortfolioItem 
                        title="Burger Logger"
                        deployed="https://handlebars-burger-logger.herokuapp.com/"
                        image={ Burger }
                        githubURL={ "https://github.com/tmkeller/Handlebars-Burger-Logger" }
                        description="Simple test app to log burgers eaten by the user. Built with Javascript, Handlebars, and CSS."
                    />
                </section>
            </article>
        </section>
    )
}

export default Portfolio;