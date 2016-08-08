fold 摺痕效果
=========================
### 演示
[ http://virtools.github.io/reactjs_fold/v1/index.html ]
### 設置
|設置|默認值|描述|
|---|---|---|
|width|`460`|高度|
|height|`460`|高度|
|count|`41`|摺痕段數|
|open|`false`|啟動,值(true或false)|
|text|`""`|底下文字|
|src|`""`|圖片|
### 默認風格
該組件會自動嵌入了一些必要的風格。
    
    .Fold{
        float: left;
        position: absolute;
        display: block;
        background-color: #383838;
        perspective: 500px;
    }

    .Fold > .Sheet{
        position: absolute;
        display: block;
        transition: all .5s ease-out;
        background-repeat: no-repeat;
    }
    .Fold > .Sheet:before{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        transition: all .5s ease-out;
        background-color: hsla(0, 0%, 50%, 0);
    }
    .Fold > .Sheet.color1:before{
        background-color: hsla(0, 0%, 0%, 0.3);
    }
    .Fold > .Sheet.color2:before{
        background-color: hsla(23, 58%, 94%, 0.3);
    }
    .Fold > .Sheet.color3:before{
        background-color: hsla(0, 0%, 100%, 0.3);
    }
    .Fold > .Sheet.color4:before{
        background-color: hsla(37, 17%, 22%, 0.3);
    }

    .Fold > .Text{
        width: 100%;
        position: absolute;
        bottom: 0px;
        text-align: center;
        font-size: 40px;
        padding: 10px;
        box-sizing: border-box;
        letter-spacing: 5px;
        color: #ffffff;
    }
    
### 許可

MIT
