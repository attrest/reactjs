// Tailwind to CSS
export const tailwindToCss = (array: any[], tailwindClasses: string): { [key: string]: string[] } => {
  const classesArray = tailwindClasses.split(" ");
  const cssStrings: string[] = [];
  const tailwindRefUrls: string[] = [];

  classesArray.forEach((cls) => {
    const tailwindInfo = getValueByKey(array, cls);
    console.log("tailwindInfo => ", tailwindInfo, cls);

    // text-[..] 형태의 스타일 검사
    const regex = /(text|m(?:l|r|t|b)?|p(?:l|r|t|b)?|t|l|r|b|leading)-\[(\d+(?:\.\d+)?(?:px|em|rem|vw|vh|%)?)\]/;
    let match = cls.match(regex);
    if (tailwindInfo.length === 0 && match) {
      const twProp = match[1];
      const twSize = match[2]; // match 배열의 두 번째 요소에는 숫자와 단위가 포함된 부분이 저장
      const cssPropConverter = (_prop: string) => {
        if (_prop === "text") return "font-size";
        if (_prop === "m") return "margin";
        if (_prop === "mt") return "margin-top";
        if (_prop === "ml") return "margin-left";
        if (_prop === "mr") return "margin-right";
        if (_prop === "mb") return "margin-bottom";
        if (_prop === "p") return "padding";
        if (_prop === "pt") return "padding-top";
        if (_prop === "pl") return "padding-left";
        if (_prop === "pr") return "padding-right";
        if (_prop === "pb") return "padding-bottom";
        if (_prop === "t") return "top";
        if (_prop === "l") return "left";
        if (_prop === "r") return "right";
        if (_prop === "b") return "bottom";
        if (_prop === "leading") return "line-height";
      };
      cls = `${cssPropConverter(twProp)}: ${twSize};`;
    }

    const isMatchingWord = tailwindInfo.length > 0 || (tailwindInfo.length === 0 && match);
    const cssEquivalent = isMatchingWord ? `${match ? cls : tailwindInfo[0]}` : `/* No direct match for ${cls} */`;
    cssStrings.push(cssEquivalent.trim());
    tailwindRefUrls.push(tailwindInfo.length > 0 ? tailwindInfo[1] : "/* No ref */");
  });

  return {
    css: cssStrings,
    ref: tailwindRefUrls,
  };
};

// CSS to Tailwind
export const cssToTailwind = (array: any[], css: string): { [key: string]: string[] } => {
  const rules = css
    .split("\n")
    .map((rule) => rule.trim())
    .filter((rule) => rule);
  const tailwindClasses: string[] = [];
  const tailwindRefUrls: string[] = [];

  rules.forEach((rule) => {
    // This is a simplified approach; you might need to parse CSS more effectively.
    const tailwindInfo = getKeyByValue(array, rule);

    // {size-prop}: .. 형태의 스타일 검사
    const regex =
      /(font-size|margin(?:-left|-right|-top|-bottom)?|padding(?:-left|-right|-top|-bottom)?|top|left|right|bottom|line-height)\s*:\s*(\d+(?:\.\d+)?(?:px|em|rem|vw|vh|%)?);/;
    let match = rule.match(regex);
    if (tailwindInfo.length === 0 && match) {
      const clsProp = match[1];
      const clsSize = match[2]; // match 배열의 두 번째 요소에는 숫자와 단위가 포함된 부분이 저장
      const twPropConverter = (_prop: string) => {
        if (_prop === "font-size") return "text";
        if (_prop === "margin") return "m";
        if (_prop === "margin-top") return "mt";
        if (_prop === "margin-left") return "ml";
        if (_prop === "margin-right") return "mr";
        if (_prop === "margin-bottom") return "mb";
        if (_prop === "padding") return "p";
        if (_prop === "padding-top") return "pt";
        if (_prop === "padding-left") return "pl";
        if (_prop === "padding-right") return "pr";
        if (_prop === "padding-bottom") return "pb";
        if (_prop === "top") return "t";
        if (_prop === "left") return "l";
        if (_prop === "right") return "r";
        if (_prop === "bottom") return "b";
        if (_prop === "line-height") return "leading";
      };
      rule = `${twPropConverter(clsProp)}-[${clsSize}]`;
    }

    const isMatchingWord = tailwindInfo.length > 0 || (tailwindInfo.length === 0 && match);
    const tailwindClass = isMatchingWord ? `${match ? rule : tailwindInfo[0]}` : `/* No direct match for ${rule} */`;

    tailwindClasses.push(tailwindClass.trim());
    tailwindRefUrls.push(tailwindInfo.length > 0 ? tailwindInfo[1] : "/* No ref */");
  });

  return {
    class: tailwindClasses,
    ref: tailwindRefUrls,
  };
};

// Json 배열에서 일치하는 키 찾기
function getValueByKey(arr: any[], key: string): string[] {
  for (const obj of arr) {
    if (key in obj) {
      return [obj[key], obj["ref"]];
    }
  }
  return []; // 해당 키를 찾을 수 없는 경우
}

// Json 배열에서 일치하는 밸류 찾기
function getKeyByValue(arr: { [key: string]: string }[], targetValue: string): string[] {
  const keyArr: string[] = [];
  arr.filter((obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === targetValue) {
        keyArr.push(key);
        keyArr.push(obj["ref"]);
      }
    }
  });
  return keyArr;
}
