import React from 'react';
import Github from "./images/github.png";
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

function Portfolio() {
    return (
        <section class="row custom_row">
            <article class="center_col portfolio_col">
                <section class="row custom_row">
                    <h2>Portfolio</h2>
                </section>
                <hr/>
                <section class="row custom_row">
                    <div class="col-lg-6">
                        <h4>Weather Dashboard</h4>
                        <a class="portfolio_git_icon" href="https://github.com/tmkeller/weather-dashboard">
                            <img src={ Github } alt="Github icon"/>
                        </a>
                        <a href="https://tmkeller.github.io/weather-dashboard/">
                            <img class="portfolio_image" src={ Weather } alt="Weather dashboard"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <h4>Turn the Tables</h4>
                        <a class="portfolio_git_icon" href="https://github.com/tmkeller/eightysixed-app">
                            <img src={ Github } alt="Github icon"/>
                        </a>
                        <a href="https://peaceful-gorge-36427.herokuapp.com/" >
                            <img class="portfolio_image" src={ TurnTables } alt="Turn the Tables"/>
                        </a>
                    </div>
                </section>
                <section class="row custom_row">
                    <div class="col-lg-6">
                        <h4>Online Quiz</h4>
                        <a class="portfolio_git_icon" href="https://github.com/tmkeller/online-quiz">
                            <img src={ Github } alt="Github icon"/>
                        </a>
                        <a href="https://tmkeller.github.io/online-quiz/" >
                            <img class="portfolio_image" src={ Quiz } alt="Online quiz"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <h4>Workday Scheduler</h4>
                        <a class="portfolio_git_icon" href="https://github.com/tmkeller/workday-scheduler">
                            <img src={ Github } alt="Github icon"/>
                        </a>
                        <a href="https://tmkeller.github.io/workday-scheduler/" >
                            <img class="portfolio_image" src={ Scheduler } alt="Workday scheduler"/>
                        </a>
                    </div>
                </section>
                <section class="row custom_row">
                    <div class="col-lg-6">
                        <h4>NEBHE</h4>
                        <a href="https://nebhe.org/" >
                            <img class="portfolio_image" src={ NEBHE } alt="NEBHE"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <h4>American Vegetable Oil</h4>
                        <a href="https://www.americanvegoil.com/" >
                            <img class="portfolio_image" src={ Avo } alt="AVO"/>
                        </a>
                    </div>
                </section>
                <section class="row custom_row">
                    <div class="col-lg-6">
                        <h4>CSU Chico Today</h4>
                        <a href="https://today.csuchico.edu/" >
                            <img class="portfolio_image" src={ Chico } alt="CSU Chico"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <h4>John Livesay</h4>
                        <a href="https://johnlivesay.com/" >
                            <img class="portfolio_image" src={ Livesay } alt="John Livesay"/>
                        </a>
                    </div>
                </section>
                <section class="row custom_row">
                    <div class="col-lg-6">  
                        <h4>My Rehab Exercise</h4>
                        <a href="https://myrehabexercise.com/" >
                            <img class="portfolio_image" src={ MRE } alt="My Rehab Exercise"/>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <h4>Burger Logger</h4>
                        <a class="portfolio_git_icon" href="https://github.com/tmkeller/Handlebars-Burger-Logger">
                            <img src={ Github } alt="Github icon"/>
                        </a>
                        <a href="https://handlebars-burger-logger.herokuapp.com/" >
                            <img class="portfolio_image" src={ Burger } alt="Burger Logger"/>
                        </a>
                    </div>
                </section>
            </article>
        </section>
    )
}

export default Portfolio;