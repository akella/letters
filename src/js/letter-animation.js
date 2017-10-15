import {TimelineMax} from 'gsap';
import PubSub from 'pubsub-js';

$('.Y').css({'opacity':0});
function goLetter() {
  $('.Y').css({'opacity':1});
  let tl = new TimelineMax();

  tl.to('.Y',0.1,{opacity:0,yoyo: true, repeat: 5});
  tl.fromTo('#maskrectall',1,{y:420},{y:0});
  tl.to('#maskrect',1,{x:-205});
}



PubSub.subscribe('SecondSectionInView',goLetter);
