export function generateDescription(
  content: string | undefined | null,
  maxLength = 160
) {
  if (!content || typeof content !== "string") return "";
  return (
    content
      .replace(/[#>*_`]/g, "")
      .replace(/\n+/g, " ")
      .trim()
      .slice(0, maxLength)
      .replace(/\s+\S*$/, "") + "..."
  );
}
