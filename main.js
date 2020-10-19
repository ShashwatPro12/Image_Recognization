Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');

camera = document.getElementById("camera");
function take_snapshot(){

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';      
    });

}
 console.log('ml5 version: ', ml5.version)

 function modelLoaded() {
    console.log('Model Loaded!');
  }

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HtivojzrF/model.json',modelLoaded);

function check()
{
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}


function gotResult(error, result){
    if(error){
        console.error(error);
    } 
    else{
        console.log(result);
    } 

    document.getElementById('result_object_name').innerHTML = result[0].label;
    document.getElementById('result_object_accuracy').innerHTML = result[0].confidence.toFixed(4);
}