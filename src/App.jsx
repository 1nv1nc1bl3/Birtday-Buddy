import { useState } from 'react';
import data from './data.js';
import List from './components/List.jsx';

export default function App() {
    // console.log(data[0].name);

    const [people, setPeople] = useState(data);

    return (
        <main>
            <section className='container'>
                <h1>The Birthday Buddy</h1>
                <h4
                    className='num-friends'
                    style={{ marginBottom: '2rem', marginTop: '.5rem' }}
                >
                    {people.length} of your contacts have a birthday today
                </h4>
                <List people={people} />
                <div className='btn-div'>
                    {people.length !== 0 ? (
                        <button
                            type='button'
                            className='btn btn-block'
                            onClick={() => setPeople([])}
                        >
                            clear all
                        </button>
                    ) : (
                        <button
                            type='button'
                            className='btn btn-block'
                            style={{ marginTop: '.5rem' }}
                            onClick={() => setPeople(data)}
                        >
                            show today's birthdays
                        </button>
                    )}
                </div>
            </section>
        </main>
    );
}
