import { useState } from 'react';

export default function Person({ image, age, firstName, lastName, id }) {
    const [isRemoved, setIsRemoved] = useState(false);

    const removeSingle = () => {
        // console.log(id);
        // console.log(isRemoved);
        setIsRemoved(true);
    };

    return (
        <article className={`person ${isRemoved ? 'removed' : ''}`} key={id}>
            <div className='personData'>
                <img src={image} alt={firstName} />
                <div>
                    <h4>
                        {firstName} {lastName}
                    </h4>
                    <p>{age} years</p>
                </div>
            </div>
            <div className='personBtn'>
                <button type='button' className='btn' onClick={removeSingle}>
                    mark {firstName} as called
                </button>
            </div>
        </article>
    );
}
