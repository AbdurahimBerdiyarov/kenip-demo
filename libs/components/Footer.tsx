//@ts-nocheck
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import useDeviceDetect from "../hooks/useDeviceDetect";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import { Stack, Box } from "@mui/material";
// import moment from "moment";

const Footer = () => {
  const device = useDeviceDetect();

  if (device == "mobile") {
    return (
      <Stack className={"footer-container"}>
        <Stack className={"main"}>
          <Stack className={"left"}>
            <Box component={"div"} className={"footer-box"}>
              <img src="/img/logo/logo.svg" alt="" className={"logo"} />
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <span>total free customer care</span>
              <p>+82 10 4867 2909</p>
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <span>nee live</span>
              <p>+82 10 4867 2909</p>
              <span>Support?</span>
            </Box>
            <Box component={"div"} className={"footer-box"}></Box>
          </Stack>
          <Stack className={"right"}>
            <Box component={"div"} className={"bottom"}>
              <div>
                <strong>Popular Search</strong>
                <span>Property for Rent</span>
                <span>Property Low to hide</span>
              </div>
              <div>
                <strong>Quick Links</strong>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
                <span>Pricing Plans</span>
                <span>Our Services</span>
                <span>Contact Support</span>
                <span>FAQs</span>
              </div>
              <div>
                <strong>Discover</strong>
                <span>Seoul</span>
                <span>Gyeongido</span>
                <span>Busan</span>
                <span>Jejudo</span>
              </div>
            </Box>
          </Stack>
        </Stack>
        <Stack className={"second"}>
          {/* <span>
            © HomeZone - All rights reserved. HomeZone {moment().year()}
          </span> */}
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack className={"footer-container"}>
        <Stack className={"main"}>
          <Stack className={"left"}>
            <Box
              style={{ display: "flex" }}
              component={"div"}
              className={"footer-bo"}
            >
              <img src="/img/logo/logo.svg" alt="" className={"logo"} />

              <Box component={"div"} className={"footer-box"}>
                <span style={{ marginBottom: "33px" }}>
                  개인정보처리방침{" "}
                  <span style={{ margin: "0px 7px 0px 7px" }}> ㅣ </span> 서비스
                  이용약관
                </span>
              </Box>
            </Box>
            <Box component={"div"} className={"footer-box"}>
              <p style={{ marginBottom: "17px" }}>여객항공탄소중립서비스</p>
            </Box>
            <Box component={"div"} className={"footer-boxx"}>
              <span style={{ fontSize: "14px" }}>
                서울특별시 탄소구 중립동 항공로 123
              </span>
              <span style={{ margin: "0px 24px 0px 24px", fontSize: "14px" }}>
                02-1234-5678
              </span>
              <span style={{ fontSize: "14px" }}>email@email.com</span>
            </Box>
            <Stack className={"second"}>
              <span style={{ marginTop: "20px" }}>
                c 여객항공 탄소중립 서비스. ALL RIGHTS RESERVED
              </span>
            </Stack>
          </Stack>
          <Stack className={"right"}>
            <Box component={"div"} className={"top"}>
              <div>
                <p>
                  <AppleIcon style={{ fontSize: "19px" }} />
                </p>
                <span>APP Store</span>
              </div>
              <div>
                <p>
                  <ShopIcon style={{ fontSize: "19px" }} />
                </p>
                <span>Google Play</span>
              </div>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    );
  }
};

export default Footer;
