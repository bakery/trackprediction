import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
import moment from "moment";
import { PredictionDataFragment, Enum_Prediction_Status } from "data";
import { TweetText } from "./TweetText";

type Props = {
  prediction: PredictionDataFragment;
};

const statusBadgeColorForStatus = (
  status: Enum_Prediction_Status
): string | undefined => {
  switch (status) {
    case Enum_Prediction_Status.Validated:
      return "green";
    case Enum_Prediction_Status.Falsified:
      return "red";
    default:
      return undefined;
  }
};

export const PredictionTile: React.FC<Props> = ({ prediction }) => {
  const p = prediction.attributes;
  return p ? (
    <Stack spacing="4">
      <Flex>
        <Avatar
          name={p.tweet.author.name}
          src={(p.tweet.author.profile_image_url || "").replace(
            /_normal/gi,
            ""
          )}
        />
        <Stack ml="2" spacing="-1">
          <Text fontWeight={"bold"}>{p.tweet.author.name}</Text>
          <Text color="gray.600">@{p.tweet.author.username}</Text>
        </Stack>
        <Box textAlign="right" flex={1}>
          <Badge colorScheme={statusBadgeColorForStatus(p.status)}>
            {p.status}
          </Badge>
        </Box>
      </Flex>
      <TweetText text={p.tweet.text} />
      <HStack color="gray.600">
        <Text>{moment(p.tweet.twitter_created_at).fromNow()}</Text>
        <Text>·</Text>
        <Link
          target="_blank"
          href={`https://twitter.com/${p.tweet.author.username}/status/${p.tweet.twitter_id}`}
        >
          See original tweet{" "}
          <Icon boxSize="3" color="gray.600" as={FaTwitter} />
        </Link>
      </HStack>
    </Stack>
  ) : null;
};
