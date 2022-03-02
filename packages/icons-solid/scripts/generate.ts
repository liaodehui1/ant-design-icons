import * as allIconDefs from "@ant-design/icons-svg";
import { IconDefinition } from "@ant-design/icons-svg/es/types";
import * as path from "path";
import * as fs from "fs";
import { promisify } from "util";
import { template } from "lodash";

const writeFile = promisify(fs.writeFile);

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
}

async function walk<T>(
  fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>
) {
  return Promise.all(
    Object.keys(allIconDefs).map((svgIdentifier) => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[
        svgIdentifier
      ];

      return fn({ svgIdentifier, ...iconDef });
    })
  );
}

async function generateIcons() {
  const iconsDir = path.resolve(__dirname, "../src/icons");

  // check if the directory exists
  try {
    await promisify(fs.access)(iconsDir);
  } catch (error) {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = template(
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { <%= svgIdentifier %> as Base<%= svgIdentifier %> } from "@ant-design/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/es/helpers";
import { Component } from "solid-js";
import { AntdIcon, BaseAntdIconProps } from "../components/AntdIcon";

export const <%= svgIdentifier %>: Component<BaseAntdIconProps> = (props) => {
  const svgHTMLString = renderIconDefinitionToSVGElement(Base<%= svgIdentifier %>, {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" },
  });
  return (
    <AntdIcon
      svgName="<%= name %>"
      svgString={svgHTMLString}
      {...props}
    />
  );
};
`.trim()
  );

  // generate icon file
  await walk(async ({ svgIdentifier, name }) => {
    await writeFile(
      path.resolve(iconsDir, `${svgIdentifier}.tsx`),
      render({ svgIdentifier, name })
    );
  });

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .sort()
    .map(
      (svgIdentifier) =>
        `export { ${svgIdentifier} } from "./${svgIdentifier}";`
    )
    .join("\n");

  await promisify(fs.appendFile)(
    path.resolve(iconsDir, "index.tsx"),
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

${entryText}
    `.trim()
  );
}

if (process.argv[2] === "--target=icon") {
  generateIcons();
}
