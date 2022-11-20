const edges = {
    arrows: {
        to: {
            enabled: false
        },
    },
    color: '#036564',
    physics: false,
    length: 50,
}

const nodes = {
    shape: 'hexagon',
    parseColor: true,
    color: '#036564',
    shapeProperties: {
        borderRadius: 6,
    },
    font: {
        color: '#cdb380',
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
    0: {color: '#036564'},
    1: {color: '#036564'},
    2: {color: '#036564'},
    3: {color: '#036564'},
    4: {color: '#036564'},
}

const style = {
    height: '90%',
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