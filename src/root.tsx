import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./index.css";
import "./App.css";
import { DarkModeProvider } from "./components/DarkModeProvider";

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/vektor-logo-circle.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#E2F4FA" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://vektorprogrammet.no/" />
        <meta property="og:image" content="/images/vektor-logo.png" />
        <meta
          property="og:description"
          content="Vektorprogrammet er Norges største organisasjon som jobber for å øke interessen for matematikk og realfag blant elever i grunnskolen. Vi sender realfagssterke studenter til barne- og ungdomsskoler hvor de fungerer som lærerens assistent."
        />
        <meta property="og:site_name" content="Vektorprogrammet" />

        <meta
          name="description"
          content="Vektorprogrammet er Norges største organisasjon som jobber for å øke interessen for matematikk og realfag blant elever i grunnskolen. Vi sender realfagssterke studenter til barne- og ungdomsskoler hvor de fungerer som lærerens assistent."
        />

        <link rel="manifest" href="/manifest.json" />
        <title>Vektorprogrammet</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-vektor-bg">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <DarkModeProvider>
      <Outlet />
    </DarkModeProvider>
  );
}
