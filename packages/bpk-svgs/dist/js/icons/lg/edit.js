import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M6.413 13.652l3.935 3.935 8.525-8.525-3.935-3.935-8.525 8.525zm8.853-6.23l-5.902 5.902a.464.464 0 0 1-.656-.656l5.902-5.902a.464.464 0 0 1 .656.656zM3.036 20.363a.459.459 0 0 0 .42.637l.181-.036 5.399-2.065-3.935-3.935-2.065 5.399zm4.203-1.848l-2.842 1.087 1.087-2.842 1.755 1.755zM20.185 7.75L16.25 3.815a2.782 2.782 0 1 1 3.935 3.935z" /></svg>;
  }

}