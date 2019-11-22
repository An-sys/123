# Node js 服务器

## 引入required模块

```js
var http = required("http")
```

## 创建服务器

接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

```js
创建服务器对象：http.creatServer()    
监听端口：listen    
发出请求：request
		request 对象包含了用户请求报文中的所有内容 ，通过 request 对象可以获取所有用户提交过来后的数据
接受请求：response 
		response 对象用来向用户响应一些数据，当服务器要向客户端响应数据的时候必须使用 response 对象

向请求的客户端发送响应头。
该函数在一个请求内最多只能调用一次，如果不调用，则会自动生成一个响应头。
response.writeHead    
response.writeHead(statusCode, [reasonPhrase], [headers])
statusCode HTTP状态码，如200(请求成功），404（未找到）等。
 reasonPhrase
headers 类似关联数组的对象，表示响应头的每个属性
```

**分析Node.js 的 HTTP 服务器：**

- 第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
- 接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。



浏览器打开服务器端口

localhost：端口