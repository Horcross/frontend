export function sleep (time: number) {
  return new Promise<void> (resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export function randomSleep (max: number = 3000) {
  return sleep(Math.random() * max)
}