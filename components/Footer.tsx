export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            © {new Date().getFullYear()} Mohanad Kalloub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
