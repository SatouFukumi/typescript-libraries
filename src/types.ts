declare global {
  namespace F {
    namespace Libs {
      interface FCursor {
        positionX: Px
        positionY: Px
        deltaX: Px
        deltaY: Px
        watch(alwaysOn?: boolean): void
        stop(): void
      }
    }
  }

  type MilliSec = number
  type Px = number
}

export default F
