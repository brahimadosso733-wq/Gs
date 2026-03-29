import React, { useState } from 'react';

const AuthorDashboard = () => {
    const [authors, setAuthors] = useState([]);
    const [authorName, setAuthorName] = useState('');

    const addAuthor = () => {
        if (authorName.trim() !== '') {
            setAuthors([...authors, authorName]);
            setAuthorName('');
        }
    };

    const deleteAuthor = (name) => {
        setAuthors(authors.filter(author => author !== name));
    };

    return (
        <div>
            <h1>Author Dashboard</h1>
            <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Add new author"
            />
            <button onClick={addAuthor}>Add Author</button>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>
                        {author}
                        <button onClick={() => deleteAuthor(author)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuthorDashboard;