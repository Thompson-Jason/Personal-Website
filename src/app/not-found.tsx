import Link from "next/link";
import { BUTTON_STYLES, RESPONSIVE_PADDING } from "@/constants/styles";

export default function NotFound() {
  return (
    <main
      className={`h-full flex flex-col items-center justify-center gap-6 text-primary-text text-center ${RESPONSIVE_PADDING}`}
      aria-label="Page not found"
    >
      <p className="text-primary-accent font-semibold text-lg tracking-wide">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        Page not found
      </h1>
      <p className="max-w-md md:text-lg text-primary-text/80">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className={BUTTON_STYLES.primary}
        aria-label="Return to homepage"
      >
        Back to Home
      </Link>
    </main>
  );
}
