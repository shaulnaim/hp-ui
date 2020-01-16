define(["exports"], function(exports) {
    exports.initAnima = function() {
        if (typeof String.prototype.endsWith !== 'function') {
            String.prototype.endsWith = function(suffix) {
                return this.indexOf(suffix, this.length - suffix.length) !== -1;
            };
        }
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function(searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            };
        }
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function(callback) {
                var T, k;
                if (this == null) {
                    throw new TypeError('this is null or not defined');
                }
                var O = Object(this);
                var len = O.length >>> 0;
                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }
                if (arguments.length > 1) {
                    T = arguments[1];
                }
                k = 0;
                while (k < len) {
                    var kValue;
                    if (k in O) {
                        kValue = O[k];
                        callback.call(T, kValue, k, O);
                    }
                    k++;
                }
            };
        }
        function toArray(obj) {
            var array = [];
            for (var i = obj.length >>> 0; i--; ) {
                array[i] = obj[i];
            }
            return array;
        }
        function addClass(object, className) {
            object.classList ? object.classList.add(className) : object.className += ' ' + className;
        }
        function removeAllClassesButFirst(component, skipClass) {
            var classList = component.classList;
            var componentClass = classList.item(0);
            var toRemove = [];
            var beforeComponent = true;
            toArray(classList).forEach(function(className) {
                beforeComponent = beforeComponent && className != 'component';
                if (className != skipClass && className != componentClass && className != 'component' && !beforeComponent) {
                    toRemove.push(className);
                }
            });
            toRemove.forEach(function(className) {
                classList.remove(className);
            });
        }
        function applyState(component, stateClass) {
            var componentClass = component.classList.item(0);
            component.className = componentClass;
            component.classList.add(stateClass);
        }
        function isCurrentState(component, state) {
            var classList = component.classList;
            var rv = false;
            toArray(classList).forEach(function(className) {
                if (className.endsWith(state)) {
                    rv = true;
                }
            });
            return rv;
        }
        function whichTransitionEvent() {
            var t, el = document.createElement("fakeelement");
            var transitions = {
                "transition": "transitionend",
                "OTransition": "oTransitionEnd",
                "MozTransition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }
        var transitionEvent = whichTransitionEvent();
        function clickartboardhjJukKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state1-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state1-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function clickartboardhjJukKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state1-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state1-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate1tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .ccc');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV1Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .ccc');
        }
        child = document.querySelector('.artboard-hjJu .tabs .ccc .bgidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV1Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .ccc .bgidle3');
        }
        function resetartboardhjJukKAOSaV() {
            var component = document.querySelector('.artboard-hjJu');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate2EndedHandler);
            removeAllClassesButFirst(component, 'state1-to-state2');
            addClass(component, 'state2');
            addClass(component, 'state1-to-state2');
        }
        function clickartboardhjJukKAOSaV2Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state3-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white .frameidle');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV2Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white .frameidle');
        }
        function clickartboardhjJukKAOSaV3Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate4EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state4');
                        addClass(component, 'state4');
                        addClass(component, 'state3-to-state4');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate4EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate4EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white1 .frameidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV3Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white1 .frameidle2');
        }
        function clickartboardhjJukKAOSaV4Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate5EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state5');
                        addClass(component, 'state5');
                        addClass(component, 'state3-to-state5');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate5EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate5EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan1 .frameidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV4Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan1 .frameidle3');
        }
        function clickartboardhjJukKAOSaV5Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate5EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state5');
                        addClass(component, 'state5');
                        addClass(component, 'state2-to-state5');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate5EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate5EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan1 .frameidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV5Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan1 .frameidle3');
        }
        function clickartboardhjJukKAOSaV6Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate4EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state4');
                        addClass(component, 'state4');
                        addClass(component, 'state2-to-state4');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate4EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate4EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white1 .frameidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV6Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white1 .frameidle2');
        }
        function clickartboardhjJukKAOSaV7Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate3EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state3');
                        addClass(component, 'state3');
                        addClass(component, 'state2-to-state3');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate3EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate3EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan .frameidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV7Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan .frameidle1');
        }
        function clickartboardhjJukKAOSaV8Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate5EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state5');
                        addClass(component, 'state5');
                        addClass(component, 'state4-to-state5');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate5EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate5EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan1 .frameidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV8Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan1 .frameidle3');
        }
        function clickartboardhjJukKAOSaV9Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate3EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state3');
                        addClass(component, 'state3');
                        addClass(component, 'state4-to-state3');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate3EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate3EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan .frameidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV9Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan .frameidle1');
        }
        function clickartboardhjJukKAOSaV10Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state4-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white .frameidle');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV10Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white .frameidle');
        }
        function clickartboardhjJukKAOSaV11Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate4EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state4');
                        addClass(component, 'state4');
                        addClass(component, 'state5-to-state4');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate4EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate4EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white1 .frameidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV11Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white1 .frameidle2');
        }
        function clickartboardhjJukKAOSaV12Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate3EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state3');
                        addClass(component, 'state3');
                        addClass(component, 'state5-to-state3');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate3EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate3EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .cyan .frameidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV12Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .cyan .frameidle1');
        }
        function clickartboardhjJukKAOSaV13Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state5-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .rightpannel .white .frameidle');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV13Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .rightpannel .white .frameidle');
        }
        function clickartboardhjJukKAOSaV14Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state2-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV14Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV15Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state3-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV15Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV16Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state4-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV16Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV17Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state5-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV17Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV18Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state6')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state6-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state6-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate6tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV18Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV19Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state6')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state6-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state6-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate6tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .ccc .bgidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV19Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .ccc .bgidle3');
        }
        function clickartboardhjJukKAOSaV20Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state5-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV20Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function clickartboardhjJukKAOSaV21Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state1-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state1-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate1tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'frame1' || event.target.className.startsWith('frame1 ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV21Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function resetartboardhjJukKAOSaV() {
            var component = document.querySelector('.artboard-hjJu');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate6EndedHandler);
            removeAllClassesButFirst(component, 'state1-to-state6');
            addClass(component, 'state6');
            addClass(component, 'state1-to-state6');
        }
        function clickartboardhjJukKAOSaV22Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state2-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV22Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function clickartboardhjJukKAOSaV23Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state3-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV23Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function clickartboardhjJukKAOSaV24Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state4-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV24Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function clickartboardhjJukKAOSaV25Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state1-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state1-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate1tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'framebig' || event.target.className.startsWith('framebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV25Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function resetartboardhjJukKAOSaV() {
            var component = document.querySelector('.artboard-hjJu');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate1tostate7EndedHandler);
            removeAllClassesButFirst(component, 'state1-to-state7');
            addClass(component, 'state7');
            addClass(component, 'state1-to-state7');
        }
        function clickartboardhjJukKAOSaV26Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state2-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate2tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'framebig' || event.target.className.startsWith('framebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate2tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV26Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function clickartboardhjJukKAOSaV27Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state3')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state3-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state3-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate3tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate3tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV27Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function clickartboardhjJukKAOSaV28Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state4')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state4-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state4-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate4tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate4tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV28Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function clickartboardhjJukKAOSaV29Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state5')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state5-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state5-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate5tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate5tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV29Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function clickartboardhjJukKAOSaV30Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state6')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate7EndedHandler);
                        removeAllClassesButFirst(component, 'state6-to-state7');
                        addClass(component, 'state7');
                        addClass(component, 'state6-to-state7');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate6tostate7EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate6tostate7EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .scaling .bgidle1');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV30Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .scaling .bgidle1');
        }
        function clickartboardhjJukKAOSaV31Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state7')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state7-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state7-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate7tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'framebig' || event.target.className.startsWith('framebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate1EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .live .bgidle4');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV31Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .live .bgidle4');
        }
        function clickartboardhjJukKAOSaV32Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state7')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state7-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state7-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate7tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'framebig' || event.target.className.startsWith('framebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate2EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .ccc .bgidle3');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV32Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .ccc .bgidle3');
        }
        function clickartboardhjJukKAOSaV33Handler(event) {
            var component = document.querySelector('.artboard-hjJu');
            if (isCurrentState(component, 'state7')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu');
                        component.addEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate6EndedHandler);
                        removeAllClassesButFirst(component, 'state7-to-state6');
                        addClass(component, 'state6');
                        addClass(component, 'state7-to-state6');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionartboardhjJukKAOSaVstate7tostate6EndedHandler(event) {
            if (event.target.className.trim() == 'timelinebig' || event.target.className.startsWith('timelinebig ')) {
                var component = document.querySelector('.artboard-hjJu');
                component.removeEventListener(transitionEvent, transitionartboardhjJukKAOSaVstate7tostate6EndedHandler);
            }
        }
        child = document.querySelector('.artboard-hjJu .tabs .cpr .bgidle2');
        if (child) {
            child.addEventListener('click', clickartboardhjJukKAOSaV33Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .artboard-hjJu .tabs .cpr .bgidle2');
        }
        function clickprogress1W3JdkKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
            if (isCurrentState(component, 'keyframe1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
                        component.addEventListener(transitionEvent, transitionprogress1W3JdkKAOSaVkeyframe1tokeyframe2EndedHandler);
                        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
                        addClass(component, 'keyframe2');
                        addClass(component, 'keyframe1-to-keyframe2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionprogress1W3JdkKAOSaVkeyframe1tokeyframe2EndedHandler(event) {
            if (event.target.className.trim() == 'r' || event.target.className.startsWith('r ')) {
                var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
                component.removeEventListener(transitionEvent, transitionprogress1W3JdkKAOSaVkeyframe1tokeyframe2EndedHandler);
                lastTransitionprogress1W3JdkKAOSaVEndedHandler(event);
            }
        }
        function lastTransitionprogress1W3JdkKAOSaVEndedHandler(event) {
            var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
            removeAllClassesButFirst(component, 'keyframe1');
            addClass(component, 'keyframe1');
            var event = new Event('click');
            setTimeout(function() {
                component.dispatchEvent(event);
            }, 0);
        }
        var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
        component.addEventListener('click', clickprogress1W3JdkKAOSaV1Handler);
        setTimeout(function() {
            resetprogress1W3JdkKAOSaV();
        }, 0);
        function resetprogress1W3JdkKAOSaV() {
            var component = document.querySelector('.artboard-hjJu .footer .info .progress1-W3Jd');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionprogress1W3JdkKAOSaVkeyframe1tokeyframe2EndedHandler);
            removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
            addClass(component, 'keyframe2');
            addClass(component, 'keyframe1-to-keyframe2');
        }
        function clickprogress39VS5kKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
            if (isCurrentState(component, 'keyframe1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
                        component.addEventListener(transitionEvent, transitionprogress39VS5kKAOSaVkeyframe1tokeyframe2EndedHandler);
                        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
                        addClass(component, 'keyframe2');
                        addClass(component, 'keyframe1-to-keyframe2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionprogress39VS5kKAOSaVkeyframe1tokeyframe2EndedHandler(event) {
            if (event.target.className.trim() == 'progressm' || event.target.className.startsWith('progressm ')) {
                var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
                component.removeEventListener(transitionEvent, transitionprogress39VS5kKAOSaVkeyframe1tokeyframe2EndedHandler);
                lastTransitionprogress39VS5kKAOSaVEndedHandler(event);
            }
        }
        function lastTransitionprogress39VS5kKAOSaVEndedHandler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
            removeAllClassesButFirst(component, 'keyframe1');
            addClass(component, 'keyframe1');
            var event = new Event('click');
            setTimeout(function() {
                component.dispatchEvent(event);
            }, 0);
        }
        var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
        component.addEventListener('click', clickprogress39VS5kKAOSaV1Handler);
        setTimeout(function() {
            resetprogress39VS5kKAOSaV();
        }, 0);
        function resetprogress39VS5kKAOSaV() {
            var component = document.querySelector('.artboard-hjJu .tabs .scaling .timeline1 .progress3-9VS5');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionprogress39VS5kKAOSaVkeyframe1tokeyframe2EndedHandler);
            removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
            addClass(component, 'keyframe2');
            addClass(component, 'keyframe1-to-keyframe2');
        }
        function clickprogress4OphWkKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
            if (isCurrentState(component, 'keyframe1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
                        component.addEventListener(transitionEvent, transitionprogress4OphWkKAOSaVkeyframe1tokeyframe2EndedHandler);
                        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
                        addClass(component, 'keyframe2');
                        addClass(component, 'keyframe1-to-keyframe2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionprogress4OphWkKAOSaVkeyframe1tokeyframe2EndedHandler(event) {
            if (event.target.className.trim() == 'progressm' || event.target.className.startsWith('progressm ')) {
                var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
                component.removeEventListener(transitionEvent, transitionprogress4OphWkKAOSaVkeyframe1tokeyframe2EndedHandler);
                lastTransitionprogress4OphWkKAOSaVEndedHandler(event);
            }
        }
        function lastTransitionprogress4OphWkKAOSaVEndedHandler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
            removeAllClassesButFirst(component, 'keyframe1');
            addClass(component, 'keyframe1');
            var event = new Event('click');
            setTimeout(function() {
                component.dispatchEvent(event);
            }, 0);
        }
        var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
        component.addEventListener('click', clickprogress4OphWkKAOSaV1Handler);
        setTimeout(function() {
            resetprogress4OphWkKAOSaV();
        }, 0);
        function resetprogress4OphWkKAOSaV() {
            var component = document.querySelector('.artboard-hjJu .tabs .cpr .timeline2 .progress4-OphW');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionprogress4OphWkKAOSaVkeyframe1tokeyframe2EndedHandler);
            removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
            addClass(component, 'keyframe2');
            addClass(component, 'keyframe1-to-keyframe2');
        }
        function clickprogress5Uk9TkKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
            if (isCurrentState(component, 'keyframe1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
                        component.addEventListener(transitionEvent, transitionprogress5Uk9TkKAOSaVkeyframe1tokeyframe2EndedHandler);
                        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
                        addClass(component, 'keyframe2');
                        addClass(component, 'keyframe1-to-keyframe2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionprogress5Uk9TkKAOSaVkeyframe1tokeyframe2EndedHandler(event) {
            if (event.target.className.trim() == 'progressm' || event.target.className.startsWith('progressm ')) {
                var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
                component.removeEventListener(transitionEvent, transitionprogress5Uk9TkKAOSaVkeyframe1tokeyframe2EndedHandler);
                lastTransitionprogress5Uk9TkKAOSaVEndedHandler(event);
            }
        }
        function lastTransitionprogress5Uk9TkKAOSaVEndedHandler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
            removeAllClassesButFirst(component, 'keyframe1');
            addClass(component, 'keyframe1');
            var event = new Event('click');
            setTimeout(function() {
                component.dispatchEvent(event);
            }, 0);
        }
        var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
        component.addEventListener('click', clickprogress5Uk9TkKAOSaV1Handler);
        setTimeout(function() {
            resetprogress5Uk9TkKAOSaV();
        }, 0);
        function resetprogress5Uk9TkKAOSaV() {
            var component = document.querySelector('.artboard-hjJu .tabs .ccc .timeline3 .progress5-Uk9T');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionprogress5Uk9TkKAOSaVkeyframe1tokeyframe2EndedHandler);
            removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
            addClass(component, 'keyframe2');
            addClass(component, 'keyframe1-to-keyframe2');
        }
        function clickprogress1xG6YkKAOSaV1Handler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
            if (isCurrentState(component, 'keyframe1')) {
                try {
                    setTimeout(function() {
                        var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
                        component.addEventListener(transitionEvent, transitionprogress1xG6YkKAOSaVkeyframe1tokeyframe2EndedHandler);
                        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
                        addClass(component, 'keyframe2');
                        addClass(component, 'keyframe1-to-keyframe2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionprogress1xG6YkKAOSaVkeyframe1tokeyframe2EndedHandler(event) {
            if (event.target.className.trim() == 'ovalcopy22' || event.target.className.startsWith('ovalcopy22 ')) {
                var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
                component.removeEventListener(transitionEvent, transitionprogress1xG6YkKAOSaVkeyframe1tokeyframe2EndedHandler);
                setTimeout(function() {
                    var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
                    component.addEventListener(transitionEvent, transitionprogress1xG6YkKAOSaVkeyframe2tokeyframe3EndedHandler);
                    removeAllClassesButFirst(component, 'keyframe2-to-keyframe3');
                    addClass(component, 'keyframe3');
                    addClass(component, 'keyframe2-to-keyframe3');
                }, 0);
            }
        }
        var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
        component.addEventListener('click', clickprogress1xG6YkKAOSaV1Handler);
        setTimeout(function() {
            resetprogress1xG6YkKAOSaV();
        }, 0);
        function resetprogress1xG6YkKAOSaV() {
            var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionprogress1xG6YkKAOSaVkeyframe1tokeyframe2EndedHandler);
            removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
            addClass(component, 'keyframe2');
            addClass(component, 'keyframe1-to-keyframe2');
        }
        function transitionprogress1xG6YkKAOSaVkeyframe2tokeyframe3EndedHandler(event) {
            if (event.target.className.trim() == 'ovalcopy21' || event.target.className.startsWith('ovalcopy21 ')) {
                var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
                component.removeEventListener(transitionEvent, transitionprogress1xG6YkKAOSaVkeyframe2tokeyframe3EndedHandler);
                lastTransitionprogress1xG6YkKAOSaVEndedHandler(event);
            }
        }
        function lastTransitionprogress1xG6YkKAOSaVEndedHandler(event) {
            var component = document.querySelector('.artboard-hjJu .tabs .live .progress1-xG6Y');
            removeAllClassesButFirst(component, 'keyframe1');
            addClass(component, 'keyframe1');
            var event = new Event('click');
            setTimeout(function() {
                component.dispatchEvent(event);
            }, 0);
        }
        anima_isHidden = function(e) {
            if (!(e instanceof HTMLElement)) return !1;
            if (getComputedStyle(e).display == "none") return !0; else if (e.parentNode && anima_isHidden(e.parentNode)) return !0;
            return !1;
        };
        anima_loadAsyncSrcForTag = function(tag) {
            var elements = document.getElementsByTagName(tag);
            var toLoad = [];
            for (var i = 0; i < elements.length; i++) {
                var e = elements[i];
                var src = e.getAttribute("src");
                var loaded = (src != undefined && src.length > 0 && src != 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
                if (loaded) continue;
                var asyncSrc = e.getAttribute("anima-src");
                if (asyncSrc == undefined || asyncSrc.length == 0) continue;
                if (anima_isHidden(e)) continue;
                toLoad.push(e);
            }
            toLoad.sort(function(a, b) {
                return anima_getTop(a) - anima_getTop(b);
            });
            for (var i = 0; i < toLoad.length; i++) {
                var e = toLoad[i];
                var asyncSrc = e.getAttribute("anima-src");
                e.setAttribute("src", asyncSrc);
            }
        };
        anima_pauseHiddenVideos = function(tag) {
            var elements = document.getElementsByTagName("video");
            for (var i = 0; i < elements.length; i++) {
                var e = elements[i];
                var isPlaying = !!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2);
                var isHidden = anima_isHidden(e);
                if (!isPlaying && !isHidden && e.getAttribute("autoplay") == "autoplay") {
                    e.play();
                } else if (isPlaying && isHidden) {
                    e.pause();
                }
            }
        };
        anima_loadAsyncSrc = function(tag) {
            anima_loadAsyncSrcForTag("img");
            anima_loadAsyncSrcForTag("iframe");
            anima_loadAsyncSrcForTag("video");
            anima_pauseHiddenVideos();
        };
        var anima_getTop = function(e) {
            var top = 0;
            do {
                top += e.offsetTop || 0;
                e = e.offsetParent;
            } while (e);
            return top;
        };
        anima_loadAsyncSrc();
        anima_old_onResize = window.onresize;
        anima_new_onResize = undefined;
        anima_updateOnResize = function() {
            if (anima_new_onResize == undefined || window.onresize != anima_new_onResize) {
                anima_new_onResize = function(x) {
                    if (anima_old_onResize != undefined) anima_old_onResize(x);
                    anima_loadAsyncSrc();
                };
                window.onresize = anima_new_onResize;
                setTimeout(function() {
                    anima_updateOnResize();
                }, 3000);
            }
        };
        anima_updateOnResize();
        setTimeout(function() {
            anima_loadAsyncSrc();
        }, 200);
    }
});