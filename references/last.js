var root;
var wscreen;
var hscreen;
var isPC;
var bgClasses;
var curIndex;

var setStatic = function () {
    // alert(342);
    root = "http://feareye.github.io/";
    wscreen = window.screen.width;
    hscreen = window.screen.height;
    isPC = 1;
    bgClasses = ["bg1","bg2","bg3","bg4"];
    curIndex = 0;
}
setStatic();

window.onload = function () {
    // alert(hscreen);


    getObjs();



    initStyles();
    initLinks();
    initEvents();
    UIReady();
}



var vhtml;
var vbody;
var vbackground;
var vleftContent;
var vrightContent;
var vcontent;
// var vbetweenContent;
var vflow1a;
var vskin;
var vmusic;
var vtr_content;
var vtextPic1a;
var vfoutyPct;
var vrestPct;
var vdetailInfo;
var vaudio;



var getObjs = function () {
    // alert(12125);

    vhtml = document.getElementsByTagName("html")[0];
    vbody = document.getElementsByTagName("body")[0];
    vbackground = document.getElementById("background");
    vleftContent = document.getElementById("leftContent");
    vrightContent = document.getElementById("rightContent");
    vcontent = document.getElementById("content");
    // vbetweenContent = document.getElementById("betweenContent");
    vflow1a = document.getElementById("flow1a");
    vskin = document.getElementById("skin");
    vmusic = document.getElementById("music");
    vtr_content = document.getElementById("tr_content");
    vtextPic1a = document.getElementById("textPic1a");
    vfoutyPct = document.getElementById("foutyPct");
    vrestPct = document.getElementById("restPct");
    vdetailInfo = document.getElementById("detailInfo");
    vaudio = document.getElementById('audio');
}



// var wavailWidth = window.screen.availWidth;
// var havailWidth = window.screen.availHeight;
// var winnerWidth = window.innerWidth;
// var hinnerHeight = window.innerHeight;
// // var outer = window.outerHeight;
// // var wclientWidth = vbody.clientWidth;
// // var hclientHeight = document.body.clientHeight;
// // var wJQwidth = $(window).width();
// // var hJQheight = $(window).height();

// var getNewObjs = function () {//discarded
// vleftContent0 = document.getElementById("leftContent0");
// vrightContent0 = document.getElementById("rightContent0");
// vleftContent = document.getElementById("leftContent");
// vrightContent = document.getElementById("rightContent");
// }

