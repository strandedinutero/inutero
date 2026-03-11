
#cs #cs210 

Exception hierarchies:
- Exceptions are regular classes -> there can be sub and super types
- If an exception is declared to be caught, all of its subtypes can also be caught by the same statement
- Catch statements still execute in order so if there is a catch for an exceptions subtype, it would need to come before the supertype because of the reason above ^^ (the subtype exception would be caught by the supertype catch before it is caught by its native catch)
- Exception hierarchies are useful for dealing with duplication in code because they allow you to abstract multiple types of exceptions as one common exception -> the allergy + not hungry => didnt eat example

Unchecked exceptions:
- Unchecked exceptions can be tried and caught just like checked exceptions, an example of this would be an arithmetic exception (dividing by zero)
- To keep the program from dying, unchecked exceptions need to be caught

Assertions:
- Assertions have access to the private data within the class so checking the internal state is easy

Main notes:
**Runtime exceptions** can be thrown by a method, and do not need to be mentioned in the method signature. They also do not force the calling method to “try” to call the method. The calling method can, however, surround the call with try catch if they want to catch a runtime exception.

**To declare a runtime exception**, extend “RuntimeException” instead of “Throwable” or “Exception”.

**Assert statements** are used inside methods to assert class invariants (something that is always true about the class, like a binary search tree must always be sorted).  Asserts are especially useful in private methods, and should only be used to discover bugs prior to product release.

**Exceptions can extend other exceptions**. You can catch all subtypes of an exception by catching the super-exception instead!