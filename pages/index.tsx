import { NextPage } from "next";
import useDeviceDetect from "../libs/hooks/useDeviceDetect";
import withLayoutMain from "../libs/components/layout/LayoutHome";

import Navbar from "../libs/components/homepage/Navbar";
import Event from "../libs/components/homepage/Event";
import Card from "../libs/components/homepage/Card";
import { Stack } from "@mui/material";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <Stack className={"home-page"}>
        <Navbar />
        <Card />
        <Event />
      </Stack>
    );
  } else {
    return (
      <Stack className={"home-page"}>
        <Navbar />
        <Card />
        <Event />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
