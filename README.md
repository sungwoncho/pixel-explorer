# Pixel Explorer

[![Build Status](https://travis-ci.org/sungwoncho/pixel-explorer.svg?branch=master)](https://travis-ci.org/sungwoncho/pixel-explorer)

Explore the screen and look for the pixels with the desired color. Optionally draw the output.

## Installation

    npm install pixel-explorer

## API

### find(x, y, size, color)

Finds the pixels with the desired `color`. Search through all pixels in a
rectangle whose sides are of length `size`. The rectangle begins at `x` and `y`
of the screen.

Returns an array of objects containing x and y coordinates of the
pixels.

```javascript
var pixelExplorer = require('pixel-explorer');

pixelExplorer.find(350, 400, '423c42', 6);
// => [{x: 351, y: 400}, {x: 351, y: 401}, {x: 355, y: 400},
//     {x: 352, y: 409}, {x: 352, y: 403}]
```

### explore(x, y, size)

Explores the rectangle from `x` and `y` whose sides are of length `size`.

Returns an array of objects containing x and y coordinates, and the colors
of the pixels.

```javascript
var pixelExplorer = require('pixel-explorer');

pixelExplorer.find(350, 400, '423c42', 6);
// => [{x: 350, y: 406, color: '423c42'}, {x: 351, y: 402, color: 'fafafa'},
//     {x: 355, y: 403, color: '0f840f'}, {x: 352, y: 409, color: '000000'},
//     {x: 354, y: 400, color: 'fafafa'}]
```

### draw(x, y, size, color)

Explores the area for the pixels and draws the result in the console. The color
argument is optional. If not provided, output will contain all pixels.

```javascript
var pixelExplorer = require('pixel-explorer');

pixelExplorer.draw(350, 400, 6, '423c42');

// => Output
//  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
//  │     │ 350 │ 351 │ 352 │ 353 │ 354 │ 355 │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 400 │     │ X   │     │     │     │ X   │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 401 │     │ X   │     │     │     │     │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 402 │     │     │ X   │     │     │     │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 403 │     │     │ x   │     │     │     │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 404 │     │     │     │     │     │     │
//  ├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
//  │ 405 │     │     │     │     │     │     │
//  └─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

## License

MIT
