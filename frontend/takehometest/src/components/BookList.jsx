import { Box, List, ListItemIcon, styled } from '@mui/material'
import React from 'react'
const StyledBookList = styled(List)({
    backgroundColor:'#5ACCCC',
    color:'black',
    width: 'auto',
})
function BookList({books, addBookToReadingList}) {
  return (
    <Box flex={6} p={4}>
        <StyledBookList>
            {books.map((book) => (
                <ListItem key={book.title} sx={{display: 'flex', justifyContent:'space-between'}} component="div" disablePadding>
                    <ListItemText primary={book.title} secondary={book.author} />
                    <Button variant='contained' color='primary' onClick={()=>addBookToReadingList(book)}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        Add to reading List.
                    </Button>
                </ListItem>
            ))}
        </StyledBookList>
    </Box>
  )
}

export default BookList