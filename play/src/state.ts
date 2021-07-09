type State = "init" | "loading" | "stalled" | "playing" | "paused" | "ended"

export let state: State = "init"

const state$ = document.getElementById("state") as HTMLElement

export const setState = (nextState: State) => {
  state = nextState
  state$.innerText = state
}
