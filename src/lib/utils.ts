
export function addCantripPoints(_class: string, level: number) {
  switch (_class) {
    case "Bard": {
      if (level === 1) {
        return 2;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    case "Cleric": {
      if (level === 1) {
        return 3;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    case "Druid": {
      if (level === 1) {
        return 2;
      } else if (level === 4 || level === 10) {
        return 1;
      } else {
        return 0;
      }
    }
    default: {
      return 0;
    }
  }
}

export function parseMods(item: SomeItem) {
  if (!item) return ""
  const set = item.modifiers?.includes("=");
  const add = item.modifiers?.includes("+");

  if (set) {
    return `Sets ${item.modifiers?.split("=")[0]} to ${item.modifiers?.split("=")[1]
      }`;
  } else if (add) {
    const type = item.modifiers?.split("&*&")[1];
    return `Adds ${item.modifiers?.split("&*&")[0].split("+")[1]} ${type || "Physical"
      } damage`;
  } else {
    return '';
  }
}


export function mergeSequences(arr: number[]) {
  const numbers = [...arr];
  const result = [];
  let start = 0;

  while (start < numbers.length) {
    let end = start;

    while (end + 1 < numbers.length && numbers[end + 1] === numbers[end] + 1) {
      end++;
    }

    if (end - start >= 2) {
      result.push(`${numbers[start]}-${numbers[end]}`);
    } else {
      for (let i = start; i <= end; i++) {
        result.push(numbers[i].toString());
      }
    }
    start = end + 1;
  }

  return result.join(', ');
}


export function sortClasses(classes: Class[]): Class[] {

  if (classes.length <= 1) return classes;

  const pivot = classes.pop() as Class;
  const left = [] as Class[];
  const right = [] as Class[];

  for (const _class of classes) {
    _class.order < pivot.order ? left.push(_class) : right.push(_class);
  }

  return [...sortClasses(left), pivot, ...sortClasses(right)];
}