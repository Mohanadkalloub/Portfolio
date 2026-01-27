export default function Footer() {
  return (
    <footer className="border-t ">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-3xl md:text-xl text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} Mohanad Kalloub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
