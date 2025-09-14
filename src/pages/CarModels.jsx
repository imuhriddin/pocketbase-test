import CarModelsTable from "../components/CarModelsTable";
import { useGetCarModelsQuery } from "../services/carModelsApi"

function CarModels() {
  const { data, error, isLoading } = useGetCarModelsQuery();

  if (isLoading) return <p>Yuklanmoqda...</p>
  if (error) return <p>Xatolik keldi</p>

  console.log("carmodel: ", data);
  return (
    <div className='px-4'>
      <CarModelsTable carModels={data} />
    </div>
  )
}

export default CarModels