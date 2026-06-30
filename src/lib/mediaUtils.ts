import type { MediaItem } from "../data/content";

export function extractYouTubeId(url: string): string {
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short) return short[1];
  const watch = url.match(/[?&]v=([^?&]+)/);
  if (watch) return watch[1];
  const embed = url.match(/embed\/([^?&]+)/);
  if (embed) return embed[1];
  return "";
}

export function extractDriveId(url: string): string {
  const match = url.match(/\/d\/([^/]+)/);
  return match ? match[1] : "";
}

export function driveThumbnail(url: string, size = 1200): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

export function youtubeThumbnail(url: string): string {
  const id = extractYouTubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function driveStreamUrl(url: string): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

export function instagramEmbedUrl(permalink: string): string {
  const base = permalink.split("?")[0].replace(/\/$/, "");
  return `${base}/embed`;
}

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
    disablekb: "1",
    fs: "0",
  });
  return `https://www.youtube.com/embed/${id}?${params}`;
}

export function driveEmbedUrl(url: string): string {
  const id = extractDriveId(url);
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function isInstagramReel(item: MediaItem): boolean {
  return item.kind === "instagram" && item.permalink.includes("/reel/");
}

export function isPortraitMedia(item: MediaItem): boolean {
  return isInstagramReel(item);
}

export function isPlayableMedia(item: MediaItem): boolean {
  return (
    item.kind === "youtube" ||
    isInstagramReel(item) ||
    (item.kind === "drive" && item.previewType === "video")
  );
}

/** Visual poster for collage cells — never shows player chrome. */
export function mediaPosterUrl(item: MediaItem): string | null {
  switch (item.kind) {
    case "image":
      return item.src;
    case "youtube":
      return youtubeThumbnail(item.url);
    case "drive":
      return driveThumbnail(item.url);
    case "instagram":
      return null;
    default:
      return null;
  }
}

/** Grid span classes for collage rhythm based on position + count. */
export function mediaCaption(item: MediaItem): string {
  switch (item.kind) {
    case "image":
      return item.alt;
    case "youtube":
    case "drive":
    case "instagram":
      return item.caption ?? "";
    default:
      return "";
  }
}

export function toLightboxItem(item: MediaItem) {
  switch (item.kind) {
    case "image":
      return { type: "image" as const, src: item.src, alt: item.alt };
    case "youtube":
      return {
        type: "youtube" as const,
        url: item.url,
        caption: item.caption,
      };
    case "drive":
      return {
        type: "drive" as const,
        url: item.url,
        caption: item.caption,
      };
    case "instagram":
      return {
        type: "instagram" as const,
        permalink: item.permalink,
        caption: item.caption,
      };
  }
}