const audio$ = new Audio()

audio$.addEventListener("canplaythrough", () => audio$.play())

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
