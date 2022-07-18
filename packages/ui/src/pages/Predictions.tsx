import * as React from "react";
import { NavLink } from "react-router-dom";
import { usePredictionsQuery } from "data";
import { PredictionTile } from "components";

type Props = {
  filter: "latest" | "pending" | "true" | "false";
};

export const Predictions: React.FC<Props> = ({ filter }) => {
  const filters = () => {
    switch (filter) {
      case "pending":
        return {};
      case "true":
        return {
          status: { eq: "validated" },
        };
      case "false":
        return {
          status: { eq: "falsified" },
        };
      default:
        return {};
    }
  };
  const { loading, data } = usePredictionsQuery({
    variables: {
      sort: ["tweet.twitter_created_at:desc"],
      filters: filters(),
    },
  });
  return loading ? (
    <strong>Loading</strong>
  ) : (
    <>
      <ul style={{ listStyle: "none" }}>
        <li style={{ display: "inline" }}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "yellow" } : {}
            }
          >
            Latest
          </NavLink>
        </li>
        <li style={{ display: "inline" }}>
          {" "}
          |{" "}
          <NavLink
            to="/pending"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "yellow" } : {}
            }
          >
            Pending
          </NavLink>
        </li>
        <li style={{ display: "inline" }}>
          {" "}
          |{" "}
          <NavLink
            to="/true"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "yellow" } : {}
            }
          >
            True
          </NavLink>
        </li>
        <li style={{ display: "inline" }}>
          {" "}
          |{" "}
          <NavLink
            to="/false"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "yellow" } : {}
            }
          >
            False
          </NavLink>
        </li>
      </ul>
      <hr />
      <ul>
        {data?.predictions?.data.map((p) => (
          <PredictionTile
            prediction={p}
            key={p.attributes?.tweet?.twitter_id}
          />
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
