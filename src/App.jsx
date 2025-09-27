import { useState } from 'react';
import data from './data.js';
import List from './components/List.jsx';

const App = () => {
    // console.log(data[0].name);

    const [people, setPeople] = useState(data);

    return (
        <main>
            <div className='container'>
                <h3 style={{ marginBottom: '2rem', marginTop: '.5rem' }}>
                    {people.length} Birthdays today
                </h3>
                <List people={people} />
                <button
                    type='button'
                    className='btn btn-block'
                    onClick={() => setPeople([])}
                >
                    clear all
                </button>
            </div>
        </main>
    );
};
export default App;
