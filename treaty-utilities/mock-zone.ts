if (typeof (globalThis).Zone === 'undefined') {
    const mockZone = {
      current: {
        get: (key) =>
          key === 'isAngularZone' ? true : undefined,
        run(fn, applyThis, applyArgs){
          return fn.apply(applyThis, applyArgs);
        },
      },
      run(fn, applyThis, applyArgs) {
        return fn.apply(applyThis, applyArgs);
      },
    };
    (globalThis).Zone = mockZone;
  }