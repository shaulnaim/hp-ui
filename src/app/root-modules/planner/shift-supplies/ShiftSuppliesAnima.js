define(["exports"], function (exports) {
    exports.initAnima = function () {
        if (typeof String.prototype.endsWith !== 'function') {
            String.prototype.endsWith = function (suffix) {
                return this.indexOf(suffix, this.length - suffix.length) !== -1;
            };
        }
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            };
        }
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function (callback) {
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
            for (var i = obj.length >>> 0; i--;) {
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
            toArray(classList).forEach(function (className) {
                beforeComponent = beforeComponent && className != 'component';
                if (className != skipClass && className != componentClass && className != 'component' && !beforeComponent) {
                    toRemove.push(className);
                }
            });
            toRemove.forEach(function (className) {
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
            toArray(classList).forEach(function (className) {
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
        function clicksuppliesgJE8pBvbtxT1Handler(event) {
            var component = document.querySelector('.supplies-gJE8');
            if (isCurrentState(component, 'state2')) {
                try {
                    setTimeout(function () {
                        var component = document.querySelector('.supplies-gJE8');
                        component.addEventListener(transitionEvent, transitionsuppliesgJE8pBvbtxTstate2tostate1EndedHandler);
                        removeAllClassesButFirst(component, 'state2-to-state1');
                        addClass(component, 'state1');
                        addClass(component, 'state2-to-state1');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionsuppliesgJE8pBvbtxTstate2tostate1EndedHandler(event) {
            if (event.target.className.trim() == 'bitmap' || event.target.className.startsWith('bitmap ')) {
                var component = document.querySelector('.supplies-gJE8');
                component.removeEventListener(transitionEvent, transitionsuppliesgJE8pBvbtxTstate2tostate1EndedHandler);
            }
        }
        child = document.querySelector('.supplies-gJE8 .rectangle1');
        if (child) {
            child.addEventListener('click', clicksuppliesgJE8pBvbtxT1Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .supplies-gJE8 .rectangle1');
        }
        function resetsuppliesgJE8pBvbtxT() {
            var component = document.querySelector('.supplies-gJE8');
            if (!component) {
                return;
            }
            component.addEventListener(transitionEvent, transitionsuppliesgJE8pBvbtxTstate2tostate1EndedHandler);
            removeAllClassesButFirst(component, 'state2-to-state1');
            addClass(component, 'state1');
            addClass(component, 'state2-to-state1');
        }
        function clicksuppliesgJE8pBvbtxT2Handler(event) {
            var component = document.querySelector('.supplies-gJE8');
            if (isCurrentState(component, 'state1')) {
                try {
                    setTimeout(function () {
                        var component = document.querySelector('.supplies-gJE8');
                        component.addEventListener(transitionEvent, transitionsuppliesgJE8pBvbtxTstate1tostate2EndedHandler);
                        removeAllClassesButFirst(component, 'state1-to-state2');
                        addClass(component, 'state2');
                        addClass(component, 'state1-to-state2');
                    }, 0);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        function transitionsuppliesgJE8pBvbtxTstate1tostate2EndedHandler(event) {
            if (event.target.className.trim() == 'bitmap' || event.target.className.startsWith('bitmap ')) {
                var component = document.querySelector('.supplies-gJE8');
                component.removeEventListener(transitionEvent, transitionsuppliesgJE8pBvbtxTstate1tostate2EndedHandler);
            }
        }
        child = document.querySelector('.supplies-gJE8 .rectangle2');
        if (child) {
            child.addEventListener('click', clicksuppliesgJE8pBvbtxT2Handler);
            child.style['cursor'] = 'pointer';
        } else {
            console.log('Could not find element at: .supplies-gJE8 .rectangle2');
        }
        anima_isHidden = function (e) {
            if (!(e instanceof HTMLElement)) return !1;
            if (getComputedStyle(e).display == "none") return !0; else if (e.parentNode && anima_isHidden(e.parentNode)) return !0;
            return !1;
        };
        anima_loadAsyncSrcForTag = function (tag) {
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
            toLoad.sort(function (a, b) {
                return anima_getTop(a) - anima_getTop(b);
            });
            for (var i = 0; i < toLoad.length; i++) {
                var e = toLoad[i];
                var asyncSrc = e.getAttribute("anima-src");
                e.setAttribute("src", asyncSrc);
            }
        };
        anima_pauseHiddenVideos = function (tag) {
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
        anima_loadAsyncSrc = function (tag) {
            anima_loadAsyncSrcForTag("img");
            anima_loadAsyncSrcForTag("iframe");
            anima_loadAsyncSrcForTag("video");
            anima_pauseHiddenVideos();
        };
        var anima_getTop = function (e) {
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
        anima_updateOnResize = function () {
            if (anima_new_onResize == undefined || window.onresize != anima_new_onResize) {
                anima_new_onResize = function (x) {
                    if (anima_old_onResize != undefined) anima_old_onResize(x);
                    anima_loadAsyncSrc();
                };
                window.onresize = anima_new_onResize;
                setTimeout(function () {
                    anima_updateOnResize();
                }, 3000);
            }
        };
        anima_updateOnResize();
        setTimeout(function () {
            anima_loadAsyncSrc();
        }, 200);
    }
});