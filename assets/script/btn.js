import {fromEvent} from 'rxjs';
import {throttleTime, map} from 'rxjs/operators';

cc.Class({
    extends: cc.Component,

    properties: {
        testButton:{
            default:null,
            type:cc.Node
        }
    },

    onLoad() {
        console.log('onLoad!');
        fromEvent(this.testButton, 'touchend')
            .pipe(map( e => [e, new Date(), 'how do you turn this on', {name:'John Ceeeeeena'}, 333] ), throttleTime(3000))
            .subscribe(this.testBtnClick.bind(this));
    },

    testBtnClick(evt) {
        console.log('testBtnClick!!! evt = ', evt);
    }
});
