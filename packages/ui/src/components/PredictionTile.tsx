import * as React from "react";
import { PredictionDataFragment } from "data";

type Props = {
  prediction: PredictionDataFragment;
};

export const PredictionTile: React.FC<Props> = ({ prediction }) => {
  const p = prediction.attributes;
  return p ? (
    <>
      {p.tweet.author.profile_image_url ? (
        <img alt={p.tweet.author.name} src={p.tweet.author.profile_image_url} />
      ) : null}
      <strong>
        {p.tweet.author.name} (@{p.tweet.author.username})
      </strong>
      <p>
        <span style={{ backgroundColor: "yellow", color: "black" }}>
          {p.status}
        </span>{" "}
        {p.tweet.text}
      </p>
      <hr />
    </>
  ) : null;
};
