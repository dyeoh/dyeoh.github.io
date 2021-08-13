import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Darren Yeoh | Developer (WIP)</title>
      <h1 style={headingStyles}>
        This is still a work in progress
        <br />
        <Link to="/resume">
          <span style={headingAccentStyles}>
            — click here to get to a printable version of my resume!{" "}
          </span>
        </Link>
      </h1>
    </main>
  );
};

export default IndexPage;
