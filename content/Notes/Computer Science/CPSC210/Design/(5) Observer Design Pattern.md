#cs #cs210 #OOP #java

# The Observer Pattern

## Why Do We Need/Use It?

The observer pattern was designed to address situations where there is a one-to-many dependency between objects, where if one changes all dependents need to be notified.

In essence, the observer pattern allows for one or more objects to watch the state of one or more other objects.

- The ==watcher== is referred to as the *observer*
- the ==watched== object is referred to as the *subject*

![[content/images/Pasted image 20260413002817.png]]

## How Is It Setup?

*First* there is ==registration== where the observer registers with the subject such that the subject adds that observer to its list of observers.

*Second* there is ==notification== where when the subject's state changes it notifies the observers by calling its own notify method, the notify method then iterates through the list of observers calling an update method on each one.

### Push and Pull Models

When the subjects notifies it's observers it can also send an argument back to indicate the change (the push model), or it can send a reference to itself so that the observer can find out what changed for itself (the pull model).
![[content/images/Pasted image 20260413012235.png]]


- Subject is regular class or abstract class
- Observer is an interface
- Concrete subject (course) extends subject
- Concrete observer (student) implements observer
- notifyObservers is implemented in Subject
- notifyObservers is called in the concrete subject (course)
- update is implemented in the concrete observer (student)
- update is called in the subject 
- list of observers is maintained in subject


