import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" />
          </div>

          <span>JobTracker</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          <Link href="/sign-in">
            <Button variant="ghost" className="font-medium">
              Log in
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="font-medium">
              Get started
            </Button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
