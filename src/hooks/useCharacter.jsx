import { useQuery, gql } from "@apollo/client"

const CHARACTERS = gql`
query {
characters {
  results {
    name
    image
    url
    location {
      name
    }
  }
}
}
`

export const useCharacters = () => {
  const { data, loading, error } = useQuery(CHARACTERS);

  return {
    data,
    loading,
    error
  }
}

