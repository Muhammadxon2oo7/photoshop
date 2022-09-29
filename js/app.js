//btns

const brightnessBtn=document.getElementById("brightnessBtn")
const blurBtn=document.getElementById("blurBtn")
const contrastBtn=document.getElementById("contrastBtn")
const grayscaleBtn=document.getElementById("grayscaleBtn")
const huerotateBtn=document.getElementById("hue-rotateBtn")
const invertBtn=document.getElementById("invertBtn")
const opacityBtn=document.getElementById("opacityBtn")
const saturateBtn=document.getElementById("saturateBtn")
const sepiaBtn=document.getElementById("sepiaBtn")


//tools

const brightness=document.getElementById("brightness")
const blur=document.getElementById("blur")
const contrast=document.getElementById("contrast")
const grayscale=document.getElementById("grayscale")
const huerotate=document.getElementById("hue-rotate")
const invert=document.getElementById("invert")
const opacity=document.getElementById("opacity")
const saturate=document.getElementById("saturate")
const sepia=document.getElementById("sepia")




brightnessBtn.addEventListener("click", brightnessFun)

function brightnessFun(){
    brightness.style.display='flex'
    blur.style.display='none'
    contrast.style.display='none'
    grayscale.style.display='none'
    huerotate.style.display='none'
    invert.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none'
    const brightnessForm = document.getElementById("brightnessForm")
    brightnessForm.addEventListener("submit",brightnessFormSub)
    function brightnessFormSub(e){
        e.preventDefault();
        const brightnessValue=document.getElementById("brightnessValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'brightness(' + brightnessValue.value +'%'+')'
         
    }
}




blurBtn.addEventListener("click", blurFun)

function blurFun(){
    blur.style.display='flex'   
    brightness.style.display='none'
    contrast.style.display='none'
    grayscale.style.display='none'
    huerotate.style.display='none'
    invert.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none'
    const blurForm = document.getElementById("blurForm")
    blurForm.addEventListener("submit",blurFormSub)
    function blurFormSub(e){
        e.preventDefault();
        const blurValue=document.getElementById("blurValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'blur(' + blurValue.value +'px'+')'
    }
}



contrastBtn.addEventListener("click", contrastFun)

function contrastFun(){
    contrast.style.display='flex' 
    blur.style.display='none'   
    brightness.style.display='none'
    grayscale.style.display='none'
    huerotate.style.display='none'
    invert.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none'  
    const contrastForm = document.getElementById("contrastForm")
    contrastForm.addEventListener("submit",contrastFormSub)
    function contrastFormSub(e){
        e.preventDefault();
        const contrastValue=document.getElementById("contrastValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'contrast(' + contrastValue.value +'%'+')'
    }
}



grayscaleBtn.addEventListener("click", grayscaleFun)

function grayscaleFun(){
    grayscale.style.display='flex'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    huerotate.style.display='none'
    invert.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none' 
    const grayscaleForm = document.getElementById("grayscaleForm")
    grayscaleForm.addEventListener("submit",grayscaleFormSub)
    function grayscaleFormSub(e){
        e.preventDefault();
        const grayscaleValue=document.getElementById("grayscaleValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'grayscale(' + grayscaleValue.value +'%'+')'
    }
}



huerotateBtn.addEventListener("click", huerotateFun)

function huerotateFun(){
    huerotate.style.display='flex'  
    grayscale.style.display='none'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    invert.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none'  
    const huerotateForm = document.getElementById("huerotateForm")
    huerotateForm.addEventListener("submit",huerotateFormSub)
    function huerotateFormSub(e){
        e.preventDefault();
        const huerotateValue=document.getElementById("huerotateValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'hue-rotate(' + huerotateValue.value +'deg'+')'
    }
}



invertBtn.addEventListener("click", invertFun)

function invertFun(){
    invert.style.display='flex'   
    huerotate.style.display='none'  
    grayscale.style.display='none'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    opacity.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none' 
    const invertForm = document.getElementById("invertForm")
    invertForm.addEventListener("submit",invertFormSub)
    function invertFormSub(e){
        e.preventDefault();
        const invertValue=document.getElementById("invertValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'invert(' + invertValue.value +'%'+')'
    }
}



opacityBtn.addEventListener("click", opacityFun)

function opacityFun(){
    opacity.style.display='flex' 
    invert.style.display='none'   
    huerotate.style.display='none'  
    grayscale.style.display='none'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    saturate.style.display='none'
    sepia.style.display='none' 
    const opacityForm = document.getElementById("opacityForm")
    opacityForm.addEventListener("submit",opacityFormSub)
    function opacityFormSub(e){
        e.preventDefault();
        const opacityValue=document.getElementById("opacityValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'opacity(' + opacityValue.value +'%'+')'
    }  
}



saturateBtn.addEventListener("click", saturateFun)

function saturateFun(){
    saturate.style.display='flex' 
    opacity.style.display='none' 
    invert.style.display='none'   
    huerotate.style.display='none'  
    grayscale.style.display='none'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    sepia.style.display='none'     
    const saturateForm = document.getElementById("saturateForm")
    saturateForm.addEventListener("submit",saturateFormSub)
    function saturateFormSub(e){
        e.preventDefault();
        const saturateValue=document.getElementById("saturateValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'saturate(' + saturateValue.value +')'
    }  
}



sepiaBtn.addEventListener("click", sepiaFun)

function sepiaFun(){
    sepia.style.display='flex'   
    saturate.style.display='none' 
    opacity.style.display='none' 
    invert.style.display='none'   
    huerotate.style.display='none'  
    grayscale.style.display='none'   
    contrast.style.display='none' 
    blur.style.display='none'   
    brightness.style.display='none'
    const sepiaForm = document.getElementById("sepiaForm")
    sepiaForm.addEventListener("submit",sepiaFormSub)
    function sepiaFormSub(e){
        e.preventDefault();
        const sepiaValue=document.getElementById("sepiaValue")
        const imgEl = document.getElementById("imgEl")
        imgEl.style.filter = 'sepia(' + sepiaValue.value + '%' +')'
    }  
}

