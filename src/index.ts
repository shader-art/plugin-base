export interface ShaderArtPlugin {
  name: string;
  setup(
    hostElement: HTMLElement,
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    program: WebGLProgram,
    canvas: HTMLCanvasElement
  ): void | Promise<void>;

  onBeforeCompileShader?: (shaders: {
    vertexShader: string;
    fragmentShader: string;
  }) => void;

  onFrame ?: (
    hostElement: HTMLElement,
    gl: WebGLRenderingContext | WebGL2RenderingContext,
    program: WebGLProgram,
    canvas: HTMLCanvasElement) => void;
  dispose(): void;
}
