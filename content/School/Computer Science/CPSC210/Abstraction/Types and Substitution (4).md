#cs #cs210 #abstraction 

## objects in java have a **declared** type and an **instantiated** type

- Note these are sometimes instead referred to as `apparent` and `actual` types.

Variable declaration when creating an object dictates the object's apparent type and initialization/instantiation sets the actual type:

```
ApparentTypeName object = new ActualTypeName();
```

This can also be performed in a method signature by using the parameter declaration:

```
public void method(ApparentTypeName paramName)
```

Setting the actual type of an object can also be done by passing the object as an argument:

```
methodName(new ActualTypeName());
```

## The APPARENT type of a variable must be either the same type or supertype of the object

- The distance of supertype is arbitrary 

## The APPARENT type also dictates which methods can be called on the object 

- Whereas the **actual** type of the object determines it's method implementation (what methods are called).


## type substitution

- To be substitutable, a subtype must support the same operations as the supertype. The Java compiler checks that this fact is true at the (syntactic) method signature level; that is, the subtype has a definition for each operation that matches the definition of the operation in the supertype

For a subtype to be substitutable for a supertype, the pre-condition of a method defined in the subtype must be the same as or weaker than the pre-condition specified for the method of the same signature in the supertype (requires clause)

'ie if the supertype has a method that takes arguments x, y, z, then to substitute the subtype, it's respective method would need arguments x, y, z or less' 


The EFFECTS are sometimes referred to as the post-condition of the method. For a subtype to be substitutable for a supertype, the post-condition of a method defined in the subtype must be the same or stronger than the post-condition specified for the method of the same signature in the supertype

A 'parameter' is a local variable declaration, so a parameter declaration sets the **apparent type** of the variable it is declaring. 

When passing an argument into a method, the argument 'must' have a declared type of the 'same type', or a 'subtype' of the parameter's type.





