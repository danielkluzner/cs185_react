import React from 'react';

const Text = () => {
    return (
        <>
            <p>
                <form>
                    <label for='fname'>First Name:<div style={{ color: 'red', display: 'inline-block' }} >*</div></label><br />
                    <input type='text' id='fname' name='fname' placeholder='Daniel' required /><br /><br />
                    <label for='lname'>Last Name:<div style={{ color: 'red', display: 'inline-block' }}>*</div></label><br />
                    <input type='text' id='lname' name='lname' placeholder='Kluzner' required /><br />

                    <p>Favorite Movie</p>
                    <input type='radio' id='avengers' name='fave_movie' /><label for='avengers'>Avengers</label><br />
                    <input type='radio' id='dark_knight' name='fave_movie' /><label for='dark_knight'>Dark Knight</label><br />
                    <input type='radio' id='tenet' name='fave_movie' /><label for='tenet'>Tenet</label><br />

                    <p><input type='submit' value='Done' /></p>
                </form>
            </p>
        </>
    );
}

export default Text;