// https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

export function fullScreenChange(event: any) {
  console.log('HEY')
  console.log(event)

  const fullScreenElement = document.fullscreenElement
  const fullScreenEnable = document.fullscreenEnabled

  console.log(fullScreenElement, fullScreenEnable)
  if (!fullScreenElement && fullScreenEnable) {
    pauseAndHideVideos()
  }
}


function pauseAndHideVideos() {
  for (const vidElement of document.querySelectorAll('video')) {
    vidElement.pause()
    vidElement.style.display = 'none'
  }

}

function playAndShowVideo(target: HTMLVideoElement) {
  target.style.display = 'block'
  target.play()
  target.requestFullscreen()
}

export const toggleFullscreen = (target: HTMLVideoElement) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    pauseAndHideVideos()
  } else {
    playAndShowVideo(target)
  }
};