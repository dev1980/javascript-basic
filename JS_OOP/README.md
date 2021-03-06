
## Object Oriented Programming
OOP, or Object Oriented Programming, is one of the major approaches to the software development process. 
In OOP, objects and classes are used to organize code to describe things and what they can do.

In this course, you'll learn the basic principles of OOP in JavaScript including the this keyword, prototype chains, constructors, and inheritance.

# Understanding Scope
# Compilation and Interpretation
# Closures
# Hoisting (variables and functions)
# How functionwork in JS
# How JavaScript work and execution contest
# How JavaScript executed and call stack


## Objects and Prototypes In-depth 
01 - Creating Object
02 - Function execution and the this reference
03 - prototypes

# Objects
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.


# An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

Usually, the figure brackets {...} are used. That declaration is called an object literal.

