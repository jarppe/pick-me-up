import { state, setState } from "./state"
import { enqueue, play, pause } from "./play"


console.log("Here we go again...")


const playBtn = document.getElementById("play") as HTMLButtonElement
playBtn.addEventListener("click", async () => {
  switch (state) {
    case "init":
      setState("play")
      await enqueue("clip-1.aac")
      await enqueue("clip-2.aac")
      await enqueue("clip-3.aac")
      setState("end")
      break
    case "play":
      break
    case "pause":
      await play()
      setState("play")
      break
    case "end":
      break
  }
})

const pauseBtn = document.getElementById("pause") as HTMLButtonElement
pauseBtn.addEventListener("click", async () => {
  switch (state) {
    case "init":
      break
    case "play":
      pause()
      setState("pause")
      break
    case "pause":
      break
    case "end":
      break
  }
})

console.log("Ready")
