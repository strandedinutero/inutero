
#cs #abstraction #cs210 

Abstract classes: 
- Abstract classes are the midpoint between a regular class and an interface, in that if a class extends an **abstract class** then it inherits the regular methods all the same, but must implement all of the abstract methods similar to an interface
- Abstract class := Abstract methods must be implemented, regular methods inherited.
- Abstract method declaration:
		abstract visibility returnType methodName(param p);
- Abstract classes are used for generic concepts that have default behaviour but should not be made into objects -> ie you dont instantiate an animal but you would a dog
- **Note:** if an abstract class implements an interface it does not need all of the methods from the interface to be present -- but all subclasses of the abstract class do.
- **You cannot instantiate an abstract class (cant make objects)**
- Abstract classes capture the 'essence of things'
- Method **overloading** occurs when two methods in the same class have the same name but different parameter lists. We use method overloading when we want to provide implementations of the same behaviour for different input parameters. Method **overriding** occurs when a subclass provides a method of the same name and same signature as a method in a superclass. We use method **overriding** when we want to extend, or provide a different implementation of, a behaviour inherited from a supertype.