import { Button, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import React from 'react'

const StyledReadingList = styled(List)({
    backgroundColor:'#CFFAFA',
    color:'black',
    width: 'auto',
})
function ReadingList({readingList, removeFromReadingList}) {
  return (
    <StyledReadingList>
        {readingList.map((book) => (
            <ListItem key={book.title} sx={{display:'flex', justifyContent:'space-between'}}>
                <ListItemText primary={book.title} secondary={book.author} />
                <Button variant='contained' color='secondary' onClick={()=>{removeFromReadingList(book)}} >
                    <ListItemIcon>
                        <DoNotDisturbOnIcon/>
                    </ListItemIcon>  
                    Remove                      
                </Button>
            </ListItem>
        ))}
    </StyledReadingList>
  )
}

export default ReadingList