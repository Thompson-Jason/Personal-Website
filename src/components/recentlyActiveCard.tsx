import Link from "next/link";
import { CARD_HOVER_STYLES } from "@/constants/styles";
import TiltCard from "@/components/tiltCard";

type Props = {
  href: string;
  external?: boolean;
  ariaLabel: string;
  title: string;
  date: string;
  description: string;
};

const RecentlyActiveCard = ({
  href,
  external,
  ariaLabel,
  title,
  date,
  description,
}: Props) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="block w-full max-w-xl"
    aria-label={ariaLabel}
  >
    <TiltCard className={`${CARD_HOVER_STYLES} text-left`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-primary-accent">
        Recently Active
      </div>
      <h2 className="text-xl font-bold mt-1 hover:underline">{title}</h2>
      <div className="text-xs text-primary-text/60 mt-1">{date}</div>
      <div className="text-sm text-primary-text/80 mt-2 line-clamp-3">
        {description}
      </div>
    </TiltCard>
  </Link>
);

export default RecentlyActiveCard;
