import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../entities/request";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
    // eslint-disabled-next-line react-hooks/exhaustive-deps
  }, [dispatch, ...params, thunk]);

  return requestStatus;
};
