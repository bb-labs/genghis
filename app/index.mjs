import bb from '../bb/index.mjs'
import gl from '../gl/index.mjs'
import config from '../res/config.mjs'

import Mouse from './peripherals/mouse.mjs'
import Camera from './peripherals/camera.mjs'
import Keyboard from './peripherals/keyboard.mjs'

export default class Cow {
    constructor(vertex, fragment) {
        /** Objects */
        this.objects = []

        /** Display */
        this.canvas = document.getElementById('main')

        /** Configuration */
        config.UP = bb.tensor(config.UP)
        config.TO = bb.tensor(config.TO)
        config.FROM = bb.tensor(config.FROM)

        config.LOOK_MATRIX = bb.tensor(config.LOOK_MATRIX)
        config.VIEW_MATRIX = bb.tensor(config.VIEW_MATRIX)
        config.MOVE_MATRIX = bb.tensor(config.MOVE_MATRIX)
        config.PROJ_MATRIX = bb.tensor(config.PROJ_MATRIX)

        /** Size */
        this.resize()

        /** Peripherals */
        this.gl = new gl(this.canvas, vertex, fragment)
        this.mouse = new Mouse()
        this.camera = new Camera()
        this.keyboard = new Keyboard(config.BINDINGS)

        /** Event Listeners */
        window.addEventListener('resize', this.resize.bind(this))
        this.canvas.addEventListener('wheel', this.wheel.bind(this))
    }

    plot(objects) {
        for (let { vertices, colors, sizes, mode } of objects) {
            if (!mode) mode = this.gl.context.POINTS
            if (!sizes) sizes = bb.ones(vertices.header.shape)
            if (!colors) colors = vertices

            this.objects.push({
                sizeBuffer: this.gl.createBuffer(sizes),
                colorBuffer: this.gl.createBuffer(colors),
                vertexBuffer: this.gl.createBuffer(vertices),

                drawMode: this.gl.context[mode],
                drawCount: vertices.header.shape[0]
            })
        }
    }

    render() {
        this.gl.context.clear(this.gl.context.COLOR_BUFFER_BIT)

        for (const object of this.objects) {

            this.gl.attributes.a_Color.set(object.colorBuffer)
            this.gl.attributes.a_PointSize.set(object.sizeBuffer)
            this.gl.attributes.a_Position.set(object.vertexBuffer)

            this.gl.uniforms.u_ViewMatrix.set(this.camera.look())
            this.gl.uniforms.u_ProjMatrix.set(this.camera.project())


            this.gl.context.drawArrays(object.drawMode, 0, object.drawCount)
        }
    }

    wheel(event) {
        event.preventDefault()
        
        this.camera.zoom(event.deltaY > 0)

        this.render()
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        config.ASPECT_RATIO = this.canvas.width / this.canvas.height
    }
}
