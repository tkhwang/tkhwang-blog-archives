import React from "react";
import logo from "../../../../assets/site-logo.svg"

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <img src={logo} alt={"logo"}/>
  );
}
