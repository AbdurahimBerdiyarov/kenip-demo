// import React from "react";
// import useDeviceDetect from "../../hooks/useDeviceDetect";
// import { Stack } from "@mui/material";
// import { Bolt } from "@mui/icons-material";

// const Navbar = () => {
//   const device = useDeviceDetect();

//   if (device == "mobile") {
//     return (
//       <Stack className={"card-frame"}>
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         >
//           <source src="/video/770fps.mp4" type="video/mp4" />
//         </video>
//       </Stack>
//     );
//   } else {
//     return (
//       <Stack className={"card-frame"}>
//         <div>
//           <span
//             style={{ fontSize: "32px", color: "green", fontWeight: "bold" }}
//           >
//             단 1분,
//           </span>
//           <span
//             style={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
//           >
//             수하물 정보 공유로
//           </span>
//           <p
//             style={{
//               fontSize: "32px",
//               color: "white",
//               fontWeight: "bold",
//               marginTop: "10px",
//             }}
//           >
//             기후변화 대응에 동참하고 보상을 지급받으세요.
//           </p>
//         </div>
//         {/* <div className="process-container">
//         <div className="process-step">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png" alt="항공권 촬영">
//             <p>항공권 촬영</p>
//         </div>
//         <div className="arrow">➔</div>
//         <div className="process-step">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/weight.png" alt="휴대중량 등록">
//             <p>휴대중량 등록</p>
//         </div>
//         <div className="arrow">➔</div>
//         <div className="process-step">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/luggage.png" alt="실행중량 측정">
//             <p>실행중량 측정</p>
//         </div>
//         <div className="arrow">➔</div>
//         <div className="process-step">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/touchscreen.png" alt="실행중량 촬영 등록">
//             <p>실행중량 촬영 등록</p>
//         </div>
//         <div className="arrow">➔</div>
//         <div className="process-step">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/eco.png" alt="탄소중립 실천량">
//             <p>탄소중립 실천량</p>
//         </div> */}

//         {/* <div style={styles.container}>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Airplane Ticket"
//               style={styles.icon}
//             />
//             <p>항공권 촬영</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Weight Registration"
//               style={styles.icon}
//             />
//             <p>휴대중량 등록</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Weight Measurement"
//               style={styles.icon}
//             />
//             <p>실행중량 측정</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Photo Registration"
//               style={styles.icon}
//             />
//             <p>실행중량 촬영 등록</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Carbon Neutrality"
//               style={styles.icon}
//             />
//             <p>탄소중립 실천량</p>
//           </div>
//         </div> */}
//         <div style={styles.container}>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Airplane Ticket"
//               style={styles.icon}
//             />
//             <p>항공권 촬영</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Weight Registration"
//               style={styles.icon}
//             />
//             <p>휴대중량 등록</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Weight Measurement"
//               style={styles.icon}
//             />
//             <p>실행중량 측정</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Photo Registration"
//               style={styles.icon}
//             />
//             <p>실행중량 촬영 등록</p>
//           </div>
//           <div style={styles.step}>
//             <img
//               src="path-to-your-icon.png"
//               alt="Carbon Neutrality"
//               style={styles.icon}
//             />
//             <p>탄소중립 실천량</p>
//           </div>
//         </div>
//       </Stack>
//     );
//   }
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "auto",
//     color: "white",
//     backgroundColor: "#121212",
//     padding: "20px",
//   },
//   step: {
//     backgroundColor: "#2c2c2c",
//     padding: "20px",
//     borderRadius: "10px",
//     textAlign: "center",
//     width: "150px",
//     position: "relative",
//   },
//   icon: {
//     width: "60px",
//     marginBottom: "10px",
//   },
// };

// export default Navbar;

import React from "react";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { Bolt } from "@mui/icons-material";

const Navbar = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return (
      <Stack className={"card-frame"}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/770fps.mp4" type="video/mp4" />
        </video>
      </Stack>
    );
  } else {
    return (
      <Stack className={"card-frame"}>
        <div>
          <span
            style={{ fontSize: "32px", color: "#96C756", fontWeight: "bold" }}
          >
            단 1분,
          </span>
          <span
            style={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
          >
            수하물 정보 공유로
          </span>
          <p
            style={{
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            기후변화 대응에 동참하고 보상을 지급받으세요.
          </p>
        </div>

        <div style={styles.container}>
          <div style={styles.step}>
            {/* <div className="icon">✈️</div> */}

            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png"
              alt="항공권 촬영"
            ></img>
            <p style={styles.card_text}>항공권 촬영</p>
          </div>
          <div style={styles.arrow}>˃</div>
          {/* <div></div> */}
          <div style={styles.step}>
            {/* <div className="icon">📱</div> */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/weight.png"
              alt="휴대중량 등록"
            ></img>
            <p style={styles.card_text}>휴대중량 등록</p>
          </div>
          <div style={styles.arrow}>˃</div>
          <div style={styles.step}>
            {/* <div className="icon">🧳</div> */}

            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png"
              alt="항공권 촬영"
            ></img>
            <p style={styles.card_text}>실행중량 측정</p>
          </div>
          <div style={styles.arrow}>˃</div>
          <div style={styles.step}>
            {/* <div className="icon">📷</div> */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png"
              alt="항공권 촬영"
            ></img>
            <p style={styles.card_text}>실행중량 촬영 등록</p>
          </div>
          <div style={styles.arrow}>˃</div>
          <div style={styles.step}>
            {/* <img
              src="path-to-your-icon.png"
              alt="Carbon Neutrality"
              style={styles.icon}
            /> */}
            {/* <div className="icon">🌍</div> */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png"
              alt="항공권 촬영"
            ></img>
            <p style={styles.card_text}>탄소중립 실천량</p>
          </div>
        </div>
      </Stack>
    );
  }
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "auto",
    color: "white",
    gap: "22px",
    marginTop: "50px",
    // border: "1px solid white",
    // backgroundColor: "#121212",
    // padding: "20px",
  },
  step: {
    // backgroundColor: "#2c2c2c",
    border: "1px solid #494848",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    width: "215px",
    height: "150px",
    position: "relative",
  },
  icon: {
    width: "90px",
    marginBottom: "50px",
  },
  card_text: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "35px",
    // color: "red",
  },
  arrow: {
    width: "40px",
    height: "40px",
    fontSize: "26px",
    marginRight: "-30px",
    marginLeft: "-30px",
    borderRadius: "50%",
    background: "#96C756",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999",
  },
};

export default Navbar;
