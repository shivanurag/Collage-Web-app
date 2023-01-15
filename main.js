var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:1000
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    


}

setTimeout (function()
 {
    Webcam.attach(camera);

    img_id="img1";
    take_snapshot();
    speak_data= "Taking your selfie in 5 seconnds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);

    
    img_id="img2";
    take_snapshot();
    speak_data= "Taking your selfie in 5 seconnds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);

    
    img_id="img3";
    take_snapshot();
    speak_data= "Taking your selfie in 5 seconnds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);
 },5000)

 function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });

    
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });

    
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
