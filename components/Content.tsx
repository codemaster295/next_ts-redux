import React from "react";
import PropTypes from "prop-types";
import { htmlSerializer } from "../serializer";
import { RichText } from "prismic-reactjs";

const Content = (props) => {
  console.log(props.data, "adnwandnawd");
  return (
    <div>
      <RichText
        render={props.data.description}
        htmlSerializer={htmlSerializer}
      />
    </div>
  );
};

export default Content;
