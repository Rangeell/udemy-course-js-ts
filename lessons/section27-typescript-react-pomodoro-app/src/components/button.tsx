interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ text, onClick, className }: ButtonProps): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className={className}>
      {text}
    </button>
  );
}
