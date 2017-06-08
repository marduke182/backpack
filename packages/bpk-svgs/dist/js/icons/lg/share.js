import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18 15c-.8 0-1.5.3-2.1.8l-7-3.5v-.8l7-3.5c.6.7 1.3 1 2.1 1 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3v.4L8 9.9C7.5 9.3 6.8 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2.1-.8l7 3.5v.4c0 1.7 1.3 3 3 3s3-1.3 3-3S19.7 15 18 15z" /></svg>;
  }

}