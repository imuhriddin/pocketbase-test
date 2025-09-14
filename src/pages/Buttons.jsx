import React from 'react'
import StickyHeadTable from '../components/StickyHeadTable'
import EnhancedTable from '../components/EnhancedTable'
import { useGetButtonsQuery } from '../services/buttonsApi'
import ButtonsTable from '../components/ButtonsTable';

function Buttons() {

  const { data, isLoading, error } = useGetButtonsQuery();
  if (isLoading) return <p>loading...</p>
  if (error) return <p>Xatolik</p>
  return (
    <div className='px-4'>
      <ButtonsTable buttons={data} />
    </div>
  )
}

export default Buttons