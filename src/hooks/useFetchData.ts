import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (endpoint: string) => {
  const response = await axios.get(`http://localhost:3001/${endpoint}`);
  return response.data;
};

export function useFetchData(endpoint: string) {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData(endpoint),
    refetchOnWindowFocus: false,
  });
  return query;
}
