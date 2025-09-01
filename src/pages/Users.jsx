
import EnhancedTable from '../components/EnhancedTable'
import { useGetUsersQuery } from '../services/usersApi'

function Users() {
  const { data, error, isLoading } = useGetUsersQuery();
  if (isLoading) {
    <h1>Loading...</h1>
  }

  if (error) {
    console.log("xatolik: ", error);
    <h1>Xatolik</h1>
  }
  console.log("keldimi: ", data);
  return (
    <div className='px-4'>
      <EnhancedTable />
    </div>
  )
}

export default Users