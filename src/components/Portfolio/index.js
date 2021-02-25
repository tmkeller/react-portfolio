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
                        title="Google Books Search" 
                        githubURL="https://github.com/tmkeller/google-books-search" 
                        deployed="https://tmk-google-books-search.herokuapp.com/"
                        image={ Books }
                    />
                    <PortfolioItem 
                        title="Weather Dashboard" 
                        githubURL="https://github.com/tmkeller/weather-dashboard" 
                        deployed="https://tmkeller.github.io/weather-dashboard/"
                        image={ Weather }
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="Turn the Tables" 
                        githubURL="https://github.com/tmkeller/eightysixed-app" 
                        deployed="https://peaceful-gorge-36427.herokuapp.com/"
                        image={ TurnTables }
                    />
                    <PortfolioItem 
                        title="Online Quiz" 
                        githubURL="https://github.com/tmkeller/online-quiz" 
                        deployed="https://tmkeller.github.io/online-quiz/"
                        image={ Quiz }
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="Workday Scheduler" 
                        githubURL="https://github.com/tmkeller/workday-scheduler" 
                        deployed="https://tmkeller.github.io/workday-scheduler/"
                        image={ Scheduler }
                    />
                    <PortfolioItem 
                        title="NEBHE"
                        deployed="https://nebhe.org/"
                        image={ NEBHE }
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="American Vegetable Oil"
                        deployed="https://www.americanvegoil.com/"
                        image={ Avo }
                    />
                    <PortfolioItem 
                        title="CSU Chico"
                        deployed="https://today.csuchico.edu/"
                        image={ Chico }
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="John Livesay"
                        deployed="https://johnlivesay.com/"
                        image={ Livesay }
                    />
                    <PortfolioItem 
                        title="My Rehab Exercise"
                        deployed="https://myrehabexercise.com/"
                        image={ MRE }
                    />
                </section>
                <section className="row custom_row">
                    <PortfolioItem 
                        title="Burger Logger"
                        deployed="https://handlebars-burger-logger.herokuapp.com/"
                        image={ Burger }
                        githubURL={ "https://github.com/tmkeller/Handlebars-Burger-Logger" }
                    />
                </section>
            </article>
        </section>
    )
}

export default Portfolio;