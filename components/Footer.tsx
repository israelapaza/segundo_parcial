interface FooterProps {
  date: string;
  status: string;
}

export default function Footer({ date, status }: FooterProps) {
  return (
    <div className="card-footer">
      <span>Last Updated</span>
      <span className={`footer-date-${status}`}>{date}</span>
    </div>
  );
}

