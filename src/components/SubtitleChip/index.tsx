type SubtitleChipsProps = {
  subtitle: string;
};

const SubtitleChip = ({ subtitle }: SubtitleChipsProps) => {
  return (
    <div className="relative inline-block p-2 rotate-2">
      <div className="relative bg-main-blue p-1.5 z-50">
        <p className="text-navy-foreground text-xs uppercase font-title tracking-wider">
          {subtitle}
        </p>
      </div>
      <div className="absolute bg-main-pink bottom-1.5 right-1.5 z-10 p-1.5">
        <p className="invisible text-xs uppercase ">{subtitle}</p>
      </div>
    </div>
  );
};

export default SubtitleChip;
