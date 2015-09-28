# Pixel Explorer

Explore the screen and look for the pixels with the desired color. Optionally draw the output.

## Installation

    npm install pixel-explorer

## API

### explore(x, y, color, size)

Explores the rectangle with the length of the side equal to `size` for the
`color`. The rectangle begins at `x` and `y` of the screen.

Returns an array of objects containing x and y coordinates of the
pixels.

```javascript
var pixelExplorer = require('pixel-explorer');

pixelExplorer.explore(350, 400, '423c42', 6);
// => [{x: 351, y: 400}, {x: 351, y: 401}, {x: 355, y: 400},
//     {x: 352, y: 409}, {x: 352, y: 403}]
```

### draw(x, y, color, size)

Explores the area for the pixels and draws the result in the console.

```javascript
var pixelExplorer = require('pixel-explorer');

pixelExplorer.draw(350, 400, '423c42', 6);

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
