# Wait.js
A javacript plugin for correlating functionality with the position of a DOM element relative to the viewport. Use this plugin to control what happens when a HTML element becomes visible within the viewport.

## Getting Started

Wait is available on bower:

``` bash
bower install wait.js
```

The plugin currently (but not indefinitely) depends on jQuery & Underscore.

Wait supports both **AMD** and **CommonJS** inclusion and will be available as the browser global ```wait``` if included via a script tag.

## Usage
With jQuery and Underscore available, in your main script you need to first identify what DOM element you are waiting to become visible within the viewport:

``` javascript
// Identify the dom element in question
var $myEl = $(".my-dom-element");

// When the dom element comes into view due to page scroll or window resize, a "visible" event
// gets triggered on the element, so first add your listener
$myEl.on("visible", function() {
    alert("My dom element has shown up in the viewport");
});

// Then simply invoke wait on the element
wait($myEl);
```

## Options
If you prefer a callback approach to an event listener you can pass an object as the second parameter with a **callback** property:

``` javascript
wait($myEl, {
    callback: function() {
        alert("My dom element has shown up in the viewport");
    }
});
```

You can also specify an **offset** property in pixels if you want the dom element to be within *X* amount of pixels from the viewport when the event or callback is called. It defaults to 0 pixels if none is specified. For example:

``` javascript
wait($myEl, {
    offset: 20
});
```