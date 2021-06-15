### favicon.ico
> root경로에 favicon.ico파일이 있으면 저절로 적용이 된다.  
> ![](../../md_image/favicon.png)  
> root경로가 아니라면   
>```
><link rel="icon" href="./favicon.ico" />
>```

### <a href = "https://ogp.me/">오픈 그래프(The Opn Graph protocol)</a>

> - 링크의 미리보기 제목, 설명, 이미지를 결정하는 meta 데이터의 새로운 표기 방법  
> - 오픈그래프는 어떤 HTML 문서의 메타정보를 쉽게 표시하기 위해 정의해놓은 프로토콜
>![](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/kakao_og_example.jpg)
> - <a href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started">트위터 카드</a>도 있다.  
>
>#### 작성법
>```html
><meta property="og:type" content="website" />
><meta property="og:site_name" content="Starbucks" />
><meta property="og:title" content="Starbucks Coffee Korea" />
><meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
><meta property="og:image" content="./images/starbucks_seo.jpg" />
><meta property="og:url" content="https://starbucks.co.kr" />
>```
>
>- ```og:type``` : 페이지 유형
>- ```og:site_name``` : 페이지가 속한 사이트의 이름
>- ```og:title``` : 페이지 이름
>- ```og:description``` : 페이지 설명
>- ```og:image``` : 페이지 이미지 주소(URL)
>- ```og:url``` : 페이지 주소(URL)

### Google Font
>![](../../md_image/google-font.png)
>link추가, css 적용

### Google icon
>1.<a href ="https://material.io/">material</a>접속  
>2.GET STARTED  
>3.Web  
>4.Web getting started  
>5.link태그 복사
>![](../../md_image/google-icon.png)
>6.Usage 사용
>![](../../md_image/google-icon2.png) 

### BEM(Block Element Modifer)
>HTML 클래스 속성의 작명법
>- 1.요소__일부분
>- 2.요소--상태


## img {display : block} 사용 이유
>![](../../../md_image/imgblock1.png)
>![](../../../md_image/imgblock2.png)


## 배치
![](../../../md_image/code_position.png)
```css
/* HEADER */
header {
	background-color: royalblue;
}

header .inner{
	/*1)inner 수평 중앙 배치*/
	width: 1100px;
	height: 120px;
	margin:0 auto;

	background-color: orange;
	position:relative;
}
header .logo{
	/*2) "부모 요소"를 기준으로 수직 가운데 배치(position) */
	height: 75px;
	position:absolute;
	top:0;
	bottom: 0;
	margin :auto 0;
	/*  */
	left:0;
	
	/*3)"부모 요소"를 기준으로 수평 중앙 배치 방법 */
	/* 
	width:
	left:0
	right:0
	margin:0 auto
	position:absolute;
	*/
}
```
>1)과 2)3)의 차이점
>- 기준(position : relative)의 유무
>- 2)3)은 부모가 보이려면(bg-color) 부모 요소도 width, height가 있어야함  
>  없으면 부모 크기 = 자식 크기 설정 => 자식(bg-color)만 보임.
>### 결론 
>- 1)은 가로 기준(block)에서 가운데에 배치  
>- 2)3)은 부모기준에서 가운데에 배치
   
## 가상요소 선택자
```css
header .sub-menu ul.menu li::before {
	content: "";
	display:block;
	/*display:block;  position:absolute로 block으로 바뀜*/
	width: 1px;
	height: 12px;
	background-color: #e5e5e5;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
}
```
![](../../../md_image/code_select.png)
![](../../../md_image/code_header.png)
>- li태그 안의 요소(a태그) 전에(before) ""가 들어간다.  
>- 메뉴바 사이에 구분줄 만드는데 씀
>- li::befor의 부모는 li
