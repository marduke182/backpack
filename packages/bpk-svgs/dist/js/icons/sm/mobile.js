import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M13 1H5c-.5 0-1 .4-1 1v14c0 .5.5 1 1 1h8c.5 0 1-.5 1-1V2c0-.6-.5-1-1-1zm-1 15H6v-1h6v1zm.6-2H5.4c-.2 0-.4-.2-.4-.4V2.4c0-.3.2-.4.4-.4h7.2c.2 0 .4.1.4.4v11.2c0 .2-.2.4-.4.4z" /></svg>;
  }

}