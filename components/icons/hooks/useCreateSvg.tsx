import styled from 'styled-components';

const ANIMATION_LENGTH = '5s';
const ITERATIONS = '4';
const INITIAL_DELAY = '2s';

const useCreateSvg = (animationName: string) => {
  const { styles, pathStyles = '', keyframes } = animations[animationName];

  return styled.svg`
    ${styles};
    animation: ${ANIMATION_LENGTH} ease-in-out ${INITIAL_DELAY} ${ITERATIONS} ${animationName};
    ${pathStyles};
    @keyframes ${animationName} {
      ${keyframes}
    }
  `;
};

export default useCreateSvg;
const animations: Record<string, { keyframes: string; styles: string; pathStyles?: string }> = {
  hand: {
    keyframes: `
		
			10% { transform: translateY(-52%); }
			20% { transform: translateX(-20%) translateY(-52%) rotateZ(3deg); }
			40% { scale: 0.8; transform: translateX(70%) translateY(-52%) rotateZ(-10deg); }
			50% { scale: 0.8; transform: translateX(50%) translateY(-52%) rotateZ(-10deg); }
			55% { scale: 1; transform:  translateY(5%) }
		`,
    styles: `
			position: absolute;
			left: 37.5%;
			top: 82%;
		`,
  },
  arrow: {
    keyframes: `
			10% { fill: #0040c5; }
			12% { fill: #0040c5; transform: translateX(-50%) rotateZ(1deg); }
			21% { fill: #0040c5; transform: translateX(-58%) rotateZ(3deg); }
            40% { transform: translateX(-40%) rotateZ(-3deg); fill: #0040c5; }
            50%{fill: #0040c5; transform: translateX(-50%)}
            60%{fill: #001E50; transform: translateX(-50%)}
		`,
    styles: `
			position: absolute;
			top: 60%;
			left: 50%;
			transform: translateX(-50%);
			stroke: #001E50;
            fill:#001E50;
		`,
  },
  car: {
    keyframes: `
			10% { stroke: #0040c5; fill: #0040c5; }
			25% { stroke: #0040c5; fill: #0040c5; }
			50% { stroke: #0040c5; fill: #0040c5; }
            60% {stroke: #001E50;fill:#001E50; }
		`,
    styles: `
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 0;
			
		`,
    pathStyles: `& path {
				stroke: #001E50;
                animation: ${ANIMATION_LENGTH} ease-in-out ${INITIAL_DELAY} ${ITERATIONS} car;

			}`,
  },
  lines: {
    keyframes: `
			10% { stroke: #0040c5; }
			25% { stroke: #0040c5; }
			50% { stroke: #0040c5; }
            60% {stroke: #001E50; }
		`,
    styles: `
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 0;
			
		`,
    pathStyles: `& path {
				stroke: "#001E50";
                animation: ${ANIMATION_LENGTH} ease-in-out ${INITIAL_DELAY} ${ITERATIONS} lines;
			}`,
  },
};
