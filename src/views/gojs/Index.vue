<template>
    <div class="edif-sample">
        <el-row class="edit-bar">
            <el-col :offset="1" :span="11">
                <p class="title-name">设备监控图</p>
            </el-col>
            <el-col  :offset="5" :span="7">
                <el-button-group class="button-group">
                    <el-button type="primary" icon="el-icon-edit" @click="addShape">添加图形</el-button>
                    <el-button type="primary" icon="el-icon-success" @click="save">保存</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <div id="sample">
            <div id="paletteDraggable" class="draggable" style="height: 300px;" v-show="showShape">
                <div id="paletteDraggableHandle" class="handle">Palette</div>
                <div id="paletteContainer">
                    <div id="myPaletteDiv"></div>
                </div>
            </div>

            <div id="infoDraggable" class="draggable"
                 style="display: inline-block; vertical-align: top; padding: 5px; left: 780px;">
                <div id="infoDraggableHandle" class="handle">Info</div>
                <div>
                    <div id="myInfo"></div>
                </div>
            </div>

            <div style="display: inline-block; vertical-align: top; width:800px">
                <div id="myDiagramDiv"
                     style="background-color: whitesmoke; border: solid 1px black; height: 600px"></div>
            </div>
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
                myDiagram: null, // must be true to accept drops from the Palette
                myPalette: null,
                model: GO(go.GraphLinksModel),
                showShape:false,
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
                fill6: "rgb(0,0,0)",
                brush6: "rgb(0,0,0)",

            }
        },
        mounted() {
            this.createMyDiagram()
            // this.createPalette()
            this.dragAndDrop()
            this.getNodeInfo()
        },
        methods: {
            addShape(){
                this.showShape = true
                this.createPalette()
            },
            createMyDiagram() {
                var self = this
                self.myDiagram = GO(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                    {
                        grid: GO(go.Panel, "Grid",//todo 创建网格线
                            GO(go.Shape, "LineH", {stroke: "lightgray", strokeWidth: 0.5}),
                            GO(go.Shape, "LineH", {stroke: "gray", strokeWidth: 0.5, interval: 10}),
                            GO(go.Shape, "LineV", {stroke: "lightgray", strokeWidth: 0.5}),
                            GO(go.Shape, "LineV", {stroke: "gray", strokeWidth: 0.5, interval: 10})
                        ),
                        allowDrop: true,  // must be true to accept drops from the Palette
                        "draggingTool.dragsLink": true,
                        "draggingTool.isGridSnapEnabled": true,
                        "linkingTool.isUnconnectedLinkValid": true,
                        "linkingTool.portGravity": 20,
                        "relinkingTool.isUnconnectedLinkValid": true,
                        "relinkingTool.portGravity": 20,
                        "relinkingTool.fromHandleArchetype":
                            GO(go.Shape, "Diamond", {
                                segmentIndex: 0,
                                cursor: "pointer",
                                desiredSize: new go.Size(8, 8),
                                fill: "tomato",
                                stroke: "darkred"
                            }),
                        "relinkingTool.toHandleArchetype":
                            GO(go.Shape, "Diamond", {
                                segmentIndex: -1,
                                cursor: "pointer",
                                desiredSize: new go.Size(8, 8),
                                fill: "darkred",
                                stroke: "tomato"
                            }),
                        "linkReshapingTool.handleArchetype":
                            GO(go.Shape, "Diamond", {
                                desiredSize: new go.Size(7, 7),
                                fill: "lightblue",
                                stroke: "deepskyblue"
                            }),
                        // rotatingTool: GO(this.TopRotatingTool),  // defined below
                        "rotatingTool.snapAngleMultiple": 15,
                        "rotatingTool.snapAngleEpsilon": 15,
                        "undoManager.isEnabled": true
                    });
                self.myDiagram.nodeTemplate = this.myDiagramNodeTemplate()
                self.myDiagram.linkTemplate = this.myDiagramLinkTemplate()
                self.myDiagram.model = this.getModel()
            },
            myDiagramNodeTemplate() {
                var self = this
                var nodeSelectionAdornmentTemplate =
                    GO(go.Adornment, "Auto",
                        GO(go.Shape, {fill: null, stroke: "deepskyblue", strokeWidth: 1.5, strokeDashArray: [4, 2]}),
                        GO(go.Placeholder)
                    );
                //todo 连接时创建的动态的线
                var nodeResizeAdornmentTemplate =
                    GO(go.Adornment, "Spot",
                        {locationSpot: go.Spot.Right},
                        GO(go.Placeholder),
                        GO(go.Shape, {
                            alignment: go.Spot.TopLeft,
                            cursor: "nw-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            alignment: go.Spot.Top,
                            cursor: "n-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            alignment: go.Spot.TopRight,
                            cursor: "ne-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),

                        GO(go.Shape, {
                            alignment: go.Spot.Left,
                            cursor: "w-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            alignment: go.Spot.Right,
                            cursor: "e-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),

                        GO(go.Shape, {
                            alignment: go.Spot.BottomLeft,
                            cursor: "se-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            alignment: go.Spot.Bottom,
                            cursor: "s-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            alignment: go.Spot.BottomRight,
                            cursor: "sw-resize",
                            desiredSize: new go.Size(6, 6),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        })
                    );
                //todo 目前未知
                var nodeRotateAdornmentTemplate =
                    GO(go.Adornment,
                        {locationSpot: go.Spot.Center, locationObjectName: "CIRCLE"},
                        GO(go.Shape, "Circle", {
                            name: "CIRCLE",
                            cursor: "pointer",
                            desiredSize: new go.Size(7, 7),
                            fill: "lightblue",
                            stroke: "deepskyblue"
                        }),
                        GO(go.Shape, {
                            geometryString: "M3.5 7 L3.5 30",
                            isGeometryPositioned: true,
                            stroke: "deepskyblue",
                            strokeWidth: 1.5,
                            strokeDashArray: [4, 2]
                        })
                    );
                var nodeTemplate =
                    GO(go.Node, "Spot",
                        {locationSpot: go.Spot.Center},
                        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                        {selectable: true, selectionAdornmentTemplate: nodeSelectionAdornmentTemplate},
                        {
                            resizable: true,
                            resizeObjectName: "PANEL",
                            resizeAdornmentTemplate: nodeResizeAdornmentTemplate
                        },
                        {rotatable: true, rotateAdornmentTemplate: nodeRotateAdornmentTemplate},
                        new go.Binding("angle").makeTwoWay(),
                        // the main object is a Panel that surrounds a TextBlock with a Shape
                        GO(go.Panel, "Auto",
                            {name: "PANEL"},
                            new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                            GO(go.Shape, "Rectangle",  // default figure
                                {
                                    portId: "", // the default port: if no spot on link data, use closest side
                                    fromLinkable: true, toLinkable: true, cursor: "pointer",
                                    fill: "white",  // default color
                                    strokeWidth: 2
                                },
                                new go.Binding("figure"),
                                new go.Binding("fill"),
                                new go.Binding("stroke")),
                            GO(go.TextBlock,
                                {
                                    font: "bold 11pt Helvetica, Arial, sans-serif",
                                    margin: 8,
                                    maxSize: new go.Size(160, NaN),
                                    wrap: go.TextBlock.WrapFit,
                                    editable: true
                                },
                                new go.Binding("text").makeTwoWay())
                        ),
                        // four small named ports, one on each side:
                        self.makePort("T", go.Spot.Top, false, true),
                        self.makePort("L", go.Spot.Left, true, true),
                        self.makePort("R", go.Spot.Right, true, true),
                        self.makePort("B", go.Spot.Bottom, true, false),
                        { // handle mouse enter/leave events to show/hide the ports
                            mouseEnter: function (e, node) {
                                self.showSmallPorts(node, true);
                            },
                            mouseLeave: function (e, node) {
                                self.showSmallPorts(node, false);
                            }
                        })
                return nodeTemplate
            },
            myDiagramLinkTemplate() {
                //todo 选中线的时候
                var linkSelectionAdornmentTemplate =
                    GO(go.Adornment, "Link",
                        GO(go.Shape,
                            // isPanelMain declares that this Shape shares the Link.geometry
                            {isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0})  // use selection object's strokeWidth
                    );
                var linkTemplate =
                    GO(go.Link,  // the whole link panel
                        {selectable: true, selectionAdornmentTemplate: linkSelectionAdornmentTemplate},
                        {relinkableFrom: true, relinkableTo: true, reshapable: true},
                        {
                            routing: go.Link.AvoidsNodes,
                            curve: go.Link.JumpOver,
                            corner: 5,
                            toShortLength: 4
                        },
                        new go.Binding("points").makeTwoWay(),
                        GO(go.Shape,  // the link path shape
                            {isPanelMain: true, strokeWidth: 2}),
                        GO(go.Shape,  // the arrowhead
                            {toArrow: "Standard", stroke: null}),
                        GO(go.Panel, "Auto",
                            new go.Binding("visible", "isSelected").ofObject(),
                            GO(go.Shape, "RoundedRectangle",  // the link shape
                                {fill: "#F8F8F8", stroke: null}),
                            GO(go.TextBlock,
                                {
                                    textAlign: "center",
                                    font: "10pt helvetica, arial, sans-serif",
                                    stroke: "#919191",
                                    margin: 2,
                                    minSize: new go.Size(10, NaN),
                                    editable: true
                                },
                                new go.Binding("text").makeTwoWay())
                        )
                    );
                return linkTemplate
            },
            getModel() {
                var model = this.model
                var modelInfo = JSON.parse(localStorage.getItem("dataInfo"));
                if(modelInfo){
                    model.modelData = modelInfo.modelData
                    model.nodeDataArray = modelInfo.nodeDataArray
                    model.linkDataArray = modelInfo.linkDataArray
                }
                return model
            },
            createPalette() {
                var self = this
                self.myPalette = new go.Palette("myPaletteDiv")
                self.myPalette.nodeTemplateMap = self.myDiagram.nodeTemplateMap
                self.myPalette.linkTemplate =// simplify the link template, just in this Palette
                    GO(go.Link,
                        { // because the GridLayout.alignment is Location and the nodes have locationSpot == Spot.Center,
                            // to line up the Link in the same manner we have to pretend the Link has the same location spot
                            locationSpot: go.Spot.Center,
                            selectionAdornmentTemplate:
                                GO(go.Adornment, "Link",
                                    {locationSpot: go.Spot.Center},
                                    GO(go.Shape,
                                        {isPanelMain: true, fill: null, stroke: "deepskyblue", strokeWidth: 0}),
                                    GO(go.Shape,  // the arrowhead
                                        {toArrow: "Standard", stroke: null})
                                )
                        },
                        {
                            routing: go.Link.AvoidsNodes,
                            curve: go.Link.JumpOver,
                            corner: 5,
                            toShortLength: 4
                        },
                        new go.Binding("points"),
                        GO(go.Shape,  // the link path shape
                            {isPanelMain: true, strokeWidth: 2}),
                        GO(go.Shape,  // the arrowhead
                            {toArrow: "Standard", stroke: null})
                    ),
                    self.myPalette.model = new go.GraphLinksModel([
                        {text: "Lake", fill: self.fill1, stroke: self.brush1, figure: "Hexagon"},
                        {text: "Ocean", fill: self.fill2, stroke: self.brush2, figure: "Rectangle"},
                        {text: "Sand", fill: self.fill3, stroke: self.brush3, figure: "Diamond"},
                        {text: "Goldfish", fill: self.fill4, stroke: self.brush4, figure: "Octagon"},
                        {text: "圆", fill: self.fill5, stroke: self.brush5, figure: "Circle"}
                    ], [
                        // the Palette also has a disconnected Link, which the user can drag-and-drop
                        {points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(30, 0), new go.Point(30, 40), new go.Point(60, 40)])}
                    ]);

                self.myPalette.addDiagramListener("InitialLayoutCompleted", function (diagramEvent) {
                    var pdrag = document.getElementById("paletteDraggable");
                    var palette = diagramEvent.diagram;
                    pdrag.style.width = palette.documentBounds.width + 28 + "px"; // account for padding/borders
                    pdrag.style.height = palette.documentBounds.height + 38 + "px";
                });
            },
            dragAndDrop() {
                $("#paletteDraggable").draggable({handle: "#paletteDraggableHandle"}).resizable({
                    // After resizing, perform another layout to fit everything in the palette's viewport
                    stop: function () {
                        myPalette.layoutDiagram(true);
                    }
                });

                $("#infoDraggable").draggable({handle: "#infoDraggableHandle"});
            },
            getNodeInfo() {
                var self = this
                new Inspector('myInfo', self.myDiagram,
                    {
                        properties: {
                            // key would be automatically added for nodes, but we want to declare it read-only also:
                            "key": {readOnly: true, show: Inspector.showIfPresent},
                            // fill and stroke would be automatically added for nodes, but we want to declare it a color also:
                            "fill": {show: Inspector.showIfPresent, type: 'color'},
                            "stroke": {show: Inspector.showIfPresent, type: 'color'}
                        }
                    });
            },
            //todo 貌似和创建连线有关，在形状上创建圆点用于连线
            makePort(name, spot, output, input) {
                // the port is basically just a small transparent square
                return GO(go.Shape, "Circle",
                    {
                        fill: null,  // not seen, by default; set to a translucent gray by showSmallPorts, defined below
                        stroke: null,
                        desiredSize: new go.Size(7, 7),
                        alignment: spot,  // align the port on the main Shape
                        alignmentFocus: spot,  // just inside the Shape
                        portId: name,  // declare this object to be a "port"
                        fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
                        fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
                        cursor: "pointer"  // show a different cursor to indicate potential link point
                    });
            },
            //todo 显示小点
            showSmallPorts(node, show) {
                node.ports.each(function (port) {
                    if (port.portId !== "") {  // don't change the default port, which is the big shape
                        port.fill = show ? "rgba(0,0,0,.3)" : null;
                    }
                });
            },
            save() {
                this.saveDiagramProperties();  // do this first, before writing to JSON
                localStorage.setItem("dataInfo",this.myDiagram.model.toJson());
                this.myDiagram.isModified = false;
                this.showShape = false
            },
            saveDiagramProperties() {
                this.myDiagram.model.modelData.position = go.Point.stringify(this.myDiagram.position);
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .edif-sample {
        margin-left: 20px;
        margin-top: 20px;
        width: 800px;
    }

    .edit-bar {
        width: 100%;
        background-color: #f5f5f5;
    }
    .title-name{
        font: bold 20px sans-serif;
    }
    .draggable {
        display: inline-block;
        vertical-align: top;
        border: 4px solid #BBB;
        border-radius: 4px;
        background-color: #F5F5F5;

        position: absolute;
        /*top: 20px;*/
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
