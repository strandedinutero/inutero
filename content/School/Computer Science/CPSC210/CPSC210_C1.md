
#cs #cs210

## a method is considered robust when every potential input is handled

- For example when a requires clause does not specify a range in the input domain that method would not be considered very robust

Throwing and catching exceptions: ie redundancy
 - A **call-stack** is formed when one method calls another.  If a() called b(), we would see b() stacked on top of a().  We can then say that the return path out of b() would be back down into its calling method, a().
- When an exception is thrown -> the method immediately exits and nothing more in the method runs
- **But** if the exception is a checked exception the method must indicate it may be thrown
- We cant catch exceptions by using this architecture:
```
try { 
    methodName();
	} catch (ExceptionName e) {
		recovery code 
	} finally {
		code that always runs, 
		even if the catch throws an exception
	}
```
- We use throwing and catching exceptions to make more robust code as the constraints specced in the requires clause can not always be enforced
- In Java exceptions are objects of exception type
- When an exception is thrown in a method it immediately terminates and execution is returned to the **calling** method which can either catch the method or also be terminated and have execution return to it's caller and so forth...
- Catching a thrown exception looks like this:
  public void someMethod() { 
```
public void someMethod() { 
    try {
        ...
        int n = nthDayInYear(-1, -1, -1); ...
    } catch( IllegalValueException e ) {
        // Do something smart about the exceptional condition 
        // ie, handle the exceptional condition
    } 
    *...
}
```
- Where control flow after the catch block is executed returns to the block after the try construct labeled (...) (the catch clause can do something to improve the exceptional condition)
- Java has two types of exceptions:
	1: checked exceptions -> thrown and caught **or** method declares it can be thrown
	2: runtime exceptions

![[Pasted image 20260304180048.png]]
- User defined exceptions can be of type exception (checked) or of type Runtime Exception (unchecked) -> defining an exception is as simple as declaring a class that extends exception or runtime exception
- If you choose to **make the exception checked**, you are **requiring all methods that throw the exception to handle it or declare it in their method signature** and so on all the way up through the callers of the method and their callers, etc., until either some method handles the exception or the program terminates. However, choosing to make the exception type unchecked means that callers may not be aware the exception can occur.
- Checked exceptions should be used for recoverable conditions (ie if you can fix the problem)
- Unchecked exceptions should be used for for problems that cannot be fixed
- Note exceptions can be thrown from anywhere, including from within a catch block:
```
try {  
    amethod();  
} catch (Exception someException) {  
    throw new OtherException();  
}
```

Multiple Handlers:
- A try catch statement is not limited to only one catch statement - it can have multiple:(goes through each catch block in turn executing on the first match)

```
int n; 
try {
	n = nthDayInYear(-1, -1, -1);
	} catch (IllegalValueException ive) {
	    // Try again
	    n = nthDayInYear(1, 1, 1); 
	} catch (Exception e) {
	￼    // do nothing
	} catch (Error err) {
	    // do nothing for now 
	}
```

- A try catch blow can have a third block -> *finally*
- The finally block executes after the catch block whether or not the exception was actually caught, **or before** the method exits if an exception is thrown in the catch block:
```
try {  
    otherMethod();  
} catch (SomeException e) {  
    System.out.println("Never mind! We can handle that!");  
    throw new AnotherException();  
}  
finally {  
    System.out.println("this will print whether SomeException was caught or not");  
    System.out.println("Yes, even though AnotherException was thrown");  
}
```

Invariants:
- We can write more complete specs for a data abstraction by specifying an *invariant* for a method -> (what must be true before it can be ran and after it is run).

- We can verify the invariant(s) of a method holds by using *assert*:
	class Animal {
	
	    private void hasValidState() { 
	        assert getTimesFed() >= 0;
	    } 
	}

- Where if getTimesFed() >= 0 evaluated to true then control flows to the next statement in the method, if false an assertion error exception is thrown
- We can further implement it as follows: (check at the start and end of the method)

```
class Animal { ...
    public void recordLastFeeding(List<FeedingRecord> foodEaten) { 
        hasValidState();
        // do stuff
        hasValidState();
    } 
}
```

- If an assertion error is raised during invariant checking the method can handle it or pass it on to the caller 

