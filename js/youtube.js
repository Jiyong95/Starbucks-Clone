// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
// youtube js api
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 여기서 쓰이는 함수, 변수는 youtube js api에서 가져온 것
function onYouTubeIframeAPIReady() {
	// <div id="player"></div>
	new YT.Player('player', {
		// youtube영상 url에보면 ID있음  ?v={id}
		videoId: 'twLc_bxqnBY',
		playerVars: {
			autoplay: true, //자동 재생
			loop: true, //반복 재생 -> playlist필수
			playlist: 'twLc_bxqnBY' //반복 재생할 유튜브 영상 ID
		},
		events: {
			onReady: (event) => {
				event.target.mute(); // 영상 음소거
			}
		}
	});
}
