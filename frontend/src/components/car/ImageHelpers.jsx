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
    fmts.small?.url || fmts.medium?.url || fmts.large?.url || fa.url || ""
  );
};

export const normalizeCarData = (arr) =>
  (arr || []).map((item) => {
    const attrs = item?.attributes ? item.attributes : item || {};

    let mediaNode = attrs?.[IMAGE_FIELD];

    if (mediaNode && mediaNode.data) {
      mediaNode = mediaNode.data;
    }

    const files = Array.isArray(mediaNode)
      ? mediaNode
      : mediaNode && typeof mediaNode === "object"
      ? [mediaNode]
      : [];

    const imageUrls = files
      .filter((f) => f)
      .map(pickBestUrl)
      .filter(Boolean)
      .filter((url, index, self) => self.indexOf(url) === index);

    return {
      id: item?.id,
      documentId: item?.documentId,
      ...attrs,
      imageUrls,
      imageUrl: imageUrls[0] || "",
    };
  });
