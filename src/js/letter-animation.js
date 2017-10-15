import { TimelineMax } from 'gsap';
import PubSub from 'pubsub-js';


// $('.Y').css({ opacity: 0 });
function goLetter(msg, obj) {
  if (!$(obj).hasClass('activated')) {
    $(obj).addClass('activated');
    let over = $(obj).find('.over');
    let maskall = $(obj).find('.maskrectall');
    let maskrect = $(obj).find('.maskrect');
    let letter = $(obj).find('svg');
    letter.css({ opacity: 1 });
    let tl = new TimelineMax();
    tl.to(over, 1, { x: '-50%' });
    tl.to(letter, 0.1, { opacity: 0, yoyo: true, repeat: 5 },'-=0.5');
    tl.fromTo(maskall, 0.5, { y: 420 }, { y: 0 });
    tl.to(maskrect, 0.5, { x: 209 });
  }
}

PubSub.subscribe('SectionInView', goLetter);
