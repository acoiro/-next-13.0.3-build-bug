function resolveNegotiateUrl(url) {
  const index = url.indexOf("?");
  let negotiateUrl = url.substring(0, index === -1 ? url.length : index);
  if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
    negotiateUrl += "/";
  }
  negotiateUrl += "negotiate";
  negotiateUrl += index === -1 ? "" : url.substring(index);
  if (negotiateUrl.indexOf("negotiateVersion") === -1) {
    negotiateUrl += index === -1 ? "?" : "&";
    negotiateUrl += "negotiateVersion=1";
  }
  return negotiateUrl;
}

export default function Home() {
  return (
    <>
      <p>
        The following line should output
        "https://example.com/negotiate?negotiateVersion=1":
      </p>
      <div>{resolveNegotiateUrl("https://example.com")}</div>
    </>
  );
}
