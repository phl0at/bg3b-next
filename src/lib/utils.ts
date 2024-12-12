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
