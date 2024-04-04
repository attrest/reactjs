// Tailwind to CSS
export const tailwindToCss = (array: any[], tailwindClasses: string): { [key: string]: string[] } => {
  const classesArray = tailwindClasses.split(" ");
  const cssStrings: string[] = [];
  const tailwindRefUrls: string[] = [];

  classesArray.forEach((cls) => {
    const tailwindInfo = getValueByKey(array, cls);
    console.log("tailwindInfo => ", tailwindInfo, cls);

    // text-[..] 형태의 스타일 검사
    const regex = /text-\[(\d+px)\]/; // text-[..] 매칭 검사
    let match = cls.match(regex);
    if (tailwindInfo.length === 0 && match) {
      const twSize = match[1]; // match 배열의 두 번째 요소에는 숫자와 단위가 포함된 부분이 저장
      cls = `font-size: ${twSize};`;
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

    // font-size: .. 형태의 스타일 검사
    const regex = /font-size: (\d+px);/; // font-size: .. 매칭 검사
    let match = rule.match(regex);
    if (tailwindInfo.length === 0 && match) {
      const twSize = match[1]; // match 배열의 두 번째 요소에는 숫자와 단위가 포함된 부분이 저장
      rule = `text-${twSize};`;
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
