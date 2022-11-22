type Px = number

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
}

export default F
