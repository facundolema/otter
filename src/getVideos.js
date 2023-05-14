import videos from './videos.json';

export default function getVideos(category) {
  let filteredVideos = videos.filter(video => video.tags.includes(category));
  return filteredVideos.map(video => {
    return {...video, url: `https://www.youtube.com/embed/${video.url}?modestbranding=1&rel=0`};
  });
}