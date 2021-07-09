type State = "init" | "play" | "pause" | "end"

export let state: State = "init"

const state$ = document.getElementById("state") as HTMLDivElement

export const setState = (nextState: State) => {
  state = nextState
  state$.innerText = state
}
