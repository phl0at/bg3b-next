const url = process.env.API_URL;
const key = process.env.API_KEY;

export async function getData(path: string) {
  const res = await fetch(`${url}/rest/${path}`, {
    headers: { "X-API-KEY": `${key}` },
  });
  const data = await res.json();
  return data.data;
}
