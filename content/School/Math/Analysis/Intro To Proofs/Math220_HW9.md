#math #math220 #proof

# Mathematics 220    
## Homework 9    

---  
  
## Solutions to homework 9  
  
### 1
  
Given the following functions,  
  
$$  
\begin{aligned}  
f : \mathbb{R} &\longrightarrow \mathbb{R} \\  
x &\longmapsto \frac{2x}{x^{2}+1}  
\end{aligned}  
$$  
  
$$  
\begin{aligned}  
g : \mathbb{R} - \{0\} &\longrightarrow \mathbb{R} \\  
x &\longmapsto \frac{1}{x}  
\end{aligned}  
$$  
  
For part (a), for any $t \in \mathbb R - \{0\}$ we have that $(f\circ g)(t)$ can be expressed as follows:  
  
$$  
g(t) = \frac{1}{t} \quad \text{for } t \neq 0  
$$  
  
$$  
(f \circ g)(t) = f\left(\frac{1}{t}\right)  
$$  
  
$$  
\begin{aligned}  
f\left(\frac{1}{t}\right)  
&= \frac{\frac{2}{t}}{\left(\frac{1}{t}\right)^2+1} \\  
&= \frac{2t}{1+t^2}  
\end{aligned}  
$$  
  
For part (b), in order to demonstrate $f$ is not injective we can observe the result from part (a), that is $f(t)$ and $f\left(\frac{1}{t}\right)$ both yield the same result:  
  
$$  
f(t) = \frac{2t}{1+t^2}  
$$  
  
$$  
f\left(\frac{1}{t}\right) =  
\frac{\frac{2}{t}}{\left(\frac{1}{t}\right)^2+1}  
= \frac{2t}{1+t^2}  
$$  
  
Therefore, we have shown $\exists x_1 \neq x_2$ such that $f(x_1)=f(x_2)$ and thus by definition $f$ is not injective.  
  
For part (c), manipulate $f(x)$:  
  
$$  
\begin{aligned}  
f(x) &= \frac{2x}{x^2+1} \\  
y &= \frac{2x}{x^2+1} \\  
0 &= yx^2 -2x + y  
\end{aligned}  
$$  
  
Now,  
  
$$  
f^{-1}(\{1\})  
$$  
  
gives the equation  
  
$$  
x^2 -2x +1 =0  
$$  
  
which has solution $x=1$, so  
  
$$  
f^{-1}(\{1\}) = \{1\}  
$$  
  
For  
  
$$  
f^{-1}\left(\left\{\frac12\right\}\right)  
$$  
  
we obtain  
  
$$  
\frac12 x^2 -2x + \frac12 =0  
$$  
  
which simplifies to  
  
$$  
x^2 -4x +1 =0  
$$  
  
with solutions  
  
$$  
x = 2 \pm \sqrt3  
$$  
  
so  
  
$$  
f^{-1}\left(\left\{\frac12\right\}\right) =  
\{2-\sqrt3, 2+\sqrt3\}  
$$  
  
Finally consider $f^{-1}(\{2\})$. Using $a^2+b^2 \ge 2ab$ with $a=|x|$, $b=1$:  
  
$$  
x^2 + 1 \ge 2|x|  
$$  
  
$$  
\left|\frac{2x}{x^2+1}\right|  
\le \frac{2|x|}{2|x|}  
=1  
$$  
  
Thus  
  
$$  
\forall x \in \mathbb R,  
\qquad  
\left|\frac{2x}{x^2+1}\right| \le 1  
$$  
  
so  
  
$$  
f^{-1}(\{2\}) = \emptyset  
$$  
  
For part (d),  
  
$$  
\forall x \in \mathbb R,  
\qquad  
\left|\frac{2x}{x^2+1}\right| \le 1  
$$  
  
so  
  
Range$(f) = [-1,1]$.  
  
For part (e), $f$ is not surjective since Range$(f)=[-1,1]$ but $f:\mathbb R \to \mathbb R$.  
  
For part (f) consider  
  
$$  
\begin{aligned}  
j : [1,+\infty) &\longrightarrow \mathbb{R} \\  
x &\longmapsto \frac{2x}{x^{2}+1}  
\end{aligned}  
$$  
  
We want to show  
  
$$  
f(x_1)=f(x_2)  
\Longrightarrow  
x_1=x_2  
\quad  
\forall x_1,x_2 \in [1,+\infty)  
$$  
  
Assume  
  
$$  
\frac{2x_1}{x_1^2+1} =  
\frac{2x_2}{x_2^2+1}  
$$  
  
Then  
  
$$  
\begin{aligned}  
2x_1(x_2^2+1) &= 2x_2(x_1^2+1) \\  
x_1x_2^2 + x_1 &= x_2x_1^2 + x_2 \\  
x_1x_2^2 - x_2x_1^2 &= x_2 - x_1 \\  
x_1x_2(x_2 - x_1) &= (x_2 - x_1) \\  
(x_2 - x_1)(x_1x_2 - 1) &= 0  
\end{aligned}  
$$  
  
Thus either  
  
$$  
x_2-x_1=0  
$$  
  
or  
  
$$  
x_1x_2 = 1  
$$  
  
But if $x_1,x_2 \ge 1$ and $x_1x_2=1$, then $x_1=x_2=1$.  
  
Therefore $x_1=x_2$ in every case and $j$ is injective.  
  
