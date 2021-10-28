import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

function ContactsView() {
  return (
    <Container>
      <Title text="Phonebook" />
      <Form />

      <Title text="Contacts" />
      <ContactsFilter />
      <ContactsList />
    </Container>
  );
}

export default ContactsView;
