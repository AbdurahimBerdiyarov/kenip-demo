import React, { useEffect } from "react";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import Head from "next/head";
// import Top from "../Top";
import Footer from "../Footer";
import { Stack } from "@mui/material";
import Navbar from "../homepage/Navbar";
import Header from "../homepage/Header";
// import HeaderFilter from "../homepage/HeaderFilter";
// import { userVar } from "../../../apollo/store";
// import { useReactiveVar } from "@apollo/client";
// import { getJwtToken, updateUserInfo } from "../../auth";
// import Chat from "../Chat";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    const device = useDeviceDetect();
    // const user = useReactiveVar(userVar);

    /** LIFECYCLES **/
    // useEffect(() => {
    //   const jwt = getJwtToken();
    //   if (jwt) updateUserInfo(jwt);
    // }, []);

    /** HANDLERS **/

    if (device == "mobile") {
      return (
        <>
          <Head>
            <title>Kenip</title>
            <meta name={"title"} content={`HomeZone`} />
          </Head>
          <Stack id="mobile-wrap">
            {/* <Stack id={"top"}>
              <Top />
            </Stack> */}

            <Stack id={"main"}>
              <Component {...props} />
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>Kenip</title>
            <meta name={"title"} content={`HomeZone`} />
          </Head>
          <Stack id="pc-wrap">
            {/* <Stack id={"navbar"}>
              <Navbar />
            </Stack> */}

            <Stack className={"header-main"}>
              <Stack className={"container"}>
                <Header />
              </Stack>
            </Stack>

            <Stack id={"main"}>
              <Component {...props} />
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    }
  };
};

export default withLayoutMain;
