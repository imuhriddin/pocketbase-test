
import EnhancedTable from '../components/EnhancedTable'
import { useGetUsersQuery } from '../services/usersApi'

function Users() {
  const { data, error, isLoading } = useGetUsersQuery();
  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Xatolik</h1>;
  
  console.log("keldimi: ", data);
  return (
    <div className='px-4'>
      <EnhancedTable users={data} />
    </div>
  )
}

export default Users