import React from "react";
import { useLocation } from "react-router-dom";
import "./ReadMore.css";
function ReadMore() {
  const location = useLocation();
  const uptext = location.state?.text;
  const updescription = location.state?.description;
  const img = location.state?.image;

  return (
    <div>
      <img src={img} className="image2" alt="" />
      <figcaption className="text1">
        {" "}
        {uptext.substring(0, 1).toUpperCase() + uptext.substring(1)}{" "}
      </figcaption>
      <div className="desc">
        {updescription.substring(0, 1).toUpperCase() +
          updescription.substring(1)}
      </div>
      <div className="padding"></div>
    </div>
  );
}

export default ReadMore;
