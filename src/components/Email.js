import React, { useState } from 'react';

const Email = () => {
    const [email, setEmail] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const checkEmailFormat = () => {
        let input = email;
        let at_char = input.lastIndexOf("@");
        let edu = input.indexOf(".edu");
        let com = input.indexOf(".com");
        let message = "Invalid email address";
        if (at_char > 0 && (com === input.length - 4 || edu === input.length - 4)) {
            message = "Email successfully recorded";
        }
        setSubmitMessage(message);
    }

    return (
        <>
            <p>
                <form>
                    <label for='email'>e-mail:<div style={{ color: 'red', display: 'inline-block' }}>*</div></label><br />
                    <input type='text' id='email' name='email' placeholder='example@email.com' required onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <div id='submit-message'>{submitMessage}</div>

                    <p><input id='email-submit' type='button' value='Submit' onClick={checkEmailFormat} /></p>
                </form>
            </p>
        </>
    );
}

export default Email;