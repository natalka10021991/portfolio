import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/feedback-slider";
import "./scripts/mobile-menu";
import "./scripts/feedback-form";