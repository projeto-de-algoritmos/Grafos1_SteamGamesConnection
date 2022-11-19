const edges = {
    arrows: {
        to: {
            enabled: true
        },
    },
    color: 'blue',
    physics: false,
    length: 100,
}

const nodes = {
    shape: 'box',
    shapeProperties: {
        borderRadius: 6,
    },
    // physics: false,
    font: {
        color: 'black',
        size: 20
    }
}

const layout = {
    improvedLayout: true,
    clusterThreshold: 200,
    hierarchical: {
        enabled: false,
        levelSeparation: 150,
        nodeSpacing: 250
    }
}

const groups = {
    0: {color: '#C5FFCC'},
    1: {color: '#97D2DE'},
    2: {color: '#BDB3F5'},
    3: {color: '#DE97C8'},
    4: {color: '#FFC9AD'},
}

const style = {
    height: '100%',
    width: '100%',
}

const options = {
    edges: edges,
    nodes: nodes,
    layout: layout,
    groups: groups,
    style: style
}

export default options;