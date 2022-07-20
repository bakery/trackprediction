import * as React from "react";
import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "./logo.svg";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img width={30} height={30} src={logo} ref={ref} {...props} />;
});
