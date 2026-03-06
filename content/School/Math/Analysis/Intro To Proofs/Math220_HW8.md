#math #math220 #proof
## Solutions to Homework 8

### 1.

**Proof**

If $R$ and $S$ are two equivalence relations on a set $A$, then for $R \cup S$ to be an equivalence relation it must also be reflexive, symmetric, and transitive. We can show this is false with a counterexample.

Let $A={a,b,c}$ and let $R,S\subseteq A\times A$ be equivalence relations on $A$.

$$  
R = ({a,b}\times{a,b}) \cup ({c}\times{c})  
= {(a,a),(a,b),(b,a),(b,b),(c,c)}  
$$

$$  
S = ({a}\times{a}) \cup ({b,c}\times{b,c})  
= {(a,a),(b,b),(b,c),(c,b),(c,c)}  
$$

Then

$$  
R\cup S =  
{(a,a),(a,b),(b,a),(b,b),(b,c),(c,b),(c,c)}.  
$$

We see that $(a,b)\in R\cup S$ and $(b,c)\in R\cup S$, but $(a,c)\notin R\cup S$.

Therefore transitivity fails for $R\cup S$, so $R\cup S$ is **not** an equivalence relation.

---

### 2.

**Proof**

Let $R$ be a relation on $\mathbb{R}$ defined by

$$  
xRy \iff \cos^2(x)+\cos^2(y)=1.  
$$

For $R$ to be an equivalence relation it must be reflexive, symmetric, and transitive.

To check reflexivity we require $xRx$ for every $x\in\mathbb{R}$. That means

$$  
\cos^2(x)+\cos^2(x)=1  
$$

$$  
2\cos^2(x)=1  
$$

$$  
\cos^2(x)=\tfrac12.  
$$

This occurs only when

$$  
\cos x = \pm \tfrac{1}{\sqrt2}.  
$$

Thus not every real number satisfies $xRx$. Therefore $R$ is **not reflexive**, and consequently cannot be an equivalence relation.

---

### 3.

**Proof**

#### (a)

Let $P$ be the set of all lines in the $xy$-plane parallel to the line $y=3x$.

For each $b\in\mathbb{R}$ define

$$  
L_b = {(x,y)\in\mathbb{R}^2 : y=3x+b}.  
$$

Each $L_b$ is a non-empty subset of $\mathbb{R}^2$.

We claim that

$$  
{L_b : b\in\mathbb{R}}  
$$

is a partition of $\mathbb{R}^2$.

Every point $(x_0,y_0)\in\mathbb{R}^2$ lies on exactly one such line.  
Given $(x_0,y_0)$, choose

$$  
b = y_0 - 3x_0.  
$$

Then $(x_0,y_0)\in L_b$.

If $(x_0,y_0)$ lies in both $L_{b_1}$ and $L_{b_2}$ then

$$  
y_0 = 3x_0 + b_1  
$$

and

$$  
y_0 = 3x_0 + b_2  
$$

so $b_1=b_2$.

Thus each point belongs to exactly one $L_b$, proving that ${L_b\in\mathbb R}$ is a partition of $\mathbb R^2$.

---

#### (b)

Define a relation $R$ on $\mathbb R \times \mathbb R$ by

$$  
(x_1,y_1)R(x_2,y_2)  
\iff  
y_1-3x_1 = y_2-3x_2.  
$$

Two points are related exactly when they lie on the same line $L_b$.

Reflexivity holds because

$$  
y-3x = y-3x.  
$$

Symmetry holds because if

$$  
y_1-3x_1 = y_2-3x_2  
$$

then

$$  
y_2-3x_2 = y_1-3x_1.  
$$

Transitivity holds because if

$$  
y_1-3x_1 = y_2-3x_2  
$$

and

$$  
y_2-3x_2 = y_3-3x_3  
$$

then

$$  
y_1-3x_1 = y_3-3x_3.  
$$

Therefore $R$ is an equivalence relation on $\mathbb R^2$, and the equivalence classes are exactly the lines $L_b$ (all lines parallel to $y=3x$).

---

### 4.

**Proof**

#### (a)

Let $R$ be a relation on $\mathbb Z_n$ defined by

$$  
[x]_n R [y]_n  
\quad\text{when}\quad  
[x]_n[u]_n = [y]_n  
$$

for some invertible $[u]_n\in\mathbb Z_n$.

We verify the three properties.

**Reflexive**

For any $[x]_n$,

$$  
x\cdot1=x.  
$$

Since $[1]_n$ is invertible, we have

$$  
[x]_nR[x]_n.  
$$

---

**Symmetric**

If

$$  
[x]_n[u]_n=[y]_n  
$$

and $[v]_n$ is the inverse of $[u]_n$, then

$$  
[y]_n[v]_n=[x]_n.  
$$

Thus $[y]_nR[x]_n$.

---

**Transitive**

If $[x]_nR[y]_n$ and $[y]_nR[z]_n$ then

$$  
xu=y,\quad yv=z  
$$

for invertible $u,v$.

Substituting gives

$$  
x(uv)=z.  
$$

Since the product of invertible elements is invertible, $uv$ is invertible. Hence

$$  
[x]_nR[z]_n.  
$$

Thus $R$ is an equivalence relation.

---

#### (b)

The invertible elements of $\mathbb Z_6$ are

$$  
U = {[1]_6,[5]_6}.  
$$

Now compute the equivalence classes.

First,

$$  
[[0]_6]  
=  
\{[y]_6 \in \mathbb{Z}_6 : [y]_6 = [0]_6[u]_6 \text{ for some } [u]_6 \in U.  
$$


Since $[0]_6u = [0]_6$ for every $u \in U$,

$$  
[[0]_6] = {[0]_6u : u \in U} = {[0]_6}.  
$$

Next,

$$  
[[1]_6] = {[1]_6u : u \in U} = {[1]_6,[5]_6}.  
$$

For $[2]_6$,

$$  
[[2]_6] = {[2]_6u : u \in U}.  
$$

Compute the products:

$$  
2\cdot1 \equiv 2 \pmod{6}, \qquad  
2\cdot5 \equiv 10 \equiv 4 \pmod{6}.  
$$

Thus

$$  
[[2]_6] = {[2]_6,[4]_6}.  
$$

Finally,

$$  
[[3]_6] = {[3]_6u : u \in U}.  
$$

Since

$$  
3\cdot1 \equiv 3 \pmod{6}, \qquad  
3\cdot5 \equiv 15 \equiv 3 \pmod{6},  
$$

we obtain

$$  
[[3]_6] = {[3]_6}.  
$$