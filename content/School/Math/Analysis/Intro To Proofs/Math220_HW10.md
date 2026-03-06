#math #math220 #proof
# Mathematics 220  
  

---  
  
### Solutions to homework 10.  
  
### 1
  
For some function $f:\mathbb Z \to \mathbb Z$ defined by  
  
$$  
f(n) =  
\begin{cases}  
7-n & \text{$n$ is even} \\  
5+n & \text{$n$ is odd}  
\end{cases}  
$$  
  
In order to show that $f$ is bijective we will first prove that $f$ is injective.  
  
Suppose for contradiction that $f$ is not injective. Then there exist distinct integers $m \neq n$ such that  
  
$$  
f(m) = f(n)  
$$  
  
Now consider the possible parities of $m$ and $n$.  
  
If $m$ and $n$ are both even then $f(m)=7-m$ and $f(n)=7-n$, so  
  
$$  
7-m = 7-n  
$$  
  
which implies $m=n$, contradicting $m\neq n$.  
  
If $m$ and $n$ are both odd then $f(m)=5+m$ and $f(n)=5+n$, so  
  
$$  
5+m = 5+n  
$$  
  
again giving $m=n$, a contradiction.  
  
Finally suppose one of $m,n$ is even and the other odd. Let $m$ be even and $n$ odd. Then  
  
$$  
7-m = f(m) = f(n) = 5+n  
$$  
  
so  
  
$$  
7-m = 5+n  
$$  
  
hence $m+n=2$. But the sum of an even and an odd integer is odd, while $2$ is even, giving another contradiction.  
  
Thus our assumption was false and $f$ is injective.  
  
Now to prove surjectivity, suppose for contradiction that $f$ is not surjective. Then there exists $y\in\mathbb Z$ with no preimage.  
  
If $y$ is odd then $7-y$ is even and  
  
$$  
f(7-y)=7-(7-y)=y  
$$  
  
so $y$ has a preimage.  
  
If $y$ is even then $y-5$ is odd and  
  
$$  
f(y-5)=5+(y-5)=y  
$$  
  
so $y$ again has a preimage.  
  
Thus no such $y$ exists and $f$ is surjective.  
  
Since $f$ is both injective and surjective, it is bijective and its inverse is  
  
$$  
f^{-1}(n)=  
\begin{cases}  
7-n & n \text{ is odd} \\  
n-5 & n \text{ is even}  
\end{cases}  
$$  
  
---  
  
### 2

Consider a function $f:A\to B$. Define  
  
$$  
F:\mathcal P(A)\longrightarrow \mathcal P(B), \qquad  
X \longmapsto f(X)  
$$  
  
where $f(X)=\{f(x):x\in X\}$.  
  
**(a)** Suppose  
  
$$  
f:\{1,2,3\}\to\{a,b,c\}  
$$  
  
given by  
  
$$  
1\mapsto a,\quad 2\mapsto a,\quad 3\mapsto b  
$$  
  
There are $2^3=8$ subsets of $A$. Their images under $F$ are  
  
$$  
\begin{array}{c|c}  
X & F(X)=f(X) \\  
\hline  
\varnothing & \varnothing\\  
\{1\} & \{a\}\\  
\{2\} & \{a\}\\  
\{3\} & \{b\}\\  
\{1,2\} & \{a\}\\  
\{1,3\} & \{a,b\}\\  
\{2,3\} & \{a,b\}\\  
\{1,2,3\} & \{a,b\}  
\end{array}  
$$  
  
**(b)** Is $F$ injective? No. For example  
  
$$  
\{1\}\neq\{2\}  
$$  
  
but  
  
$$  
F(\{1\}) = \{a\} = F(\{2\})  
$$  
  
so two different inputs have the same image.  
  
**(c)** If $f$ is injective then $F$ is injective.  
  
Assume $f$ is injective and suppose $F(X)=F(Y)$. Then  
  
$$  
f(X)=f(Y)  
$$  
  
Take $x\in X$. Then $f(x)\in f(X)=f(Y)$, so $f(x)=f(y)$ for some $y\in Y$.    
By injectivity $x=y\in Y$, hence $X\subseteq Y$. Reversing roles gives $Y\subseteq X$.    
Thus $X=Y$.  
  
