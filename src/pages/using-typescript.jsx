"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// If you don't want to use TypeScript you can delete this file!
var React = require("react");
var gatsby_1 = require("gatsby");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var UsingTypescript = function (_a) {
    var data = _a.data, path = _a.path;
    return (<layout_1.default>
    <seo_1.default title="Using TypeScript"/>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <gatsby_1.Link to="/">Go back to the homepage</gatsby_1.Link>
  </layout_1.default>);
};
exports.default = UsingTypescript;
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"], ["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"])));
var templateObject_1;
