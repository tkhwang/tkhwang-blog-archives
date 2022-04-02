---
layout: post
title: "javascript/css 기초 정리"
date: 2018-10-22
categories:
  - javascript
? description
tags: [javascript, this]
---

Javascript 및  CSS 관련된 기초적인 내용 정리.

## Background

그동안 mobile 과 보안 관련된 일을 해오다가 결국 중요한 것은 `서비스` 및 `프로덕트`라는 것을 점점 느끼게 되었습니다. 아울러 기술의 발달과 산업의 변화와 함께 개인의 역량의 최대한 발휘할 수 있는 환경은 결국 `소프트웨어`이며, 최종적으로는 외부의 의존성이 적고, 자기 스스로 할 수 있는 환경을 만들 수 있는 `fullstack`을 할 수 있는냐가 중요하게 되는 것 같습니다. 물론 전문화된 회사의 경우에는 분야를 나누어서 하는 것이 훨씬 효율적이므로 모든 경우에 가장 효율적인 방법론이 되기는 어려울 수는 있겠지만 할 수 있는 능력이 있는 것과 없느냐의 차이는 매우 큰 것 같습니다. 
앞으로의 세상에서 진정한 개발자로서 살아가고자 한다면 `fullstack` 으로서의 역량을 갖추고 있는 것은 매우 중요한 요소가 될 것 같습니다. 

java, python 등과 같은 중요한 다른 중요한 언어들이 많이 있지만 최근에 `javascript` 언어를 중심으로 front-end 뿐만 아니라 node, react-native 등의 등장 이후에 server, modile 의 산업 전영역을 커버하고 있어서 `javascript 기반의 fullstack`에 더 관심이 가는 상황입니다.

`web 개발`은 전혀 경험이 없지만 조금씩 공부해나가면서 나의 아이디어를 하나하나 실현해볼 수 있도록 준비해보려고 합니다. :)

우선 그 시작으로 가장 기본이되는 javascript/css 기본 개념 중에서 중요한 내용들을 정리해본다. 

<!--more-->


## Reference

#### 기본 문법

- [러닝 자바스크립트 - ES6로 제대로 입문하는 모던 자바스크립트 웹 개발](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=112137604)
- [자바스크립트를 말하다 - 가장 간결하면서도 완벽한 자바스크립트 입문서](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=46204973)

#### 까만 예쁜 책 

- [자바스크립트 & 제이쿼리 - 인터랙티브 프론트엔드 웹 개발 교과서](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=55027282)
- [HTML & CSS - 웹사이트 개발과 디자인 기초](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=21089367)

#### 심화 학습 

- [더글라스 크락포드의 자바스크립트 핵심 가이드](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=2608820)
- [인사이드 자바스크립트 - 핵심 개념과 원리를 정확하게. jQuery, Node.js, 클로저의 개념까지](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=34486660)

#### You Don't Know JS 