**(d)** If $F$ is surjective then $f$ is surjective.  
  
Let $b\in B$. Since $\{b\}\in\mathcal P(B)$, surjectivity of $F$ gives $X\subseteq A$ with  
  
$$  
F(X)=f(X)=\{b\}  
$$  
  
Choose $x\in X$. Then $f(x)=b$. Thus every $b\in B$ has a preimage and $f$ is surjective.  
  
---  
  
### 3
  
Assume for contradiction that there exists an integer $a$ such that  
  
$$  
a\equiv 3 \pmod{8}, \qquad a\equiv 5 \pmod{12}  
$$  
  
Then  
  
$$  
a=8k+3, \qquad a=12m+5  
$$  
  
so  
  
$$  
8k+3=12m+5  
$$  
  
which implies  
  
$$  
8k=12m+2  
$$  
  
and  
  
$$  
4k=6m+1  
$$  
  
The left side is even while the right side is odd, a contradiction. Thus no such integer $a$ exists.  
  
---  
  
### 4
  
Let $x_0,x_1,\dots,x_{10}\in[0,5]$. Suppose for contradiction that  
  
$$  
|x_i-x_j|>\tfrac12  
$$  
  
for all $i\neq j$.  
  
Arrange them in increasing order  
  
$$  
y_0<y_1<\dots<y_{10}  
$$  
  
Then each gap satisfies  
  
$$  
y_{k+1}-y_k > \tfrac12  
$$  
  
Summing gives  
  
$$  
y_{10}-y_0 > 10\cdot\tfrac12 = 5  
$$  
  
But $y_0,y_{10}\in[0,5]$, so $y_{10}-y_0\le 5$, a contradiction. Thus there exist $i\neq j$ with  
  
$$  
|x_i-x_j|\le\tfrac12  
$$  
  
---  
  
### 5
  
Assume integers $x,y$ satisfy  
  
$$  
5y^2 - 4x^2 = 7  
$$  
  
Working modulo $4$,  
  
$$  
5y^2 - 4x^2 \equiv 7 \pmod{4}  
$$  
  
Since $4x^2\equiv0$,  
  
$$  
5y^2 \equiv 7 \pmod{4}  
$$  
  
and since $5\equiv1$,  
  
$$  
y^2 \equiv 3 \pmod{4}  
$$  
  
But squares mod $4$ are only $0$ or $1$. Thus we obtain a contradiction and no integer solutions exist.  
  
---  
  
### 6
  
Assume  
  
$$  
r=\sqrt3+\sqrt{43}  
$$  
  
is rational.  
  
Then  
  
$$  
\sqrt{43}=r-\sqrt3  
$$  
  
Squaring:  
  
$$  
43=r^2-2r\sqrt3+3  
$$  
  
so  
  
$$  
r^2-40=2r\sqrt3  
$$  
  
Thus  
  
$$  
\sqrt3=\frac{r^2-40}{2r}  
$$  
  
which would be rational, contradicting that $\sqrt3$ is irrational. Therefore $\sqrt3+\sqrt{43}$ is irrational.  
  
---  
  
### 7
  
Define  
  
$$  
g(x)=  
\begin{cases}  
x & x\in A\cap B \\  
f(x) & x\in A\setminus B  
\end{cases}  
$$  
  
**Injectivity**  
  
8. If $x,y\in A\cap B$ then $g(x)=x$ and $g(y)=y$, so $x=y$.  
  
9. If $x\in A\cap B$ and $y\in A\setminus B$ then $g(x)\in A\cap B$ but $g(y)\in B\setminus A$, impossible.  
  
10. If $x,y\in A\setminus B$ then $g(x)=f(x)$ and $g(y)=f(y)$.    
   Since $f$ is injective, $x=y$.  
  
Thus $g$ is injective.  
  
**Surjectivity**  
  
11. If $b\in A\cap B$ then $g(b)=b$.  
  
12. If $b\in B\setminus A$ then since $f$ is surjective onto $B\setminus A$, there exists $a\in A\setminus B$ with $f(a)=b$. Hence $g(a)=b$.  
  
Thus every $b\in B$ has a preimage and $g$ is bijective.