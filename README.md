# `<shader-art>` plugin interface

You can build your own plugins by implementing this interface:

```js
export interface ShaderArtPlugin {
  name: string;
  setup(
    hostElement: HTMLElement,
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    program: WebGLProgram,
    canvas: HTMLCanvasElement
  ): void | Promise<void>;
  dispose(): void;
}
```

If the setup method returns a promise, the shader-art component will wait until the promise resolves.
