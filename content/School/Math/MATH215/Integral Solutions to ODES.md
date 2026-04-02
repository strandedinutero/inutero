---
jupyter:
  jupytext:
    cell_metadata_filter: -all
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.19.1
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---
### Plotting the function $y' = t - y^2$

```python
import numpy as np  
import matplotlib.pyplot as plt  
  
f = lambda t,y: -t*y
def slopefield(f,tinterval,yinterval,tstep,ystep):
    t = np.arange(tinterval[0],tinterval[1],tstep)
    y = np.arange(yinterval[0],yinterval[1],ystep)
    L = 0.7*min(tstep,ystep)
    for i in range(len(t)):
        for j in range(len(y)):
            slope = f(t[i],y[j])
            theta = np.arctan(slope)
            dy = L*np.sin(theta)
            dt = L*np.cos(theta)
            plt.plot([t[i],t[i] + dt],[y[j],y[j] + dy],'b')
f = lambda t,y: t - y**2
slopefield(f,[0,3],[-1,2],0.2,0.2)
plt.savefig("direction-field-x-squared.png", dpi=300, bbox_inches="tight")  
plt.show()

```
![[direction-field-x-squared.png]]
