(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.khungphone = function() {
	this.initialize(img.khungphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1073,690);


(lib.ui = function() {
	this.initialize(img.ui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,665);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ui();
	this.instance.setTransform(-650,-432.25,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650,-432.2,1300,864.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ui();
	this.instance.setTransform(-650,-432.25,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650,-432.2,1300,864.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(5).call(this.frame_149).wait(1));

	// Layer_1
	this.instance = new lib.khungphone();
	this.instance.setTransform(-536.5,-345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7WAe0QimAAh2h2Qh0h1gBilMAAAgxHQABilB0h2QB2h1CmAAMB2tAAAQCmAAB1B1QB2B2AAClMAAAAxHQAAClh2B1Qh1B2imAAg");
	mask.setTransform(106.25,-113.275);

	// Layer_2
	this.instance_1 = new lib.ui();
	this.instance_1.setTransform(-588,-520,1.3,1.3);

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(62,-87.75);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(106.2,-72.35,0.64,0.64,0,0,0,0.1,-0.4);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},5).to({state:[]},131).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,regX:0.1,regY:-0.4,scaleX:0.64,scaleY:0.64,x:106.2,y:-72.35},5).wait(136));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.5,-345,1073,690);


// stage content:
(lib._1073x690 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(536.5,345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,170,763.5,520);
// library properties:
lib.properties = {
	id: '9269E41F9E0B9642A40D534A97CB0EBB',
	width: 1073,
	height: 690,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"/images/star-4/khungphone.png", id:"khungphone"},
		{src:"/images/star-4/ui.jpg", id:"ui"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9269E41F9E0B9642A40D534A97CB0EBB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;