setTimeout (function()
{
    img_id ="selfie1";
    take_snapshot();
    speak_data="taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);


}, 5000);


