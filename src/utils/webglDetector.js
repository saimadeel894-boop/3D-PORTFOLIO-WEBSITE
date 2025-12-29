// Utility to detect WebGL support
export const detectWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};

// Additional WebGL capabilities detection
export const detectWebGLCapabilities = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      return {
        webgl: false,
        webgl2: false,
        capabilities: {}
      };
    }

    return {
      webgl: true,
      webgl2: !!canvas.getContext('webgl2'),
      capabilities: {
        maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
        maxViewportDims: gl.getParameter(gl.MAX_VIEWPORT_DIMS),
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
      }
    };
  } catch (e) {
    return {
      webgl: false,
      webgl2: false,
      capabilities: {}
    };
  }
};