interface HeaderProps {
  number: string;
  title: string;
  code: string;
  status: string;
}
export default function Header({ number, title, code, status }: HeaderProps) {
  return (
    <div className={`card-header header-${status}`}>
      <div className="header-left">
        <div className="header-circle">{number}</div>
        <span className="header-title">{title}</span>
      </div>
      <div className="header-code">
        <span>{code}</span>
        <img src="https://i70.servimg.com/u/f70/20/55/00/71/vercto10.png" alt="icon" />
      </div>
    </div>
  );
}

