import PubSub from 'pubsub-js';
var targets = document.querySelectorAll('.section');

var options = {
  rootMargin: '0px',
  threshold: [0,0.25,0.5,0.75,1]
};

var observer = new IntersectionObserver(items => {
  console.log(items);
  items.forEach(el => {
  	console.log(el.isIntersecting,el.target,el.intersectionRatio);
  	if(el.isIntersecting && el.intersectionRatio>0.5) {
  		PubSub.publish('SecondSectionInView');
  	}
  });
}, options);

for (var i = 0; i < 4; i++) {
  observer.observe(targets[1]);
}