var initPhone = function () {
    //discarded 增删节点 
    // vtr_content.innerHTML = "<td class='contentGap'></td><td id='leftContent0'><div id='leftContent' class='phone_leftContent'><div id='leftText0'><span id='leftText'>小明走在街上，突然另一个小明打晕了他，醒来后，小明不知道哪个小明才是他自己哈哈哈哈哈哈哈哈哈，小明走在街上，突然另一个小明打晕了他，醒来后，小明不知道哪个小明才是他自己哈哈哈哈哈哈哈哈哈小明走在街上，突然另一个小明打晕了他，醒来后，小明不知道哪个小明才是他自己哈哈哈哈哈哈哈哈哈小明走在街上，突然另一个小明打晕了他，醒来后，小明不知道哪个小明才是他自己哈哈哈哈哈哈哈哈哈</span></div></div></td><td id='betweenContent'></td><td id='rightContent0'><div id='rightContent' class='phone_rightContent'><div id='rightText0'><span id='rightText'>小明走在街上，突然另一个小明打晕了他，醒来后，小明不知道哪个小明才是他自己哈哈哈哈哈哈哈哈哈</span></div></div></td><td class='contentGap'></td>";

    //discarded 获取新节点
    // getNewObjs();

    //背景及背景续接图初始化
    // vbody.className = "phone_body";
    // vbackground.className = "phone_background"

    if (wscreen > hscreen) {
        var preWscreen = wscreen;
        wscreen = hscreen;
        hscreen = preWscreen;
    }

    //移动端特殊设置：元素限制


    //移动端独有设置：调整字体
    if (wscreen < 300) {
        vhtml.style.fontSize = "0.85rem";
    } else
        // if(wscreen < 650){
        //     alert("已为您调整合适的字体大小");
        //     vhtml.style.fontSize = ((wscreen - 300) / 2800 + 0.875) + "rem";
        // } else
        if (wscreen < 980) {
            vhtml.style.fontSize = ((wscreen - 300) / 4500 + 0.85) + "rem";
            //alert("已为您调整合适的字体大小");
        }

    //移动端特殊设置：元素折行,定宽
    vleftContent.className = "phone_leftContent";
    vrightContent.className = "phone_rightContent";

    vtextPic1a.className = "phone_textPic1a";

    //discarded
    // var weachContent = wscreen * 40 / 100;
    // vleftContent.style.width = weachContent + "px";
    // vrightContent.style.width = weachContent + "px";
    var hcontent = hscreen * 0.24;
    var weachContent = wscreen * 0.24 * 1.6 * hscreen / wscreen * 0.8;
    var heachContent = hscreen * 0.24 * 0.8;
    var hblank = hscreen * 0.24 * 0.2;

    vleftContent.style.width = weachContent + "px";
    vrightContent.style.width = weachContent + "px";
    vleftContent.style.height = heachContent + "px";
    vrightContent.style.height = heachContent + "px";

    vleftContent.style.bottom = hblank + "px";

    //移动端特殊设置：放宽对主元素区域的压缩限制，允许元素可控范围内压缩变形
    // vbackground.style.height = hscreen + "px";
    // vbackground.style.height = (hscreen * 100 / 100) + "px";
    // vbackground.style.minHeight = (hscreen * 65 / 100) + "px";
    // vbackground.style.minHeight = (hscreen * 100 / 100) + "px";

    // vfoutyPct.style.minHeight = (hscreen * 0.4) + "px";
    // vrestPct.style.minHeight = (hscreen * 0.6) + "px";

    // vfoutyPct.style.minHeight = (hscreen * 0.4 * 0.65) + "px";
    // vrestPct.style.minHeight = (hscreen * 0.6 * 0.65) + "px";

    vcontent.style.height = hcontent + "px";
    //此处修改图片路径


}

var initStyles = function () {
    // root = "http://feareye.github.io/"
    // var wmark = wscreen * 0.15;
    // vskin.style.width = wmark + "px";


    // 移动端(排除平板)备用图片及字体(0.875~1)方案
    var isPhone1 = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|webOS)/i);
    var isPhone2 = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince|mobile)/i);
    var isOtherPhone = (wscreen < hscreen) && (wscreen < 650);
    var isUnknownPhone = (hscreen < 450) || (wscreen < 450);
    if (isPhone1 || isPhone2 || isOtherPhone || isUnknownPhone) {
        // if (1) {
        // alert(wscreen + ", " + hscreen + " [phone]" + navigator.userAgent);
        isPC = 0;
        initPhone();

        return;
    }


    // // 初始化自适应背景:背景最窄填充比例1366：768
    // var minRatio = 1366 / 768;
    // var wpic = 1280;
    // var hpic = 720;
    // var hproper = hscreen;
    // var picMode = wpic / hpic - minRatio
    // if (picMode < 0) {
    //    hproper = hpic * wscreen / wpic;
    // }
    // hproper += 2;//浏览器误差
    // vbackground.style.backgroundPositionX = "center";
    // vbackground.style.backgroundPositionY = "center";
    // vbackground.style.backgroundSize = "auto " + hproper + "px";


    //背景及背景续接图初始化
    // vbody.className = "pc_body";
    // vbackground.className = "pc_background"

    //pc端特殊设置：元素限制
    var weachContent = wscreen * 0.24;
    var heachContent = hscreen * 0.24;

    vleftContent.style.width = weachContent + "px";
    vrightContent.style.width = weachContent + "px";
    vleftContent.style.height = heachContent + "px";
    vrightContent.style.height = heachContent + "px";
    // vleftContent.style.top =(hscreen * 58 / 100) + "px";
    // vrightContent.style.top =(hscreen * 58 / 100) + "px";

    //pc端特殊设置：限定主元素区域的最小高度，防止拖动窗口使元素压缩变形

    // vbackground.style.height = hscreen + "px";
    // vbackground.style.minHeight = hscreen + "px";
    // alert(vfoutyPct.innerHTML);
    // vfoutyPct.style.minHeight = (hscreen * 0.4) + "px";
    // vrestPct.style.minHeight = (hscreen * 0.6) + "px";
    vfoutyPct.style.height = (hscreen * 0.4) + "px";
    vrestPct.style.height = (hscreen * 0.6) + "px";

    vcontent.style.height = heachContent + "px";



    //pc端特殊设置：元素折行,定宽
    vleftContent.className = "pc_leftContent";
    vrightContent.className = "pc_rightContent";
    // vleftContent.style.width = weachContent + "px";
    // vleftContent.style.height = heachContent + "px";
    // vrightContent.style.width = weachContent + "px";
    // vrightContent.style.height = heachContent + "px";
    vtextPic1a.className = "pc_textPic1a";

    // vleftContent.style.marginRight = (-1) * weachContent + "px";
    // vrightContent.style.marginLeft = "-30%";


}

