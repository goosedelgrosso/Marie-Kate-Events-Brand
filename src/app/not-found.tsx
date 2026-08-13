import { ButtonLink } from "@/components/ui";
import Monogram from "@/components/Monogram";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center px-6 py-40 sm:px-10">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
        <Monogram className="text-taupe h-16 w-16" />
        <p className="label text-taupe">Page not found</p>
        <h1 className="font-display text-4xl sm:text-6xl">
          This one got away from us.
        </h1>
        <p className="text-espresso-soft">
          The page you were looking for is not here. Let us point you back
          somewhere lovely.
        </p>
        <ButtonLink href="/" className="mt-2">
          Back Home &rarr;
        </ButtonLink>
      </div>
    </section>
  );
}
