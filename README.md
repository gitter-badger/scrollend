# Scrollend
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/LegitTalon/scrollend?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Flexible scrollend event for the browser.

# Install

```
npm install scrollend --save-dev
```

or

[Download the latest release.](https://github.com/LegitTalon/scrollend/releases)

# Use

```javascript
// Skip this line if you are not using browserify.
var Scrollend = require('scrollend');

var scrollend = new Scrollend();

scrollend(function() {
  console.log('done scrolling');
});

scrollend(function() {
  console.log('another done scrolling event.');
});
```

# Bugs/Improvements

[Check out the issue queue](https://github.com/LegitTalon/scrollend/issues)

PRs welcome :wink:

