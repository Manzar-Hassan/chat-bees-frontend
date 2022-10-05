import React from "react";
import { StyledText } from "../../styles/StyledComponents";

const MsgLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledText sx={{ fontSize: "2rem" }}>Please wait...</StyledText>
    </div>
  );
};

export default MsgLoader;
