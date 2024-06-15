console.log("JavaScript Code Execution")

/*

Javascript has two type of execution phase.

1: Global CE
2: Function CE

when the js code gets executed it breaks down into 2 part

1: Memory Creation Phase: 
   -In this phase memory is allocated to variables and other code.
2: Execution Phase: In this phase whole code get executed

*/

/*

______Code Execution Process Steps_____
    -1: Global Execution : In this the whole code gets executed and it is get allocated 
        inside ("this")
    -2: Memory Creation Phase: in this memory get allocated in this phase(first Cycle)
        example: let val1 = 10; this is how memory get allocated.
        Note: first in a variable the value that assigned is "undefined", for a function its definition
        get allocated. 
    -3: Execution Phase: in this phase the whole value in the get allocated to the variable which is
        undefined in the memory creation phase

    Note: when ever a function gets executed each time a new executable environment get created

*/
