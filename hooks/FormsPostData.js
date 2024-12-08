import { useDispatch, useSelector } from "react-redux";
import { toggleScreenLoading } from "../store/slices/appSlice";
import axios from "axios";

export const useFormRequests = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.AppStateReducer.token);

    const executeRequest = async ({ method, url, data }) => {
        const requestHeader = {
            headers: {
                Authorization: `Token ${token}`,
            },
        };

        dispatch(toggleScreenLoading(true));

        try {
            const response = await axios({
                method,
                url,
                data,
                headers: method === "GET" ? undefined : requestHeader,
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(`Request error: ${error.message}`);
        } finally {
            dispatch(toggleScreenLoading(false));
        }
    };

    const post = async ({ url, data }) => {
        return executeRequest({ method: "POST", url, data });
    };

    const put = async ({ url, data }) => {
        return executeRequest({ method: "PUT", url, data });
    };



    return { post, put };
};
