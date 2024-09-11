import React, { useCallback, useEffect, useRef, useState } from "react";
import { Stack, Box, Modal, Divider, Button } from "@mui/material";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import { propertySquare, propertyYears } from "../../config";
// import { PropertyLocation, PropertyType } from "../../enums/property.enum";
// import { PropertiesInquiry } from "../../types/property/property.input";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "auto",
//   bgcolor: "background.paper",
//   borderRadius: "12px",
//   outline: "none",
//   boxShadow: 24,
// };

const Header = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <div>HEADER FILTER MOBILE</div>;
  } else {
    return (
      <>
        <div>
          Headerl
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sit magnam accusantium voluptatibus cupiditate est harum vel neque
            saepe, labore quos, voluptate vero qui nam esse maxime modi
            doloremque aperiam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati sit magnam accusantium voluptatibus
            cupiditate est harum vel neque saepe, labore quos, voluptate vero
            qui nam esse maxime modi doloremque aperiam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Obcaecati sit magnam accusantium
            voluptatibus cupiditate est harum vel neque saepe, labore quos,
            voluptate vero qui nam esse maxime modi doloremque aperiam.
          </p>
        </div>
      </>
    );
  }
};

export default Header;
