(()=>{var a=[],n=0;function e(a){$(".name").text(a.name),$(".singer-album").text(`${a.singer} - ${a.album}`),$(".time").text(a.time),$(".cover img").attr("src",a.cover),$("audio").attr("src",a.audio_url),$(".mask_bg").css({background:`url("${a.cover}") no-repeat center center`})}function t(a){$(".music-list").empty(),$.each(a,(function(a,e){var t=$(`\n      <li class="${a==n?"playing":""}">\n        <span>0${a+1}. ${e.name} - ${e.singer}</span>\n        <span data-index="${a}" class="fa ${a!=n||$("audio").get(0).paused?"fa-play-circle":"fa-pause-circle"} play-circle"></span>\n      </li>\n    `);$(".music-list").append(t)}))}$.ajax({type:"GET",url:"../music.json",dataType:"json",success:function(i){e((a=i)[n]),t(a)}}),$("#playBtn").on("click",(function(){$("audio").get(0).paused?($(this).removeClass("fa-play").addClass("fa-pause"),$(".player-info").animate({top:"-100%",opacity:1},"slow"),$(".cover").css({"animation-play-state":"running"}),$("audio").get(0).play()):($(this).removeClass("fa-pause").addClass("fa-play"),$(".player-info").animate({top:"0%",opacity:0},"slow"),$(".cover").css({"animation-play-state":"paused"}),$("audio").get(0).pause()),t(a)})),$("#prevBtn").on("click",(function(){n>0?n--:n=a.length-1,e(a[n]),$("#playBtn").trigger("click")})),$("#nextBtn").on("click",(function(){n<a.length-1?n++:n=0,e(a[n]),$("#playBtn").trigger("click")})),$("#openModal").on("click",(function(){$(".modal").css({display:"block"})})),$(".modal-close").on("click",(function(){$(".modal").css({display:"none"})})),$("audio").on("timeupdate",(function(){var a,n,e,t=$("audio").get(0).currentTime||0,i=$("audio").get(0).duration||0;$(".current-time").text((a=t,`${n=(n=parseInt(a/60))<10?"0"+n:n}:${e=(e=parseInt(a%60))<10?"0"+e:e}`));var s=t/i*100;$(".music_progress_line").css({width:s+"%"})})),$("audio").on("ended",(function(){$("#playBtn").removeClass("fa-pause").addClass("fa-play"),$(".cover").css({"animation-play-state":"paused"})})),$(".music-list").on("click",".play-circle",(function(){if($(this).hasClass("fa-play-circle")){var t=$(this).attr("data-index");e(a[n=t]),$("#playBtn").trigger("click")}else $("#playBtn").trigger("click")}))})();