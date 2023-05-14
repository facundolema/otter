import videos from './videos.json';

export default function getVideos(category) {
  if (!category) return videos.map(video => {
    return {...video, url: `https://www.youtube.com/embed/${video.url}?modestbranding=1&rel=0`};
  });
  let filteredVideos = videos.filter(video => video.tags.includes(category));
  return filteredVideos.map(video => {
    return {...video, url: `https://www.youtube.com/embed/${video.url}?modestbranding=1&rel=0`};
  });
}