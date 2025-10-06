import { API_BASE, IMAGE_FIELD } from "./Constans";

export const toAbsolute = (maybeUrl) =>
  maybeUrl && !maybeUrl.startsWith("http")
    ? `${API_BASE}${maybeUrl}`
    : maybeUrl || "";

export const getFileAttrs = (f) => (f && f.attributes ? f.attributes : f || {});

export const pickBestUrl = (file) => {
  const fa = getFileAttrs(file);
  const fmts = fa.formats || {};
  return toAbsolute(
    fmts.thumbnail?.url ||
      fmts.small?.url ||
      fmts.medium?.url ||
      fmts.large?.url ||
      fa.url ||
      ""
  );
};

export const normalizeCarData = (arr) =>
  (arr || []).map((item) => {
    const attrs = item?.attributes ? item.attributes : item || {};

    // Handle Strapi v5 media field structure
    let mediaNode = attrs?.[IMAGE_FIELD];

    // If it's wrapped in { data: [...] }, unwrap it
    if (mediaNode && mediaNode.data) {
      mediaNode = mediaNode.data;
    }

    // Ensure it's an array
    const files = Array.isArray(mediaNode)
      ? mediaNode
      : mediaNode && typeof mediaNode === "object"
      ? [mediaNode]
      : [];

    // Get unique URLs - pickBestUrl returns ONE url per file
    const imageUrls = files
      .map(pickBestUrl)
      .filter(Boolean) // Remove empty strings
      .filter((url, index, self) => self.indexOf(url) === index); // Remove duplicates

    return {
      id: item?.id,
      documentId: item?.documentId, // ADD documentId here!
      ...attrs,
      imageUrls,
      imageUrl: imageUrls[0] || "",
    };
  });
