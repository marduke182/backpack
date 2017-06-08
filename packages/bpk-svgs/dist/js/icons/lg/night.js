import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M15.135 14.879c-3.029-.536-5.477-2.985-6.014-6.014-.434-2.452.33-4.728 1.796-6.362.148-.165.006-.435-.214-.407-5.056.655-8.93 5.076-8.693 10.364.228 5.086 4.443 9.301 9.529 9.53 5.288.237 9.71-3.637 10.365-8.693.028-.22-.242-.362-.407-.214-1.634 1.466-3.91 2.23-6.362 1.796z" /></svg>;
  }

}