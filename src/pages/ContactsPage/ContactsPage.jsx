import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import Notification from 'components/Notification/Notification';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import css from './ContactsPage.module.css';
import { selectIsOpenModal } from 'redux/modal/modalSelectors';
import { openModal } from 'redux/modal/modalReducer';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isOpenModal = useSelector(selectIsOpenModal);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <Container>
      <button
        className={css.newContactBtn}
        type="button"
        onClick={() => dispatch(openModal())}
      >
        New contact
      </button>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Notification message="Your phonebook is empty. Please add your contact!" />
      )}

      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {showContacts && <ContactList />}

      {isOpenModal && <Modal />}
    </Container>
  );
};

export default ContactsPage;
