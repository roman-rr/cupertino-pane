<p align="center">
     <img alt="Cupertino Panes is multi-functional panes & boards with touch technologies" src="docs/logo/logo-1-mini.jpg" width="600" />
</p>

# Cupertino Panes

[![CircleCI](https://circleci.com/gh/roman-rr/cupertino-pane.svg?style=svg)](https://circleci.com/gh/roman-rr/cupertino-pane)
![npm](https://img.shields.io/npm/v/cupertino-pane)
![npm](https://img.shields.io/npm/dm/cupertino-pane?color=%23007DC5)
![NPM](https://img.shields.io/npm/l/cupertino-pane?color=%23007DC5)
[![Code Style](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![Financial Contributors on Open Collective](https://opencollective.com/cupertino-pane/all/badge.svg?label=financial+contributors)](https://opencollective.com/cupertino-pane)


<!-- <img src="https://user-images.githubusercontent.com/10646478/79794348-4846bc00-837c-11ea-8b74-7c71fac120aa.png" 
     align="right" alt="Cupertino Pane logo Roman Antonov" width="260px" height="421px"> -->
     
Cupertino Panes is multi-functional panes & boards with touch technologies. <br>

* **Small.** 5kb (minified and gzipped). No dependencies.
* **Accelerated.** Hardware accelerated transitions and amazing native behavior.
* **Progressive.** Useful for mobile/web/hybrid applications.

> Right like in Apple Maps, Apple Stocks, Apple Music and other modern apps.

⭐ We appreciate your star, it helps!

* [Demonstration](#demonstration)
* [Financial Contributors](#financial-contributors)
* [Supporting platforms](#supporting-platforms)
* [Getting Started](#getting-started)
* [Settings](#settings)
* [Public Methods](#public-methods)
* [Attributes](#attributes)
* [Keyboard issues](#keyboard-issues)
* [Future Goals](#future-goals)
* [Contributors](#contributors)
* [Changelog](https://github.com/roman-rr/cupertino-pane/blob/master/CHANGELOG.md)
* [License](#license)

## Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/cupertino-pane/contribute)]

#### Individuals

<a href="https://opencollective.com/cupertino-pane"><img src="https://opencollective.com/cupertino-pane/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/cupertino-pane/contribute)]

<a href="https://opencollective.com/cupertino-pane/organization/0/website"><img src="https://opencollective.com/cupertino-pane/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/1/website"><img src="https://opencollective.com/cupertino-pane/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/2/website"><img src="https://opencollective.com/cupertino-pane/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/3/website"><img src="https://opencollective.com/cupertino-pane/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/4/website"><img src="https://opencollective.com/cupertino-pane/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/5/website"><img src="https://opencollective.com/cupertino-pane/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/6/website"><img src="https://opencollective.com/cupertino-pane/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/7/website"><img src="https://opencollective.com/cupertino-pane/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/8/website"><img src="https://opencollective.com/cupertino-pane/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/cupertino-pane/organization/9/website"><img src="https://opencollective.com/cupertino-pane/organization/9/avatar.svg"></a>

## Demonstration
- [Base live](https://output.jsbin.com/fuhisey)
- [Z-Stack live](https://output.jsbin.com/wedegox)
- [Draggable over live](https://jsbin.com/hamedec)
- [Prevent dismiss live](https://output.jsbin.com/keravam)
- [Top-to-bottom live](https://output.jsbin.com/muhabuf)
- [3D Push live](https://output.jsbin.com/tutegad)
- [Overflow top live](https://output.jsbin.com/baguroy)
- [Overflow top-middle live](https://output.jsbin.com/piwecad)
- [Follower live](https://output.jsbin.com/xogavec)
- [Apple Clips live](https://output.jsbin.com/luqaxud)
- [Bulletin live](https://output.jsbin.com/maqigod)
- [Starbucks live](https://output.jsbin.com/jayicip)
- [Backdrop drag-opacity live](https://output.jsbin.com/riwahab)

<div style="display:flex;flex-wrap:wrap;">
  <img src="https://github.com/roman-rr/cupertino-pane/blob/master/docs/images/maps.gif?raw=true" alt="Cupertino Pane - Roman Antonov" width="200px">
  <img src="https://github.com/roman-rr/cupertino-pane/blob/master/docs/images/bulletin.gif?raw=true" alt="Cupertino Pane - Roman Antonov" width="200px">
  <img src="https://github.com/roman-rr/cupertino-pane/blob/master/docs/images/overflow.gif?raw=true" alt="Cupertino Pane - Roman Antonov" width="200px">
  <img src="https://github.com/roman-rr/cupertino-pane/blob/master/docs/images/starbucks.gif?raw=true" alt="Cupertino Pane - Roman Antonov" width="200px">
</div>

## Supporting platforms
We officially support the last two versions of every major browser. Specifically, we test on the following browsers
| Browser | Operating system |
| - | - |
| **Chrome** | Android, Windows, macOS, and Linux |
| **Firefox** | Windows, macOS, and Linux |
| **Safari** | iOS |
| **WkWebView** | iOS |
| **Android WebView** | Android |

## Getting Started
### Install via NPM
```sh
npm install cupertino-pane
```
### Use from CDN
If you don't want to include Cupertino Pane files in your project, you may use it from CDN. The following files are available:
```html
<script src="https://unpkg.com/cupertino-pane/dist/cupertino-pane.js"></script>
<script src="https://unpkg.com/cupertino-pane/dist/cupertino-pane.min.js"></script>
```
### Include Files To App/Website
```html
<!DOCTYPE html>
<html lang="en">
<body>
    ...
    <script src="path/to/cupertino-pane.min.js"></script>
</body>
</html>
```
### Add HTML Layout
```html
<div class="cupertino-pane">
    <h1>Header</h1>
    <div class="content">Content</div>    
</div>
```
### Additional CSS Styles
```css
.cupertino-pane {
    margin: 20px;
}
```
### Initialize Cupertino Pane
```html
<body>
  ...
  <script>
  window.onload = function () {
    var myPane = new CupertinoPane(
      '.cupertino-pane', // Pane container selector
      { 
        parentElement: 'body', // Parent container
        breaks: {
            middle: { enabled: true, height: 300, bounce: true },
            bottom: { enabled: true, height: 80 },
        },
        onDrag: () => console.log('Drag event')
      }
    );
    myPane.present({animate: true});
  };
  </script>
</body>
```
### jQuery example
```javascript
$(document).ready(function () {
  //initialize pane when document ready
  var myPane = new CupertinoPane('.cupertino-pane', { /* ... */ });
  myPane.present({animate: true});
});
```
### As an ES module
Cupertino Pane package comes with ES module version which can be used where supported or with bundlers like Webpack or Rollup:
```javascript
import { CupertinoPane, CupertinoSettings } from 'cupertino-pane';

let settings: CupertinoSettings = { /* ... */ };
let myPane = new CupertinoPane('.cupertino-pane', settings);
    myPane.present({animate: true});
```

### Class creation
You can pass html element or string selector to class constructor
```javascript
// String selector
new CupertinoPane('.cupertino-pane');

// HTML element
let element = document.querySelector('.cupertino-pane');
new CupertinoPane(element); // HTMLElement
```

## Settings
### Common configuration
| Property | Type | Default | Description |
| - | - | - | - |
| **inverse** | `boolean` | false | On `true` will change pane direction from `bottom-to-top` to `top-to-bottom` |
| **parentElement** | `string` | Parent element selector | Element selector where pane will rendered |
| **followerElement** | `string` | Follower element selector | Element with selector will following pane transitions |
| **fitHeight** | `boolean` | 'false' | Automatically calc and define content height as top breakpoint. Middle and bottom breakpoint will be disabled |
| **maxFitHeight** | `number` | 'null' | Define a maximum possible automatically calculated height with `fitHeight` property |
| **fitScreenHeight** | `boolean` | 'true' | On `true` will automatically adjust pane maximum height to screen height |
| **pushElement** | `string` | Push element selector | DOM Element will be pushed and scaled |
| **pushMinHeight** | `number` | Most bottom available point | Height from which 3d push effect will be started |
| **pushYOffset** | `number` | Negative margin value to place pushed element upper |
| **initialBreak** | `'top' \| 'middle' \| 'bottom'` | 'middle' | Initial pane position |
| **darkMode** | `boolean` | false | Initial pane styles |
| **backdrop** | `boolean` | false | Dimmed overlay will rendered with pane if `true` |
| **backdropOpacity** | `number` | 0.4 | Dimmed overlay opacity value |
| **animationType** | `string` | 'ease' | Base transition timing function |
| **animationDuration** | `number` | 300 | Transition property duration |
| **bottomClose** | `boolean` | false | Close pane with drag to bottom breakpoint |
| **fastSwipeClose** | `boolean` | false | Close pane with fast drag to bottom direction |
| **fastSwipeSensivity** | `number` | 3 | Increase value and fast swipes become heavier |
| **freeMode** | `boolean` | false | On `true` will remove automatical magnetic effects to near breakpoint |
| **lowerThanBottom** | `boolean` | true | By default allow user to drag pane lower than bottom position. On `false` will automatically place pane to bottom position on lower than bottom attemption |
| **upperThanTop** | `boolean` | false | Allow user to drag pane upper than maximum top position. Useful with bulletin style without overflow-y |
| **touchAngle** | `number` | null | Allowable angle (in degrees) to trigger touch move |
| **buttonDestroy** | `boolean` | true | Determinate whetever close button will render or not |
| **bottomOffset** | `number` | 0 | Margin bottom for pane from screen bottom point |
| **topperOverflow** | `boolean` | true | Ability to scroll content inside pane if topper point reached |
| **topperOverflowOffset** | `number` | 0 | Offset from screen bottom to the end of overflow content |
| **showDraggable** | `boolean` | true | Render rectangular shape on the top of pane
| **draggableOver** | `boolean` | true | Render rectangular shape over a pane
| **clickBottomOpen** | `boolean` | true | If bottom position reached, simple click to pane will open pane to the next upper point |
| **dragBy** | `string[]` | null | Array of selectors for whom elements drag events will be attached. By default drag events attached to pane element. If you are about to drag only with draggable component set option to ['.pane .draggable'] |
| **preventClicks** | `boolean` | true | Prevent accidental unwanted clicks events during move gestures |
| **handleKeyboard** | `boolean` | true | Pane will be pushed up on open keyboard (only for cordova/capacitor/phonegap applications) |
| **touchMoveStopPropagation** | `boolean` | false | If enabled, then propagation of "touchmove" will be stopped |
| **simulateTouch** | `boolean` | true | Simulate touch events for Desktop |
| **passiveListeners** | `boolean` | true | (Indicates that the function specified by listener will never call preventDefault()) |
### Breakpoints
Package now supports 3 base breakpoints
```javascript
const pane = new CupertinoPane('.cupertino-pane', { 
  breaks: {
    top: { // Topper point that pane can reach
      enabled: true, // Enable or disable breakpoint
      height: 700, // Pane breakpoint height
      bounce: true // Bounce pane on transition
    },
    middle: { ... },
    bottom: { ... }
  }
});
```
Bottom and middle heights normalized accross devices by default 

Default top height: `window.screen.height - (135 * 0.35)`

Add property `bounce` to break and enjoy transitions in apple stocks style with `cubic-bezier(0.175, 0.885, 0.370, 1.120)`

### Callbacks
The function that executes when the event fires.
| Name | Type | Description |
| ---- | ---- | ----------- |
| **onDidDismiss** | `void: () => {}` | Call after pane will dissapeared |
| **onWillDismiss** | `void: () => {}` | Call before pane will dissapeared |
| **onDidPresent** | `void: () => {}` | Call after pane will present |
| **onWillPresent** | `void: () => {}` | Call before panel will present |
| **onDragStart** | `void: () => {}` | Call when detect user drag event on pane |
| **onDrag** | `void: () => {}` | Call executes on each new position of pane |
| **onDragEnd** | `void: () => {}` | Executes when drag event complete |
| **onBackdropTap** | `void: () => {}` | Call when user tap backdrop overlay |
| **onTransitionStart** | `void: () => {}` | Executes before auto transition and animation start |
| **onTransitionEnd** | `void: () => {}` | Executes when transition and animation complete |

## Public Methods
### present({animate: **boolean = false**})
Will render pane DOM and show pane with setted params.
```javascript
myPane.present();
```
### moveToBreak('top' | 'middle' | 'bottom')
Will change pane position with animation to selected breakpoint.
```javascript
myPane.moveToBreak('top');
```
### moveToHeight(val: **number**)
Will move pane to exact height with animation. Breakpoints will saved. 
```javascript
myPane.moveToHeight(575);
```
### hide()
Dissappear pane from screen, still keep pane in DOM.
```javascript
myPane.hide();
```
### destroy({animate: **boolean = false**})
Remove pane from DOM and clear styles
```javascript
myPane.destroy();
```
### isHidden()
Determinate if pane position was moved out of screen, but pane still exist in DOM.
true - in DOM but not visible, false - in DOM and visible, null - not rendered
```javascript
if (myPane.isHidden()) {
    myPane.moveToBreak('top');
}
```
### currentBreak()
Method return current break position in text format ('top' | 'middle' | 'bottom)
```javascript
if (myPane.currentBreak() === 'top') {
    myPane.moveToBreak('bottom');
}
```
### disableDrag()
Method disable any drag actions for pane
```javascript
myPane.disableDrag();
```
### enableDrag()
Method enable any drag actions for pane
```javascript
myPane.enableDrag();
```
### backdrop({show: **boolean = true**})
Show/Hide backdrop method 
```javascript
myPane.backdrop({show: true}); // show
myPane.backdrop({show: false}); // hide
```
### setDarkMode({enable: **boolean = false**})
Enable dark scheme color for some elements
```javascript
myPane.setDarkMode({enable: true}); // enable darkmode
```
### setBreakpoints(breakpoints: **PaneBreaks**)
Method updates breakpoints configuration for rendered Pane
```javascript
myPane.setBreakpoints({
  top: {
      enabled: true,
      height: 700,
      bounce: true
  },
  middle: { ... },
  bottom: { ... }
});
```
### preventDismiss(**boolean = false**)
Use this method to prevent dismiss events. Use `onWillDismiss()` callback to listen if dismiss event prevented. 
```javascript
const settings = {
  ...
  onWillDismiss: (e) => {
    if (e) {
      console.log(e.prevented);
    }
  }
}

const myPane = new CupertinoPane('.cupertino-pane', settings);
myPane.present({animate: true});
myPane.preventDismiss(true);
```
### calcFitHeight()
Force re-calculate height for `fitHeight: true` in cases when height was calculated not properly.
```javascript
myPane.calcFitHeight();
```


## Attributes
### hide-on-bottom
Set for element to automaticaly hide on reach bottom breakpoint.
```html
<div class="cupertino-pane">
    <h1>Header</h1>
    <div class="content" hide-on-bottom>Content</div>    
</div>
```
### overflow-y
Set for element with overflow ability. 
By default using for full pane area, but in some cases good useful with header.
```html
<div class="cupertino-pane">
    <h1>Header</h1>
    <div class="content" overflow-y>Content</div>    
</div>
```

## Keyboard issues
Inputs and textareas in pane may push mobile keyboard on devices, and close pane visibility. Next cases describe how to proper handle this issues.
### Browser/WebView
User's must use input focus/blur callback's to handle keyboard. Example: 
```html
<input onfocus="keyboardOpen()" onblur="keyboardClose()" />
```
```javascript
function keyboardOpen () {
  pane.moveToBreak('top'); // or moveToHeight(current + keyboardHeight);
}
function keyboardClose () {
  pane.moveToBreak('middle'); // or moveToHeight(current - keyboardHeight);
}
```
### Cordova/Phonegap/Capacitor
By default, we are now handle keyboard in hybrid mobile applications and push pane to exact keyboard height. 
If you would like handle this part by yourself, set option `handleKeyboard: false`.

## Future Goals
- [Bugs] Pane configuration classes + variables [#133](https://github.com/roman-rr/cupertino-pane/issues/133)
- [Enhancement] Z-stack with N cards
- [Feature] Chevron-up draggable
- [Platforms] RN - bridge to existed swift panes
- [Platforms] Expo wrapper + Example + Twitter
- [Accurance] Draw experiment application (Normal/TimeStamp/Native) - Native Touch Plugin
- [Feature] R-Pane (Rectangular pane - safari video frame example)
- [Docs] (Traffic + Carbon ads) -> Docs engine <!-- Ask Vladimir first + check https://github.com/denoland/doc_website https://github.com/ionic-team/ionic-docs (Swiper, F7, Netlify, Gatsby, DO, GH pages) -->
- [Showcase] No background - glow for view + (collaboration with arwes)
- [Showcase] Materials (glass/metal/blur) <!-- https://codepen.io/TurkAysenur/full/ZEpxeYm + glass + metal three -->
- [Showcase] Apple Music F7
- [Platforms] C++ QT version

## Contributors
We are welcome contributions of all kinds from anyone. 
Please review the [contributing](https://github.com/roman-rr/cupertino-pane/blob/master/CONTRIBUTING.md) guideline.

## License
Licensed under the MIT License. [View license](/LICENSE).
