

import type { Component, ComponentProps } from 'solid-js';

interface Mirror {
  mirrorX?: boolean,
  mirrorY?: boolean,
}

type Positions = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

const POSITIONS: { [key in Positions]: Mirror } = {
  'topLeft': {},
  'topRight': { mirrorX: true },
  'bottomLeft': { mirrorY: true },
  'bottomRight': { mirrorX: true, mirrorY: true },
}



const Separator: Component<{ position: Positions, styles: any }> = ({ position, styles }) => {
  const classList = POSITIONS[position] as { [key in string]: boolean | undefined }
  return (
    <div
      class="separator"
      style={styles}
      classList={classList}
    ></div>
  );
};

export default Separator;
