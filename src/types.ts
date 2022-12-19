export type Px = number
export type MilliSec = number

export type CursorWatcher = {
  positionX: Px
  positionY: Px
  deltaX: Px
  deltaY: Px
  watch(alwaysOn?: boolean): void
  stop(): void
}
