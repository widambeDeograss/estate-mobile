import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleScreenLoading } from "../store/slices/appSlice";

export const useDataFetch = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.AppStateReducer.token);

    const fetchData = async ({ url }) => {
        try {
            dispatch(toggleScreenLoading());

            const requestHeader = {
                headers: {
                    Authorization: `Authorization ${token}`,
                },
            };
            const response = await axios.get(url, requestHeader);

            // Check the HTTP status code and handle accordingly
            if (response.status === 200 || response.status === 400) {
                return response.data;
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`Data fetch error: ${error.message}`);
        } finally {
            dispatch(toggleScreenLoading());
        }
    };

    return { fetchData };
};
