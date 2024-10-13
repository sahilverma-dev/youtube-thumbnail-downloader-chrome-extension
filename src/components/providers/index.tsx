import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
