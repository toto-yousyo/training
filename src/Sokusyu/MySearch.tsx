import { useParams } from 'react-router-dom'

export default function MySearch() {
  const params = useParams()
  return <div> keyword is {params['*']}! </div>
}
