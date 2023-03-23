// camera stream video element
  let on_stream_video = document.querySelector('#camera-stream');
  // flip button element
 // let flipBtn = document.querySelector('#flip-btn');
  let start_video = document.querySelector('#start-video');
  // default user media options
  let constraints = { audio: false, video: true }
  let shouldFaceUser = true;

  // check whether we can use facingMode
  // let supports = navigator.mediaDevices.getSupportedConstraints();
  // if( supports['facingMode'] === true ) {
  //   flipBtn.disabled = false;
  // }

  let stream = null;

  function capture() {
    constraints = {
        width: {
        min: 192,
        ideal: 192,
        max: 192,
      },
      height: {
        min: 192,
        ideal: 192,
        max: 192
      },
      
    }
    navigator.mediaDevices.getUserMedia({video:constraints,facingMode:'environment'})
      .then(function(mediaStream) {
        stream  = mediaStream;
        on_stream_video.srcObject = stream;
        on_stream_video.play();
      })
      .catch(function(err) {
        console.log(err)
      });
  }
start_video.addEventListener('click', function(){
   capture();
})
  // flipBtn.addEventListener('click', function(){
  //   if( stream == null ) return
  //   // we need to flip, stop everything
  //   stream.getTracks().forEach(t => {
  //     t.stop();
  //   });
  //   // toggle / flip
  //   shouldFaceUser = !shouldFaceUser;
  //   capture();
  // })

 // capture();

 