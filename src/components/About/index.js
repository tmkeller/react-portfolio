import React from "react";
import "./style.css";
import Photo from "./images/TimKellerProfile.jpg";
import Phone from "./images/phone.png";
import Email from "./images/mail.png";
import Github from "./images/github.png";
import LinkedIn from "./images/linkedin.png";
import Resume from "./images/resume-document.png";

function About() {
    return (
        <section className="row custom_row">
            <article className="col-sm-8 center_col">
                <section className="row custom_row">
                    <h2>About Me</h2>
                </section>
                <hr/>
                <div className="aligned_content">
                    <img className="profile_pic" src={ Photo } alt="Tim Keller profile pic"/>
                    &#8195;Timothy Michael Keller is a Seattle-based full-stack web developer and musician. Finding a balance between the artistic and the technical has been the theme of his professional life so far, and Tim has managed to craft a thriving freelance career as a web developer while continuing to perform with some of Seattle's best entertainment companies. <br/><br/>
                    
                    &#8195;After years with the hilarious and seminal prog rock band Discs of Fury, Tim spent six years in Los Angeles performing with dream pop chanteuse Alexa Melo and the psychedelic folk rock band We The Ones, while simultaneously working as a contractor for boutique web development companies Atoms &amp; Pixels, Dovie.tv, and Five Mile Media. After returning to Seattle, he has worked with The Village Theater, Naomi Morgan Entertainment, The Dickens Carolers, Lyric Opera Northwest, and Puget Sound Concert Opera. Every summer you can find him rocking out with pop/event bands Blue Wave Band, The Nines, and Side One. He also plays piano and synths for <em>two</em> Queen cover bands (Fat Bottomed Band and Queen Mother) and sings for power metal quintet Drägorhast. He is perhaps best known as Jack Skellington in the Can Can Kitchen and Cabaret's production of "This Is Halloween," which has played at The Triple Door since 2010. Opera is his great musical love, and he hopes to one day sing with Seattle Opera Chorus. <br/><br/>

                    &#8195;Tim is the author of Breed/Keep/Kill, an evolutionary algorithm for music, written in SuperCollider, and way too many WordPress websites to count. He is a current student at the University of Washington's coding bootcamp, and hopes to work as a web developer with Ridwell after graduation. <br/><br/>

                    &#8195;As of late 2020, he is collaborating with childhood friend and songwriting genius Brian Kinsella on his first rock opera, set to premiere in Spring of 2021. <br/>

                    <a className="icon_link" href="tel:+12063539625">
                        <img src={ Phone } alt="Phone icon"/>
                    </a>

                    <a className="icon_link" href="mailto:timothy.m.keller@gmail.com">
                        <img src={ Email } alt="Email icon"/>
                    </a>

                    <a className="icon_link" href="https://github.com/tmkeller">
                        <img src={ Github } alt="Github icon"/>
                    </a>

                    <a className="icon_link" href="https://linkedin.com/in/tim-keller-3ab55bb1/">
                        <img src={ LinkedIn } alt="LinkedIn icon"/>
                    </a>

                    <a className="icon_link" href="downloads/TimothyKellerWebDevResume02052021.pdf">
                        <img src={ Resume } alt="Resume icon"/>
                    </a>
                    <p>Timothy.M.Keller@gmail.com</p>
                    <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </div>
            </article>
        </section>
    )
}

export default About;