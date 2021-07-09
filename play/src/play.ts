const audio$ = new Audio()

audio$.addEventListener("canplaythrough", () => audio$.play())
audio$.addEventListener("loadedmetadata", () => {
  console.log("onloadedmetadata", audio$.duration.toFixed(2))
})
audio$.addEventListener("timeupdate", () => {
  if (audio$.duration) {
    console.log("timeupdate", audio$.currentTime.toFixed(2) + " / " + audio$.duration.toFixed(2))
  }
})

export const enqueue = (clip: string) => {
  console.log("enqueue", clip)
  audio$.src = "clip/" + clip

  return new Promise<void>(resolve => {
    audio$.onended = () => resolve()
  })
}


export const play = (): Promise<void> => {
  return audio$.play()
}

export const pause = () => {
  audio$.pause()
}
