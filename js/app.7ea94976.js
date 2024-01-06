(function(){"use strict";var t={4513:function(t,e,l){l.d(e,{h:function(){return ae}});var s=l(1020),n={getPlaylists:t=>t.playlists,getFirstPlaylist:t=>t.playlists[0].playlist,getCurrentVideo:t=>t.currentVideo,getVideoById:t=>e=>0===t.currentPlaylist.length?{}:t.currentPlaylist.find((t=>t.videoId===e)),getCurrentIndex:t=>t.currentPlaylist.indexOf(t.currentVideo),getVideoByIndex:t=>e=>t.currentPlaylist[e]};const i={syncPlaylist(t=0){if(0!==this.playlists.length){if(this.currentPlaylist=[...this.playlists[t].playlist],!this.currentVideo.videoId){const t=o(0,this.currentPlaylist.length);this.changeVideoByIndex(t)}}else console.warn("no playlists ):")},setCurrentPlaylist(t){this.currentPlaylist=t},setPlaylists(t){this.playlists=t},clearPlaylist(){this.currentPlaylist=[]},shuffleCurrentPlaylist(){const t=this.currentVideo;if(this.currentPlaylist=a(this.currentPlaylist),0===t.name.length)return;const e=this.currentPlaylist.indexOf(t),l=this.currentPlaylist[0];this.currentPlaylist[0]=this.currentPlaylist[e],this.currentPlaylist[e]=l,this.changeVideoByIndex()},changeVideoByIndex(t=0){0!==this.currentPlaylist.length?t<this.currentPlaylist.length?this.currentVideo=this.currentPlaylist[t]:this.currentVideo=this.currentPlaylist[0]:console.warn("out of songs!")},changeCurrentVideoByVideo(t){t&&0!==Object.keys(t).length||console.warn("no video provided"),this.currentVideo=t},removeVideoByVideoId(t){const e=this.currentPlaylist.find((e=>e.videoId===t)),l=this.currentPlaylist.indexOf(e);l>=0&&this.currentPlaylist.splice(l,1)},removePlaylistById(t){this.playlists.splice(t,1)},addVideoToEnd(t){const e={...t};this.currentPlaylist=[...this.currentPlaylist,e]},addVideoToFirst(t){this.currentPlaylist=[t,...this.currentPlaylist]},loadPlaylistWithPayload(t){t.items.forEach((t=>{const e=this.currentPlaylist.some((e=>e.videoId===t.contentDetails.videoId));if(!e){const e={videoId:t.contentDetails.videoId,name:t.snippet.title};"Private video"!==e.name&&"Deleted video"!==e.name&&this.addVideoToEnd(e)}}))},loadPlaylist(t){this.currentPlaylist=[...this.playlists[t].playlist]},updatePlaylistInfo(t,e){this.playlists[t].name=e},addPlaylist(t){const e={name:t,playlist:[...this.currentPlaylist]};this.playlists=[...this.playlists,e]}};function o(t=0,e){return e||console.warn("max warning"),Math.floor(Math.random()*(e-t)+t)}function a(t){const e=[...t];for(let l=e.length-1;l>0;l--){const t=Math.floor(Math.random()*(l+1)),s=e[t];e[t]=e[l],e[l]=s}return e}const r={playlists:[{name:"Welcome",playlist:[{videoId:"KSbxm6wMcDI",name:"My Way"},{videoId:"G3qQtf7jahE",name:"Comedy"},{videoId:"yox2Yz4Ni2o",name:"If I Am With You"},{videoId:"nQJEp-k-ogs",name:"pov"},{videoId:"djc0YkawULk",name:"Let You Go"},{videoId:"AANdt8yJYck",name:"Worry"},{videoId:"WOcQiDaBodw",name:"Daisies"}]}],currentPlaylist:[],currentVideo:{videoId:"",name:""}},d=(0,s.Q_)("playlist",{state:()=>r,getters:n,actions:i}),u={toggleAutopause(){this.autopause=!this.autopause}},c={autopause:!0,devMode:!1},y=(0,s.Q_)("settings",{state:()=>c,actions:u});var p={install:(t,e)=>{const l=d(),s=y(),n={playlist:l,setting:s};n.playlist.$subscribe(((t,e)=>{const l=e.currentPlaylist;0!==l.length&&localStorage.setItem("currentPlaylist",JSON.stringify(l));const s=e.playlists;0!==s.length&&localStorage.setItem("playlists",JSON.stringify(s))})),t.config.globalProperties.$store=n}},h=l(9242),m=(l(9773),l(8727)),f=l(5619),v=l(8600),P=l(3396),w=l(7139);const g={class:"app",id:"app"},I={class:"youtube-app-container"};function C(t,e,l,s,n,i){const o=(0,P.up)("youtube-controller"),a=(0,P.up)("v-switch"),r=(0,P.up)("youtube-video"),d=(0,P.up)("current-playlist-menu"),u=(0,P.up)("playlists-menu");return(0,P.wg)(),(0,P.iD)("div",g,[(0,P._)("div",I,[(0,P.Wm)(o,{class:"controller"}),(0,P.Wm)(a,{class:(0,w.C_)(["switch-style",{activated:n.isCurrentPlaylistOn}]),modelValue:n.isCurrentPlaylistOn,"onUpdate:modelValue":e[0]||(e[0]=t=>n.isCurrentPlaylistOn=t),label:n.isCurrentPlaylistOn?"Current Playlist Display: On":"Current Playlist Display: Off"},null,8,["modelValue","label","class"]),(0,P.Wm)(a,{class:(0,w.C_)(["switch-style",{activated:n.isPlaylistsMenuOn}]),modelValue:n.isPlaylistsMenuOn,"onUpdate:modelValue":e[1]||(e[1]=t=>n.isPlaylistsMenuOn=t),label:n.isPlaylistsMenuOn?"Saved Playlist Display: On":"Saved Playlist Display: Off"},null,8,["modelValue","label","class"]),(0,P._)("h3",null,"Current Video: "+(0,w.zw)(t.currentVideo.name),1),(0,P.Wm)(r,{class:"video",videoId:i.videoId},null,8,["videoId"]),(0,P.Wm)(d,{isCurrentPlaylistOn:n.isCurrentPlaylistOn},null,8,["isCurrentPlaylistOn"]),(0,P.Wm)(u,{isPlaylistsMenuOn:n.isPlaylistsMenuOn},null,8,["isPlaylistsMenuOn"])])])}const V=t=>((0,P.dD)("data-v-c792f7be"),t=t(),(0,P.Cn)(),t),b={class:"youtube-player",tabindex:"-1"},_=V((()=>(0,P._)("div",{id:"player",tabindex:"-1"},null,-1))),O=[_];function k(t,e,l,s,n,i){return(0,P.wg)(),(0,P.iD)("div",b,O)}function D(t){const e={name:t.items[0].snippet.title,videoId:t.items[0].id};ae.playlist.changeCurrentVideoByVideo(e)}function A(t){const e=t.items[0].id,l={name:t.items[0].snippet.title,videoId:e},s=ae.playlist.getVideoById(e);s&&Object.keys(s).length?console.warn("Duplicate video!"):ae.playlist.addVideoToEnd(l)}function E(){if(!ae.playlist.currentPlaylist.length)return void console.warn("empty playlist");const t=-1===ae.playlist.getCurrentIndex?0:ae.playlist.getCurrentIndex,e=ae.playlist.getCurrentVideo,l=ae.playlist.getVideoByIndex(t);e.videoId!==l.videoId?ae.playlist.changeVideoByIndex(t):ae.playlist.changeVideoByIndex(t+1)}function M(){if(!ae.playlist.currentPlaylist.length)return void console.warn("empty playlist");if(1===!ae.playlist.currentPlaylist.length)return void console.warn("only one video in playlist");const t=ae.playlist.getCurrentIndex;0!==t&&ae.playlist.changeVideoByIndex(t-1)}const S={GOOGLE_ERROR:"GOOGLE ERROR",INVALID:"INVALID",VALID:"VALID"},W=50,x="",L=11,U="www.",B="https://",Y="queue",T="play_next",N="play_now",R="play_previous",$="load_playlist",j={QUEUE:Y,PLAY_NEXT:T,PLAY_NOW:N,LOAD_PLAYLIST:$,PLAY_PREVIOUS:R},G={[j.PLAY_NOW]:D,[j.PLAY_NEXT]:E,[j.PLAY_PREVIOUS]:M,[j.QUEUE]:A},z="yox2Yz4Ni2o";var J={name:"YoutubeVideo",data(){return{player:null}},computed:{...(0,s.rn)(y,["autopause"]),isYoutubePlayerInstalled(){return window.YT&&window.YT.loaded}},props:{videoId:{type:String,default:""}},mounted(){this.loadYoutubePlayer(),addEventListener("resize",(()=>{this.player.setSize(.75*self.innerWidth,.75*self.innerHeight)}))},methods:{loadYouTubeAPI(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},loadYoutubePlayer(){this.isYoutubePlayerInstalled||this.loadYouTubeAPI();const t=this.videoId||z;window.onYouTubeIframeAPIReady=()=>{const e={height:.75*self.innerHeight,width:.75*self.innerWidth,videoId:t,playerVars:{controls:1,rel:0,autoplay:this.autopause?0:1,origin:"https://www.youtube.com"},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange,onApiChange:this.onApiChange}};this.player=new YT.Player("player",e)}},onPlayerStateChange(t){0===t.data&&(console.warn("Video Ended"),G[j.PLAY_NEXT]())},onPlayerReady(){console.log("Player Ready")},onVideoIdChange(){this.player||this.loadYoutubePlayer(),this.autopause?this.player.cueVideoById(this.videoId):this.player.loadVideoById(this.videoId)}},watch:{videoId(){this.onVideoIdChange()}}},Q=l(89);const Z=(0,Q.Z)(J,[["render",k],["__scopeId","data-v-c792f7be"]]);var q=Z;const X={class:"youtube-configurator"},H={class:"input-container"},F={class:"controller-buttons"},K={class:"play-buttons"};function tt(t,e,l,s,n,i){const o=(0,P.up)("v-text-field"),a=(0,P.up)("v-btn"),r=(0,P.up)("v-switch");return(0,P.wg)(),(0,P.iD)("div",X,[(0,P._)("div",H,[(0,P.Wm)(o,{class:"input-style",modelValue:n.userInput,"onUpdate:modelValue":e[0]||(e[0]=t=>n.userInput=t),label:"Enter URL or video ID",onKeyup:e[1]||(e[1]=(0,h.D2)((t=>i.processAction(n.controllerOptions.PLAY_NOW)),["enter"])),color:"purple",clearable:"","hide-details":"auto"},null,8,["modelValue"]),(0,P._)("div",F,[(0,P.Wm)(a,{class:"add-style btn-style",onClick:e[2]||(e[2]=t=>i.processAction(n.controllerOptions.PLAY_NOW))},{default:(0,P.w5)((()=>[(0,P.Uk)("Play now")])),_:1}),(0,P.Wm)(a,{class:"add-style btn-style",onClick:i.onLoadPlaylist},{default:(0,P.w5)((()=>[(0,P.Uk)("Load Playlist")])),_:1},8,["onClick"]),(0,P.Wm)(a,{class:"add-style btn-style",onClick:e[3]||(e[3]=t=>i.processAction(n.controllerOptions.QUEUE))},{default:(0,P.w5)((()=>[(0,P.Uk)("Queue Song")])),_:1})])]),(0,P.Wm)(r,{class:(0,w.C_)(["switch-style",{activated:t.autopause}]),modelValue:t.autopause,"onUpdate:modelValue":e[4]||(e[4]=e=>t.autopause=e),label:t.autopause?"Autopause On":"Autopause Off",onClick:i.onSwitchClick},null,8,["modelValue","label","class","onClick"]),t.devMode?((0,P.wg)(),(0,P.j4)(a,{key:0,class:"btn-style",onClick:i.onSyncPlaylist},{default:(0,P.w5)((()=>[(0,P.Uk)("Sync Playlist")])),_:1},8,["onClick"])):(0,P.kq)("",!0),(0,P._)("div",K,[(0,P.Wm)(a,{class:"btn-style",onClick:i.onGoBack,disabled:i.isCurrentPlaylistEmpty},{default:(0,P.w5)((()=>[(0,P.Uk)("Play Previous")])),_:1},8,["onClick","disabled"]),(0,P.Wm)(a,{class:"btn-style",onClick:i.onPlayNext,disabled:i.isCurrentPlaylistEmpty},{default:(0,P.w5)((()=>[(0,P.Uk)("Play Next")])),_:1},8,["onClick","disabled"])])])}var et=l(165),lt=l(3104),st=l(5101);function nt(t){if(dt(t))return x;if(!ut(t))return t.length===L?t:x;const e=rt(t).then((t=>t)).catch((t=>{console.error(t)}));if(!e)return x;const l=at(t);return l}function it(t){if(dt(t))return x;if(!ut(t))return t.length>25?t:x;const e=rt(t).then((t=>t)).catch((t=>{console.error(t)}));if(!e)return x;const l=ot(t);return l}function ot(t){let e=t;e.includes(U)||(e=U+e),e.includes(B)||(e=B+e);const l=new URL(e).searchParams,s=l.get("list");return s}function at(t){let e=t;e.includes(U)||(e=U+e),e.includes(B)||(e=B+e);const l=new URL(e).searchParams,s=l.get("v");return s}async function rt(t){try{const e=t.includes(U)?t.indexOf(U)+U.length:0;let l=t.substring(e,t.indexOf("/",e));const s=["youtube.com","m.youtube.com","youtu.be"];l.includes(B)||(l=B+l);const n=new URL(l),i=n.hostname;let o=!1;return s.every((t=>{if(i===t)return o=!0,!1})),o}catch(e){return!1}}function dt(t){return t.includes(".ca")||t.includes(".net")||t.includes(".gg")||t.includes(".txt")||t.includes(".gov")||t.includes(".io")||t.includes(".org")||t.includes(".us")}function ut(t){return t.includes(".com")||t.includes(".be")}const ct="AIzaSyDC5m0zYh3K6erncCUBGw9AXhAAf4wV8o8";function yt(t="lxF31-mHLz0"){return new Promise((e=>{const l=t,s=new XMLHttpRequest;s.open("GET","https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id="+l+"&key="+ct,!0),s.onreadystatechange=()=>{if(s.readyState===s.DONE){const t=ht(s);e(t)}},s.send()}))}function pt(t){return new Promise((e=>{const l=t,s=new XMLHttpRequest;s.open("GET","https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId="+l+"&key="+ct+"&maxResults="+W,!0),s.onreadystatechange=()=>{if(s.readyState===s.DONE){const t=ht(s);e(t)}},s.send()}))}function ht(t){if(!t||t.status<200||t.status>=500)return S.GOOGLE_ERROR;if(400===t.status)return S.INVALID;const e=JSON.parse(t.responseText);if(e.items&&e.items.length){const t={status:S.VALID,items:e.items};return t}return{status:S.INVALID}}var mt={components:{VTextField:et.h,VSwitch:lt.G,VBtn:st.T},emits:["toggle-switch","mouseleave"],data(){return{key:0,userInput:"",controllerOptions:j}},computed:{...(0,s.rn)(y,["autopause","devMode"]),...(0,s.rn)(d,["currentPlaylist"]),hasInput(){return this.userInput&&this.userInput.replace(/\s/g,"").length},isCurrentPlaylistEmpty(){return 0===this.currentPlaylist.length}},methods:{async processAction(t){const e=this.userInput;this.userInput="";const l=await this.processVideoInput(e);l&&l.status===S.VALID&&G[t](l)},async onLoadPlaylist(){if(!this.hasInput)return void console.warn("no input");const t=this.userInput;this.userInput="";const e=this.processPlaylistInput(t),l=await pt(e);l.status===S.VALID&&this.$store.playlist.loadPlaylistWithPayload(l)},onSyncPlaylist(){this.$store.playlist.syncPlaylist()},onPlayNext(){G[j.PLAY_NEXT]()},onGoBack(){G[j.PLAY_PREVIOUS]()},processPlaylistInput(t){const e=it(t);return e||(console.warn("INVALID INPUT"),null)},async processVideoInput(t){const e=nt(t);if(!e)return console.warn("improper videoId"),null;const l=await yt(e);return l},onSwitchClick(){this.$store.setting.toggleAutopause()}}};const ft=(0,Q.Z)(mt,[["render",tt],["__scopeId","data-v-a84bec68"]]);var vt=ft;function Pt(t,e,l,s,n,i){const o=(0,P.up)("v-btn"),a=(0,P.up)("song-list"),r=(0,P.up)("v-navigation-drawer"),d=(0,P.up)("playlist-editor"),u=(0,P.up)("v-layout");return(0,P.wg)(),(0,P.j4)(u,null,{default:(0,P.w5)((()=>[(0,P.Wm)(r,{class:"drawer-style",modelValue:n.drawer,"onUpdate:modelValue":e[0]||(e[0]=t=>n.drawer=t),location:"left","disable-resize-watcher":"",width:"380"},{default:(0,P.w5)((()=>[(0,P.Wm)(o,{class:"btn-style",onClick:i.onClearPlaylist},{default:(0,P.w5)((()=>[(0,P.Uk)("Clear")])),_:1},8,["onClick"]),(0,P.Wm)(o,{class:"btn-style",onClick:i.onShufflePlaylist,disabled:i.isCurrentPlaylistEmpty},{default:(0,P.w5)((()=>[(0,P.Uk)("Shuffle")])),_:1},8,["onClick","disabled"]),(0,P.Wm)(o,{class:"btn-style",onClick:i.onSavePlaylist,disabled:i.isCurrentPlaylistEmpty},{default:(0,P.w5)((()=>[(0,P.Uk)("Save")])),_:1},8,["onClick","disabled"]),(0,P.Wm)(a)])),_:1},8,["modelValue"]),(0,P.Wm)(d,{showModal:n.showAddModal,onOnCloseModal:i.onCloseModal},null,8,["showModal","onOnCloseModal"])])),_:1})}var wt=l(9657),gt=l(4454),It=l(1489);const Ct={class:"song-list"},Vt={class:"songs"},bt={class:"song"},_t={class:"controls"};function Ot(t,e,l,s,n,i){const o=(0,P.up)("v-divider"),a=(0,P.up)("v-chip"),r=(0,P.up)("v-btn");return(0,P.wg)(),(0,P.iD)("div",Ct,[((0,P.wg)(!0),(0,P.iD)(P.HY,null,(0,P.Ko)(t.currentPlaylist,((e,l)=>((0,P.wg)(),(0,P.iD)("div",Vt,[(0,P._)("div",bt,[0!==l?((0,P.wg)(),(0,P.j4)(o,{key:0})):(0,P.kq)("",!0),(0,P._)("div",{class:(0,w.C_)(["name",{current:t.currentVideo.videoId===e.videoId}])},(0,w.zw)(e.name),3)]),(0,P._)("div",_t,[(0,P.Wm)(a,{onClick:t=>i.onDelete(e),color:"red"},{default:(0,P.w5)((()=>[(0,P.Uk)("X")])),_:2},1032,["onClick"]),(0,P.Wm)(r,{class:"btn-style",onClick:t=>i.onPlay(e)},{default:(0,P.w5)((()=>[(0,P.Uk)("Play")])),_:2},1032,["onClick"])])])))),256))])}var kt=l(4075),Dt=l(1037),At={components:{VDivider:kt.J,VBtn:st.T,VChip:Dt.v},computed:{...(0,s.rn)(d,["currentPlaylist","currentVideo","currentPlaylist"])},methods:{onDelete(t){this.$store.playlist.removeVideoByVideoId(t.videoId)},onPlay(t){this.$store.playlist.changeCurrentVideoByVideo(t)}}};const Et=(0,Q.Z)(At,[["render",Ot],["__scopeId","data-v-d2dbeb6e"]]);var Mt=Et;const St={class:"playlist-editor"};function Wt(t,e,l,s,n,i){const o=(0,P.up)("v-text-field"),a=(0,P.up)("v-btn"),r=(0,P.up)("v-card-actions"),d=(0,P.up)("v-card"),u=(0,P.up)("v-dialog"),c=(0,P.up)("v-card-text");return(0,P.wg)(),(0,P.iD)("div",St,[(0,P.Wm)(u,{width:"500",modelValue:n.isActive,"onUpdate:modelValue":e[1]||(e[1]=t=>n.isActive=t)},{default:(0,P.w5)((()=>[(0,P.Wm)(d,{title:"Edit Playlist"},{default:(0,P.w5)((()=>[(0,P.Wm)(o,{label:"Name",modelValue:n.name,"onUpdate:modelValue":e[0]||(e[0]=t=>n.name=t)},null,8,["modelValue"]),(0,P.Wm)(r,null,{default:(0,P.w5)((()=>[l.editMode?((0,P.wg)(),(0,P.j4)(a,{key:0,text:"Delete",color:"red",onClick:i.onDelete},null,8,["onClick"])):(0,P.kq)("",!0),(0,P.Wm)(a,{text:i.confirmString,color:"blue",onClick:i.onUpdate,disabled:i.isEmptyString},null,8,["text","onClick","disabled"]),(0,P.Wm)(a,{text:"Close",onClick:i.onClose},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,P.Wm)(u,{width:"500",modelValue:n.showConfirmDelete,"onUpdate:modelValue":e[2]||(e[2]=t=>n.showConfirmDelete=t)},{default:(0,P.w5)((()=>[(0,P.Wm)(d,{title:"Confirm Delete"},{default:(0,P.w5)((()=>[(0,P.Wm)(c,null,{default:(0,P.w5)((()=>[(0,P.Uk)("Are you sure you want to delete this playlist?")])),_:1}),(0,P.Wm)(r,null,{default:(0,P.w5)((()=>[(0,P.Wm)(a,{text:"Delete",onClick:i.onConfirmDelete,color:"red"},null,8,["onClick"]),(0,P.Wm)(a,{text:"Cancel",onClick:i.onCancelDelete},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var xt=l(3601),Lt=l(1888),Ut=l(1334),Bt={emits:["on-close-modal"],components:{VDialog:xt.B,VCard:It._,VBtn:st.T,VCardText:Lt.Z,VCardActions:Ut.h,VTextField:et.h},data(){return{isActive:this.showModal,name:"",showConfirmDelete:!1}},props:{editMode:{type:Boolean,default:!1},showModal:{type:Boolean,default:!1},playlistId:{type:Number,default:null}},computed:{selectedPlaylist(){return this.$store.playlist.playlists[this.playlistId]},confirmString(){return this.editMode?"Update":"Add"},isEmptyString(){return 0===this.name.length}},methods:{onClose(){this.$emit("on-close-modal")},onDelete(){this.showConfirmDelete=!0},onConfirmDelete(){this.showConfirmDelete=!1,this.$store.playlist.removePlaylistById(this.playlistId),this.$emit("on-close-modal")},onCancelDelete(){this.showConfirmDelete=!1},onUpdate(){this.isEmptyString||(this.editMode?this.$store.playlist.updatePlaylistInfo(this.playlistId,this.name):this.$store.playlist.addPlaylist(this.name),this.name="",this.$emit("on-close-modal"))}},watch:{showModal(){this.isActive=this.showModal}}};const Yt=(0,Q.Z)(Bt,[["render",Wt]]);var Tt=Yt,Nt={components:{VNavigationDrawer:wt.V,VLayout:gt.s,SongList:Mt,VCard:It._,VBtn:st.T,PlaylistEditor:Tt},data(){return{drawer:this.isCurrentPlaylistOn,showAddModal:!1}},props:{isCurrentPlaylistOn:{type:Boolean,default:!1}},computed:{isCurrentPlaylistEmpty(){return 0===this.$store.playlist.currentPlaylist.length}},methods:{onClearPlaylist(){this.$store.playlist.clearPlaylist(),sessionStorage.removeItem("currentPlaylist")},onShufflePlaylist(){this.$store.playlist.shuffleCurrentPlaylist()},onSavePlaylist(){this.showAddModal=!0},onCloseModal(){this.showAddModal=!1}},watch:{isCurrentPlaylistOn(){this.drawer=this.isCurrentPlaylistOn}}};const Rt=(0,Q.Z)(Nt,[["render",Pt],["__scopeId","data-v-63092686"]]);var $t=Rt;function jt(t,e,l,s,n,i){const o=(0,P.up)("playlist-list"),a=(0,P.up)("v-navigation-drawer"),r=(0,P.up)("v-layout");return(0,P.wg)(),(0,P.j4)(r,null,{default:(0,P.w5)((()=>[(0,P.Wm)(a,{class:"drawer-style",modelValue:n.drawer,"onUpdate:modelValue":e[0]||(e[0]=t=>n.drawer=t),location:"right","disable-resize-watcher":"",width:"380"},{default:(0,P.w5)((()=>[(0,P.Wm)(o)])),_:1},8,["modelValue"])])),_:1})}const Gt={class:"playlist-list"},zt={class:"playlists"},Jt={class:"name"},Qt={class:"controls"};function Zt(t,e,l,s,n,i){const o=(0,P.up)("v-divider"),a=(0,P.up)("v-chip"),r=(0,P.up)("v-btn"),d=(0,P.up)("playlist-editor");return(0,P.wg)(),(0,P.iD)("div",Gt,[((0,P.wg)(!0),(0,P.iD)(P.HY,null,(0,P.Ko)(t.playlists,((t,e)=>((0,P.wg)(),(0,P.iD)("div",zt,[(0,P._)("div",Jt,[0!==e?((0,P.wg)(),(0,P.j4)(o,{key:0})):(0,P.kq)("",!0),(0,P._)("h3",null,(0,w.zw)(t.name),1)]),(0,P._)("div",Qt,[(0,P.Wm)(a,{onClick:t=>i.onEdit(e),color:"red"},{default:(0,P.w5)((()=>[(0,P.Uk)("Edit")])),_:2},1032,["onClick"]),(0,P.Wm)(r,{class:"btn-style",onClick:t=>i.onLoad(e)},{default:(0,P.w5)((()=>[(0,P.Uk)("Load")])),_:2},1032,["onClick"])])])))),256)),(0,P.Wm)(d,{showModal:n.showEditModal,editMode:!0,playlistId:n.selectedPlaylistId,onOnCloseModal:i.onCloseModal},null,8,["showModal","playlistId","onOnCloseModal"])])}var qt={components:{VDivider:kt.J,VBtn:st.T,VChip:Dt.v,PlaylistEditor:Tt},data(){return{showEditModal:!1,selectedPlaylistId:null}},computed:{...(0,s.rn)(d,["playlists"])},methods:{onEdit(t){this.selectedPlaylistId=t,this.showEditModal=!0},onLoad(t){this.$store.playlist.loadPlaylist(t)},onCloseModal(){this.showEditModal=!1}}};const Xt=(0,Q.Z)(qt,[["render",Zt],["__scopeId","data-v-578164a0"]]);var Ht=Xt,Ft={components:{VNavigationDrawer:wt.V,VLayout:gt.s,VCard:It._,VBtn:st.T,PlaylistList:Ht},data(){return{drawer:this.isPlaylistsMenuOn}},props:{isPlaylistsMenuOn:{type:Boolean,default:!1}},methods:{},watch:{isPlaylistsMenuOn(){this.drawer=!this.drawer}}};const Kt=(0,Q.Z)(Ft,[["render",jt],["__scopeId","data-v-0b56dfbe"]]);var te=Kt,ee={name:"App",components:{YoutubeVideo:q,YoutubeController:vt,VSwitch:lt.G,CurrentPlaylistMenu:$t,PlaylistsMenu:te},data(){return{isDebuggerOn:!1,isCurrentPlaylistOn:!1,isPlaylistsMenuOn:!1}},computed:{...(0,s.rn)(d,["currentVideo"])},mounted(){const t=JSON.parse(localStorage.getItem("currentPlaylist"));t&&this.$store.playlist.setCurrentPlaylist(t);const e=JSON.parse(localStorage.getItem("playlists"));e&&this.$store.playlist.setPlaylists(e)},methods:{onSubmit(t){const e=videoIdParser(t);fetchVideoInformation(e).then((t=>{t===YOUTUBE_API_CODES.VALID&&(this.onValidIdSubmission(),this.videoId=e)}))}},computed:{...(0,s.rn)(d,["currentVideo"]),videoId(){return this.currentVideo.videoId}}};const le=(0,Q.Z)(ee,[["render",C],["__scopeId","data-v-d476d476"]]);var se=le;const ne=(0,h.ri)(se),ie=(0,s.WB)(),oe=(0,m.Rd)({vuetifyComponents:f,vuetifyDirectives:v});ne.use(ie),ne.use(p),ne.use(oe),ne.mount("#app");const ae=ne.config.globalProperties.$store}},e={};function l(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,l),i.exports}l.m=t,function(){var t=[];l.O=function(e,s,n,i){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var a=!0,r=0;r<s.length;r++)(!1&i||o>=i)&&Object.keys(l.O).every((function(t){return l.O[t](s[r])}))?s.splice(r--,1):(a=!1,i<o&&(o=i));if(a){t.splice(u--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var s in e)l.o(e,s)&&!l.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};l.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,o=s[0],a=s[1],r=s[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(r)var u=r(l)}for(e&&e(s);d<o.length;d++)i=o[d],l.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return l.O(u)},s=self["webpackChunkthe_center"]=self["webpackChunkthe_center"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(4513)}));s=l.O(s)})();
//# sourceMappingURL=app.7ea94976.js.map