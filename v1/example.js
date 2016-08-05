var Fold = React.createClass({
    getInitialState: function() {
        return {width:460,height:460,open:false,count:41};
    },
    componentWillMount: function () {
        this.setOpen(this.state.open);
        this.FoldStyle = { 
            width: this.state.width + 'px',
            height: this.state.height + 'px'
        }
        this.SheetStyle = { 
            width: '100%',
            height: (1+this.state.height/ this.state.count) + 'px' 
        }
    },
    componentWillUpdate:function () {
    },
    setOpen: function(bool) {
        this.angle = bool?0:60;
        this.setState({open:bool});       
    },
    onMouseOver: function(e) {
        this.setOpen(true);      
    },
    onMouseOut: function(e) {
        this.setOpen(false);     
    },
    render: function() {        
        var Nodes = new Array();
        var angle = this.angle;
        var count = this.state.count;
        var hh = this.state.height/ count
        var cos =hh*Math.cos(angle*Math.PI/180);
        var sin =hh*Math.sin(angle*Math.PI/180);
        var s = 0;
        for (var i = 0; i < count; i++) {
            var tempSheetStyle = new Object();
            Object.assign(tempSheetStyle, this.SheetStyle);   
            var temp000 = i%4;
            var rot,h,style;
            if(temp000==0){
                rot = 0;
                h = 0;
                style = 'color1';
            }else if(temp000==1){
                rot = 1;
                h = 0;
                style = 'color2';
            }else if(temp000==2){
                rot = 0;
                h = 1;
                style = 'color3';
            }else if(temp000==3){
                rot = -1;
                h = 1;
                style = 'color4';
            } 
            style = !this.state.open?style:'';
            tempSheetStyle.transformOrigin= '50% 0%';
            tempSheetStyle.transform = 'translateY(' + (s) + 'px)' + ' translateZ(' + (h*sin) + 'px)' + ' rotateX('+(rot*angle)+'deg)';
            tempSheetStyle.backgroundPosition= '50% '+(-hh*i) + 'px';
            s += i%2?cos:hh;
            Nodes[i] = <div key = {i} className={'Sheet '+style} style = {tempSheetStyle}/>
        }
        return (
                <div className = "Fold" style = {this.FoldStyle} onMouseOver = {this.onMouseOver} onMouseOut = {this.onMouseOut}> 
                    <div className = "Text">HTML5</div>
                    {Nodes}
                </div> 
        );
    }
});
ReactDOM.render(
    <Fold />,
    document.getElementById('example01')
);
