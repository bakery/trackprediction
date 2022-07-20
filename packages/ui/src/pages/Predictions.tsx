import * as React from "react";
import { usePredictionsQuery } from "data";
import { PredictionTile } from "components";
import { Stack, StackDivider } from "@chakra-ui/react";

type Props = {
  filter: "latest" | "pending" | "true" | "false";
};

export const Predictions: React.FC<Props> = ({ filter }) => {
  const filters = () => {
    switch (filter) {
      case "pending":
        return {
          status: { eq: "pending" },
        };
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
    <Stack divider={<StackDivider />} spacing="4">
      {data?.predictions?.data.map((p) => (
        <PredictionTile prediction={p} key={p.attributes?.tweet?.twitter_id} />
      ))}
    </Stack>
  );
};

/* {<strong>Total: {data?.predictions?.meta.pagination.total}</strong>}
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
      } */
