import * as React from "react";
import { useAllPredictionsQuery } from "data";

export const Home = () => {
  const { loading, data } = useAllPredictionsQuery();
  return loading ? (
    <strong>Loading</strong>
  ) : (
    <>
      <ul>
        {data?.predictions?.data.map((p) => (
          <li key={p.attributes?.tweet?.twitter_id}>
            {p.attributes?.status} {p.attributes?.tweet?.author?.username}
          </li>
        ))}
      </ul>
      {<strong>Total: {data?.predictions?.meta.pagination.total}</strong>}
      {<strong>Page: {data?.predictions?.meta.pagination.page}</strong>}
      {
        <strong>
          Page count: {data?.predictions?.meta.pagination.pageCount}
        </strong>
      }
      {
        <strong>
          Page size: {data?.predictions?.meta.pagination.pageSize}
        </strong>
      }
    </>
  );
};
