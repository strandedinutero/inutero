
#cs #abstraction #cs210 

Interfaces: 
- An interface is a list of methods that **must** be implemented by classes -> but the interface does not actually specify the implementation of those methods
- The @Override annotation is used to annotate methods in a subtype that override the supertype method implementation (ie fly called on an airplane would not flap its wing's)
- A Java class can implement 1 << interfaces (as many as you want really). For example an airplane can implement the flyer interface and the cafe interface making it implement the methods found in both of those.
- **You can only call the declared methods on an object** (ie methods tied to the apparent type)
- If a class implements two interfaces which both have a method of the same name, the class only needs to implement that method once.

Inheritance:
- Inheritance := We can call all the superclass methods on the subclass but not the reverse (Injective from super to sub)
- **Private fields + methods are only visible in the class they are declared in**
- If class A extends class B it inherits all of the behaviour of class B and can also add to it.
- Classes can override their superclass methods by redefining the method with the same name and signature
- **The same follows as with interfaces -> the declared type dictates which methods can be called on it**
- Java works up the hierarchy to find implementations (this is called method dispatching)
- If you have a type hierarchy: A <- B <- C then you can do A aa = new B() or A aa = new C() or B bb = new C() but not working up (remember methods are injective from super to sub type) (ie we cant declare an object of type C and then try to call type A methods on it).
  
Extending classes:
** If you have a type hierarchy: A <- B <- C then you can do A aa = new B() or A aa = new C() or B bb = new C() but not working up (remember methods are injective from super to sub type) (ie we cant declare an object of type C and then try to call type A methods on it). **
^^ Subclasses can make their own methods, thus they are not available to variables declared as their supertype (injective)
- When you extend a class you get access to all the supertypes methods but its not necessary to implement it, unlike when implementing an interface

Method dispatching:
- To determine which method implementation to use for a variable, ie if there are multiple of the same method as in the case of method overriding -> Java works up the hierarchy starting at the **INSTANTIATED** type of the variable not the declared type.
- For methods to be the same they must have the same name and signature, and parameters

Super calls:
- Using the super prefix in method calls tells Java to use the superclasses implementation -> super() calls the superclasses constructor and super.methodName() calls the super classes version of methodName()

