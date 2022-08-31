const URL = 'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'

export async function fetchData() {
  let data;
  try {   
    const resp = await fetch(URL)
    if (!resp.ok) return;
    data = await resp.json();
  } catch (error) {
    console.warn(error)
  }
  return data?.media;
}
