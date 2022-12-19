export type Px = number
export type MilliSec = number

export type CursorWatcher = {
  readonly isWatching: boolean
  positionX: Px
  positionY: Px
  deltaX: Px
  deltaY: Px
  watch(alwaysOn?: boolean): void
  stop(): void
}
