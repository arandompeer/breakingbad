import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (qy) => {
        setText(qy);
        getQuery(qy);
    }

    return (
        <section>
            <form>
                <input type='text' 
                className='form-control' 
                placeholder='Search characters ...' 
                value={text}
                onChange={(ev) => onChange(ev.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search;