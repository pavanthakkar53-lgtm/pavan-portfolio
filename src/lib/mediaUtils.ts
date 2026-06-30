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
export function driveThumbnail(url: string, size = 1600): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

/** Standard YouTube thumbnail, no API key needed. */
export function youtubeThumbnail(url: string): string {
  const id = extractYouTubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/** Instagram official embed iframe URL (portrait reel/post). */
export function instagramEmbedUrl(permalink: string): string {
  const base = permalink.split("?")[0].replace(/\/$/, "");
  return `${base}/embed`;
}

/** YouTube embed — muted autoplay loop for inline tiles. */
export function youtubeEmbedUrl(url: string): string {
  const id = extractYouTubeId(url);
  if (!id) return "";
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    showinfo: "0",
    iv_load_policy: "3",
  });
  return `https://www.youtube.com/embed/${id}?${params}`;
}

/** Google Drive preview embed. */
export function driveEmbedUrl(url: string): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/file/d/${id}/preview`;
}