import videos from './videos.json';

export default function getVideos(category) {
  let filteredVideos = videos.filter(video => video.category.includes(category));
  return filteredVideos.map(video => {
    return `https://www.youtube.com/embed/${video.url}?modestbranding=1&rel=0`;
  });
}