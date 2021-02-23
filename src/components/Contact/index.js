import React, { useState } from 'react';
import "./style.css";

function Contact() {

    const [ formInputs, setFormInputs ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = event => {
        setFormInputs({
            ...formInputs,
            [ event.target.name ] : event.target.value
        })
    }

    const handleInputSubmit = event => {
        event.preventDefault();
        alert( `Thank you, ${ formInputs.name }! Your message has been sent!`);
        setFormInputs({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <section className="row custom_row">
            <article className="col-sm-8 center_col">
                <section className="row custom_row">
                    <h2>Contact</h2>
                </section>
                <hr/>
                <form className="aligned_content">
                    <div className="form-group form_div">
                        <label htmlFor="NameInput">Name</label>
                        <input type="text" name="name" onChange={ handleInputChange } className="form-control" id="NameInput" value={ formInputs.value } />
                    </div>
                    <div className="form-group form_div">
                        <label htmlFor="EmailInput">Email</label>
                        <input type="email" name="email" onChange={ handleInputChange } className="form-control" id="EmailInput" value={ formInputs.email } />
                    </div>
                    <div className="form-group form_div">
                        <label htmlFor="MessageInput">Message</label>
                        <textarea name="message" onChange={ handleInputChange } className="form-control" id="MessageInput" rows="3" value={ formInputs.message } ></textarea>
                    </div>
                    <button onClick={ handleInputSubmit } type="submit" className="btn btn-primary form_button">Submit</button>
                </form>
            </article>
        </section>  
    )
}

export default Contact;