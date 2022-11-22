export type Px = number
export type MilliSec = number

export namespace Libs {
  export interface Cursor {
    positionX: Px
    positionY: Px
    deltaX: Px
    deltaY: Px
    watch(alwaysOn?: boolean): void
    stop(): void
  }
}

export default Libs
