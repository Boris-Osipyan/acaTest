const API_URL = `https://drive.google.com/file/d/18utirryJNnk3DytZdlGiNeYR9hYkGndm/view`;

async function getPosts() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
