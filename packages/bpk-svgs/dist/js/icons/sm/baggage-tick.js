import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M20 8h-4c0-2.2-1.8-4-4-4S8 5.8 8 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-8-2c1.103 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3.887 5.929l-4.38 5.243a.882.882 0 0 1-1.289.092l-2.06-1.85a.496.496 0 0 1-.045-.677l.6-.725a.443.443 0 0 1 .646-.047l1.234 1.096c.076.07.192.061.259-.018l3.659-4.378c.166-.2.455-.22.646-.045l.689.632a.499.499 0 0 1 .041.677z" /></svg>;
  }

}