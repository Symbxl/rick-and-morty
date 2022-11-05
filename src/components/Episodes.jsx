import { useEpisodes } from '../hooks/useEpisodes';
import EpCard from '../containers/EpCard';

const Episodes = () => {
  const { data, loading, error } = useEpisodes()

  if (loading) return <div>...loading</div>
  
  if (error) return <div>ERROR WHILE GETTING CHARACTERS {error.error}</div>
    
  return <EpCard episodes={data.episodes.results} />

}

export default Episodes