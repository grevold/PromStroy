import { Nav } from "../../components/Nav/Nav";
import { ContactsPageContent } from "./components/ContactsPageContent/ContactsPageContent";

import s from "./ContactsPage.module.css";

export function ContactsPage() {
  return (
    <>
      <Nav />
      <ContactsPageContent />
    </>
  );
}
