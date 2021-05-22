import Scrollbar from 'smooth-scrollbar';

var options = {
          'damping':0.02,
          'alwaysShowTracks':true,
          'renderByPixels':true
}

Scrollbar.init(document.querySelector('#my-scrollbar'),options);


// custom   mini scroll portion
Scrollbar.init(document.querySelector('#custom'));

