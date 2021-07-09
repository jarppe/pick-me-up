import { state, setState } from "./state"
import { enqueue, play, pause } from "./play"


console.log("Here we go again...")


const playBtn = document.getElementById("play") as HTMLButtonElement
playBtn.addEventListener("click", async () => {
  switch (state) {
    case "init":
      setState("playing")
      await enqueue("clip-1.aac")
      await enqueue("clip-2.aac")
      await enqueue("clip-3.aac")
      setState("ended")
      break
    case "paused":
      await play()
      setState("playing")
      break
  }
})

const pauseBtn = document.getElementById("pause") as HTMLButtonElement
pauseBtn.addEventListener("click", async () => {
  switch (state) {
    case "playing":
      pause()
      setState("paused")
      break
  }
})

console.log("Ready")
