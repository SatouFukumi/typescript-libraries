export const clientSideHelpers = {
  urlExists(url: string): boolean {
      let http = new XMLHttpRequest()
      http.open("HEAD", url, false)
      http.send()
      if (http.status != 404 && http.status != 500) return true
      return false
  },

  get isMobile(): boolean {
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

      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem)
      })
  },

  get preferDarkColorScheme(): boolean {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
  },

  get preferLightColorScheme(): boolean {
      return window.matchMedia("(prefers-color-scheme: light)").matches
  },

  get preferColorScheme(): "light" | "dark" {
      return this.preferDarkColorScheme ? "dark" : "light"
  },
}

export default clientSideHelpers
