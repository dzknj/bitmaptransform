This is my bitmap transformer.
On the command line, you run the following; node index.js 'argument'
argument being the path to a bitmap file you wish to transform.
(do not put quotes around this argument)
The file is saved in the project directory under the img directory in a file named
transformed-bitmap.bmp.
My real project i rewrote and is in the rewrite directory.
I will fix this soon, as well as making it modular.
I struggled for a while trying to get this to work, and i had
a breakthrough earlier today when i was finally able to get the bmp buffer data to read
into a js object. At first I did this with emits, but later i just used the parameters and
made function calls to each next function from within the previous function.
