
#cs #cs210 

**To find an element in a collection, you must override equals and hashcode for its type.**

- If your code is not able to find a particular Key in the HashMap (when you know you put it in), it may be because the implementation is comparing the key’s object identity as opposed to its object contents.  Fix that by overriding hashCode() and equals() in the Key class (whatever type your Key is), and select the contents upon which you would like to base equality.
- Before you override equals the only objects that are equivalent to any object is the object itself.
- When you override equals you are essentially making bigger groups of Fruit objects equivalent to each other, any two objects with the same name and color will be considered to be equivalent (fruit example)

Eg, if the dots represent objects and the circles around them represent equivalence classes:
![[Pasted image 20260305000221.png]]
Overriding equals transforms the diagram to this:
![[Pasted image 20260305000241.png]]
But now all the objects in the same equivalence class have the same hash code, so hashCode must too be overridden.
Eg.
```
@Override  
public int hashCode() {  
    int result = name.hashCode();  
    result = 31 * result + color.hashCode();  
    return result;  
}
```
Naturally, the portions of the object that I look at to decide if two objects are equals() to each other have to be considered when I compute the hashCode for an object. So the results of both the hashCode() and equals() methods are completely determined by the contents of the name and color fields of the object.