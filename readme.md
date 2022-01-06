[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# @titanium/hashids


[![@titanium/hashids](https://img.shields.io/npm/v/@titanium/hashids.png)](https://www.npmjs.com/package/@titanium/hashids)

> ⚡ This is a repackaging of:  [`https://github.com/niieani/hashids`](https://github.com/niieani/hashids)  

> *This project has been modified from the original to be smaller for use with mobile frameworks*

---

See original readme here:  [`original readme`](./original-readme.md)  

---


## 📝 Description

**Hashids** is small JavaScript library to generate YouTube-like ids from numbers. Use it when you don't want to expose your database ids to the user

## 🚀 Getting Started

Install in root of project:

```
npm install @titanium/hashids
```

Using hashids

```
const Hash = require('@titanium/hashids');
const hashids = new Hashids('this is my salt')

const id = hashids.encodeHex('507f1f77bcf86cd799439011') // y42LW46J9luq3Xq9XMly
const hex = hashids.decodeHex(id) // 507f1f77bcf86cd799439011
```

See original readme for more examples and features:  [`original readme`](./original-readme.md)  


## 🔗 Related Links

* [hashids repo](https://github.com/niieani/hashids.js) - Repo for original hashids project
* [Titanium Turbo Turbo](https://www.npmjs.com/package/@titanium/turbo) - Titanium Turbo - Enhanced version of Alloy for cross-platform native mobile development
* [Titanium Turbo Template (Default)](https://www.npmjs.com/package/@titanium/template-turbo-default) - Template for default Turbo app.  Based on the basic Alloy Template + some extra goodies.
* [Titanium Turbo Template (Next)](https://www.npmjs.com/package/@titanium/template-turbo-next) - Template for Turbo app (with extras).  Based on the default Turbo Template + some extras.
* [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.
* [Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.
* [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool

## 📚Learn More

* 

## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-turbo/issues)! 

## ©️ Legal

Copyright (c) 2012-2019 Bazyli Brzóska & Ivan Akimov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.