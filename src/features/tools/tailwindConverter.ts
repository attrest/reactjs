function inferCssFromTailwindClass(twClass: string): string {
  type BaseStyle = {
    [key: string]: string;
  };

  type Side = {
    [key: string]: string;
  };

  const baseStyles: BaseStyle = {
    m: "margin",
    p: "padding",
    rounded: "border-radius",
    border: "border-width",
  };

  let cssProperty: string = "";
  let value: string = "";

  // Split class by hyphens to analyze
  const parts: string[] = twClass.split("-");
  const base: string = parts[0];

  // Infer CSS property
  if (base in baseStyles) {
    cssProperty = baseStyles[base];

    // Tailwind uses 't', 'r', 'b', 'l' for directional properties
    const sides: Side = { t: "top", r: "right", b: "bottom", l: "left" };
    if (parts.length > 1 && parts[1] in sides) {
      cssProperty += `-${sides[parts[1]]}`;
    }

    // Infer value
    if (parts[0] === "rounded") {
      // Example: rounded-lg => larger radius
      value = parts[1] === "lg" ? "0.5rem" : parts[1] === "xl" ? "1rem" : "0.25rem";
    } else if (parts[0] === "border") {
      // Border width, example: border-2 => 2px
      value = parts.length > 1 ? `${parts[1]}px` : "1px";
    } else {
      // Margins and paddings, example: m-2 => 0.5rem
      const size: number = parseInt(parts[1], 10);
      value = isNaN(size) ? "" : `${size * 0.25}rem`;
    }
  }

  return cssProperty && value ? `${cssProperty}: ${value};` : "";
}

export function generateStylesFromTailwindClasses(tailwindClassesString: string): string {
  const tailwindClasses = tailwindClassesString.split(" ");
  return tailwindClasses
    .map((twClass) => {
      const cssCode: string = inferCssFromTailwindClass(twClass);
      return cssCode ? `.${twClass} { ${cssCode} }` : `/* Could not infer CSS for: .${twClass} */`;
    })
    .join("\n");
}
