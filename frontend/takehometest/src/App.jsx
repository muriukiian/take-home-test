import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import React from 'react'
import ApolloProviderWrapper from './apolloClient';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
function App() {
  const {loading, error, data} = useQuery(GET_BOOKS);
  const [searchItem, setSearchItem] =useState('');
  const [readingList, setReadingList] = useState([]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const addBookToReadingList = (book) => {
    if(!readingList.some(b => b.title === book.title)) {
      setReadingList([...readingList,book]);
    }
  }

  const removeFromReadingList = (book) => {
    setReadingList(readingList.filter(b => b.title !== book.title));
  }


  return (
      <Container>
        <Typography variant='h2' gutterBottom>
          BookAssignment
        </Typography>
        <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
        <BookList books={filteredBooks} addBookToReadingList={addBookToReadingList} />
        <Typography variant='h4' gutterBottom>
          Reading List
        </Typography>
        <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
      </Container>
  )
}

export default App