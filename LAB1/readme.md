JS is single threaded, synchronous language
# eventloop
- stack is used in backtracking
- promise-
  - pending
  - resolve/error but not immediate
  - it takes maximum time await keyword
 
 
 
# asyn triggers:
- 1.timers
- 2.network
- 3.events:click handlers & other DOM
- eventloop checks if the stack is empty and then pulls the next task
- callback function: ex.setTimeout