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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
import moment from "moment";
import { PredictionDataFragment, Enum_Prediction_Status } from "data";

interface TwitterElementItem {
  render(): React.ReactNode | string;
  canMerge(otherItem: TwitterElementItem): boolean;
  merge(otherItem: TwitterElementItem): TwitterElementItem;
}

class TextItem implements TwitterElementItem {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  render(): React.ReactNode {
    return (
      <Text lineHeight="6" as="span">
        {this.text}
      </Text>
    );
  }
  canMerge(otherItem: TwitterElementItem): boolean {
    return otherItem instanceof TextItem;
  }
  merge(otherItem: TwitterElementItem): TwitterElementItem {
    if (this.canMerge(otherItem)) {
      return new TextItem(`${(otherItem as TextItem).text} ${this.text}`);
    }
    return this;
  }
}

class TwitterHandleItem implements TwitterElementItem {
  handle: string;

  constructor(handle: string) {
    this.handle = handle;
  }
  render(): React.ReactNode {
    return (
      <Link color="blue.600" href={`https://twitter.com/${this.handle}`}>
        {this.handle}
      </Link>
    );
  }

  canMerge(otherItem: TwitterElementItem): boolean {
    return false;
  }
  merge(otherItem: TwitterElementItem): TwitterElementItem {
    throw new Error("Not supported");
  }
}

class TwitterLinkItem implements TwitterElementItem {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
  render(): React.ReactNode {
    return (
      <Link color="blue.600" href={this.url}>
        {this.url}
      </Link>
    );
  }

  canMerge(otherItem: TwitterElementItem): boolean {
    return false;
  }
  merge(otherItem: TwitterElementItem): TwitterElementItem {
    throw new Error("Not supported");
  }
}

const process = (t: string): TwitterElementItem[] => {
  return t
    .split(" ")
    .map((it) => {
      const isHandle = it.match(/(@[a-z0-9_-]+)/gi);
      const isLink = it.match(/https\:\/\/t\.co/gi);

      if (isHandle) {
        return new TwitterHandleItem(it);
      }

      if (isLink) {
        return new TwitterLinkItem(it);
      }

      return new TextItem(it);
    })
    .reduce<TwitterElementItem[]>((prev, it) => {
      const lastElement = prev.pop();

      if (!lastElement) {
        return [it];
      }

      if (it.canMerge(lastElement)) {
        return [...prev, it.merge(lastElement)];
      }

      return [...prev, lastElement, it];
    }, [] as TwitterElementItem[]);
};

export const TweetText = ({ text }: { text: string }) => {
  console.log(">>>>>>>>>>>>>>>>>>>", process(text));
  return (
    <Wrap spacing="1" lineHeight="5">
      {process(text).map((el) => (
        <WrapItem>{el.render()}</WrapItem>
      ))}
    </Wrap>
  );
};
