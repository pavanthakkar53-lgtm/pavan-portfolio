import { useEffect, useState } from "react";

const cache = new Map<string, string>();

export function useInstagramThumbnail(permalink: string): string | null {
  const [thumb, setThumb] = useState<string | null>(
    () => cache.get(permalink) ?? null,
  );

  useEffect(() => {
    const cached = cache.get(permalink);
    if (cached) {
      setThumb(cached);
      return;
    }

    let cancelled = false;

    fetch(
      `https://noembed.com/embed?url=${encodeURIComponent(permalink)}`,
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.thumbnail_url) return;
        cache.set(permalink, data.thumbnail_url);
        setThumb(data.thumbnail_url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [permalink]);

  return thumb;
}