- [You Don't Know JS : this와 객체 프로토타입, 비동기와 성능](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=114466258)
- [You Don't Know JS : 타입과 문법, 스코프와 클로저](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=112387204)



#### 프로젝트

- [Welcome to learn.freeCodeCamp!](https://learn.freecodecamp.org/)
- [JavaScript 30 — Build 30 things with vanilla JS in 30 days with 30 tutorials](https://javascript30.com/)
- [코드스테이츠 Code States 혁신적인 코딩 교육 부트캠프](https://codestates.com/#/courses/pre)
- jQuery : [jQuery Tutorial: Learn jQuery For Free Codecademy](https://www.codecademy.com/learn/learn-jquery)



### Primitive : one of six primitive data types:

- Undefined (a variable with no defined value)
- Null (a single null value)
- Boolean (true or false)
- Number (this includes Infinity and NaN – not a number!)
- String (textual data)
- Symbol (a unique and immutable primitive new to ES6/2015)


### Truthy and Falsy

[Truthy and Falsy: When All is Not Equal in JavaScript — SitePoint](https://www.sitepoint.com/javascript-truthy-falsy/)

The following values are always falsy:

#### Falsy

- `false`
- `0` (zero)
- `''` or `""` (empty string)  // empty string
- `null`
- `undefined`
- `NaN` (e.g. the result of 1/0)

#### Truthy

Everything else is truthy. That includes:

- `'0'` (a string containing a single zero)  // not empty string
- `'false'` (a string containing the text “false”) // not empty string
- `[]` (an empty array) // empty array (object)
- `{}` (an empty object) // empty object
- `function(){}` (an “empty” function) // empty function (object)

```javascript
if (value) {
  // value is truthy
}
else {
  // value is falsy
  // it could be false, 0, '', null, undefined or NaN
}
```

### `!!`Convert to real Boolean values where necessary

Any value can be converted to a real Boolean value using a double-negative `!!` to be absolutely certain a false is generated only by `false`, `0`, `""`, `null`, `undefined` and `NaN`:

```javascript
// instead of
if (x === y) // ...
// runs if x and y are identical...
// except when both are NaN

// use
if (!!x === !!y) // ...
// runs if x and y are identical...
// including when either or both are NaN
```

## Big picture

- 브라우저 객체 모델 BOM (Brower OBject Model)
- 문서 객체 모델 DOM (Document Object Model)
- 전역 자바스크립트 객체 Global Javascript Objects

### DOM 

- `getElementById()`
- `getElementByClassName()`
- `getElementByElementName()`
- `querySelector()`
- `querySleectorAll()`
- `element.innerHTML`



### Event

#### 1. 이벤트 리스너 

```javascript
function checkUsername() { 
...
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
```

- 익명함수의 선언
	- 이름을 가진 함수는 매개변수를 전달할 괄호를 포함한다.
	- 익명 함수는 괄호를 가지고 있기는 하지만 이벤트가 발생했을 때만 실행된다.

```javascript
el.addEventListener('blur', function() {
  checkUserName(5);
}, false);
```

#### 2. Event 객체

```javascript
function checkUsername (e, minLength) {
	var target = e.target;
}

var el = document.getElementById('username');
el.addEventListner('blur', function (e) {
	checkUsername(e, 5);
, false});
```

#### 3. `event.preventDefault();`



## [javascript] this

| Context | 설명 | 
|---------|-----|
| Global Reference             | The global object (`global` which is `window` in a browser)  |
| Free Function Invocation     | Same as above |
| Method Invocation            | Object on the left of the CALL TIME dot  |
| Construction Mode            |  a new object created for that invocation  |
| `.call`, `.apply`  Invocation  | the first argument to `.call` or `.apply`  |


## [javascript] `prototype`

- [인프런에서 JS 핵심개념을 알아보는 Javascript Flow을 배워보세요!](https://www.inflearn.com/course/%ed%95%b5%ec%8b%ac%ea%b0%9c%eb%85%90-javascript-flow/)


![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/10/javascript-prototype.png)



![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/10/javascript-chaining.png)


![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/10/javascript-chaining2.png)


## IIFE

- 즉시 호출
- 반드시 표현식

```javascript
(function () {   // IIFE 시작
...
}());            // IIFE 끝
```

## Closure

- 만들어진 스코프와 연결된 채 존재하는 함수
- 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수

```javascript
function createInc(startValue) {
	return function (step) {
		startValue += step;
		return startValue;
	};
}
```

Closure를 이용한 private 변수 이용 방법.

![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/10/javascript-closure.png)

![img](https://raw.githubusercontent.com/tkhwang/tkhwang-etc/master/img/2018/10/javascript-closure2.png)



## jQuery

#### ready

```javascript

$(document).ready(function(){

});

// Simple 
$(function() {

});
```

#### evnet

```javascript

$("li").on('XXX', function() {

});
```
- UI : focus, blur, change
- Keyboard : input, keydown, keyup, keypress, ...
- Mouse : click, dblclick, mouseup, ...
- Form : submit, select, change
- Document : ready, load, unload
- Browser : error, resize, scroll


## HTML

### FORM

```html
<input type="text" name="my_name" size="20">
<input type="password" name="my_password" size="20">송
<input type="submit" name="login">
```

- name : 서버에서 인식하는 이름
- type 
	- `text` : text type 입력
	- `password` : 입력이 masking 되어서 볼 수 없음.
	- `submit` : 서버 전
- jQuery 에서는 input 의 값을 `$("#XXX").val()` 이용하여 읽을 수 있음.



## [CSS] Selector

| CSS 선택자 | jQuery       | 설명                                           |
| ------- | ------------ | -------------------------------------------- |
| `*`     | `$("*")`     | 모든 엘리먼트 선택                                   |
| `#I`   | `$("#I")`    | 아이디가 I인 앨리먼트 선택                             |
| `E`     | `$("E")`     | 태그 이름이 E인 모든 엘리먼트 선택                        |
| `.C`    | `$(".C")`    | C라는 클래스 선택자를 가진 모든 앨리먼트                      |
| `E F`  | `$("E F")`   | E의 자식 노드 중 태그 이름이 F인 모든 앨리먼트 선택              |
| `E.C`   | `$("E.C")`   | 태그 이름이 E인 앨리먼트 중 C라는 클래스 선택자를 가진 모든 앨리먼트 선택 |
| `E .C` | `$("E .C")` | E의 자식 노드 중 C라는 클래스 선택자를 가진 모든 앨리먼트 선택       |
| `E>F`   | `$("E>F")`   | E의 바로 아래 자식 중 태그 이름이 F인 모든 앨리먼트 선택          |


