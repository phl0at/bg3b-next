const url = process.env.API_URL;
const key = process.env.API_KEY;

export async function getData(path: string) {
  const res = await fetch(`${url}/rest/${path}`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

export async function mustPickSC(_class: Class) {
  // we take in the newly added class object
  // if there is an available SC,
  // return true, otherwise return false
  //! TODO: This is called in the zustand store and cannot be awaited
  //! find an implementation that does not involve calling this helper
  //! from within the store
  if(_class.sub_class != undefined) return false

  console.log(url)
  const res = await fetch(`${url}/rest/subclasses?filter={class:${_class.id}}`, {
    headers: { "X-API-KEY": `${key}` },
  });

  console.log(res,"!!!!!!!!!!!!!!!!!!!")

  return false;
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
