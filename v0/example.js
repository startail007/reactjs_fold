var Fold = React.createClass({
    getInitialState: function() {
        return {width:460,height:460,open:false,count:10};
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
        this.angle = bool?0:35;
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
        for (var i = 0; i < count; i++) {
            var tempSheetStyle = new Object();
            Object.assign(tempSheetStyle, this.SheetStyle);                      
            var temp001 = (i%2)?-1:1;
            var temp002 = !this.state.open?((i%2)?'dark':'bright'):'';
            var temp003 = (1-(temp001 + 1)*0.5);
            tempSheetStyle.transformOrigin= '50% 0%';
            tempSheetStyle.transform = 'translateY(' + (cos*i) + 'px)' + ' translateZ(' + (temp003*sin) + 'px)' + ' rotateX('+(temp001*angle)+'deg)';
            tempSheetStyle.backgroundPosition= '50% '+(-hh*i) + 'px';
            Nodes[i] = <div key = {i} className={'Sheet '+temp002} style = {tempSheetStyle}/>
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
