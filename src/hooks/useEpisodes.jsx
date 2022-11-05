import { useQuery, gql } from "@apollo/client"

const EPISODES = gql`
query Results {
  episodes {
    results {
      id
      name
      episode
    }
  }
}
`

export const useEpisodes = () => {
  const { error, loading, data } = useQuery(EPISODES);

  return {
    error, 
    loading, 
    data
  }
}

