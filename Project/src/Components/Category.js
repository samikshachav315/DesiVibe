import { useContext} from 'react'
import {Stack, Button} from '@testing-library/react'

import { UserContext} from '../Context'

export default function Categories(){
  const {category, setSortByCat,sortByCat}=useContext(UserContext)
  function handleSortByCat(e){
    setSortByCat(e)
  }
 
  return (
    <Stack direction='row' justifyContent='center' marginTop='30px' marginBottom='20px'>
      {category.map((item)=>
      <Button  fontWeight='500' width='200px' border='2px' colorScheme='teal'  variant={sortByCat===item.id?'solid':'outline'} key={item.id} onClick={()=>handleSortByCat(item.id)}>
        {item.name}
      </Button>)}
    </Stack>
    )
}