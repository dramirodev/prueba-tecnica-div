import { useCallback, useState } from "react";
import useGetPeople from "../../api/hooks/useGetPeople.js";
import { PEOPLE_API_URL } from "../../api/people.js";

export function usePeople() {
  const [url, setUrl] = useState(`${PEOPLE_API_URL}?page=1`);

  const { data, isLoading } = useGetPeople(url);

  const goNextPage = useCallback(() => {
    setUrl(data.next);
  }, [data]);

  const goPrevPage = useCallback(() => {
    setUrl(data.previous);
  }, [data]);

  return {
    loading: isLoading,
    people: data?.results || [],
    goNextPage,
    goPrevPage,
    totalPages: data?.count,
    hasPrevPage: !data?.previous,
    hasNextPage: !data?.next,
  };
}
