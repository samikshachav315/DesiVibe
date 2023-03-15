import {Stack, Box, Button} from '@testing-library/react'
import { useContext } from 'react'
import { UserContext } from '../Context'
 export default function Pagination({productFiltered}){
   
  
  const {product, currentPage, SetCurrentPage}=useContext(UserContext)
  const totalPages=Math.ceil((productFiltered.length>0?productFiltered:product).length/4)
  
  
  function handlePage(arg){
    const newCurrent=currentPage+arg
    if (newCurrent<1){return}
    if(newCurrent>totalPages) {return}
    SetCurrentPage(newCurrent)
  }
  
    return(
    <Stack  paddingTop='20px' justifyContent='center' width='100%' fontWeight='700' color='teal'  direction='row' cursor='pointer' spacing={4} alignItems='center' >
      <Button width='80px' onClick={()=>handlePage(-1) } colorScheme='teal' size='sm' variant='solid' borderWidth='2px' borderRadius='9999'>Previous</Button>
        <Box >
          <span style={{textDecoration:'underline'}} >{currentPage}</span> of {totalPages} pages
        </Box>
      <Button width='80px' onClick={()=>handlePage(+1)} colorScheme='teal' size='sm' variant='solid' borderWidth='2px' borderRadius='9999'>Next</Button>
    </Stack>
  )
}