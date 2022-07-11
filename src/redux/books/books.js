import AddBooks from '../../components/AddBooks';
import DisplayBooks from '../../components/DisplayBooks';

export default function reducer(
  state = { AddBooks, DisplayBooks },
  action = { type: 'newbook' },
) {
  switch (action.type) {
    default:
      return state;
  }
}
