let clickButton = document.querySelector('.click-button');
let flashLight = document.querySelector('.light');
let canvas = document.querySelector("#canvas")
let context = canvas.getContext('2d')
let video = document.querySelector("video")
let polaroid = document.querySelector('.polaroid')
let img = document.querySelector('img')
let dataUrl = canvas.toDataURL();
let shadow = document.querySelector("#shadow")

function converetCanvastoImage(c){
    src = c.toDataURL('image/jpeg');
    return src
}

const clickFunction = () =>{
    console.log('hey')
    img.classList.add('none')
    img.classList.remove('metrix')
    shadow.classList.add('none')
    if(flashLight.classList.contains("none")){
        context.drawImage(video, 0, 0, 640, 480)
        flashLight.classList.remove("none") 
        img.src =  converetCanvastoImage(canvas)
        setTimeout(() => {      
            img.classList.remove("none")
    } , 500)

        setTimeout(() => {
            img.classList.add('metrix')
            shadow.classList.remove('none')
        }, 6000)
 }
}

addDisplayNone = () => {
    setTimeout(() => {
            flashLight.classList.add('none')
    }, 500)
}

clickButton.addEventListener('click', function(){
    clickFunction();
    addDisplayNone()
})

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        video.srcObject = stream
        video.play()
    })
}
