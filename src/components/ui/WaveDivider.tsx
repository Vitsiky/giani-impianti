type WaveDividerProps = {
  fill: string;
  flip?: boolean;
  className?: string;
};

export function WaveDivider({ fill, flip = false, className = "" }: WaveDividerProps) {
  return (
    <div className={`pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="h-full w-full">
        <path
          d="M0,32 C180,80 360,0 600,28 C840,56 1020,8 1200,40 L1200,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
