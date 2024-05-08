import { useQuery } from "@tanstack/react-query";
import {getPeoplePaginated} from "../people.js";

export default function useGetPeople(page) {

    console.log({page})
    return useQuery({
        queryKey: page ? ["people", page] : ["people"],
        queryFn: () => getPeoplePaginated(page),
        enabled: !!page,
    });
}
