var Score = {};

Score.Kick = [
	"0:0", "0:2" ,
	"1:0", "1:2" ,
	"2:0", "2:2" ,
	"3:0", "3:2" ,
];

Score.Snare = [
	"0:1", "0:3",
	"1:1", "1:3",
	"2:1", "2:3",
	"3:1", "3:3"
];

Score.Piano = [
	"0:0", "0:0:3",
	"1:0", "1:0:3",
	"2:0", "2:0:3",
	"3:0", "3:0:3"
];

Score.Fmsynth = [
	"0:1", "0:2:2",
	"1:1", "1:2:2",
	"2:1", "2:2:2",
	"3:1", "3:2:2"
];

Tone.Note.parseScore(Score);

Tone.Transport.loop = true;
Tone.Transport.bpm.value = 90;
Tone.Transport.setLoopPoints(0, "4m");


// Tone.Transport.start("+1");