---  
  
### 2
  
For part (a) consider  
  
$$  
\begin{aligned}  
f : \mathbb{R} &\longrightarrow \mathbb{R} \\  
x &\longmapsto x^2  
\end{aligned}  
$$  
  
Let $X=\{-1\}$.  
  
Then  
  
$$  
f^{-1}(X)=\emptyset  
$$  
  
and  
  
$$  
f(f^{-1}(X)) = \emptyset \ne X  
$$  
  
For part (b), suppose $f:A\to B$ is surjective and $X\subseteq B$.  
  
If $a\in f^{-1}(X)$ then $f(a)\in X$, so  
  
$$  
f(f^{-1}(X)) \subseteq X  
$$  
  
If $b\in X$, surjectivity gives $a\in A$ with $f(a)=b$, so  
  
$$  
a\in f^{-1}(X)  
$$  
  
and therefore  
  
$$  
b\in f(f^{-1}(X))  
$$  
  
Thus  
  
$$  
X \subseteq f(f^{-1}(X))  
$$  
  
and hence  
  
$$  
f(f^{-1}(X)) = X  
$$  
  
---  
  
### 3
  
For part (a) again consider  
  
$$  
f(x)=x^2  
$$  
  
with  
  
$$  
X=\{2\}  
$$  
  
Then  
  
$$  
f(X)=\{4\}  
$$  
  
and  
  
$$  
f^{-1}(f(X))=\{-2,2\}\ne\{2\}  
$$  
  
For part (b) suppose $f$ is injective.  
  
If $x\in X$ then $f(x)\in f(X)$ so  
  
$$  
x\in f^{-1}(f(X))  
$$  
  
Thus  
  
$$  
X \subseteq f^{-1}(f(X))  
$$  
  
If $x\notin X$, injectivity implies $f(x)\notin f(X)$ so  
  
$$  
x\notin f^{-1}(f(X))  
$$  
  
Therefore  
  
$$  
f^{-1}(f(X)) \subseteq X  
$$  
  
---  
  
### 4
  
Suppose $f:A\to A$ and $f\circ f$ is bijective.  
  
If  
  
$$  
f(x_1)=f(x_2)  
$$  
  
then applying $f$ gives  
  
$$  
f(f(x_1))=f(f(x_2))  
$$  
  
Since $f\circ f$ is injective we obtain  
  
$$  
x_1=x_2  
$$  
  
so $f$ is injective.  
  
For surjectivity, let $y_1\in A$.  
  
Because $f\circ f$ is surjective there exists $y_2$ with  
  
$$  
f(f(y_2)) = y_1  
$$  
  
Let  
  
$$  
y_3=f(y_2)  
$$  
  
Then  
  
$$  
f(y_3)=y_1  
$$  
  
so $f$ is surjective.  
  
Thus $f$ is bijective.  
  
---  
  
### 5 
  
Consider  
  
$$  
\begin{aligned}  
f : \mathbb N \times \mathbb N &\longrightarrow \mathbb N \\  
(x,y) &\longmapsto 2^{x-1}(2y-1)  
\end{aligned}  
$$  
  
Use the statement  
  
$$  
\forall n\in\mathbb N,  
\exists k\ge0  
\text{ such that }  
2^k\mid n  
\text{ and }  
\frac{n}{2^k}  
\text{ is odd}  
$$  
  
Suppose  
  
$$  
2^{x-1}(2y-1) = 2^{x'-1}(2y'-1)  
$$  
  
Since $2y-1$ and $2y'-1$ are odd, the identity $2^au=2^bv$ with odd $u,v$ implies  
  
$$  
a=b  
\quad  
u=v  
$$  
  
Thus  
  
$$  
x=x'  
\quad  
y=y'  
$$  
  
so $f$ is injective.  
  
For surjectivity, let $n\in\mathbb N$.  
  
Then  
  
$$  
n = 2^k m  
$$  
  
where $m$ is odd. Write  
  
$$  
m = 2y-1  
$$  
  
and set  
  
$$  
x = k+1  
$$  
  
Then  
  
$$  
f(x,y)=2^{x-1}(2y-1)=2^km=n  
$$  
  
Thus $f$ is surjective and therefore bijective.  
  
---  
  
### 6 
  
Suppose $f:\mathbb N\to\mathbb N$ is additive.  
  
We prove  
  
$$  
f(1)=1  
\quad\Longleftrightarrow\quad  
f \text{ is injective and surjective}  
$$  
  
Using induction,  
  
$$  
\forall n\in\mathbb N, \quad f(n)=n  
$$  
  
because  
  
$$  
f(n+1)=f(n)+f(1)  
$$  
  
If $f(1)=1$, then $f(n)=n$ for all $n$.  
  
Thus $f$ is injective and surjective.  
  
Conversely assume $f(1)\ne1$.  
  
Then $f(1)\ge2$.  
  
Induction shows  
  
$$  
\forall n\in\mathbb N,\quad f(n)\ge2  
$$  
  
since  
  
$$  
f(n+1)=f(n)+f(1)\ge4  
$$  
  
Let $y=1$.  
  
No $n$ satisfies $f(n)=1$, so $f$ is not surjective.  
  
Thus the contrapositive holds and  
  
$$  
f(1)=1  
\quad\text{iff}\quad  
f \text{ is injective and surjective}  
$$