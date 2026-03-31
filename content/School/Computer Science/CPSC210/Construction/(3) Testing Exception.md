
#cs #cs210 

Testing exceptions:
- When testing exceptions you must test that they are thrown when expected to be thrown and not thrown when not expected to be thrown
- 
```
- A simple way to test exceptions within a JUnit test is to call a method, and then fail if the exception is caught when it shouldn't be:

try {  
anObject.aMethod(nonExceptionalInputs);  
} catch (SomeException e) {  
fail("I was not expecting SomeException!");  
}

- or fail if the exception is not thrown when it should have been:

try {  
anObject.aMethod(problematicInputs);  
fail("I was not expecting to reach this line of code!");  
} catch (SomeException e) {  
System.out.println("great!");  
}
```
