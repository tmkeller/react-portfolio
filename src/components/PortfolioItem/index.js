import React from 'react';
import Github from "./images/github.png";

function PortfolioItem( props ) {
    return (
        <div className="col-lg-6">
            <h4>{ props.title }</h4>
            { !!props.githubURL ? 
                <a className="portfolio_git_icon" href={ props.githubURL }>
                    <img src={ Github } alt="Github icon"/>
                </a>
                : null
            }
            <a href={ props.deployed }>
                <img className="portfolio_image" src={ props.image } alt={ props.title }/>
            </a>
        </div>
    )
}

export default PortfolioItem;