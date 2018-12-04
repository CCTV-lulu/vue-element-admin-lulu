<template>
    <div id="sample">
        <div id="paletteDraggable" class="draggable" style="height: 300px;">
            <div id="paletteDraggableHandle" class="handle">Palette</div>
            <div id="paletteContainer">
                <div id="myPaletteDiv"></div>
            </div>
        </div>

        <div id="infoDraggable" class="draggable"
             style="display: inline-block; vertical-align: top; padding: 5px; top: 20px; left: 780px;">
            <div id="infoDraggableHandle" class="handle">Info</div>
            <div>
                <div id="myInfo"></div>
            </div>
        </div>

        <div style="display: inline-block; vertical-align: top; width:800px">
            <div id="myDiagramDiv" style="background-color: whitesmoke; border: solid 1px black; height: 600px"></div>
        </div>

    </div>
</template>
<script>
    const GO = go.GraphObject.make
    const $ = jQuery
    export default {
        name: "Dash",
        data() {
            return {
                myDiagram:null, // must be true to accept drops from the Palette
                myPalette : null,
            // define several shared Brushes
                fill1: "rgb(105,210,231)",
                brush1: "rgb(65,180,181)",
                fill2: "rgb(167,219,216)",
                brush2: "rgb(127,179,176)",
                fill3: "rgb(224,228,204)",
                brush3: "rgb(184,188,164)",
                fill4: "rgb(243,134,48)",
                brush4: "rgb(203,84,08)",
                fill5: "rgb(250,34,480)",
                brush5: "rgb(200,184,08)",

            }
        },
        mounted() {
            this.createPalette()
            this.dragAndDrop()
            this.getNodeInfo()
        },
        methods:{
            createNodeMap(){
                var self = this
                self.myDiagram = GO(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                    {allowDrop: true,
                     "grid.visible": true})
                self.myDiagram.nodeTemplateMap.add("", // default category
                    GO(go.Node, "Auto",
                        {
                            locationSpot: go.Spot.Center,
                            resizable: true,
                            rotatable: true},
                        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                        GO(go.Shape, "Ellipse",
                            { strokeWidth: 2, fill: self.fill1, name: "SHAPE" },
                            new go.Binding("figure", "figure"),
                            new go.Binding("fill", "fill"),
                            new go.Binding("stroke", "stroke")
                        ),
                        GO(go.TextBlock,
                            { margin: 5,
                                maxSize: new go.Size(200, NaN),
                                wrap: go.TextBlock.WrapFit,
                                textAlign: "center",
                                editable: true,
                                font: "bold 9pt Helvetica, Arial, sans-serif",
                                name: "TEXT" },
                            new go.Binding("text", "text").makeTwoWay())));
                return  self.myDiagram.nodeTemplateMap
            },
            createPalette(){
                var self = this
                self.myPalette = new go.Palette("myPaletteDiv")
                self.myPalette.nodeTemplateMap = this.createNodeMap()
                self.myPalette.model = new go.GraphLinksModel([
                    { text: "Lake", fill: self.fill1, stroke: self.brush1, figure: "Hexagon" },
                    { text: "Ocean", fill: self.fill2, stroke: self.brush2, figure: "Rectangle" },
                    { text: "Sand", fill: self.fill3, stroke: self.brush3, figure: "Diamond" },
                    { text: "Goldfish", fill: self.fill4, stroke: self.brush4, figure: "Octagon" },
                    { text: "圆", fill: self.fill5, stroke: self.brush5, figure: "Circle" }
                ]);

                self.myPalette.addDiagramListener("InitialLayoutCompleted", function(diagramEvent) {
                    var pdrag = document.getElementById("paletteDraggable");
                    var palette = diagramEvent.diagram;
                    pdrag.style.width = palette.documentBounds.width + 28  + "px"; // account for padding/borders
                    pdrag.style.height = palette.documentBounds.height + 38 + "px";
                });
            },
            dragAndDrop(){
                $("#paletteDraggable").draggable({handle: "#paletteDraggableHandle"}).resizable({
                    // After resizing, perform another layout to fit everything in the palette's viewport
                    stop: function(){ myPalette.layoutDiagram(true); }
                });

                $("#infoDraggable").draggable({ handle: "#infoDraggableHandle" });
            },
            getNodeInfo(){
                var self = this
                new Inspector('myInfo', self.myDiagram,
                    {
                        properties: {
                            // key would be automatically added for nodes, but we want to declare it read-only also:
                            "key": { readOnly: true, show: Inspector.showIfPresent },
                            // fill and stroke would be automatically added for nodes, but we want to declare it a color also:
                            "fill": { show: Inspector.showIfPresent, type: 'color' },
                            "stroke": { show: Inspector.showIfPresent, type: 'color' }
                        }
                    });
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    #sample {
        margin-left: 20px;
        margin-top: 20px;
    }

    .draggable {
        display: inline-block;
        vertical-align: top;
        border: 4px solid #BBB;
        border-radius: 4px;
        background-color: #F5F5F5;

        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 500;
    }

    .handle {
        background-color: lightblue;
        cursor: move;
        text-align: center;
        font: bold 12px sans-serif;
    }

    #infoDraggable {
        font: 12px helvetica, sans-serif;
    }

    #myInfo {
        width: 100%;
        overflow: hidden;
    }

    #myPaletteDiv {
        background-color: #F5F5F5;
        width: 100%;
        height: 100%;
    }

    /*
    One simple way of making a div fill its space,
    with allowances for the title (top) and the resize handle (bottom)
    */
    #paletteContainer {
        position: absolute;
        bottom: 14px;
        left: 0px;
        right: 0px;
        top: 14px;
    }
</style>
