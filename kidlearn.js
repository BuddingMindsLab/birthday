/***************** 
 * Kidlearn Test *
 *****************/

import { core, data, sound, util, visual } from 'https://pavlovia.org/lib/psychojs-2021.2.0.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;

/*import { PsychoJS } from './lib/core.js';
import * as core from './lib/core.js';
import { TrialHandler } from 'https://lib.pavlovia.org/data.js';
import * as data from 'https://lib.pavlovia.org/data.js';
import { Scheduler } from 'https://lib.pavlovia.org/util.js';
import * as util from 'https://lib.pavlovia.org/util.js';
import * as visual from 'https://lib.pavlovia.org/visual.js';
import { Sound } from 'https://lib.pavlovia.org/sound.js';
import * as sound from 'https://lib.pavlovia.org/sound.js';*/

//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'kidlearn';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'group': '', 'age': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instructions2RoutineBegin());
flowScheduler.add(instructions2RoutineEachFrame());
flowScheduler.add(instructions2RoutineEnd());
flowScheduler.add(instructions3RoutineBegin());
flowScheduler.add(instructions3RoutineEachFrame());
flowScheduler.add(instructions3RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(end_screenRoutineBegin());
flowScheduler.add(end_screenRoutineEachFrame());
flowScheduler.add(end_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [{name: 'trials/intrinsic1.xlsx', path: './trials/intrinsic1.xlsx'},
  {name: 'trials/intrinsic2.xlsx', path: './trials/intrinsic2.xlsx'},
  {name: 'trials/extrinsic1.xlsx', path: './trials/extrinsic1.xlsx'},
  {name: 'trials/extrinsic2.xlsx', path: './trials/extrinsic2.xlsx'},
  {name: 'trials/extrinsic1.xlsx', path: './trials/extrinsic1.xlsx'},
  {name: 'resources/instructions1b.png', path: './resources/instructions1b.png'},
  {name: 'resources/instructions2.png', path: './resources/instructions2.png'},
  {name: 'resources/happy.png', path: './resources/happy.png'},
  {name: 'resources/correct.png', path: './resources/correct.png'},
  {name: 'resources/redhouse.png', path: './resources/redhouse.png'},
  {name: 'resources/sad.png', path: './resources/sad.png'},
  {name: 'resources/bluehouse.png', path: './resources/bluehouse.png'},
  {name: 'resources/blue cell.png', path: './resources/blue cell.png'},
  {name: 'resources/soccerball.png', path: './resources/soccerball.png'},
  {name: 'resources/forest.png', path: './resources/forest.png'},
  {name: 'resources/instructions3.png', path: './resources/instructions3.png'},
  {name: 'resources/purple cell.png', path: './resources/purple cell.png'},
  {name: 'resources/beach.png', path: './resources/beach.png'},
  {name: 'resources/positive.wav', path: './resources/positive.wav'},
  {name: 'resources/negative.wav', path: './resources/negative.wav'},
  {name: 'resources/basketball.png', path: './resources/basketball.png'},
  {name: 'resources/red cell.png', path: './resources/red cell.png'},
  {name: 'resources/creatures/base.png', path: './resources/creatures/base.png'},
  {name: 'resources/creatures/red_cell.png', path: './resources/creatures/red_cell.png'},
  {name: 'resources/creatures/shirts/plain-tshirt-01.png', path: './resources/creatures/shirts/plain-tshirt-01.png'},
  {name: 'resources/creatures/shirts/striped-tshirt-01.png', path: './resources/creatures/shirts/striped-tshirt-01.png'},
  {name: 'resources/creatures/ears/dog-ears-01.png', path: './resources/creatures/ears/dog-ears-01.png'},
  {name: 'resources/creatures/ears/cat-ears-01.png', path: './resources/creatures/ears/cat-ears-01.png'},
  {name: 'resources/creatures/ears/bear-ears-01.png', path: './resources/creatures/ears/bear-ears-01.png'},
  {name: 'resources/creatures/ears/bunny-ears-01.png', path: './resources/creatures/ears/bunny-ears-01.png'},
  {name: 'resources/creatures/tails/long-tail-01.png', path: './resources/creatures/tails/long-tail-01.png'},
  {name: 'resources/creatures/tails/pompom-tail-01.png', path: './resources/creatures/tails/pompom-tail-01.png'},
  {name: 'resources/creatures/shoes/shoes-01.png', path: './resources/creatures/shoes/shoes-01.png'},
  {name: 'resources/creatures/shoes/boots-01.png', path: './resources/creatures/shoes/boots-01.png'}],
  });

//psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.1';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var trialfile;
var instruction_click;
var image;
var ins_text;
var ins_text_btm;
var instructions2Clock;
var image_2;
var mouse;
var ins_text_2;
var ins_text_2_2;
var instructions3Clock;
var image_3;
var mouse_2;
var ins_text_3;
var trialClock;
var scene_image;
var base_image;
var ears_image;
var tail_image;
var shirt_image;
var boots_image;
var sport_image;
var redhouse;
var bluehouse;
var house_click;
var feedbackClock;
var bluehouse_correct;
var redhouse_correct;
var scene_image_2;
var base_image_2;
var ears_image_2;
var tail_image_2;
var shirt_image_2;
var boots_image_2;
var sport_image_2;
var redhouse_2;
var bluehouse_2;
var fbpos;
var soundfile;
var accCount;
var fb_text_shadow;
var feedback_text;
var feedback_click;
var sad;
var happy;
var feedback_sound;
var ITIClock;
var text;
var end_screenClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  if(expInfo['group']==='A' || expInfo['group']==='a'){
      trialfile='trials/intrinsic1.xlsx';
  } else if(expInfo['group']==='B' || expInfo['group']==='b'){
      trialfile='trials/extrinsic1.xlsx';
  } else if(expInfo['group']=='C' || expInfo['group']=='c'){
      trialfile='trials/intrinsic2.xlsx';
  } else if(expInfo['group']=='D' || expInfo['group']=='d'){
      trialfile='trials/extrinsic2.xlsx';
  }
  instruction_click = new core.Mouse({
    win: psychoJS.window,
  });
  instruction_click.mouseClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'resources/instructions1b.png', mask : undefined,
    ori : 0, pos : [0, (- 0.025)], size : [(1.6 * 0.6), 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ins_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ins_text',
    text: 'Today, you are going to see a bunch of different animals! \nSome have pointy ears and some have long, rounded ears.\nSome have long, skinny tails and others have short, round tails. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.37], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ins_text_btm = new visual.TextStim({
    win: psychoJS.window,
    name: 'ins_text_btm',
    text: 'Some of them like to go to the beach while others like to go to the forest.\nSome like to play soccer while others like to play basketball.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: 1.75, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instructions2"
  instructions2Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'resources/instructions2.png', mask : undefined,
    ori : 0, pos : [0, (- 0.1)], size : [(1.6 * 0.6), 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  ins_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ins_text_2',
    text: "The animals are going to a birthday party, but they don't know which house to go to! \nThey are trying to find the birthday party where all of their friends are. \nThey can either go to the blue house or the red house. ",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.33], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ins_text_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ins_text_2_2',
    text: "Can you help each animal find their friends' party?",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions3"
  instructions3Clock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'resources/instructions2.png', mask : undefined,
    ori : 0, pos : [0, (- 0.1)], size : [(1.6 * 0.6), 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  ins_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ins_text_3',
    text: 'For each animal, click on the house you think they should go to! \n\nAfter you pick, the computer will tell you which one was correct.\nClick again to go to the next round!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.33], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  scene_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scene_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [(1.4 * 0.7), 0.7],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  base_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'base_image', units : undefined, 
    image : 'resources/creatures/base.png', mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ears_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ears_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  tail_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tail_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  shirt_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'shirt_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  boots_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boots_image', units : undefined, 
    image : 'resources/creatures/shoes/boots-01.png', mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  sport_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sport_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.15, (- 0.2)], size : 0.15,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  redhouse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'redhouse', units : undefined, 
    image : 'resources/redhouse.png', mask : undefined,
    ori : 0, pos : [(- 0.65), 0], size : [(1.35 * 0.2), 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -8.0 
  });
  bluehouse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bluehouse', units : undefined, 
    image : 'resources/bluehouse.png', mask : undefined,
    ori : 0, pos : [0.65, 0], size : [(1.35 * 0.2), 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -9.0 
  });
  house_click = new core.Mouse({
    win: psychoJS.window,
  });
  house_click.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  bluehouse_correct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bluehouse_correct', units : undefined, 
    image : 'resources/correct.png', mask : undefined,
    ori : 0, pos : [0.65, 0], size : (1.5 * 0.2),
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  redhouse_correct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'redhouse_correct', units : undefined, 
    image : 'resources/correct.png', mask : undefined,
    ori : 0, pos : [(- 0.65), 0], size : (1.5 * 0.2),
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  scene_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scene_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [(1.4 * 0.7), 0.7],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  base_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'base_image_2', units : undefined, 
    image : 'resources/creatures/base.png', mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  ears_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ears_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  tail_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'tail_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  shirt_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'shirt_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  boots_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'boots_image_2', units : undefined, 
    image : 'resources/creatures/shoes/boots-01.png', mask : undefined,
    ori : 0, pos : [(- 0.1), (- 0.05)], size : [0.3, (0.3 * 1.69)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  sport_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sport_image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.15, (- 0.2)], size : 0.15,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -8.0 
  });
  redhouse_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'redhouse_2', units : undefined, 
    image : 'resources/redhouse.png', mask : undefined,
    ori : 0, pos : [(- 0.65), 0], size : [(1.35 * 0.2), 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -9.0 
  });
  bluehouse_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bluehouse_2', units : undefined, 
    image : 'resources/bluehouse.png', mask : undefined,
    ori : 0, pos : [0.65, 0], size : [(1.35 * 0.2), 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -10.0 
  });
  fbpos = [0, 0.42];
  soundfile = "resources/positive.wav";
  accCount = 0;
  fb_text_shadow = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_text_shadow',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 0,
    depth: -12.0 
  });
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 0,
    depth: -13.0 
  });
  
  feedback_click = new core.Mouse({
    win: psychoJS.window,
  });
  feedback_click.mouseClock = new util.Clock();
  sad = new visual.ImageStim({
    win : psychoJS.window,
    name : 'sad', units : undefined, 
    image : 'resources/sad.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -15.0 
  });
  happy = new visual.ImageStim({
    win : psychoJS.window,
    name : 'happy', units : undefined, 
    image : 'resources/happy.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -16.0 
  });
  feedback_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  feedback_sound.setVolume(1);
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Get ready!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var instructionsComponents;
var accCount = 0;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the instruction_click
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction_click);
    instructionsComponents.push(image);
    instructionsComponents.push(ins_text);
    instructionsComponents.push(ins_text_btm);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *instruction_click* updates
    if (t >= 0.0 && instruction_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_click.tStart = t;  // (not accounting for frame time here)
      instruction_click.frameNStart = frameN;  // exact frame index
      
      instruction_click.status = PsychoJS.Status.STARTED;
      instruction_click.mouseClock.reset();
      prevButtonState = instruction_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instruction_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instruction_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *ins_text* updates
    if (t >= 0.0 && ins_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_text.tStart = t;  // (not accounting for frame time here)
      ins_text.frameNStart = frameN;  // exact frame index
      
      ins_text.setAutoDraw(true);
    }

    
    // *ins_text_btm* updates
    if (t >= 0.0 && ins_text_btm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_text_btm.tStart = t;  // (not accounting for frame time here)
      ins_text_btm.frameNStart = frameN;  // exact frame index
      
      ins_text_btm.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructions2Components;
function instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions2'-------
    t = 0;
    instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions2Components = [];
    instructions2Components.push(image_2);
    instructions2Components.push(mouse);
    instructions2Components.push(ins_text_2);
    instructions2Components.push(ins_text_2_2);
    
    for (const thisComponent of instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions2'-------
    // get current time
    t = instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *ins_text_2* updates
    if (t >= 0.0 && ins_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_text_2.tStart = t;  // (not accounting for frame time here)
      ins_text_2.frameNStart = frameN;  // exact frame index
      
      ins_text_2.setAutoDraw(true);
    }

    
    // *ins_text_2_2* updates
    if (t >= 0.0 && ins_text_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_text_2_2.tStart = t;  // (not accounting for frame time here)
      ins_text_2_2.frameNStart = frameN;  // exact frame index
      
      ins_text_2_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions2'-------
    for (const thisComponent of instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructions3Components;
function instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions3'-------
    t = 0;
    instructions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions3Components = [];
    instructions3Components.push(image_3);
    instructions3Components.push(mouse_2);
    instructions3Components.push(ins_text_3);
    
    for (const thisComponent of instructions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions3'-------
    // get current time
    t = instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *ins_text_3* updates
    if (t >= 0.0 && ins_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ins_text_3.tStart = t;  // (not accounting for frame time here)
      ins_text_3.frameNStart = frameN;  // exact frame index
      
      ins_text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions3RoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions3'-------
    for (const thisComponent of instructions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 8, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: trialfile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var start_time;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_time = t;
    scene_image.setImage('resources/'+scene);
    ears_image.setImage('resources/'+ears);
    tail_image.setImage('resources/'+tail);
    shirt_image.setImage('resources/'+shirt);
    sport_image.setImage('resources/'+sport);
    // setup some python lists for storing info about the house_click
    house_click.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(scene_image);
    trialComponents.push(base_image);
    trialComponents.push(ears_image);
    trialComponents.push(tail_image);
    trialComponents.push(shirt_image);
    trialComponents.push(boots_image);
    trialComponents.push(sport_image);
    trialComponents.push(redhouse);
    trialComponents.push(bluehouse);
    trialComponents.push(house_click);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *scene_image* updates
    if (t >= 0.0 && scene_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scene_image.tStart = t;  // (not accounting for frame time here)
      scene_image.frameNStart = frameN;  // exact frame index
      
      scene_image.setAutoDraw(true);
    }

    
    // *base_image* updates
    if (t >= 0.0 && base_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      base_image.tStart = t;  // (not accounting for frame time here)
      base_image.frameNStart = frameN;  // exact frame index
      
      base_image.setAutoDraw(true);
    }

    
    // *ears_image* updates
    if (t >= 0.0 && ears_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ears_image.tStart = t;  // (not accounting for frame time here)
      ears_image.frameNStart = frameN;  // exact frame index
      
      ears_image.setAutoDraw(true);
    }

    
    // *tail_image* updates
    if (t >= 0.0 && tail_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tail_image.tStart = t;  // (not accounting for frame time here)
      tail_image.frameNStart = frameN;  // exact frame index
      
      tail_image.setAutoDraw(true);
    }

    
    // *shirt_image* updates
    if (t >= 0.0 && shirt_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shirt_image.tStart = t;  // (not accounting for frame time here)
      shirt_image.frameNStart = frameN;  // exact frame index
      
      shirt_image.setAutoDraw(true);
    }

    
    // *boots_image* updates
    if (t >= 0.0 && boots_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boots_image.tStart = t;  // (not accounting for frame time here)
      boots_image.frameNStart = frameN;  // exact frame index
      
      boots_image.setAutoDraw(true);
    }

    
    // *sport_image* updates
    if (t >= 0.0 && sport_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_image.tStart = t;  // (not accounting for frame time here)
      sport_image.frameNStart = frameN;  // exact frame index
      
      sport_image.setAutoDraw(true);
    }

    
    // *redhouse* updates
    if (t >= 0.0 && redhouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redhouse.tStart = t;  // (not accounting for frame time here)
      redhouse.frameNStart = frameN;  // exact frame index
      
      redhouse.setAutoDraw(true);
    }

    
    // *bluehouse* updates
    if (t >= 0.0 && bluehouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bluehouse.tStart = t;  // (not accounting for frame time here)
      bluehouse.frameNStart = frameN;  // exact frame index
      
      bluehouse.setAutoDraw(true);
    }

    // *house_click* updates
    if (t >= 0.0 && house_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      house_click.tStart = t;  // (not accounting for frame time here)
      house_click.frameNStart = frameN;  // exact frame index
      
      house_click.status = PsychoJS.Status.STARTED;
      house_click.mouseClock.reset();
      prevButtonState = house_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (house_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = house_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [redhouse, bluehouse]) {
            if (obj.contains(house_click)) {
              gotValidClick = true;
              house_click.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('time', t-start_time);
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = house_click.getPos();
    _mouseButtons = house_click.getPressed();
    psychoJS.experiment.addData('house_click.x', _mouseXYs[0]);
    psychoJS.experiment.addData('house_click.y', _mouseXYs[1]);
    psychoJS.experiment.addData('house_click.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('house_click.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('house_click.rightButton', _mouseButtons[2]);
    if (house_click.clicked_name.length > 0) {
      psychoJS.experiment.addData('house_click.clicked_name', house_click.clicked_name[0]);}
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var house_clicked;
var correct_house_clicked;
var fbtext;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    scene_image_2.setImage('resources/'+scene);
    ears_image_2.setImage('resources/'+ears);
    tail_image_2.setImage('resources/'+tail);
    shirt_image_2.setImage('resources/'+shirt);
    sport_image_2.setImage('resources/'+sport);
    if(answer === "redhouse") {
        bluehouse_correct.opacity = 0;
        redhouse_correct.opacity = 1;
    } else {
        redhouse_correct.opacity = 0;
        bluehouse_correct.opacity = 1;
    }
    
    house_clicked = house_click.clicked_name[house_click.clicked_name.length - 1];
    correct_house_clicked = house_clicked === answer;
    
    if(correct_house_clicked) {
        happy.opacity = 1;
        sad.opacity = 0;
        soundfile = 'resources/positive.wav';
        accCount = accCount + 1;
    } else {
        happy.opacity = 0;
        sad.opacity = 1;
        soundfile = 'resources/negative.wav';
        accCount = 0;
    }
    
    psychoJS.experiment.addData('house_clicked', house_clicked);
    psychoJS.experiment.addData('correct', correct_house_clicked);
    
    
    if(correct_house_clicked) {
        fbtext='Yay!';
    } else {
        fbtext='Try again!';
    }
    fb_text_shadow.setPos([(fbpos[0] + 0.003), (fbpos[1] - 0.002)]);
    fb_text_shadow.setText(fbtext);
    feedback_text.setPos(fbpos);
    feedback_text.setText(fbtext);
    // setup some python lists for storing info about the feedback_click
    gotValidClick = false; // until a click is received
    feedback_sound = new sound.Sound({
    win: psychoJS.window,
    value: soundfile,
    secs: -1,
    });
    feedback_sound.setVolume(1);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(bluehouse_correct);
    feedbackComponents.push(redhouse_correct);
    feedbackComponents.push(scene_image_2);
    feedbackComponents.push(base_image_2);
    feedbackComponents.push(ears_image_2);
    feedbackComponents.push(tail_image_2);
    feedbackComponents.push(shirt_image_2);
    feedbackComponents.push(boots_image_2);
    feedbackComponents.push(sport_image_2);
    feedbackComponents.push(redhouse_2);
    feedbackComponents.push(bluehouse_2);
    feedbackComponents.push(fb_text_shadow);
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(feedback_click);
    feedbackComponents.push(sad);
    feedbackComponents.push(happy);
    feedbackComponents.push(feedback_sound);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bluehouse_correct* updates
    if (t >= 0.0 && bluehouse_correct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bluehouse_correct.tStart = t;  // (not accounting for frame time here)
      bluehouse_correct.frameNStart = frameN;  // exact frame index
      
      bluehouse_correct.setAutoDraw(true);
    }

    
    // *redhouse_correct* updates
    if (t >= 0.0 && redhouse_correct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redhouse_correct.tStart = t;  // (not accounting for frame time here)
      redhouse_correct.frameNStart = frameN;  // exact frame index
      
      redhouse_correct.setAutoDraw(true);
    }

    
    // *scene_image_2* updates
    if (t >= 0.0 && scene_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scene_image_2.tStart = t;  // (not accounting for frame time here)
      scene_image_2.frameNStart = frameN;  // exact frame index
      
      scene_image_2.setAutoDraw(true);
    }

    
    // *base_image_2* updates
    if (t >= 0.0 && base_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      base_image_2.tStart = t;  // (not accounting for frame time here)
      base_image_2.frameNStart = frameN;  // exact frame index
      
      base_image_2.setAutoDraw(true);
    }

    
    // *ears_image_2* updates
    if (t >= 0.0 && ears_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ears_image_2.tStart = t;  // (not accounting for frame time here)
      ears_image_2.frameNStart = frameN;  // exact frame index
      
      ears_image_2.setAutoDraw(true);
    }

    
    // *tail_image_2* updates
    if (t >= 0.0 && tail_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tail_image_2.tStart = t;  // (not accounting for frame time here)
      tail_image_2.frameNStart = frameN;  // exact frame index
      
      tail_image_2.setAutoDraw(true);
    }

    
    // *shirt_image_2* updates
    if (t >= 0.0 && shirt_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shirt_image_2.tStart = t;  // (not accounting for frame time here)
      shirt_image_2.frameNStart = frameN;  // exact frame index
      
      shirt_image_2.setAutoDraw(true);
    }

    
    // *boots_image_2* updates
    if (t >= 0.0 && boots_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      boots_image_2.tStart = t;  // (not accounting for frame time here)
      boots_image_2.frameNStart = frameN;  // exact frame index
      
      boots_image_2.setAutoDraw(true);
    }

    
    // *sport_image_2* updates
    if (t >= 0.0 && sport_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sport_image_2.tStart = t;  // (not accounting for frame time here)
      sport_image_2.frameNStart = frameN;  // exact frame index
      
      sport_image_2.setAutoDraw(true);
    }

    
    // *redhouse_2* updates
    if (t >= 0.0 && redhouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redhouse_2.tStart = t;  // (not accounting for frame time here)
      redhouse_2.frameNStart = frameN;  // exact frame index
      
      redhouse_2.setAutoDraw(true);
    }

    
    // *bluehouse_2* updates
    if (t >= 0.0 && bluehouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bluehouse_2.tStart = t;  // (not accounting for frame time here)
      bluehouse_2.frameNStart = frameN;  // exact frame index
      
      bluehouse_2.setAutoDraw(true);
    }

    
    // *fb_text_shadow* updates
    if (t >= 0.0 && fb_text_shadow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_text_shadow.tStart = t;  // (not accounting for frame time here)
      fb_text_shadow.frameNStart = frameN;  // exact frame index
      
      fb_text_shadow.setAutoDraw(true);
    }

    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    // *feedback_click* updates
    if (t >= 0.0 && feedback_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_click.tStart = t;  // (not accounting for frame time here)
      feedback_click.frameNStart = frameN;  // exact frame index
      
      feedback_click.status = PsychoJS.Status.STARTED;
      feedback_click.mouseClock.reset();
      prevButtonState = feedback_click.getPressed();  // if button is down already this ISN'T a new click
      }
    if (feedback_click.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = feedback_click.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *sad* updates
    if (t >= 0.0 && sad.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sad.tStart = t;  // (not accounting for frame time here)
      sad.frameNStart = frameN;  // exact frame index
      
      sad.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sad.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      sad.setAutoDraw(false);
    }
    
    // *happy* updates
    if (t >= 0.0 && happy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      happy.tStart = t;  // (not accounting for frame time here)
      happy.frameNStart = frameN;  // exact frame index
      
      happy.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (happy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      happy.setAutoDraw(false);
    }
    // start/stop feedback_sound
    if (t >= 0.0 && feedback_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_sound.tStart = t;  // (not accounting for frame time here)
      feedback_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ feedback_sound.play(); });  // screen flip
      feedback_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (feedback_sound.getDuration() + feedback_sound.tStart)     && feedback_sound.status === PsychoJS.Status.STARTED) {
      feedback_sound.stop();  // stop the sound (if longer than duration)
      feedback_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    feedback_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    if (accCount > 9) {
        continueRoutine = false;
    } else {
        continueRoutine = true; // until we're told otherwise
    }
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    if ((accCount > 9)) {
        continueRoutine = false;
        trials.finished = true;
    }
    
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(text);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI'-------
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI'-------
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var end_screenComponents;
function end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_screen'-------
    t = 0;
    end_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    end_screenComponents = [];
    end_screenComponents.push(text_2);
    
    for (const thisComponent of end_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_screenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_screen'-------
    // get current time
    t = end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_screenRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_screen'-------
    for (const thisComponent of end_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  //if (psychoJS.experiment.isEntryEmpty()) {
    //psychoJS.experiment.nextEntry();
  //}
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
