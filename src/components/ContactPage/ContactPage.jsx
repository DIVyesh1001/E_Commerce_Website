import { React, useState } from 'react'

import './ContactPage.css'

function ContactPage() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "35ab5399-e875-49dd-95a0-82829dca918b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact-page'>
            <div className='contact-image'>
                <p>Contact us <br /> Send us a message or feedback</p>
            </div>
            <div className='contact-main'>
                <form onSubmit={onSubmit}>
                    <div id='form-names'>
                        <input type='text' name='first-name' className='text-input' placeholder='First Name' required /><br />
                        <input type='text' name='last-name' className='text-input' placeholder='Last Name' required /><br />

                    </div>
                    {/* <input type="text" className='text-input' placeholder="Name" name="name" required/> */}
                    <input type='email' name='Email' className='text-input' placeholder='Email' required /><br />
                    <textarea className='textarea-input' name='message' placeholder='Type your Message here' required /><br />
                    <button type='submit' id='send-button'>Send Message 📩</button>
                </form>
                <div className='results'>{result}</div>
            </div>
        </div>
    )
}

export default ContactPage
