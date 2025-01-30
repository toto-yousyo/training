import { useParams } from 'react-router-dom'

export default function MyArticle() {
  const params = useParams();

  return (
    <div>
      <h1>No.{params.id}'s Article'</h1>
    </div>
  );
};
