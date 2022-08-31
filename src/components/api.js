const URL = 'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'

export async function fetchData() {
  try {   
    const resp = await fetch(URL)
    if (!resp.ok) return;
    const data = await resp.json();
    return data.media;
  } catch (error) {
    console.warn(error)
  }
}
