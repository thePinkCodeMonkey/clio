## Where to begin

This question seems easier than the previous one.  So I am looking for the catch 22.  The constraints of the problem is pretty straight forward, a grid populated by '0' with one '1' somewhere in the grid.

There are few approaches to this problem, as we can simply do 2 loops and keep track of the index.  I even thought about staring with the last inner array.

But there is really no point for that, since it's just simple math to figure out the offset from the bottom.  JavaScript has nice native functions to find an element within an array, so I used that instead.
