/** Pulls the video ID out of any common YouTube URL shape. */
export function extractYouTubeId(url: string): string {
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short) return short[1];
  const watch = url.match(/[?&]v=([^?&]+)/);
  if (watch) return watch[1];
  const embed = url.match(/embed\/([^?&]+)/);
  if (embed) return embed[1];
  return "";
}

/** Pulls the file ID out of a Google Drive /file/d/ID/view URL. */
export function extractDriveId(url: string): string {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : "";
}

/** Drive's thumbnail endpoint — works for files shared as "anyone with the link". */
export function driveThumbnail(url: string, size = 1000): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

/** Standard YouTube thumbnail, no API key needed. */
export function youtubeThumbnail(url: string): string {
  const id = extractYouTubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
