const url = process.env.API_URL;
const key = process.env.API_KEY;

export async function getData(path: string) {
  const res = await fetch(`${url}/rest/${path}`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

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
      break;
    }
  }
}

export function parseMods(item: SomeItem) {
  const set = item.modifiers?.includes("=");
  const add = item.modifiers?.includes("+");

  if (set) {
    return `Sets ${item.modifiers?.split("=")[0]} to ${
      item.modifiers?.split("=")[1]
    }`;
  } else if (add) {
    const type = item.modifiers?.split("&*&")[1];
    return `Adds ${item.modifiers?.split("&*&")[0].split("+")[1]} ${
      type || "Physical"
    } damage`;
  } else {
    return null;
  }
}
