import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M3.291 14.588c-.493-1.055-.364-2.361.427-3.296l6.154-7.276a2.803 2.803 0 0 1 3.085-.857L3.291 14.588zM9 17a2 2 0 1 0-.001 3.999A2 2 0 0 0 9 17zM20.998 5.301a1.254 1.254 0 0 0-.412-.872l-1.192-1.068a.753.753 0 0 0-1.091.091.824.824 0 0 0 .077 1.132l.942.841-1.57 1.825-3.346-3.071-9.961 11.777 1.75 1.606c.503-1.113 1.582-1.889 2.841-1.889 1.02 0 1.918.514 2.493 1.298l9.157-10.748c.219-.255.33-.582.312-.922z" /></svg>;
  }

}