var initLinks = function () {


    // alert(vflow1a.innerHTML);
    // vflow1a.src.src='http://www.sohu.com';
    // vflow1a.src='http://feareye.github.io/flow.html';

    // 
    vskin.src = 'skins/skin.png';
    vmusic.src = "skins/audio_off.png";
    // alert("initLinks");

    if (isPC == 1) {
        vtextPic1a.src = root + 'skins/text2.png';
    } else {
        vtextPic1a.src = root + "skins/text2_s_c.png";
    }
    // vflow1a.src ='mainUI/flow.html';
}


var DelayEvent = function () {
    vflow1a.src = 'mainUI/flow.html';
    vaudio.src = "medias/AuldLangSyne.mp3";
    if (isPC) {
        vmusic.click();
    }
}

// =================================================
var initEvents = function () {
    vskin.onclick = function() {
        // curIndex = curIndex + 1 - 4 * Boolean(curIndex-2);
        // vbackground.style.backgroundImage = "url(" + bgs[curIndex] + ")";
        // alert(243);
        // vbackground.style.backgroundImage = "url(skins/audio_off.png)";//正确写法
        curIndex = curIndex + 1 - 4 * (1 - Boolean(curIndex-3));
        vbackground.className = bgClasses[curIndex];
        // alert(curIndex);
    };

    vmusic.onclick = function () {
        // var vaudio = document.getElementById('audio');
        if (vaudio !== null) {
            //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
            // alert(vaudio.paused);
            if (!vaudio.paused) {
                vaudio.pause(); // 这个就是暂停
                this.src = "skins/audio_off.png";
            } else {
                vaudio.play(); //audio.play();// 这个就是播放  
                this.src = 'skins/48.gif';
            }
        }
    };
    // vmusic.onstalled = function() {
    //     alert("onstalled");
    // };
    // vmusic.onsuspend = function() {
    //     alert("onsuspend");
    // };
}
var UIReady = function () {
    // vbody.style.display = "block";

    // vbody.style.visibility="visible";
    // $(vbody).removeClass("hide");
    // alert(234);
    var vnoJs = document.getElementById('noJs');
    var vflow1aLeft = document.getElementById('flow1aLeft');
    if (vnoJs != null) {
        vnoJs.className = "hide";
        vnoJs.parentNode.removeChild(vnoJs);
    }
    if (vflow1aLeft != null) {
        vflow1aLeft.className = "hide";
        vflow1aLeft.parentNode.removeChild(vflow1aLeft);
    }

    if (isPC) {
        vdetailInfo.className = "showBlock";
    }


    // initEvents();
    vbackground.className = "bg1 showBlock";

    DelayEvent();
}