const isMobile = () => {
  if (typeof window === "undefined") return false

  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ]

  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem))
}

export default isMobile
