const url = process.env.API_URL;
const key = process.env.API_KEY;

export async function getStaticData() {
  return {
    origins: await getOrigins(),
    races: await getRaces(),
    backgrounds: await getBackgrounds(),
    classes: await getClasses(),
    cantrips: await getCantrips(),
  };
}
export async function getOrigins() {
  const res = await fetch(`${url}/rest/origins`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

export async function getRaces() {
  const res = await fetch(`${url}/rest/races`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

export async function getBackgrounds() {
  const res = await fetch(`${url}/rest/backgrounds`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

export async function getClasses() {
  const res = await fetch(`${url}/rest/classes`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}

export async function getCantrips() {
  const res = await fetch(`${url}/rest/cantrips`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}
