/**
 *
 *  EFFECTS
 *
 *  
 */
var pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();

var delayLFO = new Tone.LFO(0.1, 0.25, 0.5).connect(pingPong.delayTime);

delayLFO.sync();

var bitCrush = new Tone.BitCrusher().toMaster();

/**
 *
 *  DRUMS
 *
 *  
 */

/*
 KICK
 */
var Kick = new Tone.DrumSynth({
	"envelope" : {
		"sustain" : 0,
		"attack" : 0.02,
		"decay" : 0.8
	},
	"octaves" : 10
}).toMaster();

Tone.Note.route("Kick", function(time){
	Kick.triggerAttackRelease("C2", "8n", time);
});


/*
 SNARE
 */
var Snare = new Tone.NoiseSynth().connect(pingPong).toMaster();

Tone.Note.route("Snare", function(time){
	Snare.triggerAttackRelease("8n", time);
});


/**
 *
 *  PIANO
 */

var Piano = new Tone.PolySynth(4, Tone.SimpleSynth).toMaster();

Tone.Note.route("Piano", function(time){
	Piano.triggerAttackRelease(["c4", "e4", "a4"], "8n", time);
});

/**
 *
 *  FMSYN
 */

 var Fmsynth = new Tone.FMSynth().connect(bitCrush).toMaster();

 Tone.Note.route("Fmsynth", function(time){
 	Fmsynth.triggerAttackRelease("C2", "8n", time);
 })
