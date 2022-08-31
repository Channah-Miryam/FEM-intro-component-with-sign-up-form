import 'core-js/es6/promise';
import 'core-js/es6/set';
import 'core-js/es6/map';
import * as yup from 'yup';

let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email()
});


          <input type="text" placeholder="First Name" id="firstName" name="firstName" aria-label="first name">
          <input type="text" placeholder="Last Name" id="lastName" name="lastName" aria-label="last name">
          <input type="email" placeholder="Email address" id="email" name="email" aria-label="Email address">
          <input type="password" placeholder="Password" id="password" name="password" aria-label="password"></input>