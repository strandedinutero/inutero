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


```python
import numpy as np  
import matplotlib.pyplot as plt  
  
x = np.linspace(-3, 3, 25)  
y = np.linspace(-3, 3, 25)  
X, Y = np.meshgrid(x, y)  
  
M = X**2  
U = np.ones_like(M)  
V = M  
L = np.sqrt(U**2 + V**2)  
U = U / L  
V = V / L  
  
plt.figure(figsize=(8, 6))  
plt.quiver(X, Y, U, V, angles="xy")  
plt.xlim(-3, 3)  
plt.ylim(-3, 3)  
plt.xlabel("x")  
plt.ylabel("y")  
plt.title(r"Direction Field for $\frac{dy}{dx} = x^2$")  
plt.grid(True)  
plt.tight_layout()  
plt.savefig("direction-field-x-squared.png", dpi=300, bbox_inches="tight")  
plt.show()

```
![[direction-field-x-squared.png]]
